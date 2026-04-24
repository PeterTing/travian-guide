import type { LumiSection } from '../lumi-types';

export const midgame: LumiSection = {
  id: 'midgame',
  number: '§4.5',
  title: { zh: '中期（Midgame）Day 45–90', en: 'Midgame: Day 45–90' },
  intro: {
    zh: '第一波 OP 結束後到 artifact 開放前的階段。戰鬥密度變高、資源消耗變大，同時要開始為 artifact 階段預留儲存與兵力空間。規劃重點從「單兵精悍」轉為「多村並行 + 儲存佈局」。',
    en: 'The stretch between the first OP wave and artifact release. Fighting intensity climbs, resource consumption spikes, and you have to start pre-staging storage + troop capacity for artifacts. The mental model shifts from "one hammer" to "multiple villages running at once + storage layout".',
  },
  subsections: [
    {
      id: 'income-focus',
      title: { zh: '收入主軸仍然是首都', en: 'Your cap is still your main source of income' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '中期不代表首都退場。恰好相反 — 這時候首都該往 Lv 17–18 推進，維持整個帳號的資源供應。其他村在戰鬥 / 外交 / OP 之間輪替時，首都是那個「無論你在不在，每小時都在賺」的地方。',
          en: 'Midgame is NOT when the cap steps back — it\'s exactly when the cap should be pushing to Lv 17–18 to sustain the whole account. While other villages rotate through fighting / diplomacy / op-prep, the cap is the one place that "earns every hour whether you\'re logged in or not".',
        }},
      ],
    },
    {
      id: 'multi-village-troops',
      title: { zh: '多村同時訓兵 — 戰鬥會很多', en: 'Run troops in multiple villages — there will be a lot of fighting' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '中期你應該已經有「多個訓兵村」同時在跑 — 錘子、鐵砧、甚至部分 feeder 轉半兵。OP 波次變密、鄰居會反擊、聯盟會要求 def 回防。單兵村撐不住這節奏。',
          en: 'By midgame you should have MULTIPLE troop-producing villages running in parallel — hammer, anvil, even some feeders half-pivoting. OP cadence increases, neighbors retaliate, the alliance calls for def. A single-troop-village account cannot keep up.',
        }},
        { type: 'callout', variant: 'warn', title: { zh: 'Sim vs 訓兵的平衡點很難抓', en: 'Balancing simming vs troop production is tricky' }, text: {
          zh: 'Lumi：「兵很重要，但別停掉派對。」訓兵的糧 / 資源不能從派對扣 — 否則 CP 掉、開村進度停滯；但兵沒訓到該有的量，下一波 OP 就會被隊友拖。兩邊都要顧，這是中期最燒腦的調度題。',
          en: 'Lumi\'s rule: "troops are super important, but don\'t stop parties." Crop / resources for training can\'t come out of party budget — CP falls, expansion stalls — but if troops are under target, you\'ll be the one dragging the next OP. Both must run. This is the hardest scheduling problem of midgame.',
        }},
      ],
    },
    {
      id: 'storage-for-artifacts',
      title: { zh: '接近 Artifact — 儲存容量變成頭號問題', en: 'Approaching artifacts — storage becomes the #1 problem' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '距離 Day 90 artifact 越近，倉儲的重要性越高。理由不只是「把資源存起來」— 你會需要儲存空間來：接收聯盟 push、付醫療單（hospital bills）、artifact 拿到後蓋 great storage 建築（great warehouse / great granary）、讓 trainer artifact 不浪費產能。',
          en: 'The closer you get to Day 90 artifacts, the more storage dominates planning. Not just "stash resources" — you need capacity to: receive alliance pushes, pay hospital bills, construct great storage buildings once you hold artifacts, and keep trainer artifacts from wasting their speed on empty queues.',
        }},
        { type: 'list', items: [
          { zh: 'Feeder 的空閒建築槽位 → 全部填成倉庫 / 穀倉，不要蓋其他花俏建築', en: 'Vacant slots in feeders → fill them with warehouses / granaries, NOT fancy buildings' },
          { zh: '帳號儲存量目標：足以吃下 1 個聯盟 push + 1 次大型醫療單 + 接住 trainer artifact 的 24hr 產能', en: 'Target storage: enough to absorb 1 alliance push + 1 large hospital bill + 24hr of trainer-artifact output' },
          { zh: 'Lumi 明確說：「這階段絕對該蓋 NPC 村了」— 純倉庫 + 穀倉村，配 NPC 商人把資源自由換成糧食餵錘子 / 鐵砧', en: 'Lumi is explicit: "you should definitely build an NPC village at this point" — pure warehouse + granary village, NPC merchant to swap surplus into crop and feed hammers / anvils' },
        ]},
        { type: 'callout', variant: 'tip', title: { zh: '為什麼現在蓋 NPC 村？', en: 'Why NPC village NOW?' }, text: {
          zh: 'NPC 村不是「多蓋一個村」而已 — 它是你整個後期資源循環的關鍵節點。Feeder 的多餘木 / 土 / 鐵用 trade route 送進 NPC 村 → NPC 換成糧 → 送錘子 / 鐵砧。沒 NPC 村你就得手動 NPC 換資，後期完全扛不住。',
          en: 'An NPC village isn\'t just "one more village" — it\'s the critical node of your endgame resource cycle. Excess wood / clay / iron from feeders ships (via trade routes) to the NPC village → NPC-converts to crop → ships to hammers / anvils. Without this, you NPC manually forever and the late game crushes you.',
        }},
      ],
    },
  ],
};
