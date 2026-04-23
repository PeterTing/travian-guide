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
        { type: 'paragraph', text: {
          zh: '想看實際數字？Lumi §5.3 的兩張官方表已搬到站內 /mechanics#roi-tables：Table 2（田級 1→10 每級回本天數 × 四種資源）+ Table 3（4 種首都配置 × 3 種綠洲 × HM10/15/20 ROI）。',
          en: "Want the actual numbers? Lumi §5.3's two official tables are reproduced at /mechanics#roi-tables: Table 2 (days-to-break-even per field level 1→10 × 4 resources) and Table 3 (4 crop layouts × 3 oasis types × HM10/15/20 ROI).",
        }},
      ],
    },
    {
      id: 'build-order',
      title: { zh: '一般村建築順序（非首都）', en: 'Non-capital build order (Lumi)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'Lumi 公式化的非首都資源田升級順序，背後就是 ROI 排序。記住一個關鍵：加成建築（Sawmill / Brickyard / Iron Foundry）需要該類型田 Lv 10，所以順序很重要。',
          en: "Lumi's formulaic non-capital field-upgrade sequence — under the hood it's pure ROI ordering. Key constraint: bonus buildings (Sawmill / Brickyard / Iron Foundry) need their resource field at Lv 10, so order matters.",
        }},
        { type: 'callout', variant: 'info', title: { zh: '木 / 土 / 鐵的標準順序', en: 'Wood / Clay / Iron standard sequence' }, text: {
          zh: '全部到 Lv 7 → 一個到 Lv 10 → 加成建築 Lv 3 → 1 個到 Lv 9 → 加成建築 Lv 4 → 全部到 Lv 10 → 加成建築 Lv 5。等於是「把投資攤開到對的時間點」。',
          en: 'All to Lv 7 → one to Lv 10 → bonus building Lv 3 → another to Lv 9 → bonus building Lv 4 → all to Lv 10 → bonus building Lv 5. Each step interleaves field upgrades with bonus-building upgrades exactly when its prerequisites are met.',
        }},
        { type: 'callout', variant: 'info', title: { zh: '糧食的標準順序（更複雜）', en: 'Crop sequence (more nuanced)' }, text: {
          zh: '4 個糧 to Lv 6 → Mill Lv 1 → 全部 to Lv 7 → Mill Lv 2 → 全部 to Lv 8 → Mill Lv 3 → 全部 to Lv 9 + 1 個 to Lv 10 → Mill Lv 5 → Bakery Lv 2 → 再 2 個 to Lv 10 → Bakery Lv 3 → 全部 to Lv 10 → Bakery Lv 5。糧的雙加成建築（Mill + Bakery）讓最終加成可達 +50%，所以糧 ROI 比看起來短。',
          en: 'First 4 crops to Lv 6 → Mill Lv 1 → all to Lv 7 → Mill Lv 2 → all to Lv 8 → Mill Lv 3 → all to Lv 9 + 1 to Lv 10 → Mill Lv 5 → Bakery Lv 2 → 2 more to Lv 10 → Bakery Lv 3 → all to Lv 10 → Bakery Lv 5. Crop\'s dual bonus-buildings (Mill + Bakery) stack to +50%, making real crop ROI shorter than the headline.',
        }},
        { type: 'paragraph', text: {
          zh: '首都是另一回事 — 由於可以升到 Lv 11–20 + slot 限制，順序更複雜。Lumi 推薦用 Tardis 的 Cropcalc T44 工具計算最佳化首都順序，或用本站的「首都建築順序」計算器（greedy ROI 法）。',
          en: 'Capitals are different — Lv 11–20 unlocked plus slot constraints make ordering more complex. Lumi recommends Tardis\' Cropcalc T44 tool for the optimal capital sequence, or use this site\'s "Capital Build Order" calculator (greedy ROI approach).',
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
        { type: 'callout', variant: 'info', title: { zh: '被動 CP 效率表（Lumi 推薦）', en: 'Passive CP efficiency sheet (Lumi-recommended)' }, text: {
          zh: 'Lumi 指的這份表列出每個建築「每等級投入資源 → 提供多少被動 CP」的效率排名。結論呼應上面的建議：主府、市場、學院、大使館是被動 CP 的四大 goat（不計 cranny）。原始表格：https://docs.google.com/spreadsheets/d/1JTh_3alICJ1xw1pq-oijRglen85BdqeIPn2D703GJfc/edit',
          en: 'Lumi\'s recommended sheet ranks every building by "resource cost per level → passive CP generated". The verdict matches the baseline above: main building, marketplace, academy, and embassy are the four goats of passive CP (not counting cranny). Original: https://docs.google.com/spreadsheets/d/1JTh_3alICJ1xw1pq-oijRglen85BdqeIPn2D703GJfc/edit',
        }},
      ],
    },
  ],
};
