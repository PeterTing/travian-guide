import type { LumiSection } from '../lumi-types';

export const underAttack: LumiSection = {
  id: 'under-attack',
  number: '§6',
  title: { zh: '被攻擊時怎麼辦', en: 'When you\'re under attack' },
  intro: {
    zh: '被打不是世界末日 — 但如果你不知道怎麼應對就會 — 這幾招是經驗濃縮：',
    en: 'Being attacked is not the end of the world — unless you don\'t know what to do. These tactics are pure compressed experience.',
  },
  subsections: [
    {
      id: 'cap-attack',
      title: { zh: '首都被打、沒有 def call', en: 'Cap under attack, no def call' },
      blocks: [
        { type: 'list', items: [
          { zh: '隨時保留至少 300 個 scouts + 部隊', en: 'Always keep at least 300 scouts + troops in the cap' },
          { zh: 'Stone Mason Lv 20（建築 HP +50% 抗 cata）', en: 'Stone Mason Lv 20 (+50% building HP vs catapults)' },
          { zh: '完全摧毀一個村需要 19 波 cata 攻擊', en: 'Completely destroying a village requires ~19 cata waves' },
        ]},
      ],
    },
    {
      id: 'hammer-anvil-attack',
      title: { zh: '錘子或鐵砧被打（chief 風險）', en: 'Hammer or anvil under attack (chief risk)' },
      blocks: [
        { type: 'list', items: [
          { zh: '開大慶典把忠誠拉到 125（標準 100，慶典加 25）', en: 'Run a great celebration to push loyalty to 125 (base 100 + celebration 25)' },
          { zh: '若 wave 之間有空檔，用「忠誠藥水」(loyalty tablets) 補回來', en: 'If there are gaps between waves, use loyalty tablets to top up between hits' },
          { zh: '若敵人定 .00 + .01 兩波，藥水必須在 .00 之前喝', en: 'If enemy lands at .00 and .01, drink the tablet before .00' },
          { zh: '計時把 residence / palace 升到剛好在某個 wave 之間完成', en: 'Time a residence / palace upgrade to finish in a gap between waves' },
          { zh: '可選：用錘子 def 自己 — 但通常不建議；最好把錘子塞進 wave 縫隙', en: 'Optional: defend with the hammer itself — usually not recommended; better to send the hammer out into a wave gap' },
        ]},
      ],
    },
    {
      id: 'follow-home',
      title: { zh: '錘子被「跟蹤回家」(follow home)', en: 'Hammer followed home' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '敵人計算你的 OP 結束時間，派 ghost (純騎兵) 在你回家後 1 秒打死你。預防：',
          en: 'Enemies calculate when your OP returns and send a ghost (pure cavalry stack) timed to hit 1 second after you arrive. Prevention:',
        }},
        { type: 'list', items: [
          { zh: 'OP 出發後改 TS 等級，讓回家時間變動 — 對方計算 1 秒 gap 就失準', en: 'Change TS level after the op leaves so return time shifts — enemy\'s 1-sec gap miscalculates' },
          { zh: '錘子村內隨時留少量反騎兵單位（spear, paladin, druidrider）' , en: 'Keep a small anti-cavalry stack (spear, paladin, druidrider) in the hammer village at all times' },
          { zh: '若被精準 timing 跟到：把回到家的所有單位加進 farm list，瘋狂點 farming 按鈕 → 可能在 1 秒內躲掉', en: 'If timed perfectly: add all returning units to a farm list and spam the farm button — you may dodge within the 1-sec gap' },
        ]},
      ],
    },
  ],
};
