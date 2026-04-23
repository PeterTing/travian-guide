import type { SettlementTimeline } from '../settlement-types';

export const gauls: SettlementTimeline = {
  tribe: 'gauls',
  targetDay: { zh: 'Day 5–6', en: 'Day 5–6' },
  approach: {
    zh: '高盧的殺招是「最便宜的開拓者」（三個才 12,800 總資源，羅馬要 57,000）。前期全力衝主府 / 學院 / 居所，秘密倉庫搭配 1.5× 加成讓你早期幾乎被搶不到東西。',
    en: 'Gauls\' trump card is the cheapest settlers in the game (3× for ~12,800 total vs Romans\' ~57,000). Focus MB / Academy / Residence hard. Their 1.5× cranny makes them nearly unraidable early.',
  },
  steps: [
    { at: 'Hour 0:00', action: { zh: '加入聯盟。英雄點戰鬥力。木田 / 土田 Lv 1。', en: 'Join alliance. Hero → Fighting Strength. Woodcutter / Clay Pit Lv 1.' } },
    { at: 'Hour 1–6', action: { zh: '英雄清綠洲（TT 可當英雄帶路的副手，但前期還沒有）', en: 'Hero clears oases; Phalanx is NOT used as companions (skip standard mistake)' } },
    { at: 'Hour 6–24', action: { zh: '所有資源田 Lv 2–3；主府 Lv 5；秘密倉庫 Lv 3（1.5× 加成 = 450 per res）', en: 'All fields Lv 2–3; Main Building Lv 5; Cranny Lv 3 (×1.5 bonus = 450 per resource hidden)' } },
    { at: 'Day 2', action: { zh: '主府 Lv 10；市場 Lv 1；大使館 Lv 1；倉庫 Lv 3；蓋獵人陷阱（Trapper）', en: 'MB Lv 10; Marketplace Lv 1; Embassy Lv 1; Warehouse Lv 3; build Trapper' } },
    { at: 'Day 3', action: { zh: '學院 Lv 1 + 居所 Lv 1；繼續升資源田 Lv 5', en: 'Academy Lv 1 + Residence Lv 1; continue fields to Lv 5' } },
    { at: 'Day 3–4', action: { zh: '學院 Lv 10；居所 Lv 5；研發開拓者', en: 'Academy Lv 10; Residence Lv 5; research Settler' } },
    { at: 'Day 4', action: { zh: '居所 Lv 10；糧田衝 Lv 5（開拓者吃糧）', en: 'Residence Lv 10; push crop to Lv 5 (settlers need food)' } },
    { at: 'Day 4–5', action: { zh: '訓練 3 個開拓者（每個 4,400/5,600/4,200/3,900 = 18,100；三個 54,300）', en: 'Train 3 Settlers (cheapest in game — 18,100 each, 54,300 total)' } },
    { at: 'Day 5–6', action: { zh: '定居！選 15c / 9c 為首都', en: 'Settle! Pick 15c / 9c as your future capital' } },
  ],
  keyTips: [
    { zh: '陷阱（Trapper）前期真的有用：抓到條頓偵察或早期掠奪兵，敵人就知道你很難啃。', en: 'Trapper is genuinely useful early: catching Teuton scouts/raiders signals you\'re not worth farming.' },
    { zh: '開拓者最便宜 = 訓練時間最短（22,700 秒 vs 羅馬 26,900 vs 條頓 31,000），可以比羅馬早半天開二村。', en: 'Cheapest settlers also train fastest (22,700s vs Roman 26,900s vs Teuton 31,000s), letting you settle ~half a day earlier.' },
    { zh: '秘密倉庫 Lv 10 + 1.5× = 每種資源藏 3,000，Day 7 前基本搶不走。', en: 'Cranny Lv 10 + 1.5× = 3,000 hidden per resource; nearly unraidable before Day 7.' },
  ],
};
