import type { Tribe } from '../tribes-types';

// Spartans: T4.6 "Fire & Sand" / "Glory of Sparta" annual-special tribe.
// Unit stats from blog.travian.com launch announcements.

export const spartans: Tribe = {
  id: 'spartans',
  name: { zh: '斯巴達', en: 'Spartans' },
  archetype: { zh: '精兵 / 軍事型', en: 'Elite military' },
  difficulty: 5,
  color: 'var(--tribe-spartans)',
  icon: '🛡️',
  tagline: {
    zh: 'Asclepeion 復活 60% 陣亡 · 英雄武器 +50% 同族',
    en: 'Asclepeion revives 60% of fallen · Hero weapons grant +50% to all Spartan units',
  },
  summary: {
    zh: '昂貴但效率極高：Asclepeion 戰後可復活 60% 陣亡單位，Ephor 獨特降忠誠機制，英雄武器對所有斯巴達兵加成 +50%（其他族只給自己）。需要玩家了解深入機制。',
    en: 'Expensive but extremely efficient. Asclepeion revives 60% of fallen troops post-battle. Ephor has a unique loyalty-reduction mechanic. Hero weapons apply a +50% bonus to ALL Spartan units (other tribes benefit only the wearer). Requires a deeper grasp of mechanics.',
  },

  heroPassive: {
    zh: '英雄武器加成適用於所有斯巴達同類兵種 +50%',
    en: 'Hero weapon bonus applies to all Spartan units of the matching category (+50%)',
  },

  specials: [
    { zh: 'Asclepeion：戰鬥後可復活 60% 陣亡單位', en: 'Asclepeion: revives 60% of fallen troops after battle' },
    { zh: 'Stone Wall 柵欄版：每級 +2.5% 防禦', en: 'Palisade-style wall: +2.5% per level' },
    { zh: 'Ephor 降忠誠 20–25%', en: 'Ephor: reduces loyalty 20–25%' },
  ],

  strengths: [
    { zh: 'Asclepeion 讓戰損大幅降低（尤其 def）', en: 'Asclepeion drastically reduces losses (especially on def)' },
    { zh: 'Elpida Rider 高防騎兵（120/90）', en: 'Elpida Rider: heavy def cavalry (120/90)' },
    { zh: 'Twinsteel / Corinthian 高攻（90 / 160）', en: 'Twinsteel + Corinthian Crusher are top-tier (90 / 160 atk)' },
  ],

  weaknesses: [
    { zh: '兵種成本極高（200–770/單位）', en: 'Very expensive per unit (200–770 resources)' },
    { zh: '前期慢熱，需要穩定經濟支撐', en: 'Slow start, needs stable economy' },
    { zh: '非主流族，資料與範本比較少', en: 'Non-mainstream tribe, less community tooling' },
  ],

  wallType: { name: { zh: '柵欄 (Palisade)', en: 'Palisade' }, bonusPerLevel: 0.025 },
  merchant: { capacity: 500, speed: 14 },
  defenseMix: { zh: 'Shieldsman + Elpida Rider', en: 'Shieldsman + Elpida Rider' },

  units: [
    { id: 'hoplite', category: 'infantry',
      name: { zh: '重甲兵', en: 'Hoplite' },
      attack: 50, defInfantry: 35, defCavalry: 30, speed: 6, carry: 40, upkeep: 1,
      cost: { wood: 110, clay: 185, iron: 110, crop: 35 }, trainTime: 1700,
      role: { zh: '基礎步兵', en: 'Basic infantry' } },
    { id: 'sentinel', category: 'scout',
      name: { zh: 'Sentinel', en: 'Sentinel' },
      attack: 0, defInfantry: 40, defCavalry: 22, speed: 9, carry: 0, upkeep: 1,
      cost: { wood: 0, clay: 185, iron: 150, crop: 35 }, trainTime: 1230,
      role: { zh: '步行偵察（高防）', en: 'Foot scout (high def)' } },
    { id: 'shieldsman', category: 'infantry',
      name: { zh: '盾兵', en: 'Shieldsman' },
      attack: 40, defInfantry: 85, defCavalry: 45, speed: 8, carry: 45, upkeep: 1,
      cost: { wood: 145, clay: 95, iron: 245, crop: 45 }, trainTime: 1936,
      role: { zh: '防禦主力', en: 'Defensive backbone' } },
    { id: 'twinsteel', category: 'infantry',
      name: { zh: 'Twinsteel Therion', en: 'Twinsteel Therion' },
      attack: 90, defInfantry: 55, defCavalry: 40, speed: 6, carry: 50, upkeep: 1,
      cost: { wood: 130, clay: 200, iron: 400, crop: 65 }, trainTime: 2112,
      role: { zh: '高攻步兵', en: 'High-attack infantry' } },
    { id: 'elpida', category: 'cavalry',
      name: { zh: 'Elpida Rider', en: 'Elpida Rider' },
      attack: 55, defInfantry: 120, defCavalry: 90, speed: 16, carry: 55, upkeep: 2,
      cost: { wood: 555, clay: 445, iron: 330, crop: 110 }, trainTime: 2816,
      role: { zh: '高速重防騎兵', en: 'Fast heavy defensive cavalry' } },
    { id: 'corinthian', category: 'cavalry',
      name: { zh: 'Corinthian Crusher', en: 'Corinthian Crusher' },
      attack: 160, defInfantry: 70, defCavalry: 90, speed: 13, carry: 80, upkeep: 3,
      cost: { wood: 720, clay: 680, iron: 770, crop: 170 }, trainTime: 3500,
      role: { zh: 'OFF 主力重騎', en: 'Main offensive heavy cavalry' } },
    { id: 'ram', category: 'siege',
      name: { zh: '攻城槌', en: 'Ram' },
      attack: 60, defInfantry: 30, defCavalry: 80, speed: 4, carry: 0, upkeep: 3,
      cost: { wood: 1000, clay: 440, iron: 400, crop: 80 }, trainTime: 4800,
      role: { zh: '破牆', en: 'Wall breaker' } },
    { id: 'catapult', category: 'siege',
      name: { zh: '投石機', en: 'Catapult' },
      attack: 65, defInfantry: 55, defCavalry: 10, speed: 3, carry: 0, upkeep: 6,
      cost: { wood: 950, clay: 1400, iron: 650, crop: 100 }, trainTime: 9000,
      role: { zh: '摧毀建築', en: 'Destroys buildings' } },
    { id: 'ephor', category: 'chief',
      name: { zh: 'Ephor', en: 'Ephor' },
      attack: 40, defInfantry: 50, defCavalry: 30, speed: 4, carry: 0, upkeep: 4,
      cost: { wood: 32500, clay: 35000, iron: 32500, crop: 35000 }, trainTime: 90700,
      role: { zh: '獨特降忠誠 20–25%', en: 'Unique 20–25% loyalty reduction' } },
    { id: 'settler', category: 'settler',
      name: { zh: '開拓者', en: 'Settler' },
      attack: 0, defInfantry: 80, defCavalry: 80, speed: 5, carry: 3000, upkeep: 1,
      cost: { wood: 5000, clay: 5000, iron: 5000, crop: 5000 }, trainTime: 27000,
      role: { zh: '建立新村莊', en: 'Establishes new villages' } },
  ],

  offTips: [
    { zh: '錘子主力：Twinsteel + Corinthian Crusher + Asclepeion（戰損低 40%）', en: 'Hammer: Twinsteel + Corinthian Crusher + Asclepeion (40% fewer net losses)' },
    { zh: '英雄武器 +50% 族內同類兵加成，投資英雄很划算', en: 'Hero weapon +50% to matching Spartan units — invest heavily in hero gear' },
  ],
  defTips: [
    { zh: '鐵砧：Shieldsman + Elpida Rider；Asclepeion 讓 def 回本快', en: 'Anvil: Shieldsman + Elpida Rider; Asclepeion turns def into a long-term investment' },
  ],
};
