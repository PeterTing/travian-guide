import type { SettlementTimeline } from '../settlement-types';

export const romans: SettlementTimeline = {
  tribe: 'romans',
  targetDay: { zh: 'Day 5–6', en: 'Day 5–6' },
  approach: {
    zh: '善用「雙建築佇列」：資源田跟其他建築可以同時建。前期把非糧資源田推到 Lv 5-7 的同時升主府 + 學院 + 居所，效率遠超他族。',
    en: 'Leverage the dual building queue: resource fields and other buildings build simultaneously. Push non-crop fields to Lv 5–7 while MB + Academy + Residence go up in parallel — significantly faster than other tribes.',
  },
  steps: [
    { at: 'Hour 0:00', action: { zh: '加入聯盟（即刻拿新手加成）。英雄技能全點戰鬥力。', en: 'Join an alliance immediately (activates newbie bonus). Allocate all hero points to Fighting Strength.' } },
    { at: 'Hour 0:00', action: { zh: '同時開兩隊伍：①木田 Lv 1 ②主府 Lv 2', en: 'Start both queues: ① Woodcutter Lv 1 ② Main Building Lv 2' } },
    { at: 'Hour 1–6', action: { zh: '英雄打綠洲（Rats / Spiders 開始），一路拿任務獎勵', en: 'Hero clears oases (start with Rats / Spiders), complete tutorial quests for bonuses' } },
    { at: 'Hour 6–24', action: { zh: '所有非糧田 Lv 3，糧田 Lv 2–3；主府 Lv 5；蓋秘密倉庫 Lv 3', en: 'All non-crop fields to Lv 3, crop Lv 2–3; Main Building Lv 5; Cranny Lv 3' } },
    { at: 'Day 2', action: { zh: '主府 Lv 10；市場 Lv 1；大使館 Lv 1；倉庫/糧倉 Lv 3', en: 'Main Building Lv 10; Marketplace Lv 1; Embassy Lv 1; Warehouse/Granary Lv 3' } },
    { at: 'Day 3', action: { zh: '學院 Lv 1（需大使館 Lv 1 + 主府 Lv 3）；居所 Lv 1', en: 'Academy Lv 1 (requires Embassy Lv 1 + MB Lv 3); Residence Lv 1' } },
    { at: 'Day 3–4', action: { zh: '學院 Lv 10（需大使館 Lv 1）；居所 Lv 5', en: 'Academy Lv 10; Residence Lv 5' } },
    { at: 'Day 4', action: { zh: '研發開拓者（Settler）、居所 Lv 10', en: 'Research Settler at Academy; push Residence to Lv 10' } },
    { at: 'Day 4–5', action: { zh: '訓練 3 個開拓者（每個 4,600 木 / 4,200 土 / 5,800 鐵 / 4,400 糧）', en: 'Train 3 Settlers (4,600 wood / 4,200 clay / 5,800 iron / 4,400 crop each)' } },
    { at: 'Day 5–6', action: { zh: '探路並定居！選好 15c / 9c 首都位置。', en: 'Scout and settle! Pick a 15c / 9c capital tile.' } },
  ],
  keyTips: [
    { zh: '雙隊列不要閒：一邊資源田、一邊建築，任何一邊空著 = 浪費羅馬優勢。', en: 'Never let either queue sit idle — one for fields, one for buildings. Empty queue = wasted Roman advantage.' },
    { zh: '羅馬開拓者是三族中最貴的，需要大量糧：前期衝糧田 Lv 5+ 很關鍵。', en: 'Roman Settlers are the most expensive of the 3 beginner tribes — push crop fields to Lv 5+ early.' },
    { zh: '英雄打綠洲別貪，每隻 Rat 160 資源，能打就打，Day 3–4 保護期結束前要全清。', en: 'Clear oasis animals aggressively during protection — 160+ resources each, one-time bounty.' },
  ],
};
