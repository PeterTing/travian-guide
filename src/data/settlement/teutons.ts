import type { SettlementTimeline } from '../settlement-types';

export const teutons: SettlementTimeline = {
  tribe: 'teutons',
  approach: {
    zh: '條頓策略不同：前期 Day 1-2 就蓋兵營 + 訓練 Clubswinger（棍棒兵）掠奪 inactive 鄰居，邊打邊攢資源開二村。條頓英雄被動「加入掠奪時 +20% 搶劫」前 2 週超強。',
    en: 'Teutons play differently: build Barracks on Day 1–2 and spam Clubswingers to raid inactive neighbors. Fund village expansion with stolen resources. The hero\'s "+20% plunder when joining raid" passive is huge in the first 2 weeks.',
  },
  keyTips: [
    { zh: '棍棒兵 900 秒訓練時間是全遊戲最快，便宜（95/75/40/40）+ carry 60 = 早期農場機器。', en: 'Clubswinger 900s train time is the fastest in the game; cheap (95/75/40/40) + carry 60 = early farming machine.' },
    { zh: '條頓英雄被動是「加入掠奪時 +20% 搶劫額外資源」，前 14 天一起去搶最划算。', en: 'Teuton hero passive: "+20% extra plunder when joining a raid" — send hero with raids for the first 2 weeks.' },
    { zh: '條頓拓荒者是三族中最慢最貴的，所以要靠掠奪把資源補回來，不然會晚 1-2 天。', en: 'Teuton settlers are slowest and most expensive among the 3 starters — raids must fund them or you slip 1–2 days behind.' },
    { zh: '如果鄰居都是活躍玩家沒 inactive 打，就用高盧/羅馬模式（專心蓋田 + 主建築）。', en: 'If no inactive neighbors exist, fall back to Gaul/Roman pattern (pure economy): fields + MB only.' },
  ],
};
