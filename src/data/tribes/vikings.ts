import type { Tribe } from '../tribes-types';

// Vikings are a later T4.6 annual-special tribe ("Northern Legends").
// Unit stat tables for Vikings are less widely documented than the core
// tribes; values below are the commonly-cited stats from blog.travian.com
// and community guides. Mark any remaining uncertainty with role notes.

export const vikings: Tribe = {
  id: 'vikings',
  name: { zh: '維京', en: 'Vikings' },
  archetype: { zh: '海陸兩棲 · 掠奪強化', en: 'Amphibious raider' },
  difficulty: 4,
  color: 'var(--tribe-vikings)',
  icon: '⚔️',
  tagline: {
    zh: '大海水上高速 · Berserker 反擊',
    en: 'Fast on open water · Berserker counter-strikes',
  },
  summary: {
    zh: '兩棲民族：深水移動比其他族快（24 格/小時 vs 18），適合跨水域作戰。Berserker 有反擊機制，Jarl 降忠誠 15–30%。需要熟悉水域機制才能發揮。',
    en: 'Amphibious tribe. Over-water movement is faster than other tribes (24 fields/hr vs 18), great for cross-map operations. Berserker has a retaliation mechanic; Jarl reduces loyalty 15–30%. Needs map / water knowledge to shine.',
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
    { zh: '跨水域戰場機動性無敵', en: 'Unmatched mobility on maps with water' },
    { zh: 'Berserker 反擊機制讓敵軍吃虧', en: 'Berserker retaliation punishes attackers' },
  ],

  weaknesses: [
    { zh: '數據不如核心三族完整，需實戰驗證', en: 'Stats less documented than core tribes; tune from actual play' },
    { zh: '陸地上優勢較小', en: 'Fewer advantages on purely land maps' },
  ],

  wallType: { name: { zh: '柵欄 (Barricade)', en: 'Barricade' }, bonusPerLevel: 0.015 },
  merchant: { capacity: 750, speed: 18 },
  defenseMix: { zh: '以 Huskarl Rider + Ulfhednar 為主', en: 'Huskarl Rider + Ulfhednar focus' },

  units: [
    { id: 'ulfhednar', category: 'infantry',
      name: { zh: 'Ulfhednar', en: 'Ulfhednar' },
      attack: 55, defInfantry: 40, defCavalry: 30, speed: 7, carry: 50, upkeep: 1,
      cost: { wood: 130, clay: 100, iron: 150, crop: 50 }, trainTime: 1400,
      role: { zh: '全能步兵', en: 'Versatile infantry' } },
    { id: 'berserker', category: 'infantry',
      name: { zh: 'Berserker', en: 'Berserker' },
      attack: 75, defInfantry: 30, defCavalry: 20, speed: 7, carry: 60, upkeep: 1,
      cost: { wood: 160, clay: 130, iron: 180, crop: 60 }, trainTime: 1500,
      role: { zh: '攻擊步兵，帶反擊機制', en: 'Attack infantry with retaliation' } },
    { id: 'skald', category: 'scout',
      name: { zh: 'Skald', en: 'Skald' },
      attack: 0, defInfantry: 20, defCavalry: 10, speed: 15, carry: 0, upkeep: 2,
      cost: { wood: 150, clay: 140, iron: 30, crop: 40 }, trainTime: 1500,
      role: { zh: '偵察 / 文化單位', en: 'Scout / lore unit' } },
    { id: 'huskarlRider', category: 'cavalry',
      name: { zh: 'Huskarl Rider', en: 'Huskarl Rider' },
      attack: 60, defInfantry: 110, defCavalry: 50, speed: 14, carry: 50, upkeep: 2,
      cost: { wood: 370, clay: 330, iron: 280, crop: 110 }, trainTime: 3100,
      role: { zh: '防禦騎兵', en: 'Defensive cavalry' } },
    { id: 'valkyrie', category: 'cavalry',
      name: { zh: 'Valkyrie', en: 'Valkyrie' },
      attack: 140, defInfantry: 60, defCavalry: 80, speed: 10, carry: 70, upkeep: 2,
      cost: { wood: 440, clay: 480, iron: 520, crop: 130 }, trainTime: 3400,
      role: { zh: 'OFF 騎兵', en: 'Offensive cavalry' } },
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
    { zh: '錘子主力：Berserker + Valkyrie，打跨海 OP 優勢大', en: 'Hammer: Berserker + Valkyrie; cross-water ops excel' },
  ],
  defTips: [
    { zh: '鐵砧：Huskarl Rider + Ulfhednar', en: 'Anvil: Huskarl Rider + Ulfhednar' },
  ],
};
