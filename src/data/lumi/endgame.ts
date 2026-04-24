import type { LumiSection } from '../lumi-types';

export const endgame: LumiSection = {
  id: 'endgame',
  number: '§7',
  title: { zh: '後期：Artifacts 與 World Wonder', en: 'Endgame: Artifacts & World Wonder' },
  intro: {
    zh: '伺服器後期主軸：Day 90 左右搶 Artifact、Day 200 左右建 World Wonder 拿伺服器冠軍。整盤帳號的「為什麼這樣規劃」答案就在這裡。',
    en: 'Late-server arc: grab artifacts around Day 90, then build the World Wonder to Lv 100 around Day 200 to win the server. This is the answer to "why every prior decision matters".',
  },
  subsections: [
    {
      id: 'artifacts',
      title: { zh: 'Artifacts (≈ Day 90+)', en: 'Artifacts (≈ Day 90+)' },
      blocks: [
        // Source: Artefacts release ~day 90 on normal-speed servers; held in 13 special Natar
        // villages. To capture: destroy the holding village's Treasury and survive with a hero
        // from a village that has a level-10 Treasury (small/large) or level-20 Treasury (unique).
        // https://support.travian.com/en/support/solutions/articles/7000060687-artefacts
        // https://support.travian.com/en/support/solutions/articles/7000092457-how-to-get-ready-for-the-artefact-release
        { type: 'paragraph', text: {
          zh: 'Artifacts 在 Day 90 左右由 Natar 派發到特殊 Natar 村內。要拿到必須摧毀該 Natar 村的 Treasury，並讓從一個本身 Treasury 等級夠高的英雄村派出的英雄存活。Treasury Lv 10 可接收 small / large，Lv 20 可接收 unique。',
          en: 'Around Day 90, Natars distribute artifacts to special Natar villages. To capture: destroy the holding village\'s Treasury and ensure a hero sent from a village with a high-enough Treasury survives the fight. Treasury Lv 10 receives small / large; Lv 20 is required for unique.',
        }},
        { type: 'paragraph', text: {
          zh: '8 種類型 × 3 種規模（small / large / unique）的 artifact 在伺服器上分佈：',
          en: 'Artifacts come in 8 types × 3 sizes (small / large / unique), distributed across the server:',
        }},
        // Source for artefact effects:
        // https://support.travian.com/en/support/solutions/articles/7000060572-artefact-effects
        { type: 'list', items: [
          { zh: "Architect's Secret — 建築更難被拆（敵方所需 cata 數量暴增）", en: "Architect's Secret — buildings become much harder to demolish (enemy cata counts balloon)" },
          { zh: 'Titan / Boots — 部隊速度提升（適合 OP 突襲）', en: 'Titan Boots — troop speed boost (great for OPs)' },
          { zh: "Eagle Eyes — 來犯情資更詳細（可看單位類型，高階可看數量）", en: 'Eagle Eyes — more detail on incoming attacks (unit type; unique tier can also reveal count)' },
          { zh: "Rival's Confusion — 反向 Eyes：敵方 scout 看你資訊變得更模糊", en: "Rival's Confusion — opposite of Eyes: enemy scouts learn less about your villages" },
          { zh: 'Diet Control — 部隊糧食消耗減少（OP 最強 buff 之一，可以養更多兵）', en: "Diet Control — troop crop upkeep reduced (one of the strongest OP buffs, lets you field many more troops)" },
          { zh: 'Storage Masterplan — 倉庫 / 穀倉容量大幅提升', en: 'Storage Masterplan — warehouse/granary capacity boost' },
          { zh: "Trainer's Talent — 兵營 / 馬廄 / 工場訓練速度提升", en: "Trainer's Talent — Barracks/Stable/Workshop training speed boost" },
          { zh: "The Fool — 隨機效果，會在其他 artefact 類型之間輪換", en: "The Fool — random effect that rotates through other artefact types" },
        ]},
        { type: 'callout', variant: 'info', title: { zh: '規模差異', en: 'Size differences' }, text: {
          zh: 'Small = 只影響持有該 artefact 的單一村莊；Large = 影響整個帳號；Unique = 影響整個帳號 + 效果是 Large 的約 2 倍，每種 type 全伺服器只有 1 個。Unique Trainer 和 Diet 是搶最兇的兩個。',
          en: 'Small = effect on the single village holding the artefact; Large = whole account; Unique = whole account + roughly 2× the Large effect, with only ONE of each type per server. Unique Trainer and Unique Diet are the most fiercely contested.',
        }},
        { type: 'callout', variant: 'warn', title: { zh: '為什麼錘子 Day 70 要 2,000 rams？', en: "Why hammers need 2,000 rams by Day 70" }, text: {
          zh: '搶 artifact 必須打掉 Natar 村的 Stone Mason + Architect-強化過的建築。Day 70 的 2,000 rams + 1,000 catas 配比就是為了這場仗。Day 90 對方有 architect arti 後，破牆需求再 +50%。',
          en: 'Capturing artifacts means demolishing Natar buildings boosted by Stone Mason + the village\'s own Architect artifact. The Day 70 target of 2,000 rams + 1,000 catas is sized exactly for this. Once enemies hold an Architect artifact (Day 90+), needs jump another +50%.',
        }},
      ],
    },
    {
      id: 'world-wonder',
      title: { zh: 'World Wonder (Day 200+)', en: 'World Wonder (Day 200+)' },
      blocks: [
        // Sources for endgame timings and mechanics (all verified against Travian Legends support):
        //   - 13 WW villages spawn at endgame (excluding Natar capital = 14th):
        //     https://www.travian-strategy-guide.com/the-end-game/conquering-the-world-wonder-village
        //   - Construction Plans: 1 plan for Lv 1-49, 2 plans for Lv 50-100:
        //     https://support.travian.com/en/support/solutions/articles/7000068050-construction-plans
        //   - WW villages build at 50% normal build time:
        //     https://support.travian.com/en/support/solutions/articles/7000067152-world-wonder
        //   - Queue up to 2 WW levels simultaneously:
        //     https://support.travian.com/en/support/solutions/articles/7000092463-building-a-world-wonder
        //   - Plan release ≈ day 180-200 on speed-1 servers:
        //     https://unofficialtravian.com/2025/01/game-secrets-building-a-world-wonder-text-version/
        //   - Lv 100 requires ≥1,000,000 warehouse capacity per resource:
        //     https://support.travian.com/en/support/solutions/articles/7000067152-world-wonder
        //   - Natar WW Lv 75 → remaining Natar forces recall to defend their own WW:
        //     https://travianlibrary.wordpress.com/2009/03/15/the-complete-guide-to-endgame/
        { type: 'paragraph', text: {
          zh: 'WW 是整個伺服器的終局：13 個特殊 Natar 村會在 Day 200 左右開放（第 14 個是 Natar 首都），整個聯盟把其中一個打下來、佔領，然後不停送資源把 WW 從 Lv 0 蓋到 Lv 100。第一個達到 Lv 100 的聯盟贏。',
          en: "WW is the server's final act: around Day 200, 13 special Natar WW villages open (a 14th is the Natar capital). Your alliance captures one, then funnels resources to build the WW from Lv 0 → Lv 100. First alliance to Lv 100 wins.",
        }},
        { type: 'list', items: [
          { zh: '建造速度：WW 村內所有建築時間為正常值的 50%（一半）', en: 'WW villages build at 50% of normal build time' },
          { zh: '可同時排 2 級 WW（queue 上限 2）', en: 'Can queue up to 2 WW levels simultaneously' },
          { zh: 'Lv 1–49：聯盟需 1 份 Construction Plan（從 Natar 拿）', en: 'Lv 1–49: alliance needs 1 Construction Plan (captured from Natars)' },
          { zh: 'Lv 50–100：需 2 份 Plan（WW owner + co-ally 各持一份）', en: 'Lv 50–100: need 2 Plans (WW owner + co-ally each hold one)' },
          { zh: '每級成本驚人 — Lv 100 需要每種資源 ≥1,000,000 倉庫容量才能蓋', en: 'Each level costs enormous resources — Lv 100 requires ≥1,000,000 warehouse capacity per resource type' },
          { zh: 'Natar 也在蓋自己的 WW；當 Natar WW 達 Lv 75，剩餘的 Natar 部隊會全數回防自家 WW，不再攻擊玩家 WW', en: "Natars build their own WW; once the Natar WW reaches Lv 75, all remaining Natar forces recall to defend it and stop attacking player WWs" },
        ]},
        { type: 'callout', variant: 'tip', title: { zh: 'WW 階段聯盟分工', en: 'WW-phase alliance roles' }, text: {
          zh: 'OFF 玩家：清 WW 周邊敵人 + 攻擊敵 WW。Def 玩家：所有 def 兵運到 WW 村駐守（往往單村駐守 100k+ inv units）。經濟玩家：把所有 feeder 改成「全產糧 / 全送 WW」模式。後期人人都該蓋 inv def 來支援 WW。',
          en: 'OFF players: clear enemies near the WW + attack enemy WWs. DEF players: ship all def troops to the WW village (often 100k+ inv units stacked in one village). Economy players: reconfigure feeders to maximize crop and ship everything to WW. By endgame everyone should be building inv def to feed the WW.',
        }},
        { type: 'callout', variant: 'warn', title: { zh: 'Day 150+ 千萬別繼續 sim', en: "After Day 150: stop simming" }, text: {
          zh: 'Lumi 直接點名：「Day 150 後還在 sim 的人是 bad」。後期只剩兵數重要。可以辦慶典、開新村，但不能犧牲訓兵。',
          en: 'Lumi puts it bluntly: "Players still simming after Day 150 — that, my friend, is bad." Only troop count matters now. Celebrations and new villages are fine; never sacrifice troop production for them.',
        }},
      ],
    },
  ],
};
