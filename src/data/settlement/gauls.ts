import type { SettlementTimeline } from '../settlement-types';

export const gauls: SettlementTimeline = {
  tribe: 'gauls',
  approach: {
    zh: '高盧的殺招是「最便宜的拓荒者」（三個才 12,800 總資源，羅馬要 57,000）。前期全力衝村莊大樓 / 研究院 / 行宮，山洞搭配 1.5× 加成讓你早期幾乎被搶不到東西。',
    en: 'Gauls\' trump card is the cheapest settlers in the game (3× for ~12,800 total vs Romans\' ~57,000). Focus MB / Academy / Residence hard. Their 1.5× cranny makes them nearly unraidable early.',
  },
  keyTips: [
    { zh: '陷阱（Trapper）前期真的有用：抓到條頓偵察或早期掠奪兵，敵人就知道你很難啃。', en: 'Trapper is genuinely useful early: catching Teuton scouts/raiders signals you\'re not worth farming.' },
    { zh: '拓荒者最便宜 = 訓練時間最短（22,700 秒 vs 羅馬 26,900 vs 條頓 31,000），可以比羅馬早半天開二村。', en: 'Cheapest settlers also train fastest (22,700s vs Roman 26,900s vs Teuton 31,000s), letting you settle ~half a day earlier.' },
    { zh: '山洞 Lv 10 + 1.5× = 每種資源藏 3,000，Day 7 前基本搶不走。', en: 'Cranny Lv 10 + 1.5× = 3,000 hidden per resource; nearly unraidable before Day 7.' },
  ],
};
