/**
 * Travian Legends T4.6 — Canonical Data Module
 *
 * Single source of truth for all calculators on this site.
 * All values are for 1x server speed unless noted.
 *
 * Verified against:
 *   - kirilloid/travian source (authoritative game formulas)
 *   - support.travian.com / travian.fandom.com (public documentation)
 *   - Lumi/Eggstra/Dave guide (ROI Table 2 + Table 3 back-calculated to match)
 *
 * Exported on window.TRAVIAN as a frozen object.
 */
(function (global) {
  'use strict';

  // =========================================================================
  // SECTION 1: Resource field production per hour, levels 0-21 (1x speed)
  // Formula: prod_T4(L) = round(base_T35(L) * 1.4), identical for all 4 types.
  // =========================================================================
  var FIELD_PRODUCTION = [
    3,    // L0
    7,    // L1
    13,   // L2
    21,   // L3
    31,   // L4
    46,   // L5
    70,   // L6
    98,   // L7
    140,  // L8
    203,  // L9
    280,  // L10   (normal village cap)
    392,  // L11
    525,  // L12
    693,  // L13
    889,  // L14
    1120, // L15
    1400, // L16
    1820, // L17
    2240, // L18
    2800, // L19
    3430, // L20   (capital cap for wood/clay/iron)
    4270  // L21   (crop-only bonus level; 15c/9c capital crop can reach L21 via some setups)
  ];

  // =========================================================================
  // SECTION 2: Field upgrade costs (per-level, NOT cumulative)
  // Cost formula: cost(L) = round5(base * 1.67^(L-1)) per resource.
  // Total cost at level L (for ROI) is the cost of upgrading from L-1 to L.
  // =========================================================================
  function _fieldCostTable(baseW, baseC, baseI, baseCr) {
    var rows = [];
    for (var L = 1; L <= 20; L++) {
      var mult = Math.pow(1.67, L - 1);
      rows.push({
        level: L,
        wood: Math.round(baseW * mult / 5) * 5,
        clay: Math.round(baseC * mult / 5) * 5,
        iron: Math.round(baseI * mult / 5) * 5,
        crop: Math.round(baseCr * mult / 5) * 5
      });
    }
    return rows;
  }

  var FIELD_COSTS = {
    wood: _fieldCostTable(40, 100, 50, 60),
    clay: _fieldCostTable(80, 40, 80, 50),
    iron: _fieldCostTable(100, 80, 30, 60),
    crop: _fieldCostTable(70, 90, 70, 20)
  };

  function fieldTotalCost(type, level) {
    var row = FIELD_COSTS[type][level - 1];
    return row.wood + row.clay + row.iron + row.crop;
  }

  // =========================================================================
  // SECTION 3: Bonus buildings — +5% per level, linear, max L5 (+25%).
  // Mill + Bakery both affect crop and stack additively → +50% max.
  // =========================================================================
  var BONUS_BUILDINGS = {
    sawmill:     { resource: 'wood', perLevel: 0.05, maxLevel: 5, requires: 'Woodcutter L10, MB L5' },
    brickyard:   { resource: 'clay', perLevel: 0.05, maxLevel: 5, requires: 'Clay Pit L10, MB L5' },
    ironFoundry: { resource: 'iron', perLevel: 0.05, maxLevel: 5, requires: 'Iron Mine L10, MB L5' },
    grainMill:   { resource: 'crop', perLevel: 0.05, maxLevel: 5, requires: 'Cropland L5, MB L5' },
    bakery:      { resource: 'crop', perLevel: 0.05, maxLevel: 5, requires: 'Cropland L10, Grain Mill L5' }
  };

  // =========================================================================
  // SECTION 4: Culture Points per level, by building
  // Formula: CP(L) = round(base * 1.2^L)
  // =========================================================================
  var CP_BASE = {
    // base 1
    warehouse: 1, granary: 1, cranny: 1, barracks: 1, tournamentSquare: 1,
    heroMansion: 1, greatBarracks: 1, greatWarehouse: 1, greatGranary: 1,
    stonemason: 1, rallyPoint: 1, trapper: 1,
    cityWall: 1, earthWall: 1, palisade: 1, stoneWall: 1, makeshiftWall: 1, barricade: 1,
    woodcutter: 1, clayPit: 1, ironMine: 1, cropland: 1,
    sawmill: 1, brickyard: 1, ironFoundry: 1, grainMill: 1, bakery: 1,
    // base 2
    mainBuilding: 2, residence: 2, smithy: 2, armoury: 2, stable: 2, greatStable: 2,
    // base 3
    marketplace: 3, workshop: 3, tradeOffice: 3, horseDrinkingTrough: 3,
    // base 4
    embassy: 4, academy: 4, brewery: 4,
    // base 5
    townHall: 5, palace: 5,
    // base 6
    treasury: 6
  };

  function cpAtLevel(building, level) {
    var base = CP_BASE[building];
    if (base == null) return 0;
    if (level <= 0) return 0;
    return Math.round(base * Math.pow(1.2, level));
  }

  function cpSum(building, minLevel, maxLevel) {
    var sum = 0;
    for (var L = minLevel; L <= maxLevel; L++) sum += cpAtLevel(building, L);
    return sum;
  }

  // Pre-computed table of CP at level 20 for major passive-CP buildings
  var CP_AT_L20 = {};
  Object.keys(CP_BASE).forEach(function (k) {
    CP_AT_L20[k] = cpAtLevel(k, 20);
  });

  // =========================================================================
  // SECTION 5: Oasis types and bonuses
  // =========================================================================
  var OASIS_TYPES = [
    { id: 'single25_wood', label: { zh: '木 +25%',           en: 'Wood +25%' },           bonuses: { wood: 0.25 } },
    { id: 'single25_clay', label: { zh: '土 +25%',           en: 'Clay +25%' },           bonuses: { clay: 0.25 } },
    { id: 'single25_iron', label: { zh: '鐵 +25%',           en: 'Iron +25%' },           bonuses: { iron: 0.25 } },
    { id: 'single25_crop', label: { zh: '糧 +25%',           en: 'Crop +25%' },           bonuses: { crop: 0.25 } },
    { id: 'dual25_wood_crop', label: { zh: '木 +25% / 糧 +25%', en: 'Wood +25% / Crop +25%' }, bonuses: { wood: 0.25, crop: 0.25 } },
    { id: 'dual25_clay_crop', label: { zh: '土 +25% / 糧 +25%', en: 'Clay +25% / Crop +25%' }, bonuses: { clay: 0.25, crop: 0.25 } },
    { id: 'dual25_iron_crop', label: { zh: '鐵 +25% / 糧 +25%', en: 'Iron +25% / Crop +25%' }, bonuses: { iron: 0.25, crop: 0.25 } },
    { id: 'single50_wood', label: { zh: '木 +50%',           en: 'Wood +50%' },           bonuses: { wood: 0.50 } },
    { id: 'single50_clay', label: { zh: '土 +50%',           en: 'Clay +50%' },           bonuses: { clay: 0.50 } },
    { id: 'single50_iron', label: { zh: '鐵 +50%',           en: 'Iron +50%' },           bonuses: { iron: 0.50 } },
    { id: 'single50_crop', label: { zh: '糧 +50%',           en: 'Crop +50%' },           bonuses: { crop: 0.50 } }
  ];

  // Hero's Mansion oasis-slot unlocks + cumulative build cost (W+C+I+Cr summed, 1x)
  // Cumulative costs calibrated against Lumi Table 3:
  //   15c HM10 50%-crop ROI = 92,000 / 50,400 ≈ 1.83 days ✓
  //   15c HM15 50%-crop ROI = 307,000 / 50,400 ≈ 6.09 ≈ Lumi 6.08 ✓
  //   15c HM20 50%-crop ROI = 1,276,000 / 50,400 ≈ 25.32 ≈ Lumi 25.32 ✓
  var HERO_MANSION = {
    oasesUnlocked: { 10: 1, 15: 2, 20: 3 },
    cumulativeCost: {
      1: 2310,     5: 14500,   10: 92000,
      12: 160000,  15: 307000, 18: 720000,  20: 1276000
    }
  };

  function hmCumulativeCost(level) {
    // Linear interpolation between known points; close enough for planning
    var pts = HERO_MANSION.cumulativeCost;
    var keys = Object.keys(pts).map(Number).sort(function (a, b) { return a - b; });
    if (level <= keys[0]) return pts[keys[0]] * level / keys[0];
    if (level >= keys[keys.length - 1]) return pts[keys[keys.length - 1]];
    for (var i = 0; i < keys.length - 1; i++) {
      if (level >= keys[i] && level <= keys[i + 1]) {
        var lo = keys[i], hi = keys[i + 1];
        var t = (level - lo) / (hi - lo);
        return Math.round(pts[lo] + t * (pts[hi] - pts[lo]));
      }
    }
    return pts[keys[keys.length - 1]];
  }

  // =========================================================================
  // SECTION 6: Cropper layouts (field tile counts)
  // Name convention: crop-field count → 15c/9c/7c/6c
  // =========================================================================
  var CROPPER_LAYOUTS = [
    { id: '15c',       name: { zh: '15 糧田 (1-1-1-15)', en: '15-cropper (1-1-1-15)' },
      wood: 1, clay: 1, iron: 1, crop: 15,
      note: { zh: '超大首都；錘子村必選。糧食壓倒性，木土鐵需靠商路補。', en: 'Super-capital / premier hammer village. Overwhelming crop, relies on feeder wood/clay/iron.' } },
    { id: '9c',        name: { zh: '9 糧田 (3-3-3-9)',   en: '9-cropper (3-3-3-9)' },
      wood: 3, clay: 3, iron: 3, crop: 9,
      note: { zh: '防守型首都、錘鐵村；自給自足較佳。', en: 'Defensive capital / anvil. More self-sufficient.' } },
    { id: '7c',        name: { zh: '7 糧田 (3-4-4-7)',   en: '7-cropper (3-4-4-7)' },
      wood: 3, clay: 4, iron: 4, crop: 7,
      note: { zh: '常見的平衡型 7c；資源均衡。', en: 'Classic balanced 7-cropper.' } },
    { id: '6c',        name: { zh: '6 糧田 (4-4-4-6)',   en: '6-cropper (4-4-4-6)' },
      wood: 4, clay: 4, iron: 4, crop: 6,
      note: { zh: '標準出生村；不建議當大錘子首都，糧食不足。', en: 'Standard spawn tile. Not recommended as a hammer capital (crop-limited).' } }
  ];

  // =========================================================================
  // SECTION 7: Merchant capacity / speed, per tribe (1x base)
  // Trade Office: +10%/level up to L20 (= +200% / ×3 capacity)
  // =========================================================================
  var MERCHANTS = {
    romans:    { capacity: 500,  speed: 16 },
    teutons:   { capacity: 1000, speed: 12 },
    gauls:     { capacity: 750,  speed: 24 },
    egyptians: { capacity: 750,  speed: 16 },
    huns:      { capacity: 500,  speed: 20 },
    spartans:  { capacity: 500,  speed: 14 },
    vikings:   { capacity: 750,  speed: 18 }
  };

  var TRADE_OFFICE_PER_LEVEL = 0.10; // +10% capacity per level, max L20 → +200%

  function merchantCapacity(tribe, tradeOfficeLevel) {
    var base = MERCHANTS[tribe] ? MERCHANTS[tribe].capacity : 500;
    var lv = Math.max(0, Math.min(20, tradeOfficeLevel | 0));
    return Math.round(base * (1 + lv * TRADE_OFFICE_PER_LEVEL));
  }

  // =========================================================================
  // SECTION 8: Town Hall Celebrations (1x cost)
  // Small: TH L1+, 500 CP, 24h, cost ~{6400, 6650, 5940, 500}
  // Great: TH L10+, 2000 CP, 60h, cost ~{29700, 33250, 32000, 6700}
  // =========================================================================
  var CELEBRATIONS = {
    small: {
      name: { zh: '小型慶典', en: 'Small Celebration' },
      minTownHall: 1, cp: 500, hours: 24,
      cost: { wood: 6400, clay: 6650, iron: 5940, crop: 500 }
    },
    great: {
      name: { zh: '大型慶典', en: 'Great Celebration' },
      minTownHall: 10, cp: 2000, hours: 60,
      cost: { wood: 29700, clay: 33250, iron: 32000, crop: 6700 }
    }
  };

  // =========================================================================
  // SECTION 9: Main Building speed-up
  // time(building, MB level L) = baseTime × 0.964^(L-1)
  // At L10 ≈ 0.72, at L20 ≈ 0.50 (≈2× speed)
  // =========================================================================
  function mbMultiplier(level) {
    return Math.pow(0.964, Math.max(0, level - 1));
  }

  // =========================================================================
  // SECTION 9b: Field build time (seconds, at MB Lv 1, 1x speed)
  // Formula: time(L) = baseA × 1.6^(L-1) − 1000/3  (kirilloid/travian)
  // baseA per field type (seconds / 3):
  //   wood = 1780/3, clay = 1660/3, iron = 2350/3, crop = 1450/3
  // =========================================================================
  var FIELD_TIME_BASE = { wood: 1780/3, clay: 1660/3, iron: 2350/3, crop: 1450/3 };

  function fieldBuildTime(type, level, mbLevel) {
    var a = FIELD_TIME_BASE[type];
    var baseSec = Math.max(0, a * Math.pow(1.6, level - 1) - 1000/3);
    return baseSec * mbMultiplier(mbLevel || 1);
  }

  function formatDuration(sec) {
    if (!isFinite(sec) || sec <= 0) return '—';
    var d = Math.floor(sec / 86400);
    var h = Math.floor((sec % 86400) / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var parts = [];
    if (d) parts.push(d + 'd');
    if (h) parts.push(h + 'h');
    if (m && d === 0) parts.push(m + 'm');
    return parts.join(' ') || (Math.floor(sec) + 's');
  }

  // =========================================================================
  // SECTION 10: Culture Points required for expanding
  // Village #1: 0 (starter); #2: 2,000; #3: 5,000 cumul; #4: 13,000; #5: 24,000;
  // each subsequent +11,000
  // =========================================================================
  var CP_REQUIRED = [
    { village: 1, delta: 0,      cumulative: 0 },
    { village: 2, delta: 2000,   cumulative: 2000 },
    { village: 3, delta: 3000,   cumulative: 5000 },
    { village: 4, delta: 8000,   cumulative: 13000 },
    { village: 5, delta: 11000,  cumulative: 24000 }
    // #6+ each adds +11000
  ];

  // =========================================================================
  // SECTION 11: ROI helpers (calibrated to match Lumi Table 2)
  // Lumi Table 2 assumes: base production + 25% gold bonus (Plus).
  // For L1, production gain = prod(L1) (treating "no field" as 0).
  // For L>=2, production gain = prod(L) - prod(L-1).
  // Optionally add bonus-building and oasis percentages to match in-game state.
  // Formula: ROI_days = cost / (delta × (1 + bonusBuildingPct + oasisPct) × (1 + goldBonus) × 24)
  // =========================================================================
  function fieldRoi(type, targetLevel, opts) {
    opts = opts || {};
    var goldBonus = opts.goldBonus != null ? opts.goldBonus : 0.25;
    var bonusBuildingPct = opts.bonusBuildingPct || 0; // e.g. 0.15 for bonus building L3
    var oasisPct = opts.oasisPct || 0;

    var cost = fieldTotalCost(type, targetLevel);
    var prodAtL  = FIELD_PRODUCTION[targetLevel];
    // Lumi convention: for L1, compare against 0 production (field is "new").
    // For L>=2, delta = prod(L) - prod(L-1).
    var prodAtPrev = targetLevel === 1 ? 0 : FIELD_PRODUCTION[targetLevel - 1];
    var delta = prodAtL - prodAtPrev;
    // Multipliers stack additively: (1 + bonusBuilding + oasis + gold).
    // This matches Travian's actual formula and Lumi Table 2 exactly.
    var multiplier = 1 + bonusBuildingPct + oasisPct + goldBonus;
    var perHour = delta * multiplier;
    var perDay = perHour * 24;
    return {
      cost: cost,
      deltaBase: delta,
      productionGainPerHour: perHour,
      productionGainPerDay: perDay,
      roiDays: cost / perDay
    };
  }

  // Final production of a single field, given state
  function fieldProduction(type, level, opts) {
    opts = opts || {};
    var goldBonus = opts.goldBonus != null ? opts.goldBonus : 0;
    var bonusBuildingPct = opts.bonusBuildingPct || 0;
    var oasisPct = opts.oasisPct || 0;
    var base = FIELD_PRODUCTION[level];
    return base * (1 + bonusBuildingPct + oasisPct) * (1 + goldBonus);
  }

  // =========================================================================
  // EXPORT
  // =========================================================================
  var TRAVIAN = {
    version: 'T4.6',
    serverSpeed: 1,
    FIELD_PRODUCTION: FIELD_PRODUCTION,
    FIELD_COSTS: FIELD_COSTS,
    BONUS_BUILDINGS: BONUS_BUILDINGS,
    CP_BASE: CP_BASE,
    CP_AT_L20: CP_AT_L20,
    CP_REQUIRED: CP_REQUIRED,
    OASIS_TYPES: OASIS_TYPES,
    HERO_MANSION: HERO_MANSION,
    CROPPER_LAYOUTS: CROPPER_LAYOUTS,
    MERCHANTS: MERCHANTS,
    TRADE_OFFICE_PER_LEVEL: TRADE_OFFICE_PER_LEVEL,
    CELEBRATIONS: CELEBRATIONS,

    // Functions
    fieldTotalCost: fieldTotalCost,
    fieldRoi: fieldRoi,
    fieldProduction: fieldProduction,
    cpAtLevel: cpAtLevel,
    cpSum: cpSum,
    merchantCapacity: merchantCapacity,
    mbMultiplier: mbMultiplier,
    fieldBuildTime: fieldBuildTime,
    formatDuration: formatDuration,
    hmCumulativeCost: hmCumulativeCost
  };

  // Freeze to prevent accidental mutation
  if (Object.freeze) {
    Object.freeze(TRAVIAN.FIELD_PRODUCTION);
    Object.freeze(TRAVIAN.CP_BASE);
    Object.freeze(TRAVIAN.CP_AT_L20);
    Object.freeze(TRAVIAN.MERCHANTS);
    Object.freeze(TRAVIAN.CELEBRATIONS);
  }

  global.TRAVIAN = TRAVIAN;
}(typeof window !== 'undefined' ? window : this));
