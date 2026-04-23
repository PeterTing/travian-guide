/**
 * Per-tribe "fastest 2nd village" settlement timelines.
 * Each step: when (server hour / day), what to do, why.
 *
 * Values assume 1x server speed + Plus gold +25% production bonus.
 * For faster servers, divide hours by speed multiplier.
 */

import type { TribeId } from './travian';

export interface SettlementStep {
  at: string;          // "Hour 0:00" / "Day 2" etc.
  action: { zh: string; en: string };
  note?: { zh: string; en: string };
}

export interface SettlementTimeline {
  tribe: TribeId;
  targetDay: { zh: string; en: string };
  approach: { zh: string; en: string };
  steps: SettlementStep[];
  keyTips: { zh: string; en: string }[];
}
