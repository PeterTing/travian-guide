import type { LumiSection } from '../lumi-types';

export const farming: LumiSection = {
  id: 'farming',
  number: '§5',
  title: { zh: 'Farming（掠奪）策略', en: 'Farming strategies' },
  intro: {
    zh: 'Farming 沒有完美藍圖。原則：做別人沒做的事就會贏。Inf 兵跑近距離、cav 兵跑遠距離；經常更新名單；每天早點動才能搶到新 farm。',
    en: 'No perfect blueprint exists for farming. Principle: do what others aren\'t doing. Inf for close, cav for far. Update lists frequently. Wake up early to claim new farms.',
  },
  subsections: [
    {
      id: 'micro',
      title: { zh: 'Micro Raid（小批量掠奪 inactives）', en: 'Micro raid (farming inactives)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '用 inactive search 或 travco 找停止活動的玩家。travco 月費 3 €，可以 upload farm list 並 exclude 已有的目標 — 省超多時間。',
          en: 'Use in-game inactive search or travco (€3/mo). Travco lets you upload your farm list and exclude existing entries — massive time saver.',
        }},
        { type: 'list', items: [
          { zh: '偵察 inactive：1 個 scout 看資源、1 個 scout 看 def', en: 'Scout inactives: one for resources, one for defense' },
          { zh: '加入「需要先清」list 之前先清牆 / 行宮 / 皇宮', en: 'Before adding to your active list, clear wall / residence / palace first' },
          { zh: '人口分配：150–400 = 1 馬 / 400–550 = 2 馬 / 550+ = 3–7 馬（依 pop 與目標 def 調整）', en: 'By pop: 150–400 = 1 horse / 400–550 = 2 horses / 550+ = 3–7 horses (adjust to pop and target def)' },
          { zh: '常更新 — 新發現的 farm 是最高效的（被搶之前獨吞）', en: 'Update often — newly-found farms are most efficient (you grab everything before competitors)' },
        ]},
      ],
    },
    {
      id: 'oasis',
      title: { zh: 'Oasis Raid（清綠洲動物）', en: 'Oasis raid (clearing oasis animals)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '黏土 / 鐵綠洲對騎兵弱；糧綠洲動物超強。Oasis raid 必須非常活躍才有效益。可開分村專門打 oasis（散佈在地圖上）。',
          en: 'Clay / iron oases are soft against cavalry; crop oases are brutal. Oasis raiding only pays off with high activity. Some players settle dedicated oasis-farming villages spread across the map.',
        }},
        { type: 'list', items: [
          { zh: 'Rainbow farm（永久占用）：羅 1 EC + 1-2 EI / 高盧 1 Hedu + 1-2 TT / 匈 1 Marauder + 1 Marksman + 1-2 Steppe，每 8 分鐘送一次', en: 'Rainbow farm (permanent occupation): 1 EC + 1–2 EI (Roman), 1 Hedu + 1–2 TT (Gaul), 1 Marauder + 1 Marksman + 1–2 Steppe (Hun); send every 8 min' },
          { zh: '20 馬或混合：每 15–20 分鐘一次，戰損較大但仍獲利', en: '20 horses or mixed: every 15–20 min, losses higher but still profitable' },
          { zh: '100 馬 / 200 棍棒兵：每 5 小時一次，戰損會多但仍有利潤', en: '100 horses / 200 clubs: every 5 hours, losses higher but still profit' },
          { zh: '若 oasis 已被別人 permanent farm，再去打就不會有利潤', en: 'If someone already permanent-farms an oasis, you\'ll get zero profit by hitting it' },
        ]},
      ],
    },
    {
      id: 'natar',
      title: { zh: 'Natar Raid（打 natar 村）', en: 'Natar raid (farming Natars)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'Natar 會重建被打的村莊，且周圍玩家會「spike」(放幾隻防守隱身在裡面，等你來撞)。煩人但某些伺服器收益高。',
          en: 'Natars rebuild raided villages, and other players will "spike" them (hide a few defenders inside). Annoying, but on some servers it pays well.',
        }},
        { type: 'callout', variant: 'warn', title: { zh: '提防 spike', en: 'Beware spikes' }, text: {
          zh: '玩家會 chief 250 pop 的 natar 村放 def — 你的 farm 變陷阱。經常用 scouts 確認 natar 村安全再送。',
          en: 'Players sometimes chief a 250-pop Natar village and stash def inside — your farm becomes a trap. Scout regularly before sending.',
        }},
      ],
    },
  ],
};
