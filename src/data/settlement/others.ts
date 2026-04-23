import type { SettlementTimeline } from '../settlement-types';

/**
 * Egyptian / Hun / Viking / Spartan tribe opening profiles. Brief
 * "what this tribe's early game feels like" flavor — actual build orders
 * live in src/data/build-order/.
 */

export const egyptians: SettlementTimeline = {
  tribe: 'egyptians',
  approach: {
    zh: '埃及重經濟：奴隸民兵（Slave Militia）是最便宜的兵，可當英雄肉盾，讓英雄安全清綠洲。蓋 Waterworks 開始拉糧綠洲加成。開二村較晚但首都產糧巨獸。',
    en: 'Economy-first tribe. Slave Militia (cheapest unit) acts as hero bodyguards for safer oasis clears. Build Waterworks to stack crop-oasis bonuses. Slower to settle but capital crop production dominates long-term.',
  },
  keyTips: [
    { zh: '埃及前期慢，但後期 Waterworks + 3×50% 糧綠洲產量碾壓', en: 'Slow start, but Waterworks + 3× 50% crop oases = crushing late-game production' },
    { zh: '奴隸民兵（530 秒、45/60/30/15）可以大量訓練當英雄帶路，死了也不痛', en: 'Slave Militia (530s train, 45/60/30/15 cost) trains in bulk for cheap hero escorts' },
  ],
};

export const huns: SettlementTimeline = {
  tribe: 'huns',
  approach: {
    zh: '匈人以騎兵為核心，開局蓋馬廄而非兵營。Steppe Rider（2,400 秒、速 16、carry 115）是全遊戲最好的早期農場單位。司令部取代行宮。',
    en: 'Cavalry-first tribe: build Stable instead of Barracks. Steppe Rider (2,400s train, speed 16, carry 115) is one of the best early farming units. Command Center replaces Residence.',
  },
  keyTips: [
    { zh: 'Steppe Rider 的速度 16 + carry 115 讓你早期掠奪收入超越他族', en: 'Steppe Rider speed 16 + carry 115 yields higher early raiding income than other tribes' },
    { zh: '司令部（Command Center）是匈人獨有的，解鎖後可支援遠距 Op', en: 'Command Center is Hun-exclusive, enabling long-range operations when unlocked' },
  ],
};

export const spartans: SettlementTimeline = {
  tribe: 'spartans',
  approach: {
    zh: '斯巴達兵種貴，但 Asclepeion 可復活 60% 陣亡單位，長線超強。開局像羅馬一樣穩，只是拓荒者更貴（每個約 20,000）。',
    en: 'Spartans run expensive troops, but Asclepeion revives 60% of fallen units — a massive long-term edge. Opening resembles Roman but with pricier settlers (~20,000 each).',
  },
  keyTips: [
    { zh: '英雄武器對所有斯巴達同類兵 +50%，值得早投資英雄裝備', en: 'Hero weapons give +50% to ALL matching Spartan units — invest in hero gear early' },
    { zh: 'Shieldsman 速度 8 是全遊戲最快防禦步兵，鐵砧搭 Elpida Rider', en: 'Shieldsman speed 8 is the fastest def infantry in the game; pair with Elpida Rider on anvil' },
  ],
};

export const vikings: SettlementTimeline = {
  tribe: 'vikings',
  approach: {
    zh: '維京玩法靠水：深水移動速度 24 格/小時（他族 18），跨水域作戰超強。Thrall 是快訓廉價步兵（類似條頓 Clubswinger）。Berserker 死前反擊機制獨特。',
    en: 'Vikings leverage water: deep-water speed 24 fields/hr vs 18 for others, dominating cross-map ops. Thrall is the fast cheap infantry (like Teuton Clubswinger). Berserker has unique damage-on-death.',
  },
  keyTips: [
    { zh: '地圖有大量水域才發揮維京優勢，純陸圖選羅馬 / 高盧會更舒服', en: 'Vikings shine on water-heavy maps; on pure land maps, Romans/Gauls are smoother' },
    { zh: 'Berserker 死前反擊：攻擊時每死 1 隻殺敵 1 隻，無視牆 + 瞭望塔', en: 'Berserker damage-on-death: each fallen Berserker kills 1 enemy, ignoring wall + watchtower bonuses' },
  ],
};
