import type { LumiSection } from '../lumi-types';

export const mapZones: LumiSection = {
  id: 'map-zones',
  number: '§3.5',
  title: { zh: '首都該開在地圖的哪個區？', en: 'Where to settle your cap?' },
  intro: {
    zh: '決定首都位置前，先依帳號風格（off / def / simmer / farmer）選擇區域。3 個區各有優劣，沒有萬用答案。',
    en: 'Pick your region based on account style (off / def / simmer / farmer) before deciding cap coords. Each of the 3 zones has trade-offs; no universal right answer.',
  },
  subsections: [
    {
      id: 'grey-zone',
      title: { zh: '灰區（Greyzone）', en: 'Greyzone & close to it' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '灰區沒有被動 CP（玩家還沒擴張到這裡），標準 cluster 部署較難執行。這區戰鬥多但控制住能保障象限安全與獨特 artifact spawn。適合早期英雄打綠洲（人在地圖中心、綠洲多人少）、整體掠奪收益也高。Def 帳號不建議開在灰區中間（仍可行但難度高）。',
          en: "Grey zone has no passive CP (players haven't spread here yet) and standard cluster setups are trickier. Lots of fights happen here but controlling it secures quadrant safety + unique artifact spawns. Good for early hero oasis raiding (you're center-map, many oases + fewer hunters) and overall farming income. Def accounts should NOT settle in mid-grey (possible but hard).",
        }},
        { type: 'list', items: [
          { zh: '優點：綠洲多人少、artifact spawn 近、象限控制戰略點', en: 'Pros: oasis-rich + few competitors, artifact spawns nearby, quadrant control' },
          { zh: '缺點：被動 CP 為零、戰鬥頻率高、cluster 佈局難', en: 'Cons: zero passive CP, high fight frequency, hard to set up cluster' },
          { zh: '適合：off 帳號、高活躍 farmer', en: 'Fits: off accounts, highly active farmers' },
          { zh: '不適合：def 帳號中央區（邊緣可行）', en: "Don't: def accounts in mid-grey (edge is OK)" },
        ]},
      ],
    },
    {
      id: 'populated-circle',
      title: { zh: '熱區（Populated Circle）', en: 'In the populated circle of the map' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '早期英雄綠洲幾乎不可能（太多玩家搶）。但聯盟要保住 WW、確保象限安全，這區是必爭之地。Def 和 off 都能快速到達重要區域。掠奪（farming）在這區產出高、chief 目標多。對 farmer 玩家來說，這區的資源收益可能比 boonies 裡的好首都還多。',
          en: 'Early hero oasis farming is basically impossible here (too many players). But alliance WW + quadrant safety need these zones held. Def + off both reach key areas fast, farming is juicy, chief targets plentiful. For farmers, populated-circle income can EXCEED a better capital in the boonies.',
        }},
        { type: 'list', items: [
          { zh: '優點：chief 目標多、farming 收益高、def/off 出兵快', en: 'Pros: many chief targets, high farming income, def/off both deploy fast' },
          { zh: '缺點：綠洲搶不到、早期英雄 farming 難', en: 'Cons: oases taken by others, early hero-farming hard' },
          { zh: '適合：farmer、混合帳號、def 主力', en: 'Fits: farmers, hybrid accounts, core def' },
        ]},
      ],
    },
    {
      id: 'boonies',
      title: { zh: '偏遠區（Boonies）', en: 'Boonies (a lot of green)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '偏遠區是 simmer 的首選（前期專心經濟、晚練兵的人）。鄰居少、可以晚出兵。Def 玩家難趕到早期 def call，尤其 Roman def 在這裡會有大半伺服器時間沒用武之地。需要快速單位 + 高 Tournament Square 才玩得起來。前期英雄打綠洲可行、後期帶兵也行；但 AFK 玩家的 micro-farm 因距離太遠很難做。Feeder 可以散得比較遠拿更好的綠洲。',
          en: 'Boonies are ideal for simmers (economy-first, troops later). Few neighbors, can delay troop production. Def players struggle to reach early def calls — a Roman def stuck in boonies is often useless most of the server. Requires fast units + high Tournament Square. Hero oasis farming works early; troop farming works later; but micro-farming AFK players is painful (long walk times). Feeder villages can spread safely for better oasis access.',
        }},
        { type: 'list', items: [
          { zh: '優點：鄰居少、feeder 可散布、simmer 壓力小', en: 'Pros: few neighbors, feeders can spread, low pressure for simmers' },
          { zh: '缺點：趕不到 def call（尤其 Roman def）、micro-farm 太遠', en: 'Cons: far from def calls (Roman def hit hard), micro-farm too distant' },
          { zh: '適合：simmer、晚期出兵派、進攻型斯巴達（配合快速單位）', en: 'Fits: simmers, late-troop builders, fast-unit offensive Spartans' },
          { zh: '不適合：Roman def、需早期兵力的帳號', en: "Don't: Roman def, accounts needing early troops" },
        ]},
        { type: 'callout', variant: 'tip', title: { zh: '沒有唯一答案', en: 'No single right answer' }, text: {
          zh: '3 個區都能出好帳號，重點是把「選的區」和「帳號風格」對齊。Off / farmer 進熱區；simmer / 大機會的人進 boonies；想控象限的 ally 核心留灰區。',
          en: "All 3 zones produce strong accounts — the key is matching region choice to account style. Off / farmer → populated circle; simmer / long-game player → boonies; alliance core seeking quadrant control → grey.",
        }},
      ],
    },
  ],
};
