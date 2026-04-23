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
        { type: 'paragraph', text: {
          zh: 'Artifacts 在 Day 90–100 左右由 Natar 派發到 13 個特殊 Natar 村內。要拿到必須打贏該 Natar 村並用 Treasury（國庫）儲存。Treasury Lv 10 可以放 small/large，Lv 20 可以放 unique。',
          en: 'Around Day 90–100, Natars distribute artifacts to 13 special Natar villages. To capture: defeat the Natar village and store the artifact in your Treasury. Treasury Lv 10 holds small/large, Lv 20 holds unique.',
        }},
        { type: 'paragraph', text: {
          zh: '8 種類型 × 3 種規模 = 24 個 artifact 在伺服器上：',
          en: '8 types × 3 sizes = 24 artifacts on the server:',
        }},
        { type: 'list', items: [
          { zh: 'Architect — 建築 HP +200%（拆 cap 變超慢，Stone Mason 疊上去更難）', en: 'Architect — building HP +200% (cap demolition becomes very slow, especially layered on Stone Mason)' },
          { zh: 'Boots / Speedy — 部隊速度大幅提升（適合 OP 突襲）', en: 'Boots / Speedy — major troop speed boost (great for OPs)' },
          { zh: 'Eyes — 來犯資訊更詳細（可看單位類型甚至數量）', en: 'Eyes — incoming attack details (see unit type, even count at high tiers)' },
          { zh: 'Confusion — 反向 Eyes：對方 scout 你看到的資訊變模糊', en: 'Confusion — opposite of Eyes: enemy scouts get less info on you' },
          { zh: 'Diet — 部隊糧食消耗 ÷ 2（最強的 OP buff，可以養更多兵）', en: 'Diet — troop crop upkeep halved (one of the strongest OP buffs, lets you field many more troops)' },
          { zh: 'Storage — 倉庫/糧倉容量大幅提升', en: 'Storage — warehouse/granary capacity boost' },
          { zh: 'Trainer — 兵營/馬廄/工坊訓練速度 ÷ 2 或 ÷ 3', en: 'Trainer — Barracks/Stable/Workshop training time halved or thirded' },
          { zh: 'Fool — 隨機效果，每 24 小時換一種', en: 'Fool — random rotating effect every 24h' },
        ]},
        { type: 'callout', variant: 'info', title: { zh: '規模差異', en: 'Size differences' }, text: {
          zh: 'Small = 影響 1 個村；Large = 影響整個帳號；Unique = 影響整個帳號 + 效果是 Large 的 2x，每種 type 全伺服器只有 1 個。Unique Trainer 和 Diet 是搶最兇的兩個。',
          en: 'Small = effect on 1 village; Large = whole account; Unique = whole account + 2× the Large effect, only ONE of each type per server. Unique Trainer and Unique Diet are the most contested.',
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
        { type: 'paragraph', text: {
          zh: 'WW 是整個伺服器的終局：13 個特殊 Natar 村會在 Day 200 左右開放，整個聯盟把它打下來、佔領，然後不停送資源把 WW 從 Lv 0 蓋到 Lv 100。第一個達到 Lv 100 的聯盟贏。',
          en: 'WW is the server\'s final act: 13 special Natar villages open around Day 200. Your alliance captures one, then funnels resources to build the WW from Lv 0 → Lv 100. First alliance to Lv 100 wins.',
        }},
        { type: 'list', items: [
          { zh: '建造速度：WW 村本身建造時間是其他建築的 50%（一半）', en: 'WW villages build at 50% of normal build time' },
          { zh: '可同時建 2 級', en: 'Can queue 2 WW levels simultaneously' },
          { zh: 'Lv 1–49：聯盟需 1 份 Construction Plan（從 Natar 拿）', en: 'Lv 1–49: alliance needs 1 Construction Plan (captured from Natars)' },
          { zh: 'Lv 50–100：需 2 份 Plan（WW owner + co-ally 各持一份）', en: 'Lv 50–100: need 2 Plans (WW owner + co-ally each hold one)' },
          { zh: '每級成本驚人 — Lv 100 累積需要 ≥1,000,000 容量於每種資源', en: 'Each level costs enormous resources — Lv 100 cumulative needs ≥1,000,000 capacity per resource type' },
          { zh: 'Natar 也在蓋自己的 WW；他們到 Lv 75 時所有部隊回防自己 WW', en: 'Natars build their own WW; at Natar Lv 75 all their forces recall to defend, stopping attacks on player WWs' },
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
