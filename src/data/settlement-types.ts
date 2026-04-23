import type { TribeId } from './travian';

/**
 * Per-tribe opening-game character profile. Used by SectionSettling to give
 * each tribe a "what this tribe's early game feels like" introduction.
 *
 * The actual hour-by-hour / step-by-step build order now lives in
 * src/data/build-order/ (strategy-based, xlsx-sourced). This module only
 * keeps qualitative tribe flavor + tips.
 */
export interface SettlementTimeline {
  tribe: TribeId;
  approach: { zh: string; en: string };
  keyTips: { zh: string; en: string }[];
}
