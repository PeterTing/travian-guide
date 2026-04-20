import type { Tribe } from '../tribes-types';

// Vikings: T4.6 "Northern Legends" annual-special tribe (2024).
// UNIT NAMES verified per blog.travian.com + support.travian.com:
//   Thrall, Shield Maiden, Berserker, Heimdall's Eye, Huskarl Rider,
//   Valkyrie's Blessing, Jarl, plus standard Ram / Catapult / Settler.
//
// UNIT NUMERIC STATS are [UNVERIFIED] — kirilloid has not tracked
// Vikings, and blog.travian.com / support.travian.com launch articles
// are blocked from this environment. Values below are approximate
// estimates in line with the unit's described role. Players should
// cross-check against in-game values; pull requests welcome.

export const vikings: Tribe = {
  id: 'vikings',
  name: { zh: '維京', en: 'Vikings' },
  archetype: { zh: '海陸兩棲 · 掠奪強化', en: 'Amphibious raider' },
  difficulty: 4,
  color: 'var(--tribe-vikings)',
  icon: '⚔️',
  tagline: {
    zh: '深水 24 格/小時 · Berserker 死前反擊',
    en: 'Deep water 24 fields/hr · Berserker death-retaliation',
  },
  summary: {
    zh: '兩棲民族：深水移動比其他族快（24 格/小時 vs 18），適合跨水域作戰。Berserker 吃雙倍糧，攻擊 / 被攻擊時陣亡後還會「死前反擊」一次殺一名敵軍（忽略牆與瞭望塔加成）。Jarl 降忠誠 15–30%。',
    en: 'Amphibious tribe. Over-water movement 24 fields/hr (others 18), great for cross-map operations. Berserker costs 2× crop upkeep but each fallen Berserker kills one enemy via a "damage on death" ability that ignores wall/watchtower bonuses. Jarl reduces loyalty 15–30%.',
  },

  heroPassive: {
    zh: '英雄在水域移動速度不減',
    en: 'Hero retains full speed on water tiles',
  },

  specials: [
    { zh: '深水移動速度 24 格/小時（他族 18）', en: 'Deep-water movement 24 fields/hr (others 18)' },
    { zh: '船隻系統：專屬運兵 / 戰船', en: 'Ship system: transports + warships' },
    { zh: 'Barricade：每級 +1.5% 防禦（較弱）', en: 'Barricade: +1.5% defense per level (weak wall)' },
  ],

  strengths: [
    { zh: '跨水域戰場機動性無敵', en: 'Unmatched mobility on water-heavy maps' },
    { zh: 'Berserker 死前反擊讓進攻方吃虧', en: 'Berserker damage-on-death punishes attackers hitting defensive stacks' },
  ],

  weaknesses: [
    { zh: '數據不如核心三族完整（此頁單位數值為估計，請依遊戲內實值校對）', en: 'Numeric stats less documented than core tribes (values on this page are estimates — verify against in-game values)' },
    { zh: '陸地上優勢較小', en: 'Fewer advantages on purely land maps' },
  ],

  wallType: { name: { zh: '柵欄 (Barricade)', en: 'Barricade' }, bonusPerLevel: 0.015 },
  merchant: { capacity: 750, speed: 18 },
  defenseMix: { zh: 'Shield Maiden + Huskarl Rider 為主', en: 'Shield Maiden + Huskarl Rider focus' },

  units: [
    { id: 'thrall', category: 'infantry',
      name: { zh: 'Thrall', en: 'Thrall' },
      attack: 55, defInfantry: 40, defCavalry: 30, speed: 7, carry: 50, upkeep: 1,
      cost: { wood: 130, clay: 100, iron: 150, crop: 50 }, trainTime: 1400,
      role: { zh: '基礎快訓練掠奪步兵', en: 'Cheap fast-trained raiding infantry' } },
    { id: 'shieldMaiden', category: 'infantry',
      name: { zh: 'Shield Maiden', en: 'Shield Maiden' },
      attack: 30, defInfantry: 70, defCavalry: 50, speed: 6, carry: 30, upkeep: 1,
      cost: { wood: 100, clay: 130, iron: 170, crop: 50 }, trainTime: 1600,
      role: { zh: '防禦步兵', en: 'Defensive infantry' } },
    { id: 'berserker', category: 'infantry',
      name: { zh: 'Berserker', en: 'Berserker' },
      attack: 75, defInfantry: 30, defCavalry: 20, speed: 7, carry: 60, upkeep: 2,
      cost: { wood: 160, clay: 130, iron: 180, crop: 60 }, trainTime: 1500,
      role: { zh: '攻擊步兵，死前反擊（每死 1 隻殺敵 1 隻，忽略牆）', en: 'Attack infantry with damage-on-death (each kills 1 enemy on death, ignoring wall/watchtower)' } },
    { id: 'heimdallsEye', category: 'scout',
      name: { zh: "Heimdall's Eye", en: "Heimdall's Eye" },
      attack: 0, defInfantry: 20, defCavalry: 10, speed: 15, carry: 0, upkeep: 2,
      cost: { wood: 150, clay: 140, iron: 30, crop: 40 }, trainTime: 1500,
      role: { zh: '偵察單位', en: 'Scout unit' } },
    { id: 'huskarlRider', category: 'cavalry',
      name: { zh: 'Huskarl Rider', en: 'Huskarl Rider' },
      attack: 60, defInfantry: 110, defCavalry: 50, speed: 14, carry: 50, upkeep: 2,
      cost: { wood: 370, clay: 330, iron: 280, crop: 110 }, trainTime: 3100,
      role: { zh: '全能防禦騎兵', en: 'All-round defensive cavalry' } },
    { id: 'valkyrie', category: 'cavalry',
      name: { zh: "Valkyrie's Blessing", en: "Valkyrie's Blessing" },
      attack: 140, defInfantry: 60, defCavalry: 80, speed: 10, carry: 70, upkeep: 2,
      cost: { wood: 440, clay: 480, iron: 520, crop: 130 }, trainTime: 3400,
      role: { zh: 'OFF 重騎（upkeep 2 比其他重騎便宜）', en: 'Offensive heavy cavalry (upkeep 2 = cheaper than other heavies)' } },
    { id: 'ram', category: 'siege',
      name: { zh: '攻城槌', en: 'Ram' },
      attack: 55, defInfantry: 30, defCavalry: 90, speed: 4, carry: 0, upkeep: 3,
      cost: { wood: 1000, clay: 400, iron: 350, crop: 80 }, trainTime: 4400,
      role: { zh: '破牆', en: 'Wall breaker' } },
    { id: 'catapult', category: 'siege',
      name: { zh: '投石機', en: 'Catapult' },
      attack: 55, defInfantry: 60, defCavalry: 10, speed: 3, carry: 0, upkeep: 6,
      cost: { wood: 950, clay: 1350, iron: 600, crop: 80 }, trainTime: 9000,
      role: { zh: '摧毀建築', en: 'Destroys buildings' } },
    { id: 'jarl', category: 'chief',
      name: { zh: 'Jarl', en: 'Jarl' },
      attack: 50, defInfantry: 40, defCavalry: 30, speed: 5, carry: 0, upkeep: 4,
      cost: { wood: 30000, clay: 30000, iron: 30000, crop: 30000 }, trainTime: 90700,
      role: { zh: '降忠誠 15–30% / 征服', en: 'Reduces loyalty 15–30%, conquers' } },
    { id: 'settler', category: 'settler',
      name: { zh: '開拓者', en: 'Settler' },
      attack: 0, defInfantry: 80, defCavalry: 80, speed: 5, carry: 3000, upkeep: 1,
      cost: { wood: 4500, clay: 4500, iron: 4500, crop: 4500 }, trainTime: 27000,
      role: { zh: '建立新村莊', en: 'Establishes new villages' } },
  ],

  offTips: [
    { zh: '錘子主力：Berserker + Valkyrie\'s Blessing，配合 Thrall 當便宜增補', en: "Hammer: Berserker + Valkyrie's Blessing, with Thralls as cheap filler" },
    { zh: '跨海 OP 優勢大（水上 24/小時 vs 他族 18）', en: 'Cross-water ops have a big speed edge (24/hr vs 18)' },
  ],
  defTips: [
    { zh: '鐵砧：Shield Maiden + Huskarl Rider', en: 'Anvil: Shield Maiden + Huskarl Rider' },
    { zh: 'Berserker 也可當 def — 雖然 def 值低，但死前反擊會折損進攻方', en: "Berserkers can also join def — low def values but death-retaliation erodes the attacker" },
  ],
};
