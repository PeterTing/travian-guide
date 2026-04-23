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
          zh: '為什麼這個觀念這麼關鍵？因為 Travian 是長線遊戲，不是「這小時最強」的遊戲。舉例來說：若從 Day 30 起每天多產 5,000 資源，到 Day 90 就累積多了 300,000 資源 — 足夠多訓練幾百隻單位（單純舉例，實際數字看你當下的產量）。早期每一個小決定都會被 60 天放大。',
          en: 'Why does this matter? Travian is a marathon, not a sprint. Example: an extra 5,000 resources/day from Day 30 compounds into 300,000 by Day 90 — enough for several hundred extra troops (illustrative math; actual numbers depend on your production). Every early decision is magnified by 60 days of compounding.',
        }},
        // Source: Flour Mill & Bakery each +5%/level up to Lv 5 (max +25% each), stacking additively
        // to +50% max crop production. https://support.kingdoms.com/en/support/solutions/articles/7000087791-bakery
        { type: 'callout', variant: 'tip', title: { zh: '實戰運用', en: 'Practical use' }, text: {
          zh: '打開「資源田 ROI 計算器」，輸入當下的加成建築 / 綠洲 %，看四種田哪個 ROI 最短就先升那個。記得：糧食田有 Mill + Bakery 雙加成（各 +25%，疊加後最高 +50%），所以升糧的「實際 ROI」常常比表面看的還短。',
          en: "Open the Field ROI Calculator, plug in your current bonus-building / oasis %, and upgrade the resource with the shortest ROI. Note: crop fields have dual Mill + Bakery bonuses (up to +25% each, stacking additively to +50% max), so crop's real ROI is often shorter than it looks at first glance.",
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
          zh: 'Lumi 強烈建議：每個村至少做到 主建築 20 + 市場 20 + 大使 20 + 研究院 20 + 城鎮廳 10 = 529 CP/天 的被動基線。慶典補足另外 50%。',
          en: 'Lumi strongly recommends every village should reach a passive baseline of: Main Building 20 + Marketplace 20 + Embassy 20 + Academy 20 + Town Hall 10 = 529 CP/day. Celebrations cover the other ~50%.',
        }},
        // Source: official CP-per-level values published on Travian Legends support
        // (e.g. Embassy Lv 20 = 153 CP, Main Building Lv 20 = 77 CP). These match the
        // community-derived formula round(base × 1.2^L), which is what Lumi references.
        // https://support.travian.com/en/support/solutions/articles/7000091813-passive-culture-points
        { type: 'list', items: [
          { zh: '更多 CP = 更多村 = 更多資源 = 更多兵 = 解決所有 Travian 問題的答案', en: 'More CP → more villages → more resources → more troops → answer to every Travian question' },
          { zh: '只蓋「便宜的高 CP 建築」沒意義；要看「每等級提供多少 CP」（官方公告每建築每等級 CP 值；社群歸納公式為 round(base × 1.2^L)，與官方表對齊）', en: '"Cheap building, lots of CP" is misleading — what matters is CP per level. Official tables publish CP per building per level; community-derived formula round(base × 1.2^L) matches those values.' },
          // Source: Great Celebration yields up to 2,000 CP per completion (requires Town Hall Lv 10).
          // https://support.travian.com/en/support/solutions/articles/7000070669-celebrations-and-town-hall
          // Exact cooldown at each Town Hall level is published in-game tables; it shortens with higher
          // Town Hall level. We avoid stating a specific hour figure since it varies by server speed.
          { zh: '城鎮廳 Lv 10 解鎖大慶典 = 每次完成 +2,000 CP（冷卻時間依 Town Hall 等級與伺服器速度而異），連續開大慶典配合被動 CP 才是擴張的真正引擎', en: 'Town Hall Lv 10 unlocks great celebrations = +2,000 CP per completion (cooldown depends on Town Hall level and server speed). Back-to-back great celebrations plus passive CP are the real expansion engine.' },
        ]},
        { type: 'callout', variant: 'info', title: { zh: '被動 CP 效率表（Lumi 推薦）', en: 'Passive CP efficiency sheet (Lumi-recommended)' }, text: {
          zh: 'Lumi 指的這份表列出每個建築「每等級投入資源 → 提供多少被動 CP」的效率排名。結論呼應上面的建議：主建築、市場、研究院、大使館是被動 CP 的四大 goat（不計 cranny）。原始表格：https://docs.google.com/spreadsheets/d/1JTh_3alICJ1xw1pq-oijRglen85BdqeIPn2D703GJfc/edit',
          en: 'Lumi\'s recommended sheet ranks every building by "resource cost per level → passive CP generated". The verdict matches the baseline above: main building, marketplace, academy, and embassy are the four goats of passive CP (not counting cranny). Original: https://docs.google.com/spreadsheets/d/1JTh_3alICJ1xw1pq-oijRglen85BdqeIPn2D703GJfc/edit',
        }},
      ],
    },
  ],
};
