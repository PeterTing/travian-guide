import type { TribeId } from '../travian';
import type { SettlementTimeline } from '../settlement-types';
import { romans } from './romans';
import { gauls } from './gauls';
import { teutons } from './teutons';
import { egyptians, huns, spartans, vikings } from './others';

export const SETTLEMENTS: Record<TribeId, SettlementTimeline> = {
  romans, gauls, teutons, egyptians, huns, vikings, spartans,
};

export const SETTLEMENT_ORDER: TribeId[] = [
  'romans', 'gauls', 'teutons', 'egyptians', 'huns', 'vikings', 'spartans',
];

export const SETTLEMENT_LIST: SettlementTimeline[] = SETTLEMENT_ORDER.map(id => SETTLEMENTS[id]);
