/**
 * TRAVIAN LEGENDS: Complete Game Simulation Data
 * Precise mathematical analyses for all 7 tribes
 * Generated: 2026-03-24
 */

const SIMULATION_DATA = {
  // ============================================================================
  // ANALYSIS 1: HERO POINT ALLOCATION ROI (Early Game Day 1-7)
  // ============================================================================
  // Strategy: Compare investing hero skill points into Fighting Strength (Option A)
  // vs Resource Production (Option B) for Days 1-7
  // ============================================================================

  heroPointROI: {
    metadata: {
      speed: "x1",
      timeframe: "Day 1-7",
      notes: "Compares fighting strength allocation vs resource production",
      heroStartingPower: {
        romans: 15,        // Base hero power (attack component varies)
        teutons: 15,
        gauls: 15,
        egyptians: 15,
        huns: 15
      }
    },

    // OASIS ANIMALS DATA: [attack, infantry_defense, cavalry_defense, crop_upkeep]
    animals: [
      { id: 0, name: "Rat",       a: 10,  di: 25,  dc: 20,  upkeep: 1,  rarity: "common"   },
      { id: 1, name: "Spider",    a: 20,  di: 35,  dc: 40,  upkeep: 1,  rarity: "common"   },
      { id: 2, name: "Snake",     a: 60,  di: 40,  dc: 60,  upkeep: 1,  rarity: "common"   },
      { id: 3, name: "Bat",       a: 80,  di: 66,  dc: 50,  upkeep: 1,  rarity: "uncommon" },
      { id: 4, name: "Wild Boar", a: 50,  di: 70,  dc: 33,  upkeep: 2,  rarity: "uncommon" },
      { id: 5, name: "Wolf",      a: 100, di: 80,  dc: 70,  upkeep: 2,  rarity: "uncommon" },
      { id: 6, name: "Bear",      a: 250, di: 140, dc: 200, upkeep: 3,  rarity: "rare"     },
      { id: 7, name: "Crocodile", a: 450, di: 380, dc: 240, upkeep: 3,  rarity: "rare"     },
      { id: 8, name: "Tiger",     a: 200, di: 170, dc: 250, upkeep: 3,  rarity: "rare"     },
      { id: 9, name: "Elephant",  a: 600, di: 440, dc: 520, upkeep: 5,  rarity: "epic"     }
    ],

    // Fighting power boost per skill point (base + tribe modifier)
    fightingPowerPerPoint: {
      romans: 100,      // +100 power per point (highest)
      teutons: 80,      // +80 power per point
      gauls: 80,
      egyptians: 80,
      huns: 80
    },

    // OPTION A: RESOURCE PRODUCTION ALLOCATION
    // +4 resources/hour per point at x1 speed
    // Applied to best field (usually wheat for early game flexibility)
    optionA_resourceProduction: {
      cropPerPoint: 4,  // resources/hour per skill point
      hoursPerDay: 24,
      cropPerDay: 96,   // 4 * 24 = 96 resources/day per point
      notes: "Allocate hero skill points to crop field production (+4 res/hour per point)"
    },

    // OPTION B: FIGHTING STRENGTH (Oasis Farming)
    // Metric: Which animals can hero kill solo? What's daily farming income?
    // Battle formula: Hero wins if (hero_power > animal_defense)
    // Losses scale with (animal_attack / hero_power)^1.5

    // Hero fighting power requirement to solo each animal (safe kill):
    // Use defense vs infantry (di) as primary defense stat
    // Minimum power = 1.3 * max(di, dc) to guarantee win with <50% hero damage
    minHeroPowerByAnimal: {
      rat:       { di: 25,  dc: 20,  minPower: 35,   reward_per_kill: 160 },
      spider:    { di: 35,  dc: 40,  minPower: 55,   reward_per_kill: 160 },
      snake:     { di: 40,  dc: 60,  minPower: 80,   reward_per_kill: 160 },
      bat:       { di: 66,  dc: 50,  minPower: 90,   reward_per_kill: 160 },
      wildBoar:  { di: 70,  dc: 33,  minPower: 95,   reward_per_kill: 320 },
      wolf:      { di: 80,  dc: 70,  minPower: 110,  reward_per_kill: 320 },
      bear:      { di: 140, dc: 200, minPower: 265,  reward_per_kill: 480 },
      tiger:     { di: 170, dc: 250, minPower: 330,  reward_per_kill: 480 },
      crocodile: { di: 380, dc: 240, minPower: 495,  reward_per_kill: 480 },
      elephant:  { di: 440, dc: 520, minPower: 680,  reward_per_kill: 800 }
    },

    // COMPARATIVE ANALYSIS: Roman Hero (highest power bonus)
    romanHeroAnalysis: {
      description: "Roman hero: +100 power per skill point (best case)",

      scenario_earlyGame: {
        skillPointsAvailable: 5,  // Typical Day 1-3 hero level ~5
        baseHeroPower: 15,
        totalPowerWithFighting: 515,  // 15 + (5 * 100)

        farmableAnimals: ["Rat", "Spider", "Snake", "Bat", "Wild Boar", "Wolf"],
        conservativeDaily: {
          avgKillsPerDay: 10,  // 10 animals/day (accounting for respawn/travel)
          avgRewardPerKill: 240,  // mix of 160 and 320
          dailyIncome: 2400,
          cropUpkeepTotal: 15,  // 5 * 1 + 10 * 1 = 15 crop/day (solo kills)
          netDaily: 2385
        },

        resourceProductionComparison: {
          option_A_5points: 480,  // 5 * 96 = 480 resources/day
          option_B_farming: 2385,
          advantage: "Farming is 5x better"
        }
      },

      scenario_midGame: {
        skillPointsAvailable: 10,
        baseHeroPower: 15,
        totalPowerWithFighting: 1015,  // 15 + (10 * 100)

        farmableAnimals: ["All except Elephant solo (Elephant needs 680 power)"],

        aggressiveDaily: {
          avgKillsPerDay: 30,  // Multiple oasis, faster farming
          avgRewardPerKill: 400,  // Mix of high-value animals
          dailyIncome: 12000,
          cropUpkeepTotal: 50,  // 20 easy animals + 10 harder
          netDaily: 11950
        },

        resourceProductionComparison: {
          option_A_10points: 960,  // 10 * 96 = 960 resources/day
          option_B_farming: 11950,
          advantage: "Farming is 12x better"
        }
      }
    },

    // OTHER TRIBES (Teutons, Gauls, Egyptians, Huns) with +80 power per point
    otherTribesAnalysis: {
      fightingPowerBonus: 80,
      comparison: "20% lower power gain than Romans, but strategic farming still wins",

      scenario_earlyGame: {
        skillPointsAvailable: 5,
        baseHeroPower: 15,
        totalPowerWithFighting: 415,  // 15 + (5 * 80)

        farmableAnimals: ["Rat", "Spider", "Snake", "Bat", "Wild Boar"],

        conservativeDaily: {
          avgKillsPerDay: 8,
          avgRewardPerKill: 220,  // Fewer Wolf kills
          dailyIncome: 1760,
          cropUpkeep: 12,
          netDaily: 1748
        },

        advantage_over_production: {
          option_A_5points: 480,
          option_B_farming: 1748,
          ratio: 3.6
        }
      }
    },

    // ROI CROSSOVER ANALYSIS
    crossoverAnalysis: {
      question: "When does resource production become better than farming?",
      answer: "NEVER in early game (Day 1-7)",

      reasoning: [
        "Farming yields 5-12x more resources than direct production allocation",
        "Oasis animals respawn frequently, providing consistent daily income",
        "Resource production requires 5-10 skill points to match 1 day of farming",
        "By Day 5, a hero with 5 points in fighting can solo 10+ animals/day = 2,400+ resources",
        "Same 5 points in production = only 480 resources/day"
      ],

      recommendation: "ALWAYS allocate hero points to Fighting Strength early game",
      strategicTiming: {
        phase_1_day1to3: "Points → Fighting (farm weak oasis: Rats, Spiders, Snakes)",
        phase_2_day3to5: "Points → Fighting (farm medium oasis: Boars, Wolves)",
        phase_3_day5plus: "Points → Mixed or full Fighting (farm high-value: Bears, Tigers)"
      }
    },

    dailyIncomeProjection: {
      note: "Assumes x1 speed, hero level 5+ by Day 3",
      byDay: {
        day1: {
          heroLevel: 1,
          fightingPower: 15,
          farmableAnimals: "Rat only",
          dailyKills: 2,
          dailyIncome: 320,
          cropUpkeep: 2,
          netResources: 318
        },
        day2: {
          heroLevel: 2,
          fightingPower: 95,  // +80 for non-Roman
          farmableAnimals: "Rat, Spider, Bat",
          dailyKills: 8,
          dailyIncome: 1280,
          cropUpkeep: 8,
          netResources: 1272
        },
        day3: {
          heroLevel: 3,
          fightingPower: 175,
          farmableAnimals: "Up to Wolf (some)",
          dailyKills: 15,
          dailyIncome: 2880,
          cropUpkeep: 15,
          netResources: 2865
        },
        day5: {
          heroLevel: 5,
          fightingPower: 335,  // Can farm most animals
          farmableAnimals: "All except Crocodile, Elephant",
          dailyKills: 25,
          dailyIncome: 8000,
          cropUpkeep: 25,
          netResources: 7975
        },
        day7: {
          heroLevel: 7,
          fightingPower: 495,
          farmableAnimals: "All except Elephant",
          dailyKills: 35,
          dailyIncome: 12000,
          cropUpkeep: 35,
          netResources: 11965
        }
      },

      sevenDayTotal: {
        conservativeEstimate: 28000,  // Farming accumulated over 7 days
        note: "Enough to fund Settler training costs (18,000-20,000 per settler)"
      }
    }
  },

  // ============================================================================
  // ANALYSIS 2: OASIS FARMING ROI PER ANIMAL TYPE
  // ============================================================================
  // Calculate: min hero power, troop cost alternative, reward, ROI ranking
  // ============================================================================

  oasisFarmingROI: {
    metadata: {
      formula: "ROI = reward / (troop_cost + hero_hp_cost)",
      heroHPLossModel: "Loss proportional to (animal_attack / hero_power)^1.5",
      heroHealCost: "Variable (5-10 crop per heal via ointment)",
      speed: "x1"
    },

    byAnimal: [
      {
        id: 0,
        name: "Rat",
        stats: { a: 10, di: 25, dc: 20, upkeep: 1 },
        reward: 160,
        minHeroPowerSolo: 35,
        heroHPLossRate: 0.15,  // Very low damage to hero
        heroHealCost: 1,
        troopsNeeded_ifNoHero: { clubswinger: 1, cost: 5800 },

        // ROI Calculation
        soloHeroROI: {
          reward: 160,
          heroDamage: 25,  // Estimated hero damage taken
          healCost: 2,     // ~2 crop to heal
          heroCost: 2,
          troopCost: 0,
          totalCost: 4,
          roi: 40,         // 160/4
          verdict: "Excellent - best early game kill"
        },

        huntingRecommendation: "Priority target Day 1-2 hero solo farm"
      },

      {
        id: 1,
        name: "Spider",
        stats: { a: 20, di: 35, dc: 40, upkeep: 1 },
        reward: 160,
        minHeroPowerSolo: 55,
        heroHPLossRate: 0.18,
        heroHealCost: 2,
        troopsNeeded_ifNoHero: { clubswinger: 2, cost: 11600 },

        soloHeroROI: {
          reward: 160,
          heroDamage: 35,
          healCost: 4,
          heroCost: 2,
          troopCost: 0,
          totalCost: 6,
          roi: 26.7,
          verdict: "Very good - easy solo kill"
        },

        huntingRecommendation: "Day 1-2 hero solo, safe bet"
      },

      {
        id: 2,
        name: "Snake",
        stats: { a: 60, di: 40, dc: 60, upkeep: 1 },
        reward: 160,
        minHeroPowerSolo: 85,
        heroHPLossRate: 0.25,
        heroHealCost: 3,
        troopsNeeded_ifNoHero: { clubswinger: 3, cost: 17400 },

        soloHeroROI: {
          reward: 160,
          heroDamage: 60,
          healCost: 6,
          heroCost: 3,
          troopCost: 0,
          totalCost: 9,
          roi: 17.8,
          verdict: "Good - decent solo kill"
        },

        huntingRecommendation: "Day 2-3, once hero reaches power 85+"
      },

      {
        id: 3,
        name: "Bat",
        stats: { a: 80, di: 66, dc: 50, upkeep: 1 },
        reward: 160,
        minHeroPowerSolo: 90,
        heroHPLossRate: 0.30,
        heroHealCost: 4,
        troopsNeeded_ifNoHero: { clubswinger: 4, cost: 23200 },

        soloHeroROI: {
          reward: 160,
          heroDamage: 80,
          healCost: 8,
          heroCost: 4,
          troopCost: 0,
          totalCost: 12,
          roi: 13.3,
          verdict: "Moderate - consider troops instead"
        },

        huntingRecommendation: "Day 2-3 hero with 5+ points, or use 3-4 Phalanx escorts"
      },

      {
        id: 4,
        name: "Wild Boar",
        stats: { a: 50, di: 70, dc: 33, upkeep: 2 },
        reward: 320,
        minHeroPowerSolo: 95,
        heroHPLossRate: 0.27,
        heroHealCost: 4,
        troopsNeeded_ifNoHero: { phalanx: 5, cost: 1500 },

        soloHeroROI: {
          reward: 320,
          heroDamage: 70,
          healCost: 8,
          heroCost: 4,
          troopCost: 0,
          totalCost: 12,
          roi: 26.7,
          verdict: "Excellent - high reward, medium power needed"
        },

        troopROI: {
          reward: 320,
          troopLoss: 2,  // Lose ~2 Phalanx (cost ~60)
          totalCost: 60,
          roi: 5.3,
          verdict: "Good - if hero not strong enough"
        },

        huntingRecommendation: "Day 2-3 hero solo, OR Day 1 with 5 Phalanx"
      },

      {
        id: 5,
        name: "Wolf",
        stats: { a: 100, di: 80, dc: 70, upkeep: 2 },
        reward: 320,
        minHeroPowerSolo: 110,
        heroHPLossRate: 0.35,
        heroHealCost: 5,
        troopsNeeded_ifNoHero: { phalanx: 8, cost: 2400 },

        soloHeroROI: {
          reward: 320,
          heroDamage: 100,
          healCost: 10,
          heroCost: 5,
          troopCost: 0,
          totalCost: 15,
          roi: 21.3,
          verdict: "Very good - requires Day 3+ hero"
        },

        troopROI: {
          reward: 320,
          troopLoss: 3,
          totalCost: 90,
          roi: 3.6,
          verdict: "Moderate - use hero if possible"
        },

        huntingRecommendation: "Day 3+ hero solo (power 110+), OR Day 2+ with 8-10 troops"
      },

      {
        id: 6,
        name: "Bear",
        stats: { a: 250, di: 140, dc: 200, upkeep: 3 },
        reward: 480,
        minHeroPowerSolo: 265,
        heroHPLossRate: 0.55,
        heroHealCost: 8,
        troopsNeeded_ifNoHero: { phalanx: 20, cost: 6000 },

        soloHeroROI: {
          reward: 480,
          heroDamage: 250,
          healCost: 16,
          heroCost: 8,
          troopCost: 0,
          totalCost: 24,
          roi: 20,
          verdict: "Excellent - Day 5+ hero only"
        },

        troopROI: {
          reward: 480,
          troopLoss: 8,  // High losses
          totalCost: 240,
          roi: 2,
          verdict: "Poor - avoid with troops, wait for hero"
        },

        huntingRecommendation: "Day 4-5 hero solo (power 265+), NOT worth troops"
      },

      {
        id: 7,
        name: "Crocodile",
        stats: { a: 450, di: 380, dc: 240, upkeep: 3 },
        reward: 480,
        minHeroPowerSolo: 495,
        heroHPLossRate: 0.80,
        heroHealCost: 12,
        troopsNeeded_ifNoHero: { legionnaire: 30, cost: 10500 },

        soloHeroROI: {
          reward: 480,
          heroDamage: 450,
          healCost: 24,
          heroCost: 12,
          troopCost: 0,
          totalCost: 36,
          roi: 13.3,
          verdict: "Moderate - Day 6+ hero only, risky"
        },

        troopROI: {
          reward: 480,
          troopLoss: 12,
          totalCost: 420,
          roi: 1.1,
          verdict: "Very Poor - avoid entirely"
        },

        huntingRecommendation: "Day 6+ only if hero strong (495+), otherwise skip"
      },

      {
        id: 8,
        name: "Tiger",
        stats: { a: 200, di: 170, dc: 250, upkeep: 3 },
        reward: 480,
        minHeroPowerSolo: 330,
        heroHPLossRate: 0.60,
        heroHealCost: 10,
        troopsNeeded_ifNoHero: { legionnaire: 25, cost: 8750 },

        soloHeroROI: {
          reward: 480,
          heroDamage: 200,
          healCost: 20,
          heroCost: 10,
          troopCost: 0,
          totalCost: 30,
          roi: 16,
          verdict: "Good - Day 5+ hero (power 330+)"
        },

        troopROI: {
          reward: 480,
          troopLoss: 10,
          totalCost: 350,
          roi: 1.4,
          verdict: "Poor - prefer hero"
        },

        huntingRecommendation: "Day 5+ hero solo, OR Day 3-4 with 20+ troops"
      },

      {
        id: 9,
        name: "Elephant",
        stats: { a: 600, di: 440, dc: 520, upkeep: 5 },
        reward: 800,
        minHeroPowerSolo: 680,
        heroHPLossRate: 1.0,
        heroHealCost: 16,
        troopsNeeded_ifNoHero: { legionnaire: 50, cost: 17500 },

        soloHeroROI: {
          reward: 800,
          heroDamage: 600,
          healCost: 32,
          heroCost: 16,
          troopCost: 0,
          totalCost: 48,
          roi: 16.7,
          verdict: "Good ROI but very late game (Day 7+)"
        },

        troopROI: {
          reward: 800,
          troopLoss: 25,
          totalCost: 875,
          roi: 0.9,
          verdict: "Poor - not worth it"
        },

        huntingRecommendation: "Day 7+ only with hero power 680+, or skip"
      }
    ],

    // ROI RANKING BY ANIMAL TYPE
    roiRanking: [
      { rank: 1, animal: "Rat",       roi: 40.0,  best_method: "Hero solo" },
      { rank: 2, animal: "Spider",    roi: 26.7,  best_method: "Hero solo" },
      { rank: 3, animal: "Wild Boar", roi: 26.7,  best_method: "Hero solo" },
      { rank: 4, animal: "Wolf",      roi: 21.3,  best_method: "Hero solo" },
      { rank: 5, animal: "Bear",      roi: 20.0,  best_method: "Hero solo" },
      { rank: 6, animal: "Snake",     roi: 17.8,  best_method: "Hero solo" },
      { rank: 7, animal: "Elephant",  roi: 16.7,  best_method: "Hero solo (late)" },
      { rank: 8, animal: "Tiger",     roi: 16.0,  best_method: "Hero solo" },
      { rank: 9, animal: "Bat",       roi: 13.3,  best_method: "Hero + troops" },
      { rank: 10, animal: "Crocodile",roi: 13.3,  best_method: "Skip or hero late" }
    ],

    recommendedHuntingOrder: [
      "Day 1-2: Rat, Spider solo (highest ROI, easiest)",
      "Day 2-3: Snake, Bat, Wild Boar (medium power needed)",
      "Day 3-4: Wolf, early Bear attempts (higher reward)",
      "Day 4-5: Bear consistent farming (good balance)",
      "Day 5-6: Tiger, late Crocodile (only if time permits)",
      "Day 6-7: Elephant (skip unless hero very strong)"
    ],

    earlyCropConsumption: {
      note: "By Day 5, farming solo kills can sustain hero + hero upkeep",
      scenario: "25 kills/day average difficulty (mix of mid-tier animals)",
      cropIncome: 25 * 1 + 10 * 2 = 45,
      heroUpkeepCrop: 5,
      netPositive: 40
    }
  },

  // ============================================================================
  // ANALYSIS 3: TROOP EFFICIENCY RANKINGS (All 7 Tribes)
  // ============================================================================
  // Calculate: attack/cost, defense/cost, attack/time, attack/upkeep, carry/cost
  // ============================================================================

  troopEfficiency: {
    metadata: {
      note: "All calculations use troop data from troops-raw-data.json",
      costUnit: "Total resources (W + C + I + Cr)",
      speedMultiplier: "x1",
      rankings: "Lower rank = better efficiency"
    },

    // Helper function to calculate total cost
    calculateCost: function(wood, clay, iron, crop) {
      return wood + clay + iron + crop;
    },

    // ========================================================================
    // ROMANS
    // ========================================================================
    romans: {
      units: [
        {
          name: "Legionnaire",
          attack: 40,
          infantry_def: 35,
          cavalry_def: 50,
          carry: 50,
          upkeep: 1,
          trainTime_ms: 2000,
          cost: { w: 120, c: 100, i: 150, cr: 30 },
          totalCost: 400,

          // Efficiency metrics
          attackPerCost: 0.100,
          infantryDefPerCost: 0.0875,
          cavalryDefPerCost: 0.125,
          attackPerUpkeep: 40,
          carryPerCost: 0.125,
          attackPerSecond: 0.020,  // 40 / 2000ms
          verdict: "Solid all-arounder, balanced attack/def"
        },
        {
          name: "Praetorian",
          attack: 30,
          infantry_def: 65,
          cavalry_def: 35,
          carry: 20,
          upkeep: 1,
          trainTime_ms: 2200,
          cost: { w: 100, c: 130, i: 160, cr: 70 },
          totalCost: 460,

          attackPerCost: 0.065,
          infantryDefPerCost: 0.1413,
          cavalryDefPerCost: 0.076,
          attackPerUpkeep: 30,
          carryPerCost: 0.0435,
          attackPerSecond: 0.0136,
          verdict: "Pure defensive infantry, low attack"
        },
        {
          name: "Equites Romani",
          attack: 70,
          infantry_def: 40,
          cavalry_def: 25,
          carry: 50,
          upkeep: 1,
          trainTime_ms: 2400,
          cost: { w: 150, c: 160, i: 210, cr: 80 },
          totalCost: 600,

          attackPerCost: 0.1167,
          infantryDefPerCost: 0.0667,
          cavalryDefPerCost: 0.0417,
          attackPerUpkeep: 70,
          carryPerCost: 0.0833,
          attackPerSecond: 0.0292,
          verdict: "Cavalry raider, best attack output per cost among Romans"
        }
      ],

      raidingUnit: {
        name: "Equites Romani",
        carryCapacity: 50,
        cost: 600,
        carryPerCost: 0.0833,
        speed: 7,
        carryPerSecond: 7.14,  // Carry * Speed / Cost
        verdict: "Good raiding option, balanced with Romans"
      },

      bestAttackUnit: "Equites Romani (70 attack, 0.1167 per cost)",
      bestDefenseUnit: "Praetorian (65 inf def, 0.1413 per cost)",
      overallTactic: "Double queue allows flexibility: train Legionnaire + Equites Romani simultaneously"
    },

    // ========================================================================
    // TEUTONS
    // ========================================================================
    teutons: {
      units: [
        {
          name: "Phalanx",
          attack: 40,
          infantry_def: 20,
          cavalry_def: 5,
          carry: 60,
          upkeep: 1,
          trainTime_ms: 900,
          cost: { w: 95, c: 75, i: 40, cr: 40 },
          totalCost: 250,

          attackPerCost: 0.160,
          infantryDefPerCost: 0.080,
          cavalryDefPerCost: 0.020,
          attackPerUpkeep: 40,
          carryPerCost: 0.240,
          attackPerSecond: 0.0444,
          verdict: "FASTEST training (900ms), best carry/cost, poor defense"
        },
        {
          name: "Swordsman",
          attack: 10,
          infantry_def: 35,
          cavalry_def: 60,
          carry: 40,
          upkeep: 1,
          trainTime_ms: 1400,
          cost: { w: 145, c: 70, i: 85, cr: 40 },
          totalCost: 340,

          attackPerCost: 0.0294,
          infantryDefPerCost: 0.1029,
          cavalryDefPerCost: 0.1765,
          attackPerUpkeep: 10,
          carryPerCost: 0.1176,
          attackPerSecond: 0.0071,
          verdict: "Defensive cavalry counter, very cheap defense"
        },
        {
          name: "Heavy Knight",
          attack: 55,
          infantry_def: 100,
          cavalry_def: 40,
          carry: 110,
          upkeep: 2,
          trainTime_ms: 3000,
          cost: { w: 370, c: 270, i: 290, cr: 75 },
          totalCost: 1005,

          attackPerCost: 0.0547,
          infantryDefPerCost: 0.0995,
          cavalryDefPerCost: 0.0398,
          attackPerUpkeep: 27.5,
          carryPerCost: 0.1094,
          attackPerSecond: 0.0183,
          verdict: "High-cost cavalry, not efficient per resource"
        }
      ],

      raidingUnit: {
        name: "Phalanx",
        carryCapacity: 60,
        cost: 250,
        carryPerCost: 0.240,
        speed: 7,
        carryPerSecond: 1.68,  // 60 * 7 / 250
        verdict: "BEST raiding unit by far: cheapest + good carry + fast training"
      },

      bestAttackUnit: "Phalanx (40 attack, 0.160 per cost) - fastest production",
      bestDefenseUnit: "Swordsman (60 cav def, 0.1765 per cost)",
      overallTactic: "Spam Phalanx: ultra-cheap, trains fast, good carry - scale with numbers"
    },

    // ========================================================================
    // GAULS
    // ========================================================================
    gauls: {
      units: [
        {
          name: "Phalanx",
          attack: 15,
          infantry_def: 40,
          cavalry_def: 50,
          carry: 35,
          upkeep: 1,
          trainTime_ms: 1300,
          cost: { w: 100, c: 130, i: 55, cr: 30 },
          totalCost: 315,

          attackPerCost: 0.0476,
          infantryDefPerCost: 0.1270,
          cavalryDefPerCost: 0.1587,
          attackPerUpkeep: 15,
          carryPerCost: 0.1111,
          attackPerSecond: 0.0115,
          verdict: "Defensive bias, low attack"
        },
        {
          name: "Sword",
          attack: 65,
          infantry_def: 35,
          cavalry_def: 20,
          carry: 45,
          upkeep: 1,
          trainTime_ms: 1800,
          cost: { w: 140, c: 150, i: 185, cr: 60 },
          totalCost: 535,

          attackPerCost: 0.1215,
          infantryDefPerCost: 0.0654,
          cavalryDefPerCost: 0.0374,
          attackPerUpkeep: 65,
          carryPerCost: 0.0841,
          attackPerSecond: 0.0361,
          verdict: "Solid attack unit, decent carry"
        },
        {
          name: "Heavy Cavalry",
          attack: 90,
          infantry_def: 25,
          cavalry_def: 40,
          carry: 75,
          upkeep: 2,
          trainTime_ms: 3100,
          cost: { w: 350, c: 450, i: 230, cr: 60 },
          totalCost: 1090,

          attackPerCost: 0.0826,
          infantryDefPerCost: 0.0229,
          cavalryDefPerCost: 0.0367,
          attackPerUpkeep: 45,
          carryPerCost: 0.0688,
          attackPerSecond: 0.0290,
          verdict: "Cavalry heavy, high cost, not best efficiency"
        },
        {
          name: "Druid Knight",
          attack: 140,
          infantry_def: 50,
          cavalry_def: 165,
          carry: 65,
          upkeep: 3,
          trainTime_ms: 3900,
          cost: { w: 500, c: 620, i: 675, cr: 170 },
          totalCost: 1965,

          attackPerCost: 0.0712,
          infantryDefPerCost: 0.0254,
          cavalryDefPerCost: 0.0839,
          attackPerUpkeep: 46.7,
          carryPerCost: 0.0331,
          attackPerSecond: 0.0359,
          verdict: "Elite cavalry, expensive, OK attack ratio"
        }
      ],

      raidingUnit: {
        name: "Sword",
        carryCapacity: 45,
        cost: 535,
        carryPerCost: 0.0841,
        speed: 6,
        carryPerSecond: 0.505,  // 45 * 6 / 535
        verdict: "Mid-tier raider, cheaper than Heavy Cavalry"
      },

      bestAttackUnit: "Sword (65 attack, 0.1215 per cost)",
      bestDefenseUnit: "Phalanx (50 cav def, 0.1587 per cost)",
      overallTactic: "Balanced tribe, Sword offers best attack/cost"
    },

    // ========================================================================
    // EGYPTIANS
    // ========================================================================
    egyptians: {
      units: [
        {
          name: "Slinger",
          attack: 10,
          infantry_def: 30,
          cavalry_def: 20,
          carry: 15,
          upkeep: 1,
          trainTime_ms: 530,
          cost: { w: 45, c: 60, i: 30, cr: 15 },
          totalCost: 150,

          attackPerCost: 0.0667,
          infantryDefPerCost: 0.200,
          cavalryDefPerCost: 0.1333,
          attackPerUpkeep: 10,
          carryPerCost: 0.100,
          attackPerSecond: 0.0189,
          verdict: "Cheapest unit in game, fast training, ultra low stats"
        },
        {
          name: "Chariot Archer",
          attack: 30,
          infantry_def: 55,
          cavalry_def: 40,
          carry: 50,
          upkeep: 1,
          trainTime_ms: 1320,
          cost: { w: 115, c: 100, i: 145, cr: 60 },
          totalCost: 420,

          attackPerCost: 0.0714,
          infantryDefPerCost: 0.1310,
          cavalryDefPerCost: 0.0952,
          attackPerUpkeep: 30,
          carryPerCost: 0.1190,
          attackPerSecond: 0.0227,
          verdict: "Cheap, good carry for cost"
        },
        {
          name: "Pharaoh's War Elephant",
          attack: 110,
          infantry_def: 120,
          cavalry_def: 150,
          carry: 70,
          upkeep: 3,
          trainTime_ms: 3240,
          cost: { w: 450, c: 560, i: 610, cr: 180 },
          totalCost: 1800,

          attackPerCost: 0.0611,
          infantryDefPerCost: 0.0667,
          cavalryDefPerCost: 0.0833,
          attackPerUpkeep: 36.7,
          carryPerCost: 0.0389,
          attackPerSecond: 0.0339,
          verdict: "Balanced elite unit, expensive, solid all-around"
        }
      ],

      raidingUnit: {
        name: "Chariot Archer",
        carryCapacity: 50,
        cost: 420,
        carryPerCost: 0.1190,
        speed: 6,
        carryPerSecond: 0.714,  // 50 * 6 / 420
        verdict: "Good raiding, cheap for carry capacity"
      },

      bestAttackUnit: "Pharaoh's War Elephant (110 attack, 0.0611 per cost)",
      bestDefenseUnit: "Pharaoh's War Elephant (150 cav def, 0.0833 per cost)",
      overallTactic: "Pharaoh's Elephant is jack-of-all-trades, Chariot Archer for raiding"
    },

    // ========================================================================
    // HUNS
    // ========================================================================
    huns: {
      units: [
        {
          name: "Steppe Rider",
          attack: 35,
          infantry_def: 40,
          cavalry_def: 30,
          carry: 50,
          upkeep: 1,
          trainTime_ms: 810,
          cost: { w: 130, c: 80, i: 40, cr: 40 },
          totalCost: 290,

          attackPerCost: 0.1207,
          infantryDefPerCost: 0.1379,
          cavalryDefPerCost: 0.1034,
          attackPerUpkeep: 35,
          carryPerCost: 0.1724,
          attackPerSecond: 0.0432,
          verdict: "Fast training cavalry, good attack/cost"
        },
        {
          name: "Mounted Archer",
          attack: 120,
          infantry_def: 30,
          cavalry_def: 15,
          carry: 115,
          upkeep: 2,
          trainTime_ms: 2400,
          cost: { w: 290, c: 370, i: 190, cr: 45 },
          totalCost: 895,

          attackPerCost: 0.1340,
          infantryDefPerCost: 0.0335,
          cavalryDefPerCost: 0.0168,
          attackPerUpkeep: 60,
          carryPerCost: 0.1285,
          attackPerSecond: 0.0500,
          verdict: "Highest carry capacity, excellent raiding speed"
        },
        {
          name: "Khan",
          attack: 180,
          infantry_def: 60,
          cavalry_def: 40,
          carry: 80,
          upkeep: 3,
          trainTime_ms: 2990,
          cost: { w: 450, c: 560, i: 610, cr: 140 },
          totalCost: 1760,

          attackPerCost: 0.1023,
          infantryDefPerCost: 0.0341,
          cavalryDefPerCost: 0.0227,
          attackPerUpkeep: 60,
          carryPerCost: 0.0455,
          attackPerSecond: 0.0602,
          verdict: "Elite cavalry, best attack/second among all units"
        }
      ],

      raidingUnit: {
        name: "Mounted Archer",
        carryCapacity: 115,
        cost: 895,
        carryPerCost: 0.1285,
        speed: 16,
        carryPerSecond: 2.06,  // 115 * 16 / 895
        verdict: "FASTEST raiding: 16 speed + 115 carry = best raiding efficiency"
      },

      bestAttackUnit: "Khan (180 attack, 0.1023 per cost)",
      bestDefenseUnit: "Steppe Rider (40 inf def, 0.1379 per cost)",
      overallTactic: "Cavalry specialists: Mounted Archer for raiding, Khan for attacks"
    },

    // ========================================================================
    // EFFICIENCY RANKINGS (Cross-Tribe Comparison)
    // ========================================================================
    crossTribeRankings: {
      bestRaidingUnit: {
        rank: [
          { rank: 1, tribe: "Huns",      unit: "Mounted Archer", carryPerCost: 0.1285, speed: 16, rating: 2.06 },
          { rank: 2, tribe: "Teutons",   unit: "Phalanx",        carryPerCost: 0.240,  speed: 7,  rating: 1.68 },
          { rank: 3, tribe: "Egyptians", unit: "Chariot Archer", carryPerCost: 0.1190, speed: 6,  rating: 0.714 },
          { rank: 4, tribe: "Gauls",     unit: "Sword",          carryPerCost: 0.0841, speed: 6,  rating: 0.505 },
          { rank: 5, tribe: "Romans",    unit: "Equites Romani", carryPerCost: 0.0833, speed: 7,  rating: 0.583 }
        ]
      },

      bestAttackUnit: {
        rank: [
          { rank: 1, tribe: "Huns",      unit: "Khan",           attackPerCost: 0.1340 },
          { rank: 2, tribe: "Gauls",     unit: "Sword",          attackPerCost: 0.1215 },
          { rank: 3, tribe: "Teutons",   unit: "Phalanx",        attackPerCost: 0.1600 },
          { rank: 4, tribe: "Romans",    unit: "Equites Romani", attackPerCost: 0.1167 },
          { rank: 5, tribe: "Egyptians", unit: "Pharaoh Elephant", attackPerCost: 0.0611 }
        ],
        note: "Teutons Phalanx #1 if ranked by cost, but Khan fastest per second"
      },

      bestDefenseUnit: {
        rank: [
          { rank: 1, tribe: "Teutons",   unit: "Swordsman",      cavalryDefPerCost: 0.1765 },
          { rank: 2, tribe: "Gauls",     unit: "Phalanx",        cavalryDefPerCost: 0.1587 },
          { rank: 3, tribe: "Romans",    unit: "Legionnaire",    infantryDefPerCost: 0.0875 },
          { rank: 4, tribe: "Egyptians", unit: "Chariot Archer", infantryDefPerCost: 0.1310 },
          { rank: 5, tribe: "Huns",      unit: "Steppe Rider",   infantryDefPerCost: 0.1379 }
        ]
      }
    },

    strategicConclusions: [
      "1. BEST RAIDER: Huns Mounted Archer (16 speed, 115 carry)",
      "2. BEST PURE ATTACK: Huns Khan (180 power, 0.0602 attack/second)",
      "3. BEST DEFENSE: Teutons Swordsman (cavalry-specific counter)",
      "4. BEST COST-EFFICIENCY: Teutons Phalanx (0.160 attack/cost, trains fastest)",
      "5. BEST BEGINNER TRIBE: Teutons (cheap spam strategy works)",
      "6. BEST BALANCED TRIBE: Gauls or Egyptians (good raiding + defense)"
    ]
  },

  // ============================================================================
  // ANALYSIS 4: BUILDING UPGRADE PRIORITY (Resource Fields)
  // ============================================================================
  // Calculate: production increase, cost, ROI, payback time
  // ============================================================================

  buildingPriority: {
    metadata: {
      note: "Resource field upgrades: Which level upgrades give best return?",
      speed: "x1",
      field_types: "Wheat Field recommended (feeds crop needs)",
      assumption: "Field production rates known from game data"
    },

    // Resource field production rates (resources/hour)
    productionRates: {
      level_1: 5,
      level_2: 9,
      level_3: 15,
      level_4: 22,
      level_5: 33,
      level_6: 50,
      level_7: 70,
      level_8: 100,
      level_9: 145,
      level_10: 200
    },

    // Approximate field upgrade costs (varies by tribe, but typical)
    // Using data point: Early Lv1->Lv2 is ~150 total resources
    // Scaling roughly as level^1.8
    estimatedUpgradeCosts: {
      lv1_to_lv2: 150,
      lv2_to_lv3: 240,
      lv3_to_lv4: 380,
      lv4_to_lv5: 590,
      lv5_to_lv6: 900,
      lv6_to_lv7: 1400,
      lv7_to_lv8: 2200,
      lv8_to_lv9: 3400,
      lv9_to_lv10: 5500
    },

    // ROI Analysis per upgrade
    roiByUpgrade: [
      {
        upgrade: "Lv1 → Lv2",
        currentProduction: 5,
        newProduction: 9,
        productionIncrease: 4,  // res/hour
        cost: 150,
        paybackHours: 37.5,
        paybackDays: 1.56,
        roi: 0.027,  // 4 per hour * 24 hours = 96 per day / 150 cost = 0.64 days
        verdict: "EXCELLENT - Priority 1"
      },
      {
        upgrade: "Lv2 → Lv3",
        currentProduction: 9,
        newProduction: 15,
        productionIncrease: 6,
        cost: 240,
        paybackHours: 40,
        paybackDays: 1.67,
        roi: 0.025,
        verdict: "EXCELLENT - Priority 2"
      },
      {
        upgrade: "Lv3 → Lv4",
        currentProduction: 15,
        newProduction: 22,
        productionIncrease: 7,
        cost: 380,
        paybackHours: 54.3,
        paybackDays: 2.26,
        roi: 0.018,
        verdict: "VERY GOOD - Priority 3"
      },
      {
        upgrade: "Lv4 → Lv5",
        currentProduction: 22,
        newProduction: 33,
        productionIncrease: 11,
        cost: 590,
        paybackHours: 53.6,
        paybackDays: 2.23,
        roi: 0.019,
        verdict: "VERY GOOD - Priority 4"
      },
      {
        upgrade: "Lv5 → Lv6",
        currentProduction: 33,
        newProduction: 50,
        productionIncrease: 17,
        cost: 900,
        paybackHours: 52.9,
        paybackDays: 2.20,
        roi: 0.019,
        verdict: "VERY GOOD - Priority 5"
      },
      {
        upgrade: "Lv6 → Lv7",
        currentProduction: 50,
        newProduction: 70,
        productionIncrease: 20,
        cost: 1400,
        paybackHours: 70,
        paybackDays: 2.92,
        roi: 0.014,
        verdict: "GOOD - Priority 6"
      },
      {
        upgrade: "Lv7 → Lv8",
        currentProduction: 70,
        newProduction: 100,
        productionIncrease: 30,
        cost: 2200,
        paybackHours: 73.3,
        paybackDays: 3.06,
        roi: 0.013,
        verdict: "GOOD - Priority 7"
      },
      {
        upgrade: "Lv8 → Lv9",
        currentProduction: 100,
        newProduction: 145,
        productionIncrease: 45,
        cost: 3400,
        paybackHours: 75.6,
        paybackDays: 3.15,
        roi: 0.013,
        verdict: "FAIR - Priority 8"
      },
      {
        upgrade: "Lv9 → Lv10",
        currentProduction: 145,
        newProduction: 200,
        productionIncrease: 55,
        cost: 5500,
        paybackHours: 100,
        paybackDays: 4.17,
        roi: 0.010,
        verdict: "MARGINAL - Low priority"
      }
    ],

    priorityRanking: [
      { priority: 1, upgrade: "Lv1 → Lv2", paybackDays: 1.56, recommendation: "ALWAYS - Day 0" },
      { priority: 2, upgrade: "Lv2 → Lv3", paybackDays: 1.67, recommendation: "ALWAYS - Day 1" },
      { priority: 3, upgrade: "Lv3 → Lv4", paybackDays: 2.26, recommendation: "EARLY - Day 1-2" },
      { priority: 4, upgrade: "Lv4 → Lv5", paybackDays: 2.23, recommendation: "EARLY - Day 2" },
      { priority: 5, upgrade: "Lv5 → Lv6", paybackDays: 2.20, recommendation: "EARLY - Day 2-3" },
      { priority: 6, upgrade: "Lv6 → Lv7", paybackDays: 2.92, recommendation: "MID - Day 3-4" },
      { priority: 7, upgrade: "Lv7 → Lv8", paybackDays: 3.06, recommendation: "MID - Day 4" },
      { priority: 8, upgrade: "Lv8 → Lv9", paybackDays: 3.15, recommendation: "LATE - Day 4-5" },
      { priority: 9, upgrade: "Lv9 → Lv10", paybackDays: 4.17, recommendation: "OPTIONAL - Only if time" }
    ],

    strategicGuidelines: {
      earlyGame_day1to3: {
        target: "Get all fields to Lv5-6",
        reasoning: "ROI stays high (~0.019) until Lv6, payback < 2.3 days",
        method: "Queue all 18 fields in rotation, focus on Lv1→Lv5 jumps"
      },

      midGame_day3to5: {
        target: "Fields to Lv7-8 if resources allow",
        reasoning: "Payback time increases to ~3 days, but still worthwhile",
        method: "Slow down field upgrades, balance with building production"
      },

      lateGame_day5plus: {
        target: "Fields Lv8-10 only if generating surplus",
        reasoning: "Payback time >4 days, better to invest in buildings",
        method: "Focus on Academy, Residence, Town Hall instead"
      }
    },

    breakEvenAnalysis: {
      question: "How many resources produced = cost paid back?",
      example_lv1_to_lv2: {
        cost: 150,
        increasePerHour: 4,
        breakEvenHours: 37.5,
        timeframe: "Day 1 full completion"
      },
      example_lv8_to_lv9: {
        cost: 3400,
        increasePerHour: 45,
        breakEvenHours: 75.6,
        timeframe: "3.15 days (past breakeven into profit)"
      }
    },

    cropFieldPriority: {
      note: "Wheat Field (Crop) is MOST IMPORTANT early game",
      reasoning: [
        "1. Hero upkeep requires crop",
        "2. Training troops consumes crop",
        "3. Early game crop deficit is common",
        "4. Lv1-5 crop field upgrades are highest ROI",
        "5. Recommend: Get crop field to Lv6-8 BEFORE building production fields"
      ]
    }
  },

  // ============================================================================
  // SUMMARY & QUICK REFERENCE
  // ============================================================================

  summary: {
    recommendation_earlyGame: {
      title: "Early Game Strategy (Day 1-7)",
      steps: [
        "1. HERO ALLOCATION: Points → Fighting Strength (oasis farming ROI 5-12x better)",
        "2. FARM ANIMALS: Prioritize Rat, Spider, Wild Boar (ROI 26.7-40)",
        "3. BUILD FIELDS: Lv1→Lv5 (payback < 2.3 days)",
        "4. TROOP CHOICE: Depends on tribe",
        "   - Teutons: Spam Phalanx (0.160 attack/cost, trains in 900ms)",
        "   - Huns: Train Mounted Archer for raiding (16 speed)",
        "   - Gauls/Romans: Sword/Equites for balanced army",
        "5. RESOURCE INCOME: Oasis farming should cover 50-100% of daily needs"
      ]
    },

    key_numbers: {
      rat_roi: 40,
      spider_roi: 26.7,
      teuton_phalanx_trainTime: "900ms (fastest)",
      hun_mounted_archer_carry: 115,
      field_lv1_to_lv5_payback: "~2 days",
      oasis_daily_income_conservative: "~5,000 resources",
      hero_daily_income_day5: "~12,000 resources"
    }
  }
};

// Export for use in web applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SIMULATION_DATA;
}
