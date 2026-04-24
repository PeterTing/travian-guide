import type { LumiSection } from '../lumi-types';

export const operations: LumiSection = {
  id: 'operations',
  number: '§4',
  title: { zh: 'Off 帳號 + 攻擊配額', en: 'Offensive accounts + op quotas' },
  intro: {
    zh: 'Off 帳號需要被「機動性 + 配合度」評估，不是「兵多最好」。每個錘子都得能獨立完成自己的破牆 + 拆建築 + 留人手做假，否則整波 OP 失敗。',
    en: 'OFF accounts are judged on mobility + coordination, not raw troop count. Every hammer must be able to ram + cata + fake on its own, in case any ally drops out. Otherwise the whole op fails.',
  },
  subsections: [
    {
      id: 'requirements',
      title: { zh: 'Off 帳號最低要求（不可妥協）', en: 'OFF account requirements (non-negotiable)' },
      blocks: [
        { type: 'list', items: [
          { zh: '高活躍度（時段越廣，可執行的 OP 模式越多）', en: 'High activity window (wider = more op patterns possible)' },
          { zh: '訓 OFF 兵時必須戴英雄頭盔 +25% 訓練速度', en: 'Always wear the +25% training-speed hero helmet while producing OFF troops' },
          { zh: '24/7 帳號覆蓋（sitter 隨時看守錘子）', en: '24/7 account coverage (sitter watches the hammer)' },
          { zh: '願意為聯盟犧牲部隊', en: 'Willing to lose troops for the alliance' },
          { zh: '3 chiefs + 適當的攻城配比（依伺服器進程調整）', en: '3 chiefs + appropriate siege count (tuned to server progress)' },
        ]},
      ],
    },
    {
      id: 'siege-numbers',
      title: { zh: '攻城配比目標', en: 'Siege numbers target' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '關鍵原則：每個錘子必須能獨立完成自己的 ramming（萬一隊友爆炸了還能補位）。',
          en: 'Key principle: every hammer must be able to do its own ramming (in case a teammate screws up).',
        }},
        { type: 'list', items: [
          { zh: 'Day 45（第一波 OP）：500 rams + 500 catas + 3 chiefs', en: 'Day 45 (first OP): 500 rams + 500 catas + 3 chiefs' },
          { zh: 'Day 70：2,000 rams + 1,000 catas + 3 chiefs（足以拆 4 棟 Lv 20 建築 + 帶餘量做假）', en: 'Day 70: 2,000 rams + 1,000 catas + 3 chiefs (enough to demolish 4× Lv 20 + leftovers for fakes)' },
          { zh: 'Day 90 後（artifact 階段）：上不封頂；對方有 architect arti 時建築掉得更慢，需要更多 catas', en: 'Post-Day-90 (artifact phase): the answer is always more troops; architect arti slows down building demolition' },
        ]},
        { type: 'callout', variant: 'warn', title: { zh: '別忘了「被牆住」', en: 'Account for getting walled' }, text: {
          zh: '若 OP 中遇到牆 / Stone Mason，破牆需要更多 rams、拆建築需要更多 catas。配比目標要往上調 30–50%。',
          en: 'If you hit walls / Stone Mason during an op, ramming and demolition take more troops. Adjust targets up by 30–50%.',
        }},
      ],
    },
    {
      id: 'three-chiefs',
      title: { zh: '3-Chief 設定（如何在錘子村放下 3 個 chief）', en: '3-Chief setup (how to fit 3 chiefs in the hammer village)' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '一個有 3 chiefs 的錘子可以「單獨 chief 一個村」(solo chiefing)。要做到這點需要 Palace Lv 20，配上長期計畫的村莊順序。',
          en: 'A hammer with 3 chiefs can solo-chief a target village. This requires Palace Lv 20 and a planned village settlement order.',
        }},
        { type: 'list', items: [
          { zh: 'Spawn 村：拿所有 task bonus，CP 性價比超高', en: 'Spawn village: grab every task bonus (best CP per cost ratio in the game)' },
          { zh: 'Cap：糧食田 Lv 17–18 為主；可選擇是否養兵（建議不養）', en: 'Cap: focus crop fields to Lv 17–18; choose whether to train troops (recommendation: don\'t)' },
          { zh: 'V3：從 cap 開出去，當錘子村 — 必有 Palace 20、Great Barracks/Stable、TS、TH 10、Treasury 10、醫院、穀倉備用。⚠️ 不要佔任何綠洲（綠洲會讓敵方 scout 能估算糧田等級 / crop scouting，hammer 洩漏資訊非常危險）', en: 'V3: settled from cap, becomes the hammer — Palace 20, Great Barracks/Stable, high TS, TH 10, Treasury 10, hospital, spare granary. ⚠️ Do NOT capture any oasis (oases let enemies crop-scout your fields; hammer leakage is dangerous)' },
          { zh: 'V4：feeder / 支援村。若能 access 2 塊 50% 糧綠洲 → HM 15（吃 2 塊）；只能 access 1 塊 → HM 10 就夠（別盲目升 HM 15 浪費資源）', en: 'V4: feeder / support. If 2× 50% crop oases reachable → push HM to Lv 15 (2-oasis capacity); if only 1 reachable → HM 10 is enough (don\'t over-build)' },
          { zh: 'V5：從 V4 開出去；硬核玩家可在這裡放 2nd 3-chief 組（與 V3 距離 1 格內）', en: 'V5: settled from V4; hardcore players plant a 2nd 3-chief set here (within 1 tile of V3)' },
          { zh: '替代方案：V5 改為 NPC 村，緊鄰 cap 與 V3', en: 'Alternative: V5 becomes the NPC village, adjacent to cap + V3' },
          { zh: 'V6：通常從 V5 開出去當 feeder。若 V5 走「2nd 3-chief」路線，之後可用 V4 或 V1 的 chief 把 V6 re-chief 回自己（需 Residence 20）來調整功能定位；非第一優先但保留這個 flexibility', en: 'V6: typically settled from V5 as a feeder. If V5 is going the 2nd-3-chief route, you can later re-chief V6 from V4 or V1 (Residence 20) to re-shape its role — low priority, but useful flexibility to keep' },
        ]},
      ],
    },
  ],
};
