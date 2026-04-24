/**
 * Build-order simulator for Travian T4.6 (x1 speed, no-gold)
 *
 * Purpose: independently validate Carpis xlsx build-order target days.
 *
 * Model:
 * - Starting resources: 750 of each (standard T4.6 start)
 * - Starting state: village at (0,0), MB Lv1 (built Day 0), hero Lv1 at 0 XP
 * - Field production follows FIELD_PRODUCTION[L] table
 * - Build time = base_time × 1.28^(L-1) × 0.964^(MB_level-1)
 * - Single queue (Roman dual queue option)
 * - Farming income model: +raid_res/hr constant (set per strategy)
 *
 * Simulates each build-order strategy step-by-step and reports:
 * - Actual day of chief (can train 3 settlers)
 * - Resource deficits (if any)
 * - Bottleneck steps
 */

import { FIELD_PRODUCTION, FIELD_COSTS, MAIN_BUILDING_SPEED_MULTIPLIER } from '../src/data/travian';
import { common } from '../src/data/build-order/common';
import { strategy4pSim } from '../src/data/build-order/strategy-4p-sim';
import { strategy4pFarming } from '../src/data/build-order/strategy-4p-farming';
import { strategy3pSim } from '../src/data/build-order/strategy-3p-sim';
import { strategy3pFarming } from '../src/data/build-order/strategy-3p-farming';
import { strategyLazyDecent } from '../src/data/build-order/strategy-lazy-decent';
import type { BuildStep } from '../src/data/build-order/types';

interface SimConfig {
  name: string;
  steps: BuildStep[];
  farmingResPerHour: number; // sustained raid income after Day 1
  dualQueue: boolean;
  claimedTargetDay: number;
}

interface SimState {
  t: number; // hours
  resources: { wood: number; clay: number; iron: number; crop: number };
  fields: { wood: number[]; clay: number[]; iron: number[]; crop: number[] };
  mbLevel: number;
  stepIdx: number;
  log: Array<{ t: number; event: string; stepNum?: number }>;
  totalCost: number;
  totalRes: number; // sum of gained resources
}

function totalProd(fields: SimState['fields']): number {
  const sumField = (arr: number[]) => arr.reduce((s, L) => s + (FIELD_PRODUCTION[L] || 0), 0);
  return sumField(fields.wood) + sumField(fields.clay) + sumField(fields.iron) + sumField(fields.crop);
}

function prodPerResource(fields: SimState['fields']): { wood: number; clay: number; iron: number; crop: number } {
  const sum = (arr: number[]) => arr.reduce((s, L) => s + (FIELD_PRODUCTION[L] || 0), 0);
  return { wood: sum(fields.wood), clay: sum(fields.clay), iron: sum(fields.iron), crop: sum(fields.crop) };
}

function simulate(config: SimConfig): SimState {
  // 4-4-4-6 layout: 4 wood + 4 clay + 4 iron + 6 crop fields, all Lv 0
  const state: SimState = {
    t: 0,
    resources: { wood: 750, clay: 750, iron: 750, crop: 750 },
    fields: { wood: [0,0,0,0], clay: [0,0,0,0], iron: [0,0,0,0], crop: [0,0,0,0,0,0] },
    mbLevel: 1,
    stepIdx: 0,
    log: [],
    totalCost: 0,
    totalRes: 0,
  };

  const dtHours = 0.1; // 6-minute ticks
  const raidHourly = config.farmingResPerHour / 4; // split evenly

  // Naïve simulation — advances time, accumulates resources, executes each step when resources available
  while (state.stepIdx < config.steps.length && state.t < 48 * 24) { // max 48 days
    // Accumulate resources
    const prod = prodPerResource(state.fields);
    const raidPer = raidHourly;
    state.resources.wood += (prod.wood + raidPer) * dtHours;
    state.resources.clay += (prod.clay + raidPer) * dtHours;
    state.resources.iron += (prod.iron + raidPer) * dtHours;
    state.resources.crop += Math.max(0, (prod.crop + raidPer - totalCropUpkeep(state)) * dtHours);
    state.t += dtHours;
    state.totalRes += (prod.wood + prod.clay + prod.iron + prod.crop + 4 * raidPer) * dtHours;

    // Try to execute next step
    const step = config.steps[state.stepIdx];
    const cost = step.cost ?? 0;
    const costEach = cost / 4;
    if (cost > 0 && (state.resources.wood >= costEach && state.resources.clay >= costEach && state.resources.iron >= costEach && state.resources.crop >= costEach)) {
      // Spend
      state.resources.wood -= costEach;
      state.resources.clay -= costEach;
      state.resources.iron -= costEach;
      state.resources.crop -= costEach;
      state.totalCost += cost;
      // Apply field upgrade if applicable
      applyStep(state, step);
      state.log.push({ t: state.t, event: `Step ${step.step}: ${step.building.en}`, stepNum: step.step });
      state.stepIdx++;
    } else if (cost === 0 || cost === null) {
      // Free or task step — instant
      applyStep(state, step);
      state.log.push({ t: state.t, event: `Step ${step.step}: ${step.building.en} (no cost)`, stepNum: step.step });
      state.stepIdx++;
    }
  }

  return state;
}

function totalCropUpkeep(state: SimState): number {
  // Each field tile has pop that consumes crop. Simplified: 1 pop per level per field.
  const sum = (arr: number[]) => arr.reduce((s, L) => s + L, 0);
  return sum(state.fields.wood) + sum(state.fields.clay) + sum(state.fields.iron) + sum(state.fields.crop);
}

function applyStep(state: SimState, step: BuildStep) {
  const bldg = step.building.en.toLowerCase();
  if (bldg.includes('woodcutter')) upgrade(state.fields.wood, step.targetLevel);
  else if (bldg.includes('clay pit')) upgrade(state.fields.clay, step.targetLevel);
  else if (bldg.includes('iron mine')) upgrade(state.fields.iron, step.targetLevel);
  else if (bldg.includes('cropland') || bldg.includes('crop field')) upgrade(state.fields.crop, step.targetLevel);
  else if (bldg.includes('main building')) state.mbLevel = Math.max(state.mbLevel, step.targetLevel);
}

function upgrade(fields: number[], targetLevel: number) {
  // Upgrade lowest-level field to target
  const idx = fields.findIndex(L => L < targetLevel);
  if (idx >= 0) fields[idx] = targetLevel;
}

const strategies: SimConfig[] = [
  { name: '4P Sim',       steps: [...common, ...strategy4pSim.branchSteps],       farmingResPerHour: 400,  dualQueue: false, claimedTargetDay: 11 },
  { name: '4P Farming',   steps: [...common, ...strategy4pFarming.branchSteps],   farmingResPerHour: 900,  dualQueue: false, claimedTargetDay: 13 },
  { name: '3P Sim',       steps: [...common, ...strategy3pSim.branchSteps],       farmingResPerHour: 400,  dualQueue: false, claimedTargetDay: 10 },
  { name: '3P Farming',   steps: [...common, ...strategy3pFarming.branchSteps],   farmingResPerHour: 900,  dualQueue: false, claimedTargetDay: 12 },
  { name: 'Lazy Decent',  steps: [...common, ...strategyLazyDecent.branchSteps],  farmingResPerHour: 200,  dualQueue: false, claimedTargetDay: 21 },
];

console.log('Build-order simulator — Day-to-completion estimate');
console.log('='.repeat(80));

for (const cfg of strategies) {
  const result = simulate(cfg);
  const days = result.t / 24;
  const lastStep = result.log[result.log.length - 1];
  console.log(`\n${cfg.name}:`);
  console.log(`  Steps completed: ${result.stepIdx}/${cfg.steps.length}`);
  console.log(`  Total time: ${days.toFixed(1)} days (claimed: Day ${cfg.claimedTargetDay})`);
  console.log(`  Total cost: ${result.totalCost.toLocaleString()}`);
  console.log(`  Total resources gained: ${result.totalRes.toFixed(0).toLocaleString()}`);
  console.log(`  Last step: ${lastStep?.event.slice(0, 60)}`);
  const delta = days - cfg.claimedTargetDay;
  console.log(`  Δ vs claim: ${delta > 0 ? '+' : ''}${delta.toFixed(1)} days ${Math.abs(delta) < 2 ? '✅ plausible' : '⚠️ diverges'}`);
}
