import type { LumiSection } from '../lumi-types';

export const concepts: LumiSection = {
  id: 'concepts',
  number: '§2',
  title: { zh: '兩個核心觀念：ROI 與 CP', en: 'Two core concepts: ROI and CP' },
  intro: {
    zh: '在開始規劃帳號之前，先把這兩個概念內化。後面所有的村莊定位、建築順序、Op 計畫都是這兩件事的延伸。',
    en: 'Internalize these two ideas before planning anything else. Every later decision — village roles, build orders, op plans — extends from them.',
  },
  subsections: [
    {
      id: 'roi',
      title: { zh: 'ROI（投資報酬率）', en: 'ROI (Return on Investment)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'ROI = 升級成本 / 每天產量增加。它告訴你「這個升級幾天才能把成本賺回來」。ROI 越短代表越優先。',
          en: 'ROI = upgrade cost / daily production gain. It tells you how many days a given upgrade takes to pay for itself. Shorter ROI = higher priority.',
        }},
        { type: 'paragraph', text: {
          zh: '為什麼這個觀念這麼關鍵？因為 Travian 是長線遊戲，不是「這小時最強」的遊戲。Day 30 多賺 5,000 資源/天，到 Day 90 就多了 300,000 資源 — 足夠多訓練幾百隻單位。早期每一個小決定都會被 60 天放大。',
          en: 'Why does this matter? Travian is a marathon, not a sprint. An extra 5,000 resources/day from Day 30 compounds into 300,000 by Day 90 — enough for several hundred extra troops. Every early decision is magnified by 60 days of compounding.',
        }},
        { type: 'callout', variant: 'tip', title: { zh: '實戰運用', en: 'Practical use' }, text: {
          zh: '打開「資源田 ROI 計算器」，輸入當下的加成建築 / 綠洲 %，看四種田哪個 ROI 最短就先升那個。記得：糧食田有 mill+bakery 雙倍加成（最高 +50%），所以升糧的「實際 ROI」常常比表面看的還短。',
          en: 'Open the Field ROI Calculator, plug in your current bonus-building / oasis %, and upgrade the resource with the shortest ROI. Note: crop fields have mill+bakery double-stacking (max +50%), so crop\'s real ROI is often shorter than it looks at first glance.',
        }},
      ],
    },
    {
      id: 'cp',
      title: { zh: 'CP（文化點）優化', en: 'CP (Culture Point) optimization' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'CP 是 Travian 中唯一不會被偷走的「資源」。它決定你能開幾個村，而村莊數 = 總產量 = 軍力。所以 CP 不是「附帶產生的」— 它是要主動規劃的。',
          en: 'CP is the only "resource" in Travian that can\'t be stolen. It gates how many villages you can have, and village count = total production = military power. So CP isn\'t a side effect — you plan for it.',
        }},
        { type: 'paragraph', text: {
          zh: 'Lumi 強烈建議：每個村至少做到 主府 20 + 市場 20 + 大使 20 + 學院 20 + 市政廳 10 = 529 CP/天 的被動基線。慶典補足另外 50%。',
          en: 'Lumi strongly recommends every village should reach a passive baseline of: Main Building 20 + Marketplace 20 + Embassy 20 + Academy 20 + Town Hall 10 = 529 CP/day. Celebrations cover the other ~50%.',
        }},
        { type: 'list', items: [
          { zh: '更多 CP = 更多村 = 更多資源 = 更多兵 = 解決所有 Travian 問題的答案', en: 'More CP → more villages → more resources → more troops → answer to every Travian question' },
          { zh: '只蓋「便宜的高 CP 建築」沒意義；要看「每等級提供多少 CP」（公式 round(base × 1.2^L)）', en: '"Cheap building, lots of CP" is misleading — what matters is CP per level (formula: round(base × 1.2^L))' },
          { zh: '市政廳 Lv 10 後，連續開大慶典 = 每 60 小時 +2,000 CP，配合被動 CP 才是擴張的真正引擎', en: 'After Town Hall Lv 10, back-to-back great celebrations give +2,000 CP per 60 hours — that, plus passive CP, is the actual expansion engine' },
        ]},
      ],
    },
  ],
};
