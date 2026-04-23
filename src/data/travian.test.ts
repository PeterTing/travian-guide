import { describe, it, expect } from 'vitest';
import {
  FIELD_PRODUCTION,
  FIELD_COSTS,
  fieldTotalCost,
  BONUS_BUILDINGS,
  BB_BASE_COST,
  bbCost,
  bbTotalCost,
  CP_BASE,
  cpAtLevel,
  cpSum,
  CP_REQUIRED,
  MERCHANTS,
  TRADE_OFFICE_PER_LEVEL_DEFAULT,
  TRADE_OFFICE_PER_LEVEL_ROMAN,
  tradeOfficePerLevel,
  merchantCapacity,
  CELEBRATIONS,
  HERO_MANSION,
  hmCumulativeCost,
  fieldBuildTime,
  mbMultiplier,
  fieldRoi,
} from './travian';

// =========================================================================
// FIELD_PRODUCTION — 22 values, L0–L21
// =========================================================================
describe('FIELD_PRODUCTION', () => {
  it('pins L0-L21 to kirilloid T4.6 values', () => {
    expect(FIELD_PRODUCTION).toEqual([
      3, 7, 13, 21, 31, 46, 70, 98, 140, 203,
      280, 392, 525, 693, 889, 1120, 1400, 1820, 2240, 2800,
      3430, 4270,
    ]);
  });

  it('has exactly 22 levels (L0-L21)', () => {
    expect(FIELD_PRODUCTION.length).toBe(22);
  });
});

// =========================================================================
// FIELD_COSTS — base + scaling
// =========================================================================
describe('FIELD_COSTS', () => {
  it('wood field Lv1 cost = 40/100/50/60', () => {
    expect(FIELD_COSTS.wood[0]).toEqual({ level: 1, wood: 40, clay: 100, iron: 50, crop: 60 });
  });

  it('wood field scaling: Lv2 wood = round5(40 x 1.67) = 65', () => {
    // 40 * 1.67 = 66.8 -> /5 = 13.36 -> round = 13 -> *5 = 65
    expect(FIELD_COSTS.wood[1].wood).toBe(65);
  });

  it('wood field scaling: Lv2 clay = round5(100 x 1.67) = 165', () => {
    // 100 * 1.67 = 167 -> /5 = 33.4 -> round = 33 -> *5 = 165
    expect(FIELD_COSTS.wood[1].clay).toBe(165);
  });

  it('clay field Lv1 base', () => {
    expect(FIELD_COSTS.clay[0]).toEqual({ level: 1, wood: 80, clay: 40, iron: 80, crop: 50 });
  });

  it('iron field Lv1 base', () => {
    expect(FIELD_COSTS.iron[0]).toEqual({ level: 1, wood: 100, clay: 80, iron: 30, crop: 60 });
  });

  it('crop field Lv1 base', () => {
    expect(FIELD_COSTS.crop[0]).toEqual({ level: 1, wood: 70, clay: 90, iron: 70, crop: 20 });
  });

  it('each field table has 20 levels', () => {
    expect(FIELD_COSTS.wood.length).toBe(20);
    expect(FIELD_COSTS.clay.length).toBe(20);
    expect(FIELD_COSTS.iron.length).toBe(20);
    expect(FIELD_COSTS.crop.length).toBe(20);
  });

  it('fieldTotalCost(wood, 1) = 40 + 100 + 50 + 60 = 250', () => {
    expect(fieldTotalCost('wood', 1)).toBe(250);
  });

  it('fieldTotalCost(crop, 1) = 70 + 90 + 70 + 20 = 250', () => {
    expect(fieldTotalCost('crop', 1)).toBe(250);
  });

  it('fieldTotalCost returns 0 for out-of-range levels', () => {
    expect(fieldTotalCost('wood', 0)).toBe(0);
    expect(fieldTotalCost('wood', 21)).toBe(0);
  });
});

// =========================================================================
// BONUS_BUILDINGS + BB_BASE_COST
// =========================================================================
describe('BONUS_BUILDINGS', () => {
  it('all 5 bonus buildings have perLevel 0.05 and maxLevel 5', () => {
    const keys = ['sawmill', 'brickyard', 'ironFoundry', 'grainMill', 'bakery'] as const;
    for (const k of keys) {
      expect(BONUS_BUILDINGS[k].perLevel).toBe(0.05);
      expect(BONUS_BUILDINGS[k].maxLevel).toBe(5);
    }
  });

  it('sawmill bonuses wood', () => {
    expect(BONUS_BUILDINGS.sawmill.resource).toBe('wood');
  });

  it('brickyard bonuses clay', () => {
    expect(BONUS_BUILDINGS.brickyard.resource).toBe('clay');
  });

  it('ironFoundry bonuses iron', () => {
    expect(BONUS_BUILDINGS.ironFoundry.resource).toBe('iron');
  });

  it('grainMill bonuses crop', () => {
    expect(BONUS_BUILDINGS.grainMill.resource).toBe('crop');
  });

  it('bakery bonuses crop (stacks with grainMill)', () => {
    expect(BONUS_BUILDINGS.bakery.resource).toBe('crop');
  });

  it('sawmill L1 cost = 520/380/290/90', () => {
    expect(BB_BASE_COST.sawmill).toEqual({ wood: 520, clay: 380, iron: 290, crop: 90 });
  });

  it('brickyard L1 cost = 440/480/320/50', () => {
    expect(BB_BASE_COST.brickyard).toEqual({ wood: 440, clay: 480, iron: 320, crop: 50 });
  });

  it('ironFoundry L1 cost = 200/450/510/120', () => {
    expect(BB_BASE_COST.ironFoundry).toEqual({ wood: 200, clay: 450, iron: 510, crop: 120 });
  });

  it('grainMill L1 cost = 500/440/380/1240', () => {
    expect(BB_BASE_COST.grainMill).toEqual({ wood: 500, clay: 440, iron: 380, crop: 1240 });
  });

  it('bakery L1 cost = 1200/1480/870/1600', () => {
    expect(BB_BASE_COST.bakery).toEqual({ wood: 1200, clay: 1480, iron: 870, crop: 1600 });
  });

  it('bbCost(sawmill, 1) returns base values', () => {
    expect(bbCost('sawmill', 1)).toEqual({ level: 1, wood: 520, clay: 380, iron: 290, crop: 90 });
  });

  it('bbCost(sawmill, 5) scales by 1.80^4 with round5', () => {
    // 520 * 1.80^4 = 520 * 10.4976 = 5458.75 -> /5 = 1091.75 -> round = 1092 -> *5 = 5460
    expect(bbCost('sawmill', 5).wood).toBe(5460);
  });

  it('bbTotalCost(sawmill, 1) = 520 + 380 + 290 + 90 = 1280', () => {
    expect(bbTotalCost('sawmill', 1)).toBe(1280);
  });
});

// =========================================================================
// CP_BASE — 40+ buildings
// =========================================================================
describe('CP_BASE', () => {
  it('CP base values match kirilloid', () => {
    expect(CP_BASE.mainBuilding).toBe(2);
    expect(CP_BASE.warehouse).toBe(1);
    expect(CP_BASE.townHall).toBe(5);
    expect(CP_BASE.treasury).toBe(6);
    expect(CP_BASE.embassy).toBe(4);
    expect(CP_BASE.academy).toBe(4);
  });

  it('base 1 buildings: warehouse, granary, cranny, barracks, heroMansion', () => {
    expect(CP_BASE.warehouse).toBe(1);
    expect(CP_BASE.granary).toBe(1);
    expect(CP_BASE.cranny).toBe(1);
    expect(CP_BASE.barracks).toBe(1);
    expect(CP_BASE.heroMansion).toBe(1);
    expect(CP_BASE.tournamentSquare).toBe(1);
    expect(CP_BASE.rallyPoint).toBe(1);
    expect(CP_BASE.trapper).toBe(1);
  });

  it('wall variants all base 1', () => {
    expect(CP_BASE.cityWall).toBe(1);
    expect(CP_BASE.earthWall).toBe(1);
    expect(CP_BASE.palisade).toBe(1);
    expect(CP_BASE.stoneWall).toBe(1);
    expect(CP_BASE.makeshiftWall).toBe(1);
    expect(CP_BASE.barricade).toBe(1);
  });

  it('resource fields all base 1', () => {
    expect(CP_BASE.woodcutter).toBe(1);
    expect(CP_BASE.clayPit).toBe(1);
    expect(CP_BASE.ironMine).toBe(1);
    expect(CP_BASE.cropland).toBe(1);
  });

  it('bonus buildings all base 1', () => {
    expect(CP_BASE.sawmill).toBe(1);
    expect(CP_BASE.brickyard).toBe(1);
    expect(CP_BASE.ironFoundry).toBe(1);
    expect(CP_BASE.grainMill).toBe(1);
    expect(CP_BASE.bakery).toBe(1);
  });

  it('base 2 buildings: mainBuilding, residence, smithy, armoury, stable', () => {
    expect(CP_BASE.mainBuilding).toBe(2);
    expect(CP_BASE.residence).toBe(2);
    expect(CP_BASE.smithy).toBe(2);
    expect(CP_BASE.armoury).toBe(2);
    expect(CP_BASE.stable).toBe(2);
    expect(CP_BASE.greatStable).toBe(2);
  });

  it('base 3 buildings: marketplace, workshop, tradeOffice, horseDrinkingTrough', () => {
    expect(CP_BASE.marketplace).toBe(3);
    expect(CP_BASE.workshop).toBe(3);
    expect(CP_BASE.tradeOffice).toBe(3);
    expect(CP_BASE.horseDrinkingTrough).toBe(3);
  });

  it('base 4: embassy, academy, brewery', () => {
    expect(CP_BASE.embassy).toBe(4);
    expect(CP_BASE.academy).toBe(4);
    expect(CP_BASE.brewery).toBe(4);
  });

  it('base 5: townHall, palace', () => {
    expect(CP_BASE.townHall).toBe(5);
    expect(CP_BASE.palace).toBe(5);
  });

  it('base 6: treasury', () => {
    expect(CP_BASE.treasury).toBe(6);
  });
});

// =========================================================================
// cpAtLevel / cpSum
// =========================================================================
describe('cpAtLevel / cpSum', () => {
  it('cpAtLevel(mainBuilding, 20) follows round(base x 1.2^L) = 77', () => {
    // 2 * 1.2^20 ~= 76.67 -> 77
    expect(cpAtLevel('mainBuilding', 20)).toBe(77);
  });

  it('cpAtLevel(mainBuilding, 1) = round(2 x 1.2) = 2', () => {
    expect(cpAtLevel('mainBuilding', 1)).toBe(2);
  });

  it('cpAtLevel(treasury, 20) = round(6 x 1.2^20)', () => {
    expect(cpAtLevel('treasury', 20)).toBe(Math.round(6 * Math.pow(1.2, 20)));
  });

  it('cpAtLevel returns 0 for level <= 0', () => {
    expect(cpAtLevel('mainBuilding', 0)).toBe(0);
    expect(cpAtLevel('mainBuilding', -1)).toBe(0);
  });

  it('cpSum(mainBuilding, 1, 20) sums levels 1..20', () => {
    let expected = 0;
    for (let L = 1; L <= 20; L++) expected += Math.round(2 * Math.pow(1.2, L));
    expect(cpSum('mainBuilding', 1, 20)).toBe(expected);
  });
});

// =========================================================================
// CP_REQUIRED — 10 villages
// =========================================================================
describe('CP_REQUIRED', () => {
  it('has 10 entries (villages 1..10)', () => {
    expect(CP_REQUIRED.length).toBe(10);
  });

  it('village 1: cumulative = 0', () => {
    expect(CP_REQUIRED[0]).toEqual({ village: 1, delta: 0, cumulative: 0 });
  });

  it('village 2: cumulative = 2000 (delta 2000)', () => {
    expect(CP_REQUIRED[1]).toEqual({ village: 2, delta: 2000, cumulative: 2000 });
  });

  it('village 3: cumulative = 8000 (delta 6000)', () => {
    expect(CP_REQUIRED[2]).toEqual({ village: 3, delta: 6000, cumulative: 8000 });
  });

  it('village 4: cumulative = 20000 (delta 12000)', () => {
    expect(CP_REQUIRED[3]).toEqual({ village: 4, delta: 12000, cumulative: 20000 });
  });

  it('village 5: cumulative = 39000 (delta 19000)', () => {
    expect(CP_REQUIRED[4]).toEqual({ village: 5, delta: 19000, cumulative: 39000 });
  });

  it('village 6: cumulative = 65000 (delta 26000)', () => {
    expect(CP_REQUIRED[5]).toEqual({ village: 6, delta: 26000, cumulative: 65000 });
  });

  it('village 7: cumulative = 99000 (delta 34000)', () => {
    expect(CP_REQUIRED[6]).toEqual({ village: 7, delta: 34000, cumulative: 99000 });
  });

  it('village 8: cumulative = 141000 (delta 42000)', () => {
    expect(CP_REQUIRED[7]).toEqual({ village: 8, delta: 42000, cumulative: 141000 });
  });

  it('village 9: cumulative = 191000 (delta 50000)', () => {
    expect(CP_REQUIRED[8]).toEqual({ village: 9, delta: 50000, cumulative: 191000 });
  });

  it('village 10: cumulative = 251000 (delta 60000)', () => {
    expect(CP_REQUIRED[9]).toEqual({ village: 10, delta: 60000, cumulative: 251000 });
  });

  it('cumulative values are monotonically increasing', () => {
    for (let i = 1; i < CP_REQUIRED.length; i++) {
      expect(CP_REQUIRED[i].cumulative).toBeGreaterThanOrEqual(CP_REQUIRED[i - 1].cumulative);
    }
  });

  it('delta[i] = cumulative[i] - cumulative[i-1]', () => {
    for (let i = 1; i < CP_REQUIRED.length; i++) {
      expect(CP_REQUIRED[i].delta).toBe(CP_REQUIRED[i].cumulative - CP_REQUIRED[i - 1].cumulative);
    }
  });
});

// =========================================================================
// MERCHANTS — 7 tribes
// =========================================================================
describe('MERCHANTS', () => {
  it('Roman merchant cap 500 speed 16', () => {
    expect(MERCHANTS.romans).toEqual({ capacity: 500, speed: 16 });
  });

  it('Teuton merchant cap 1000 speed 12', () => {
    expect(MERCHANTS.teutons).toEqual({ capacity: 1000, speed: 12 });
  });

  it('Gaul merchant cap 750 speed 24', () => {
    expect(MERCHANTS.gauls).toEqual({ capacity: 750, speed: 24 });
  });

  it('Egyptian merchant cap 750 speed 16', () => {
    expect(MERCHANTS.egyptians).toEqual({ capacity: 750, speed: 16 });
  });

  it('Hun merchant cap 750 speed 20', () => {
    expect(MERCHANTS.huns).toEqual({ capacity: 750, speed: 20 });
  });

  it('Spartan merchant cap 500 speed 14', () => {
    expect(MERCHANTS.spartans).toEqual({ capacity: 500, speed: 14 });
  });

  it('Viking merchant cap 750 speed 18', () => {
    expect(MERCHANTS.vikings).toEqual({ capacity: 750, speed: 18 });
  });

  it('Trade Office per level: Romans 20%, others 10%', () => {
    expect(TRADE_OFFICE_PER_LEVEL_DEFAULT).toBe(0.10);
    expect(TRADE_OFFICE_PER_LEVEL_ROMAN).toBe(0.20);
    expect(tradeOfficePerLevel('romans')).toBe(0.20);
    expect(tradeOfficePerLevel('teutons')).toBe(0.10);
    expect(tradeOfficePerLevel('huns')).toBe(0.10);
  });

  it('merchantCapacity Roman TO 20 = 500 x (1 + 20 x 0.20) = 2500', () => {
    expect(merchantCapacity('romans', 20)).toBe(2500);
  });

  it('merchantCapacity Teuton TO 20 = 1000 x (1 + 20 x 0.10) = 3000', () => {
    expect(merchantCapacity('teutons', 20)).toBe(3000);
  });

  it('merchantCapacity at TO 0 returns base capacity', () => {
    expect(merchantCapacity('romans', 0)).toBe(500);
    expect(merchantCapacity('teutons', 0)).toBe(1000);
    expect(merchantCapacity('huns', 0)).toBe(750);
  });
});

// =========================================================================
// CELEBRATIONS
// =========================================================================
describe('CELEBRATIONS', () => {
  it('small celebration: 500 CP, 24h, min TH 1', () => {
    expect(CELEBRATIONS.small.cp).toBe(500);
    expect(CELEBRATIONS.small.hours).toBe(24);
    expect(CELEBRATIONS.small.minTownHall).toBe(1);
  });

  it('small celebration cost = 6400/6650/5940/500 (total 19490)', () => {
    expect(CELEBRATIONS.small.cost).toEqual({ wood: 6400, clay: 6650, iron: 5940, crop: 500 });
    const { wood, clay, iron, crop } = CELEBRATIONS.small.cost;
    expect(wood + clay + iron + crop).toBe(19490);
  });

  it('great celebration: 2000 CP, 60h, min TH 10', () => {
    expect(CELEBRATIONS.great.cp).toBe(2000);
    expect(CELEBRATIONS.great.hours).toBe(60);
    expect(CELEBRATIONS.great.minTownHall).toBe(10);
  });

  it('great celebration cost = 29700/33250/32000/6700 (total 101650)', () => {
    expect(CELEBRATIONS.great.cost).toEqual({ wood: 29700, clay: 33250, iron: 32000, crop: 6700 });
    const { wood, clay, iron, crop } = CELEBRATIONS.great.cost;
    expect(wood + clay + iron + crop).toBe(101650);
  });
});

// =========================================================================
// HERO_MANSION — cumulativeCost
// =========================================================================
describe('HERO_MANSION / hmCumulativeCost', () => {
  it('hmCumulativeCost(0) = 0', () => {
    expect(hmCumulativeCost(0)).toBe(0);
  });

  it('hmCumulativeCost(1) = 360 (80 + 120 + 70 + 90)', () => {
    expect(hmCumulativeCost(1)).toBe(360);
  });

  it('hmCumulativeCost(10) = 17805 (+/-10 rounding tolerance)', () => {
    const v = hmCumulativeCost(10);
    expect(v).toBeGreaterThanOrEqual(17795);
    expect(v).toBeLessThanOrEqual(17815);
    // Pinned exact:
    expect(v).toBe(17805);
  });

  it('hmCumulativeCost(15) = 77535 (+/-20 tolerance)', () => {
    const v = hmCumulativeCost(15);
    expect(v).toBeGreaterThanOrEqual(77515);
    expect(v).toBeLessThanOrEqual(77555);
    expect(v).toBe(77535);
  });

  it('hmCumulativeCost(20) = 326110 — was 249170 bug (+/-50 tolerance)', () => {
    const v = hmCumulativeCost(20);
    expect(v).toBeGreaterThanOrEqual(326060);
    expect(v).toBeLessThanOrEqual(326160);
    expect(v).toBe(326110);
    // Regression guard: must NOT match the old buggy value
    expect(v).not.toBe(249170);
  });

  it('oasesUnlocked: L10=1, L15=2, L20=3', () => {
    expect(HERO_MANSION.oasesUnlocked[10]).toBe(1);
    expect(HERO_MANSION.oasesUnlocked[15]).toBe(2);
    expect(HERO_MANSION.oasesUnlocked[20]).toBe(3);
  });

  it('cumulativeCost map covers levels 1..20 and matches hmCumulativeCost', () => {
    for (let L = 1; L <= 20; L++) {
      expect(HERO_MANSION.cumulativeCost[L]).toBe(hmCumulativeCost(L));
    }
  });
});

// =========================================================================
// fieldBuildTime / mbMultiplier / fieldRoi — function spot-checks
// =========================================================================
describe('mbMultiplier', () => {
  it('mbMultiplier(1) = 1 (no speedup)', () => {
    expect(mbMultiplier(1)).toBe(1);
  });

  it('mbMultiplier(0) = 1 (clamped, since max(0, L-1) = 0)', () => {
    expect(mbMultiplier(0)).toBe(1);
  });

  it('mbMultiplier(20) = 0.964^19 ~ 0.498', () => {
    expect(mbMultiplier(20)).toBeCloseTo(0.964 ** 19, 10);
    expect(mbMultiplier(20)).toBeCloseTo(0.4982687, 5);
  });
});

describe('fieldBuildTime', () => {
  it('wood L1 MB1 = 1780/3 - 1000/3 = 260 sec', () => {
    expect(fieldBuildTime('wood', 1, 1)).toBeCloseTo(260, 5);
  });

  it('wood L1 MB20 = 260 x mbMultiplier(20)', () => {
    expect(fieldBuildTime('wood', 1, 20)).toBeCloseTo(260 * mbMultiplier(20), 5);
  });

  it('wood L10 MB1 > wood L1 MB1 (scaling by 1.6)', () => {
    expect(fieldBuildTime('wood', 10, 1)).toBeGreaterThan(fieldBuildTime('wood', 1, 1));
  });

  it('clay L1 MB1 = 1660/3 - 1000/3 = 220 sec', () => {
    expect(fieldBuildTime('clay', 1, 1)).toBeCloseTo(220, 5);
  });

  it('iron L1 MB1 = 2350/3 - 1000/3 = 450 sec', () => {
    expect(fieldBuildTime('iron', 1, 1)).toBeCloseTo(450, 5);
  });

  it('crop L1 MB1 = 1450/3 - 1000/3 = 150 sec', () => {
    expect(fieldBuildTime('crop', 1, 1)).toBeCloseTo(150, 5);
  });
});

describe('fieldRoi', () => {
  it('wood L1 no gold: cost 250, delta 7, perDay 168', () => {
    const r = fieldRoi('wood', 1, { goldBonus: 0 });
    expect(r.cost).toBe(250);
    expect(r.deltaBase).toBe(7);
    expect(r.productionGainPerHour).toBe(7);
    expect(r.productionGainPerDay).toBe(168);
    expect(r.roiDays).toBeCloseTo(250 / 168, 6);
  });

  it('wood L1 default (25% gold): perHour = 7 x 1.25 = 8.75', () => {
    const r = fieldRoi('wood', 1);
    expect(r.cost).toBe(250);
    expect(r.productionGainPerHour).toBe(8.75);
    expect(r.productionGainPerDay).toBe(210);
  });

  it('delta uses L vs L-1 (L5 delta = 46 - 31 = 15)', () => {
    const r = fieldRoi('wood', 5, { goldBonus: 0 });
    expect(r.deltaBase).toBe(15);
  });

  it('multiplier is additive: 1 + bb + oasis + gold', () => {
    const r = fieldRoi('wood', 1, { goldBonus: 0.25, bonusBuildingPct: 0.25, oasisPct: 0.5 });
    // 1 + 0.25 + 0.25 + 0.5 = 2.0
    expect(r.productionGainPerHour).toBe(7 * 2.0);
  });

  it('roiDays = Infinity when no production gain', () => {
    // Level 0 fieldRoi would be out of supported range; test beyond array
    const r = fieldRoi('wood', 99, { goldBonus: 0 });
    expect(r.roiDays).toBe(Infinity);
  });
});
