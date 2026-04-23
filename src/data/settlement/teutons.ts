import type { SettlementTimeline } from '../settlement-types';

export const teutons: SettlementTimeline = {
  tribe: 'teutons',
  targetDay: { zh: 'Day 6–7', en: 'Day 6–7' },
  approach: {
    zh: '條頓策略不同：前期 Day 1-2 就蓋兵營 + 訓練 Clubswinger（棍棒兵）掠奪 inactive 鄰居，邊打邊攢資源開二村。條頓英雄被動「加入掠奪時 +20% 搶劫」前 2 週超強。',
    en: 'Teutons play differently: build Barracks on Day 1–2 and spam Clubswingers to raid inactive neighbors. Fund village expansion with stolen resources. The hero\'s "+20% plunder when joining raid" passive is huge in the first 2 weeks.',
  },
  steps: [
    { at: 'Hour 0:00', action: { zh: '加入聯盟。英雄點戰鬥力。木田 / 土田 Lv 1。', en: 'Join alliance. Hero → Fighting Strength. Woodcutter / Clay Pit Lv 1.' } },
    { at: 'Hour 6', action: { zh: '蓋兵營 Lv 1；主府 Lv 3；鐵田 Lv 2', en: 'Barracks Lv 1; Main Building Lv 3; Iron Mine Lv 2' } },
    { at: 'Day 1', action: { zh: '開始訓練 10–20 Clubswinger（900 秒/隻）；升主府 Lv 5；秘密倉庫 Lv 3', en: 'Start training 10–20 Clubswingers (900s each); MB Lv 5; Cranny Lv 3' } },
    { at: 'Day 1–2', action: { zh: '掠奪附近 inactive 目標（找人口 150–400 的）。用 travco 或 inactive search 找目標。', en: 'Raid inactive targets nearby (pop 150–400 sweet spot). Use travco or in-game inactive search.' } },
    { at: 'Day 2–3', action: { zh: '市場 Lv 1；大使館 Lv 1；資源田 Lv 3–4；兵營 Lv 3', en: 'Marketplace Lv 1; Embassy Lv 1; fields Lv 3–4; Barracks Lv 3' } },
    { at: 'Day 3', action: { zh: '學院 Lv 1；繼續訓棍棒兵 + 掠奪；保護期結束後要有 ≥30 隻兵', en: 'Academy Lv 1; keep training clubs + raiding; have ≥30 troops before protection ends' } },
    { at: 'Day 3–4', action: { zh: '學院 Lv 10；居所 Lv 1–5；研發開拓者', en: 'Academy Lv 10; Residence Lv 1–5; research Settler' } },
    { at: 'Day 4–5', action: { zh: '居所 Lv 10；糧田 Lv 5+（條頓開拓者糧食最多 5,200）', en: 'Residence Lv 10; crop Lv 5+ (Teuton settlers cost the most crop — 5,200 each)' } },
    { at: 'Day 5–6', action: { zh: '訓練 3 個開拓者（5,800/4,400/4,600/5,200 = 20,000 每個；3 個 60,000）', en: 'Train 3 Settlers (20,000 per settler; 60,000 total)' } },
    { at: 'Day 6–7', action: { zh: '定居。棍棒兵部隊留在 spawn 繼續掠奪，養二村。', en: 'Settle. Leave clubs in spawn to keep raiding — funds the 2nd village setup.' } },
  ],
  keyTips: [
    { zh: '棍棒兵 900 秒訓練時間是全遊戲最快，便宜（95/75/40/40）+ carry 60 = 早期農場機器。', en: 'Clubswinger 900s train time is the fastest in the game; cheap (95/75/40/40) + carry 60 = early farming machine.' },
    { zh: '條頓英雄被動是「加入掠奪時 +20% 搶劫額外資源」，前 14 天一起去搶最划算。', en: 'Teuton hero passive: "+20% extra plunder when joining a raid" — send hero with raids for the first 2 weeks.' },
    { zh: '條頓開拓者是三族中最慢最貴的，所以要靠掠奪把資源補回來，不然會晚 1-2 天。', en: 'Teuton settlers are slowest and most expensive among the 3 starters — raids must fund them or you slip 1–2 days behind.' },
    { zh: '如果鄰居都是活躍玩家沒 inactive 打，就用高盧/羅馬模式（專心蓋田 + 主府）。', en: 'If no inactive neighbors exist, fall back to Gaul/Roman pattern (pure economy): fields + MB only.' },
  ],
};
