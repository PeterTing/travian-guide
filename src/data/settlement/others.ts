import type { SettlementTimeline } from '../settlement-types';

/**
 * Egyptian / Hun / Viking / Spartan tribe opening profiles. Brief
 * "what this tribe's early game feels like" flavor — actual build orders
 * live in src/data/build-order/.
 */

export const egyptians: SettlementTimeline = {
  tribe: 'egyptians',
  approach: {
    zh: '埃及人重經濟：奴隸民兵（Slave Militia）是最便宜的兵，可當英雄肉盾，讓英雄安全清綠洲。蓋 Waterworks 開始拉糧綠洲加成。開二村較晚但首都產糧巨獸。',
    en: 'Economy-first tribe. Slave Militia (cheapest unit) acts as hero bodyguards for safer oasis clears. Build Waterworks to stack crop-oasis bonuses. Slower to settle but capital crop production dominates long-term.',
  },
  keyTips: [
    { zh: '埃及人前期慢，但後期 Waterworks + 3×50% 糧綠洲產量碾壓', en: 'Slow start, but Waterworks + 3× 50% crop oases = crushing late-game production' },
    { zh: '奴隸民兵（530 秒、45/60/30/15）可以大量訓練當英雄帶路，死了也不痛', en: 'Slave Militia (530s train, 45/60/30/15 cost) trains in bulk for cheap hero escorts' },
    { zh: '慢熱但首都強：前期英雄清綠洲務必帶 Slave Militia 保命；定居後 Waterworks 拉到 Lv20 讓糧綠洲加成翻倍', en: 'Slow start, huge cap: always bring Slave Militia as hero bodyguards when clearing early oases; after settling, Waterworks Lv20 doubles crop-oasis bonus' },
    { zh: 'Settler 總成本 21,000（5040/6510/4830/4620 × 3）且糧食消耗高 — Day 3 前把糧田推到 Lv 5', en: 'Settlers cost 21,000 each (5040/6510/4830/4620) and are crop-heavy — push crop fields to Lv 5 before Day 3' },
  ],
};

export const huns: SettlementTimeline = {
  tribe: 'huns',
  approach: {
    zh: '匈奴以騎兵為核心，開局蓋馬廄而非兵營。Steppe Rider（2,400 秒、速 16、carry 115）是全遊戲最好的早期農場單位。指揮中心取代行宮。',
    en: 'Cavalry-first tribe: build Stable instead of Barracks. Steppe Rider (2,400s train, speed 16, carry 115) is one of the best early farming units. Command Center replaces Residence.',
  },
  keyTips: [
    { zh: 'Steppe Rider 的速度 16 + carry 115 讓你早期掠奪收入超越他族', en: 'Steppe Rider speed 16 + carry 115 yields higher early raiding income than other tribes' },
    { zh: '指揮中心（Command Center）是匈奴獨有的，解鎖後可支援遠距 Op', en: 'Command Center is Hun-exclusive, enabling long-range operations when unlocked' },
    { zh: 'Steppe Rider 是早期最強的 farming 機器 — 蓋馬廄的優先序高於兵營', en: 'Steppe Rider is the best early farming unit — prioritise Stable over Barracks' },
    { zh: '指揮中心取代行宮/皇宮：同樣 Lv10 才能訓 settler、Lv20 才能放 3 chiefs', en: 'Command Center replaces Residence/Palace: Lv10 unlocks Settler training, Lv20 unlocks the 3-chief slot' },
  ],
};

export const spartans: SettlementTimeline = {
  tribe: 'spartans',
  approach: {
    zh: '斯巴達人兵種貴，但 Asclepeion 可復活 60% 陣亡單位，長線超強。開局像羅馬人一樣穩，只是開拓者更貴（每個約 20,000）。',
    en: 'Spartans run expensive troops, but Asclepeion revives 60% of fallen units — a massive long-term edge. Opening resembles Roman but with pricier settlers (~20,000 each).',
  },
  keyTips: [
    { zh: '英雄武器對所有斯巴達人同類兵 +50%，值得早投資英雄裝備', en: 'Hero weapons give +50% to ALL matching Spartan units — invest in hero gear early' },
    { zh: 'Shieldsman 速度 8 是全遊戲最快防禦步兵，鐵砧搭 Elpida Rider', en: 'Shieldsman speed 8 is the fastest def infantry in the game; pair with Elpida Rider on anvil' },
    { zh: 'Asclepeion 可復活 60% 陣亡單位（約支付 33% 訓練成本）—— 長線 def 經濟超強', en: 'Asclepeion revives 60% of fallen units (at ~33% of training cost) — massive long-term def economy edge' },
    { zh: 'Hoplite（速 6、def 35/30）是最通用的早期單位；Day 2+ 也可以拿來 farming 綠洲', en: 'Hoplite (speed 6, def 35/30) is the most versatile early Spartan unit; viable for oasis farming from Day 2+' },
  ],
};

export const vikings: SettlementTimeline = {
  tribe: 'vikings',
  approach: {
    zh: '維京人玩法靠水：深水移動速度 24 格/小時（他族 18），跨水域作戰超強。Thrall 是快訓廉價步兵（類似日耳曼人 Clubswinger）。Berserker 死前反擊機制獨特。',
    en: 'Vikings leverage water: deep-water speed 24 fields/hr vs 18 for others, dominating cross-map ops. Thrall is the fast cheap infantry (like Teuton Clubswinger). Berserker has unique damage-on-death.',
  },
  keyTips: [
    { zh: '地圖有大量水域才發揮維京人優勢，純陸圖選羅馬人 / 高盧人會更舒服', en: 'Vikings shine on water-heavy maps; on pure land maps, Romans/Gauls are smoother' },
    { zh: 'Berserker 死前反擊：攻擊時每死 1 隻殺敵 1 隻，無視牆 + 瞭望塔', en: 'Berserker damage-on-death: each fallen Berserker kills 1 enemy, ignoring wall + watchtower bonuses' },
    { zh: '深水移動速度 24 格/小時（他族 18）—— 地圖有水域時 Viking 跨區打很吃香', en: 'Deep-water speed 24 fields/hr (vs 18 for others) — on water-heavy maps, Vikings excel at cross-map operations' },
    { zh: 'Thrall 是廉價掠奪步兵（類似日耳曼人 Clubswinger），800 秒訓練。無水圖時回退走 Teuton-style raiding', en: 'Thrall is cheap raiding infantry (like Teuton Clubswinger), 800s train time. On landlocked maps, fall back to Teuton-style raiding' },
  ],
};
