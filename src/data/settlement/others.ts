import type { SettlementTimeline } from '../settlement-types';

/**
 * Egyptian / Hun / Viking / Spartan settlement timelines follow the same
 * skeleton as Roman/Gaul/Teuton but with tribe-specific variations. These
 * are briefer references; the three beginner tribes (above) cover the full
 * hour-by-hour detail.
 */

export const egyptians: SettlementTimeline = {
  tribe: 'egyptians',
  targetDay: { zh: 'Day 6–8', en: 'Day 6–8' },
  approach: {
    zh: '埃及重經濟：奴隸民兵（Slave Militia）是最便宜的兵，可當英雄肉盾，讓英雄安全清綠洲。蓋 Waterworks 開始拉糧綠洲加成。開二村較晚但首都產糧巨獸。',
    en: 'Economy-first tribe. Slave Militia (cheapest unit) acts as hero bodyguards for safer oasis clears. Build Waterworks to stack crop-oasis bonuses. Slower to settle but capital crop production dominates long-term.',
  },
  steps: [
    { at: 'Hour 0', action: { zh: '聯盟 + 戰鬥英雄 + 資源田 Lv 1–2', en: 'Alliance + fighting hero + fields Lv 1–2' } },
    { at: 'Day 1–2', action: { zh: '主府 Lv 5；訓少量奴隸民兵給英雄帶路', en: 'MB Lv 5; train a handful of Slave Militia as hero companions' } },
    { at: 'Day 2–3', action: { zh: '市場 + 大使館 + 學院 + 資源田 Lv 3–5', en: 'Marketplace + Embassy + Academy + fields Lv 3–5' } },
    { at: 'Day 4–5', action: { zh: '居所 Lv 10 + 研發開拓者', en: 'Residence Lv 10 + research Settler' } },
    { at: 'Day 5–7', action: { zh: '訓 3 個開拓者（4,560/5,890/4,370/4,180 = 19,000 每個）', en: 'Train 3 Settlers (19,000 resources each)' } },
    { at: 'Day 6–8', action: { zh: '定居（糧綠洲是首都最大的事）', en: 'Settle (crop oasis is the single biggest factor for capital choice)' } },
  ],
  keyTips: [
    { zh: '埃及前期慢，但後期 Waterworks + 3×50% 糧綠洲產量碾壓', en: 'Slow start, but Waterworks + 3× 50% crop oases = crushing late-game production' },
    { zh: '奴隸民兵（530 秒、45/60/30/15）可以大量訓練當英雄帶路，死了也不痛', en: 'Slave Militia (530s train, 45/60/30/15 cost) trains in bulk for cheap hero escorts' },
  ],
};

export const huns: SettlementTimeline = {
  tribe: 'huns',
  targetDay: { zh: 'Day 6–8', en: 'Day 6–8' },
  approach: {
    zh: '匈人以騎兵為核心，開局蓋馬廄而非兵營。Steppe Rider（2,400 秒、速 16、carry 115）是全遊戲最好的早期農場單位。司令部取代居所。',
    en: 'Cavalry-first tribe: build Stable instead of Barracks. Steppe Rider (2,400s train, speed 16, carry 115) is one of the best early farming units. Command Center replaces Residence.',
  },
  steps: [
    { at: 'Hour 0', action: { zh: '聯盟 + 戰鬥英雄 + 資源田 Lv 1–2', en: 'Alliance + fighting hero + fields Lv 1–2' } },
    { at: 'Day 1–2', action: { zh: '主府 Lv 5 + 馬廄 Lv 1 + 開始訓 Steppe Rider', en: 'MB Lv 5 + Stable Lv 1 + start training Steppe Riders' } },
    { at: 'Day 2–4', action: { zh: '市場 + 大使館 + 學院；繼續訓 steppe rider 掠奪', en: 'Marketplace + Embassy + Academy; keep training steppes for raiding' } },
    { at: 'Day 4–6', action: { zh: '司令部 Lv 10（或居所 Lv 10）+ 研發開拓者', en: 'Command Center Lv 10 (or Residence Lv 10) + research Settler' } },
    { at: 'Day 6–8', action: { zh: '訓 3 個開拓者（6,100/4,600/4,800/5,400 = 20,900 每個）', en: 'Train 3 Settlers (20,900 each)' } },
  ],
  keyTips: [
    { zh: 'Steppe Rider 的速度 16 + carry 115 讓你早期掠奪收入超越他族', en: 'Steppe Rider speed 16 + carry 115 yields higher early raiding income than other tribes' },
    { zh: '司令部（Command Center）是匈人獨有的，解鎖後可支援遠距 Op', en: 'Command Center is Hun-exclusive, enabling long-range operations when unlocked' },
  ],
};

export const spartans: SettlementTimeline = {
  tribe: 'spartans',
  targetDay: { zh: 'Day 7–9', en: 'Day 7–9' },
  approach: {
    zh: '斯巴達兵種貴，但 Asclepeion 可復活 60% 陣亡單位，長線超強。開局像羅馬一樣穩，只是開拓者更貴（每個約 20,000）。',
    en: 'Spartans run expensive troops, but Asclepeion revives 60% of fallen units — a massive long-term edge. Opening resembles Roman but with pricier settlers (~20,000 each).',
  },
  steps: [
    { at: 'Hour 0', action: { zh: '聯盟 + 戰鬥英雄 + 資源田', en: 'Alliance + fighting hero + fields' } },
    { at: 'Day 1–3', action: { zh: '標準經濟路線（主府 / 市場 / 大使館 / 學院）', en: 'Standard economy path (MB / Market / Embassy / Academy)' } },
    { at: 'Day 4–6', action: { zh: '居所 Lv 10 + Asclepeion 盡早（需主府 Lv 10）', en: 'Residence Lv 10 + Asclepeion ASAP (needs MB Lv 10)' } },
    { at: 'Day 6–9', action: { zh: '訓 3 個開拓者（5,115/5,580/6,045/3,255 = 19,995 每個）', en: 'Train 3 Settlers (19,995 each)' } },
  ],
  keyTips: [
    { zh: '英雄武器對所有斯巴達同類兵 +50%，值得早投資英雄裝備', en: 'Hero weapons give +50% to ALL matching Spartan units — invest in hero gear early' },
    { zh: 'Shieldsman 速度 8 是全遊戲最快防禦步兵，鐵砧搭 Elpida Rider', en: 'Shieldsman speed 8 is the fastest def infantry in the game; pair with Elpida Rider on anvil' },
  ],
};

export const vikings: SettlementTimeline = {
  tribe: 'vikings',
  targetDay: { zh: 'Day 6–8', en: 'Day 6–8' },
  approach: {
    zh: '維京玩法靠水：深水移動速度 24 格/小時（他族 18），跨水域作戰超強。Thrall 是快訓廉價步兵（類似條頓 Clubswinger）。Berserker 死前反擊機制獨特。',
    en: 'Vikings leverage water: deep-water speed 24 fields/hr vs 18 for others, dominating cross-map ops. Thrall is the fast cheap infantry (like Teuton Clubswinger). Berserker has unique damage-on-death.',
  },
  steps: [
    { at: 'Hour 0', action: { zh: '聯盟 + 戰鬥英雄 + 資源田', en: 'Alliance + fighting hero + fields' } },
    { at: 'Day 1–2', action: { zh: '視地圖選擇：有水 → 蓋港口；無水 → 蓋兵營訓 Thrall 掠奪', en: 'If map has water: build Harbor. If not: Barracks + Thralls to raid like Teutons' } },
    { at: 'Day 2–4', action: { zh: '標準經濟（主府 / 市場 / 大使館 / 學院）', en: 'Standard economy (MB / Market / Embassy / Academy)' } },
    { at: 'Day 4–6', action: { zh: '居所 Lv 10 + 研發開拓者', en: 'Residence Lv 10 + research Settler' } },
    { at: 'Day 6–8', action: { zh: '訓 3 個開拓者（4,500 per res × 3 = 54,000 總資源）', en: 'Train 3 Settlers (~54,000 total)' } },
  ],
  keyTips: [
    { zh: '地圖有大量水域才發揮維京優勢，純陸圖選羅馬 / 高盧會更舒服', en: 'Vikings shine on water-heavy maps; on pure land maps, Romans/Gauls are smoother' },
    { zh: 'Berserker 死前反擊：攻擊時每死 1 隻殺敵 1 隻，無視牆 + 瞭望塔', en: 'Berserker damage-on-death: each fallen Berserker kills 1 enemy, ignoring wall + watchtower bonuses' },
  ],
};
