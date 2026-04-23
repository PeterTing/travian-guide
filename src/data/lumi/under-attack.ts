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
        // Note on cata math: per Travian Legends support, each cata wave destroys at most 2
        // structures, and required cata counts scale with building level, Stonemason, and the
        // Architect artefact. We don't quote a single "waves to fully destroy" figure because
        // it depends heavily on those modifiers.
        // https://support.travian.com/en/support/solutions/articles/7000092496-the-use-of-catapults
        { type: 'list', items: [
          { zh: '隨時保留至少 300 個 scouts + 部隊', en: 'Always keep at least 300 scouts + troops in the cap' },
          { zh: 'Stone Mason 提升建築 HP（抗 cata），是首都抵抗拆村的關鍵建築', en: 'Stone Mason increases building HP (vs catapults) — a key cap-survival building when resisting demolition' },
          { zh: '徹底拆村通常需要多波 cata 連打；所需數量受目標等級、Stonemason、Architect artefact 影響很大', en: 'Fully demolishing a village takes multiple cata waves; the exact count scales strongly with target level, Stonemason, and Architect artefact modifiers' },
        ]},
      ],
    },
    {
      id: 'hammer-anvil-attack',
      title: { zh: '錘子或鐵砧被打（chief 風險）', en: 'Hammer or anvil under attack (chief risk)' },
      blocks: [
        // Source (Loyalty mechanics):
        //   Villages start at 100 loyalty. Great Celebration in the DEFENDING village reduces
        //   each attacker-admin loyalty strike by 5% (makes chiefing harder) — it does NOT
        //   directly add loyalty points.
        //   Tablet of Law (hero consumable) raises loyalty by 1% per tablet, up to a ceiling
        //   of 125%. That is the mechanic that bumps loyalty past 100.
        //   https://support.travian.com/en/support/solutions/articles/7000060248-loyalty
        //   https://support.travian.com/en/support/solutions/articles/7000070669-celebrations-and-town-hall
        { type: 'list', items: [
          { zh: '在防守村開大慶典：讓敵方每個 admin 的忠誠打擊少 5%（讓對方更難 chief 掉你），這是防 chief 的關鍵', en: 'Run a great celebration in the defending village: each attacker administrator loses 5% of their loyalty-reduction effect, making chiefing significantly harder' },
          { zh: '用英雄「Tablet of Law」每顆藥 +1% 忠誠，最高可把忠誠推到 125%（這才是把忠誠 > 100 的機制）', en: "Use your hero's Tablet of Law consumable — each tablet adds 1% loyalty, up to a 125% cap. This is the mechanic that actually pushes loyalty past 100." },
          { zh: '若 chief wave 之間有空檔，趁空檔補 tablets，或把 residence / palace 升級時機卡在 wave 縫隙完成', en: 'Use gaps between chief waves to drink tablets, or time a residence / palace upgrade to finish inside a gap' },
          { zh: '可選：用錘子 def 自己 — 但通常不建議；最好把錘子塞進 wave 縫隙出征避開', en: 'Optional: defend with the hammer itself — usually not recommended; better to send the hammer out during a wave gap' },
        ]},
      ],
    },
    {
      id: 'follow-home',
      title: { zh: '錘子被「跟蹤回家」(follow home)', en: 'Hammer followed home' },
      blocks: [
        // Ghost hammer / follow-home is a well-known community tactic — enemies time an attack
        // to land shortly after your hammer returns from an OP, before you can move it again.
        // Reference: community write-ups on "ghost hammer" tactics.
        // https://traviancheatsandtips.blogspot.com/2010/03/ghost-hammer.html
        { type: 'paragraph', text: {
          zh: '敵人計算你的 OP 結束時間，安排一波攻擊在你回家後的短暫空檔打進來。這是社群長期流傳的「ghost hammer」戰術。預防思路：',
          en: 'Enemies calculate when your OP returns and time an attack to land in the brief window after the hammer arrives home. This is a long-standing community tactic ("ghost hammer"). Prevention:',
        }},
        { type: 'list', items: [
          { zh: 'OP 出發後調整回程相關數值（例：改 TS 等級），讓對方的精準 timing 失準', en: "Adjust return-time variables after the op leaves (e.g. change TS level) so the attacker's precise timing miscalculates" },
          { zh: '錘子村內隨時留少量反騎兵單位（spear, paladin, druidrider），避免空城被純騎兵偷殺', en: 'Keep a small anti-cavalry stack (spear, paladin, druidrider) in the hammer village so it is never empty against a pure cavalry hit' },
          { zh: '若真的被精準 timing 跟到：社群常見的緊急應變是把剛回家的部隊重新派出去（farm list 是最快方式）把它從村內抽走', en: 'If timed perfectly: a common community response is to immediately re-dispatch the just-returned troops (fastest method is adding them to a farm list) so they are not in the village when the follow-up lands' },
        ]},
      ],
    },
  ],
};
