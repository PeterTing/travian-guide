import type { LumiSection } from '../lumi-types';

export const villages: LumiSection = {
  id: 'villages',
  number: '§3',
  title: { zh: '五種村莊定位', en: 'Five village roles' },
  intro: {
    zh: '一個成熟的帳號不是「一堆隨便蓋的村」。每個村都有特定功能：首都、錘子、鐵砧、Feeder、NPC。混功能 = 沒功能。',
    en: 'A mature account is not "a bunch of villages built however". Each village has a designated role: Capital, Hammer, Anvil, Feeder, NPC. Mixing roles = no role.',
  },
  subsections: [
    {
      id: 'capital',
      title: { zh: '首都 (Capital)', en: 'Capital' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '首都是唯一可以把資源田升到 Lv 11–20 的村，也就是你一輩子的主要產糧 / 產資來源。一個帳號只能有一個首都。',
          en: 'The capital is the only village where fields can exceed Lv 10 (up to Lv 20). It will be your account\'s main production engine for the entire server. One account, one capital.',
        }},
        { type: 'list', items: [
          { zh: '層級目標：Day 90 artifact 之前要達 Lv 17–18（greedy 玩家可衝 Lv 19）', en: 'Target: reach Lv 17–18 before Day 90 artifacts (Lv 19 if greedy)' },
          { zh: '佈局選擇：15c (1-1-1-15) 是糧食巨獸首選；9c (3-3-3-9) 較自給自足', en: 'Layout: 15c (1-1-1-15) for the crop monster; 9c (3-3-3-9) for self-sustaining capital' },
          { zh: '建築槽位是稀缺資源 — Lv 18 田需要 9 個倉儲槽（7 倉庫 + 2 穀倉），Lv 19 需要 15 個', en: 'Building slots are precious — Lv 18 fields need 9 storage slots (7 warehouses + 2 granaries); Lv 19 needs 15' },
        ]},
        { type: 'callout', variant: 'warn', title: { zh: '槽位陷阱：crop 17/18/19 倉儲需求', en: 'Slot trap: crop 17/18/19 storage requirements' }, text: {
          zh: '村莊只有 20 個建築槽。要把糧田升到高等級，必須先有對應的倉儲：crop 17 需 5 倉庫 + 1 穀倉（6 槽）；crop 18 需 7 倉庫 + 2 穀倉（9 槽）；crop 19 需 12 倉庫 + 3 穀倉（15 槽）。沒提早規劃就會卡在 Lv 16 上不去。',
          en: 'A village has only 20 building slots. Higher crop levels need matching storage: crop Lv 17 needs 5 warehouses + 1 granary (6 slots); crop 18 needs 7 wh + 2 gr (9 slots); crop 19 needs 12 wh + 3 gr (15 slots). Without early planning you\'ll stall at Lv 16.',
        }},
        { type: 'paragraph', text: {
          zh: '首都必備建築（佔 6 槽）：村莊大樓 + Mill + Bakery + Market + Trade Office + (Stone Mason)。剩下的槽位主要給倉庫、穀倉、CP 建築。其他建築之後可以拆掉換成倉儲。',
          en: 'Mandatory capital buildings (6 slots): Main Building + Mill + Bakery + Market + Trade Office + (Stone Mason). Remaining slots go mostly to warehouses, granaries, and CP buildings. Anything else can be demolished later to make room for storage.',
        }},
        { type: 'callout', variant: 'warn', title: { zh: '不要在首都養兵', en: "Don't train troops in the capital" }, text: {
          zh: '兵營 / 馬廄會吃掉 cap 必需的 storage 槽。如果你沒提早規劃，就會卡在 Lv 16 田升不上去。錘子村放在第 3、5 村（從 cap 開出去的村）。',
          en: 'Barracks / Stables eat the storage slots the cap desperately needs. Without early planning you\'ll be stuck at Lv 16 fields. Put hammer in village 3 or 5 (settled from the cap).',
        }},
      ],
    },
    {
      id: 'hammer',
      title: { zh: '錘子 (Hammer / OFF Village)', en: 'Hammer (OFF village)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '錘子是你的進攻主力 — 訓練 OFF 兵 + 攻城 + 3 chiefs。需要的建築：兵營、馬廄、工場、醫院、TS、城鎮廳、市場 + 商路、皇宮（為了 3 chiefs）、5–6 個倉儲。',
          en: 'Your offensive main force — produces OFF troops + siege + 3 chiefs. Buildings: barracks, stable, workshop, hospital, TS, town hall, market + trade office, palace (for the 3-chief slot), 5–6 storage.',
        }},
        { type: 'list', items: [
          { zh: '位置必須緊鄰 cap 與 NPC 村（10 格內最好），方便資源來回', en: 'Must sit close to capital and NPC village (within ~10 tiles) for resource shuttling' },
          // Source: Great Barracks / Great Stable each train the same units as their standard
          // counterpart but at 3× resource cost per unit. Running both in parallel doubles total
          // training throughput per village. https://support.kingdoms.com/en/support/solutions/articles/7000087781-great-barracks
          { zh: '進階版錘子會加蓋大兵營 / 大馬廄（Great Barracks / Great Stable）— 兵種與一般版相同，但訓練成本 ×3；配合一般兵營 / 馬廄同時訓練可讓單村總產兵速度 ×2', en: 'Advanced hammers add Great Barracks / Great Stable — same unit roster as standard, but 3× resource cost per unit. Running both in parallel with the standard building doubles total per-village troop throughput.' },
          { zh: 'Day 45 第一波 OP 目標：500 rams + 500 catas + 3 chiefs', en: 'Day 45 first OP target: 500 rams + 500 catas + 3 chiefs' },
          { zh: 'Day 70+：2,000 rams + 1,000 catas + 3 chiefs（足以拆 4 棟 Lv 20 + 多餘做假）', en: 'Day 70+: 2,000 rams + 1,000 catas + 3 chiefs (enough to demolish 4× Lv 20 + extras for fakes)' },
        ]},
      ],
    },
    {
      id: 'anvil',
      title: { zh: '鐵砧 (Anvil / DEF Village)', en: 'Anvil (DEF village)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '鐵砧訓練防守兵，並儲存隨時待命的防禦力。每個鐵砧大約需要 1 個 feeder 養步兵 + 1.5–2 個 feeder 養騎兵。',
          en: 'Anvils train defensive troops and stockpile def for call-outs. Each anvil typically needs ~1 feeder for inf + 1.5–2 for cav.',
        }},
        { type: 'list', items: [
          { zh: '所有 def 都先存在鐵砧本身，方便傳送（不用每次調 trade route）', en: 'Keep def stored in the anvil itself, not the cap, so you don\'t reshuffle trade routes for every call-out' },
          { zh: '需要建築：兵營、馬廄、醫院、TS、城鎮廳、市場 + 商路、3-5 倉儲', en: 'Buildings: barracks, stable, hospital, TS, town hall, market + trade office, 3-5 storage' },
          { zh: '若有空，可以加 1k catas + 3 chiefs 跟 OP — 但別早期就分心', en: 'Once stable, can also add 1k catas + 3 chiefs to join OPs — but don\'t spread thin too early' },
        ]},
      ],
    },
    {
      id: 'feeder',
      title: { zh: 'Feeder（供糧 / 供資村）', en: 'Feeder (supply village)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'Feeder 是帳號的支柱：產 8–15k 資源/小時送回主 cluster。Feeder 不會被打（敵人通常不會浪費資源在 feeder 上）。蓋好 feeder 你只需要每天點開派對 + 商路自動跑。',
          en: 'Feeders are the backbone of your account: 8–15k resources/hr shipped back to your main cluster. Enemies usually don\'t waste resources hitting feeders. Once finished, all you do is click parties daily — trade routes do the rest.',
        }},
        { type: 'paragraph', text: {
          zh: 'Feeder 標準的 13 個基本建築（佔大部分槽位）：村莊大樓、市場、研究院、大使館、城鎮廳、Mill、Bakery、Sawmill、Brickyard、Iron Foundry、Trade Office、倉庫、穀倉。這 13 個是 CP + 產量雙重最佳化。',
          en: 'A standard feeder uses these 13 core buildings (filling most slots): Main Building, Marketplace, Academy, Embassy, Town Hall, Mill, Bakery, Sawmill, Brickyard, Iron Foundry, Trade Office, Warehouse, Granary. These 13 maximize both CP and production efficiency.',
        }},
        { type: 'list', items: [
          { zh: '不要把馬廄 / 兵營 / 醫院升到 Lv 20 — feeder 不訓兵，是浪費槽位', en: "Don't level barracks / stable / hospital to Lv 20 — feeders don't train troops, it's wasted slots" },
          { zh: '若要拼被動 CP，Hospital Lv 20 反而比 Barracks Lv 20 划算（CP base 1）', en: 'If chasing passive CP, Hospital Lv 20 beats Barracks Lv 20 (same base 1 but Hospital not used)' },
          { zh: '佔到綠洲後拆英雄宅（HM 留著會在那裡 spawn 冒險，浪費英雄走路時間）', en: 'After capturing oasis, demolish Hero\'s Mansion (else adventures spawn there and waste hero travel time)' },
          { zh: '剩餘槽位：多蓋倉庫，可以暫時關掉商路存資源辦 push / 大慶典 / 醫療單', en: 'Remaining slots: more warehouses — lets you toggle off trade routes to stockpile for pushes / great celebrations / hospital bills' },
        ]},
        { type: 'callout', variant: 'tip', title: { zh: '商路距離經驗值', en: 'Trade-route rule of thumb' }, text: {
          zh: '60 格內：1–2 個商人就能維持。實際公式：往返時間 × 每小時送量 ÷ 商人容量。用「商路 / 糧商」計算器算精確值。',
          en: 'Within 60 fields: 1–2 merchants are enough. Exact formula: round-trip × hourly surplus ÷ merchant capacity. Use the Trade Route calculator for the precise number.',
        }},
      ],
    },
    {
      id: 'npc',
      title: { zh: 'NPC 村', en: 'NPC village' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'NPC 村幾乎只蓋倉庫 + 穀倉，用來儲存資源 + NPC 商人換糧 / 換資。前期 NPC 糧→資（推 push），後期 feeder 資源 → 糧（養大軍）。',
          en: 'NPC villages are nearly all warehouses + granaries, used to store resources and NPC-trade them. Early game: NPC crop→resources (for pushes); late game: feeder resources → crop (to feed the army).',
        }},
        { type: 'paragraph', text: {
          zh: '位置必須緊鄰 cap 跟錘子村。建築：村莊大樓、市場、商路、城鎮廳，剩下全是倉庫 + 穀倉（1 倉庫 : 3 穀倉的比例）。',
          en: 'Must sit adjacent to cap and hammer. Buildings: MB, market, TO, TH, then everything else is warehouse + granary (~1:3 ratio).',
        }},
      ],
    },
  ],
};
