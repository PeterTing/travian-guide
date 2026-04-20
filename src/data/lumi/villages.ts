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
          { zh: '建築槽位是稀缺資源 — Lv 18 田需要 9 個倉儲槽（7 倉庫 + 2 糧倉），Lv 19 需要 15 個', en: 'Building slots are precious — Lv 18 fields need 9 storage slots (7 warehouses + 2 granaries); Lv 19 needs 15' },
        ]},
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
          zh: '錘子是你的進攻主力 — 訓練 OFF 兵 + 攻城 + 3 chiefs。需要的建築：兵營、馬廄、工坊、醫院、TS、市政廳、市場 + 商路、宮殿（為了 3 chiefs）、5–6 個倉儲。',
          en: 'Your offensive main force — produces OFF troops + siege + 3 chiefs. Buildings: barracks, stable, workshop, hospital, TS, town hall, market + trade office, palace (for the 3-chief slot), 5–6 storage.',
        }},
        { type: 'list', items: [
          { zh: '位置必須緊鄰 cap 與 NPC 村（10 格內最好），方便資源來回', en: 'Must sit close to capital and NPC village (within ~10 tiles) for resource shuttling' },
          { zh: '進階版錘子會加蓋大兵營 / 大馬廄（Great Barracks / Great Stable）翻倍訓練速度（資源 ×3）', en: 'Advanced hammers add Great Barracks / Great Stable (3× resources for double training speed)' },
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
          { zh: '需要建築：兵營、馬廄、醫院、TS、市政廳、市場 + 商路、3-5 倉儲', en: 'Buildings: barracks, stable, hospital, TS, town hall, market + trade office, 3-5 storage' },
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
        { type: 'list', items: [
          { zh: '只蓋會給 CP + 產量的建築：主府、市場 + 商路、大使、學院、市政廳、mill / bakery / sawmill / brickyard / iron foundry、倉庫', en: 'Build only CP + production buildings: MB, market + TO, embassy, academy, TH, mill / bakery / sawmill / brickyard / iron foundry, warehouses' },
          { zh: '不要把馬廄 / 兵營 / 醫院升到 Lv 20 — 沒用', en: "Don't level barracks / stable / hospital to Lv 20 — useless here" },
          { zh: '佔到綠洲後拆英雄莊園（HM 留著會在那裡 spawn 冒險，浪費英雄走路時間）', en: 'After capturing oasis, demolish Hero\'s Mansion (else adventures spawn there and waste hero travel time)' },
        ]},
      ],
    },
    {
      id: 'npc',
      title: { zh: 'NPC 村', en: 'NPC village' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'NPC 村幾乎只蓋倉庫 + 糧倉，用來儲存資源 + NPC 商人換糧 / 換資。前期 NPC 糧→資（推 push），後期 feeder 資源 → 糧（養大軍）。',
          en: 'NPC villages are nearly all warehouses + granaries, used to store resources and NPC-trade them. Early game: NPC crop→resources (for pushes); late game: feeder resources → crop (to feed the army).',
        }},
        { type: 'paragraph', text: {
          zh: '位置必須緊鄰 cap 跟錘子村。建築：主府、市場、商路、市政廳，剩下全是倉庫 + 糧倉（1 倉庫 : 3 糧倉的比例）。',
          en: 'Must sit adjacent to cap and hammer. Buildings: MB, market, TO, TH, then everything else is warehouse + granary (~1:3 ratio).',
        }},
      ],
    },
  ],
};
