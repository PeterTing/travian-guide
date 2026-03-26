/**
 * TRAVIAN LEGENDS: Realistic Early-Game Strategy Simulation
 *
 * METHODOLOGY & REALISM ADJUSTMENTS
 * ==================================
 * Previous version was over-idealized. This rewrite incorporates:
 *
 * 1. OASIS ANIMAL DYNAMICS (Research Report §1, Fastest 2nd Village Guide §2):
 *    - During beginner protection (3 days): animals spawn ONCE only. If cleared, oasis stays empty.
 *    - After protection: animals respawn SLOWLY, competing with other players in range (5-10 tiles)
 *    - Real-world: Only 3-5 oases are consistently farmable for one player in early game
 *    - Most weak oases (Rats/Spiders) cleared by day 2-3 by other players
 *
 * 2. HERO ADVENTURE SYSTEM (Research Report §3):
 *    - First 31 adventures: NO equipment drops (resource+silver only)
 *    - Adventures do damage (normal ~10-30%, hard ~30-60% HP loss)
 *    - Hero death = 24hr revival + lost XP = MASSIVE penalty
 *    - Must keep >30% HP to safely adventure continuously
 *    - Healing items (ointment, bandage) are limited early game
 *
 * 3. RESOURCE PRODUCTION REALITY (Research Report §5):
 *    - Main Building level DIRECTLY affects build time (2-3% per level)
 *    - Resource field ROI diminishes after Lv5-6 in early game
 *    - Crop consumption accelerates with troop training
 *    - Hero resource production: +4 res/hour per point (x1 speed) - continuous, reliable
 *
 * 4. CP GENERATION BOTTLENECK (Fastest 2nd Village Guide §1.2, Research Report §7):
 *    - Small Celebration Lv1: CP = village's current daily CP production (not fixed 500)
 *    - Cooldown: 24 hours at Town Hall Lv1 (reduces with upgrades)
 *    - Early villages produce ~100-200 CP/day (passive buildings only)
 *    - Need ~6-8 celebrations + passive to reach 2,000 CP for 2nd village
 *    - CP is PRIMARY bottleneck, not resources
 *
 * 5. BEGINNER PROTECTION MECHANICS (Research Report §4):
 *    - Lasts exactly 3 days on x1 speed (72 hours)
 *    - Cannot be cancelled early
 *    - Ends for everyone simultaneously - sudden vulnerability
 *    - Scouting still works (gives warning, not full protection)
 *
 * 6. PHASE-BASED STRATEGY:
 *    - Phase 1 (0-72h): Economy setup, max oasis farming, hero adventures
 *    - Phase 2 (72-168h): Post-protection vulnerability, build defense, CP farming
 *    - Phase 3 (168h+): Military buildup, 2nd village prep, Settler training
 *
 * Generated: 2026-03-25
 */

const SIMULATION_DATA = {
  metadata: {
    speed: "x1",
    lastUpdated: "2026-03-25",
    researchBasis: [
      "TRAVIAN_RESEARCH_REPORT.md (11 searches, 15+ official pages)",
      "troops-raw-data.json (kirilloid/travian)",
      "fastest-2nd-village-guide.md (detailed timeline + calculations)"
    ],
    disclaimer: "All numbers are estimated or sourced. No made-up formulas."
  },

  // ============================================================================
  // SECTION 1: OASIS ANIMAL REALITY MODEL
  // ============================================================================
  oasisFarmingReality: {
    description: "Realistic oasis animal availability and respawn mechanics",

    animals: {
      // Source: troops-raw-data.json, creatures.nature array
      // Rewards: Formula = 40 resources per crop_upkeep point, per animal
      data: [
        { id: 0, name: "Rat",       attack: 10,  di: 25,  dc: 20,  upkeep: 1, reward: 160, rarity: "common" },
        { id: 1, name: "Spider",    attack: 20,  di: 35,  dc: 40,  upkeep: 1, reward: 160, rarity: "common" },
        { id: 2, name: "Snake",     attack: 60,  di: 40,  dc: 60,  upkeep: 1, reward: 160, rarity: "common" },
        { id: 3, name: "Bat",       attack: 80,  di: 66,  dc: 50,  upkeep: 1, reward: 160, rarity: "uncommon" },
        { id: 4, name: "Wild Boar", attack: 50,  di: 70,  dc: 33,  upkeep: 2, reward: 320, rarity: "uncommon" },
        { id: 5, name: "Wolf",      attack: 100, di: 80,  dc: 70,  upkeep: 2, reward: 320, rarity: "uncommon" },
        { id: 6, name: "Bear",      attack: 250, di: 140, dc: 200, upkeep: 3, reward: 480, rarity: "rare" },
        { id: 7, name: "Crocodile", attack: 450, di: 380, dc: 240, upkeep: 3, reward: 480, rarity: "rare" },
        { id: 8, name: "Tiger",     attack: 200, di: 170, dc: 250, upkeep: 3, reward: 480, rarity: "rare" },
        { id: 9, name: "Elephant",  attack: 600, di: 440, dc: 520, upkeep: 5, reward: 800, rarity: "epic" }
      ],

      earlyGameAvailability: {
        description: "Realistic oasis count and animal type distribution during beginner protection",

        // Phase 1: Day 1-3 (Beginner Protection)
        phase1_protection: {
          timeframe: "0-72 hours (Day 1-3)",
          safeOasisCount: {
            estimate: "3-5 oases within 5-10 tile range",
            rationale: "Typical village spawn has many oases, but other players also present. Conservative estimate: 4 oases max for solo farming"
          },
          animalsPerOasis: {
            weakOases: {
              types: ["Rat", "Spider", "Bat"],
              avgCountPerOasis: 3,
              totalWeak: "3 oases × 3 animals = ~9 weak animals",
              totalReward: "9 × 160 = 1,440 resources"
            },
            mixedOases: {
              types: ["Wild Boar", "Snake"],
              avgCountPerOasis: 2,
              totalMixed: "1-2 oases × 2 animals = ~3 mixed animals",
              totalReward: "3 × 240 (avg) = 720 resources"
            },
            totalPhase1: "~12 animals, ~2,160 resources (ONE-TIME BOUNTY)"
          },
          respawn: "NO respawn during protection phase. Animals cleared = oasis empty."
        },

        // Phase 2: Day 3-7 (Post-Protection Vulnerability)
        phase2_postProtection: {
          timeframe: "72-168 hours (Day 3-7)",
          safeOasisCount: {
            estimate: "1-2 oases max (now contested by other players + attackers)",
            rationale: "Protection ends for ALL players simultaneously. Now you can be attacked. Most weak oases already cleared by others."
          },
          respawnBehavior: {
            description: "Animals respawn slowly AFTER protection ends",
            respawnTime: "estimated 4-8 hours for weak animals (x1 speed)",
            respawnLimit: "spawn only 1-2 new animals per oasis per respawn cycle",
            competitionFactor: "Multiple players in range compete for same oases"
          },
          dailyFarmingPotential: {
            conservative: "2-3 animals/day from respawning oases = 400-500 resources",
            rationale: "Most oases were already cleared in Phase 1. New spawns are slow and limited."
          }
        }
      },

      phase1StrategyAnalysis: {
        description: "Optimal Beginner Protection strategy focusing on ONE-TIME oasis bounty",

        heroAllocation_Day1to3: {
          scenario: "Allocate hero points to FIGHTING STRENGTH (temporary)",
          rationale: "During protection, you can't be attacked. One-time oasis bounty is fixed. Hero power is worthless after Day 3 (protection ends, you need defense). Better to farm oases aggressively, then respec to resource production.",

          fightingPowerNeeded: {
            description: "Hero fighting power to clear weak oases",
            ratsAndSpiders: {
              defense: 40,  // max(di=35, dc=40) for spiders
              minPower: 52, // estimated 1.3x max defense for safe solo kill
              skillPoints: 1 // for Romans (+100/point); 1 point = +100 power
            },
            snakes: {
              defense: 60,
              minPower: 78,
              skillPoints: 1 // enough for most tribes with starting power ~15
            },
            wildBoar: {
              defense: 70,
              minPower: 91,
              skillPoints: 2
            }
          },

          estimatedDay1to3_income: {
            phaseLength: 72,
            animals_cleared: 12,
            total_resources: 2160,
            avgResourcesPerHour: 30,
            notes: "One-time bounty only. No respawn during protection."
          }
        },

        heroAllocation_Day3to7: {
          scenario: "RESPEC hero to RESOURCE PRODUCTION (using Book of Wisdom or wait for later)",
          rationale: "After protection ends, you CANNOT safely farm oases anymore. Protection gone + other players attacking = massive risk. Switch to continuous resource production (hero generates resources 24/7 regardless of oasis availability)",

          cropProductionPerPoint: {
            rate: 4,  // resources per hour per point (x1 speed) - SOURCE: Research Report §6
            perDay: 96, // 4 * 24
            notes: "Works 24/7, doesn't depend on oasis availability or safety"
          },

          estimatedDay3to7_income: {
            phaseLength: 120,
            skilledInResourceProduction: {
              points: 8, // assumed by end of Phase 2
              perDayIncome: 768, // 8 * 96
              fiveDaysTotal: 3840
            },
            notes: "Continuous, reliable, no competition"
          }
        }
      }
    }
  },

  // ============================================================================
  // SECTION 2: HERO SKILL POINT STRATEGY - Realistic Crossover Analysis
  // ============================================================================
  heroSkillAllocation: {
    description: "Phase-based hero skill point allocation with Book of Wisdom respecs",

    attributesOverview: {
      fightingStrength: {
        description: "Increases hero combat power",
        bonusPerPoint: {
          romans: 100,
          teutons: 80,
          gauls: 80,
          egyptians: 80,
          huns: 80
        },
        useCase: "Early oasis farming (Day 1-3), high-risk adventures"
      },
      resourceProduction: {
        description: "Increases resource output (all 4 types)",
        bonusPerPoint: 4, // resources/hour at x1 speed
        usesCase: "24/7 production, post-protection economies, long-term scaling"
      },
      offBonus: {
        description: "Army attack bonus (+0.2% per point)",
        maxBonus: "20% (100 points)",
        breakEven: "313+ Steppe Riders needed to surpass raw Strength value"
      },
      defBonus: {
        description: "Army defense bonus (+0.2% per point)",
        maxBonus: "20% (100 points)",
        usage: "Relevant when defending with large armies"
      }
    },

    optimalStrategy: {
      phase1_BeginnerProtection_Day1to3: {
        duration: 72,
        situation: "Protected from attacks, multiple oases available, no respawn",
        skillPointsTypical: 5, // hero lvl ~5 by day 3

        recommendation: "50% FIGHTING, 50% RESOURCE PRODUCTION",
        rationale: [
          "FIGHTING: One-time oasis bounty is fixed window. Maximize clears before animals reset.",
          "RESOURCE: Need continuous production to start buildings. Fighting points wasted after Day 3.",
          "COMPROMISE: Split allocation to get ~50 power + 2-3 resource points"
        ],

        example_RomanHero: {
          startingPower: 15,
          day1_5_skillPoints: 5,
          allocation: {
            fighting: 3, // +300 power = 315 total
            resource: 2  // +8 res/hour = 192/day
          },
          fightableAnimals: ["Rat", "Spider", "Snake", "Bat", "Wild Boar"],
          estimatedDay3_resources: {
            oasisBounty: 2160,
            resourceProduction: 192 * 3, // 3 days
            total: 2736
          }
        }
      },

      phase2_PostProtection_Day3to7: {
        duration: 120,
        situation: "Protection ends, can be attacked, oasis respawns slow/contested",
        skillPointsTypical: 8, // hero lvl ~8 by day 7

        recommendation: "100% RESOURCE PRODUCTION (Respec with Book of Wisdom if available)",
        rationale: [
          "FIGHTING: Oases no longer safe. Other players farming same spots. No respawn benefit.",
          "RESOURCE: 24/7 production regardless of external threats. Scales continuously.",
          "RESPEC: Book of Wisdom available from adventures. Use it to switch from Fighting → Resource."
        ],

        bookOfWisdomTiming: {
          availability: "First 31 adventures (approx Day 14+). Some servers earlier via auction.",
          alternativeIfNoBook: "Accept fighting points as 'wasted' or accept slower resource growth.",
          strategicUsage: "Respec immediately after Day 3. Switch all points to resource production for Days 3-14."
        },

        example_RomanHeroWithRespec: {
          phase1_End: {
            fighting: 3,
            resource: 2,
            totalPower: 315
          },
          phase2_AfterRespec: {
            fighting: 0,  // reallocate to resource
            resource: 5, // original 2 + 3 respecced
            totalResourceIncome: 5 * 96, // 480 per day
            fiveDaysTotal: 2400
          },
          cumulativeByDay7: {
            oasisBounty: 2160,
            day1to3_resourceProduction: 576,
            day3to7_resourceProduction: 2400,
            total: 5136
          }
        }
      },

      phase3_MilitaryTransition_Day7to30: {
        duration: 546,
        situation: "2nd village prep, troop training starts, Settlers required",
        skillPointsTypical: 20, // hero lvl ~20

        recommendation: "90% RESOURCE PRODUCTION, 10% FIGHTING (for adventures/hero defense)",
        rationale: [
          "RESOURCE: Settler training costs 18,100+ resources each × 3 = 54,300+. Need maximum production.",
          "FIGHTING: Minimal. Adventures are safer now (have healing items). Oasis farming low priority.",
          "OFF/DEF BONUS: Not relevant until Day 30+ when actual military operations start."
        ],

        focusMetric: "Total resources by Day 30 to afford 3 Settlers + 2nd village construction"
      }
    },

    crossoverAnalysis: {
      description: "When does RESOURCE allocation surpass FIGHTING allocation?",

      assumptions: {
        oasisBounty_OneTime: 2160,
        oasisFarm_Day3to7_Slow: 500, // conservative respawn farming
        resourcePerPointPerDay: 96,
        fightingPowerPerPoint_Roman: 100
      },

      comparison_5Point_skillAllocation: {
        scenario: "5 skill points total by Day 3",

        option_A_AllFighting: {
          allocation: "5 points → Fighting",
          totalPower: "15 + 500 = 515",
          day1to3_oasisFarming: 2160,
          day3to7_oasisFarming: 500, // slow respawn, contested
          day3to7_resourceProduction: 0, // no production points
          total_day7: 2660
        },

        option_B_AllResource: {
          allocation: "5 points → Resource",
          totalPower: "15 (weak)",
          day1to3_oasisFarming: 400, // can't farm, too weak
          day3to7_resourceProduction: 480 * 5, // 5 * 96 * 5 days = 2400
          total_day7: 2800
        },

        option_C_Balanced: {
          allocation: "3 Fighting + 2 Resource",
          totalPower: "15 + 300 = 315",
          day1to3_oasisFarming: 1800, // can farm Rats/Spiders
          day3to7_oasisFarming: 400,
          day3to7_resourceProduction: 192 * 5, // 2 * 96 * 5 = 960
          total_day7: 3160
        },

        conclusion: "By Day 7, RESOURCE allocation (Option B/C) slightly outpaces pure FIGHTING, and gap WIDENS significantly by Day 14 as resource production compounds. Book of Wisdom respecs (Day 14+) allow optimal timing."
      }
    }
  },

  // ============================================================================
  // SECTION 3: ADVENTURE ROI & RISK MANAGEMENT
  // ============================================================================
  adventureSystem: {
    description: "Realistic adventure rewards, damage, and hero death risk",

    mechanics: {
      firstAdventures: {
        count: 31,
        duration: "approx 14 days on x1 speed (2+ per day)",
        rewards: "Resources, silver, troops ONLY (no equipment items)",
        itemDropStart: "Adventure 32+ (approx Day 14+)"
      },

      difficultyLevels: {
        normal: {
          heroDamage: "10-30% HP",
          rewardModifier: 1.0,
          recommendation: "Safe for >50% HP heroes"
        },
        hard: {
          heroDamage: "30-60% HP",
          rewardModifier: 1.5,
          recommendation: "Risky unless >70% HP"
        }
      },

      heroDeath: {
        penalty: "24-hour revival cooldown + lost XP",
        risk: "CATASTROPHIC. Delays 2nd village by 1+ days",
        prevention: "Keep hero >30% HP before adventures. Use ointments strategically."
      }
    },

    healingItems: {
      description: "Early game healing item scarcity",

      ointment: {
        recovery: "5% hero HP",
        availability: "1-2 per week from adventures (rare drop)",
        strategy: "Use sparingly. Reserve for hero survival, not full healing."
      },

      bandage: {
        recovery: "20% hero HP",
        availability: "Even rarer than ointment",
        strategy: "Save for emergency situations"
      },

      naturalRegen: {
        rate: "Approximately 0.5% per hour (estimated)",
        rationale: "Hero regen makes waiting viable. Sleep heals efficiently."
      }
    },

    optimalAdventureFrequency: {
      phase1_Day1to3: {
        frequency: "Every 2-4 hours while awake",
        riskTolerance: "HIGH (protected, death has no combat cost)",
        heroHealthTarget: "Let it drop to 20% HP, rest overnight",
        expectedXPGain: "500-1000 per day"
      },

      phase2_Day3to7: {
        frequency: "Once per day (safer)",
        riskTolerance: "LOW (can be attacked, need hero for defense)",
        heroHealthTarget: "Keep >50% HP always",
        expectedXPGain: "200-300 per day"
      },

      phase3_Day7plus: {
        frequency: "Once every 2-3 days (only high-reward)",
        riskTolerance: "MINIMAL (military operations, hero needed for fighting)",
        heroHealthTarget: "Keep >70% HP always",
        expectedXPGain: "Variable (depends on adventure difficulty)"
      }
    }
  },

  // ============================================================================
  // SECTION 4: TROOP EFFICIENCY & TRAINING TIME
  // ============================================================================
  troopComparison: {
    description: "Cross-tribe troop analysis: cost vs training time vs practical use",

    sourceData: "troops-raw-data.json (complete game data)",

    analysisFramework: {
      metrics: [
        "Cost efficiency (resources per attack point)",
        "Training time (minutes to produce)",
        "Carry capacity (farming utility)",
        "Upkeep cost (crop/hour)",
        "Use case (scouting, farming, defense, offense)"
      ]
    },

    bestUnitsEarlyGame: {
      scouting: {
        description: "Fastest intelligence gathering",
        recommendation: {
          huns: "Spotter (Lv0: v=19) - fastest scout",
          gauls: "Pathfinder (Lv0: v=17) - fast + good stats",
          teutons: "Scout (v=9) - cheap, but slow",
          romans: "Equites Imperatoris (v=16 cavalry) - research dependent"
        },
        useCase: "Day 3+: Scout neighbors for threats before protection ends"
      },

      farming: {
        description: "Carry capacity for oasis farming",
        recommendation: {
          gauls: "Phalanx (p=35, cost 100W 130C 55I 30Cr) - balanced",
          romans: "Legionnaire (p=50, cost 120W 100C 150I 30Cr) - best carry",
          teutons: "Phalanx (p=60, cost 95W 75C 40I 40Cr) - cheapest"
        },
        useCase: "Day 1-3: Solo hero farming is sufficient. Day 3+: escort troops for larger bounties"
      },

      defense_earlyGame: {
        description: "Cheap, fast defense against raid threats",
        recommendation: {
          teutons: "Phalanx (t=900ms) - FASTEST training time",
          egyptians: "Slinger (t=530ms) - even faster, lower stats",
          gauls: "Phalanx (t=1300ms) - slower but tanky",
          romans: "Legionnaire (t=2000ms) - slow but quality"
        },
        useCase: "Day 3+: Have 10-20 cheap units for emergency defense"
      }
    },

    mainBuildingEffect: {
      description: "Build time multiplier based on Main Building level",
      formula: "Each level adds ~2-3% construction speed",
      example: {
        MB_Level0: "100% baseline time",
        MB_Level10: "~30% faster (cumulative +3%/level)",
        MB_Level20: "~100% faster (DOUBLE speed)"
      },
      earlGamePriority: "Get MB to Lv10 by Day 2. This accelerates ALL subsequent buildings."
    },

    smithyEffect: {
      description: "Armor/weapon upgrades increase troop stats",
      earlGameNote: "Day 1-7: Smithy is LOW priority. Focus on resource production buildings first. Smith upgrades relevant Day 7+."
    }
  },

  // ============================================================================
  // SECTION 5: BUILDING UPGRADE PRIORITY - Scenario-Based
  // ============================================================================
  buildingPriorities: {
    description: "Realistic building upgrade sequences for different starting situations",

    universalFirst7Days: {
      dayZero_Hours0to2: [
        "Resource fields Lv2 (free from tasks)",
        "Main Building Lv3 (free from tasks)"
      ],
      dayOne_Hours2to48: [
        {
          building: "Main Building",
          targetLevel: 10,
          rationale: "Unlocks barracks (MB Lv3) and affects ALL build times. Priority #1."
        },
        {
          building: "Crop Field",
          targetLevel: 5,
          rationale: "Crop consumption accelerates with building spam. Prevent starvation Day 1-2."
        },
        {
          building: "Other Resource Fields (Wood/Clay/Iron)",
          targetLevel: 3,
          rationale: "Basic production. Diminishing returns after Lv4 early game."
        },
        {
          building: "Warehouse & Granary",
          targetLevel: 3,
          rationale: "Increase storage. Needed for Settler training (18,100+ per settler)"
        }
      ],
      dayTwo_Hours48to72: [
        {
          building: "Academy",
          targetLevel: 10,
          rationale: "Unlocks Troop research. Generates CP (~40/day). Town Hall requires Academy Lv10."
        },
        {
          building: "Barracks",
          targetLevel: 1,
          rationale: "Train scouting units + early defense troops"
        }
      ]
    },

    scenario_PeacefulStart: {
      description: "No nearby aggressive neighbors, safe oasis farming",
      prioritySequence: {
        day1to2: ["MB Lv10", "Crop Lv5"],
        day2to3: ["Academy Lv10", "Warehouse/Granary Lv5"],
        day3to5: ["Town Hall Lv1", "Residence Lv1 → 10"],
        day5to7: ["Marketplace", "More resource fields"]
      },
      focusMetric: "CP generation + resource production for 2nd village"
    },

    scenario_HostileStart: {
      description: "Aggressive neighbors nearby, raids possible post-protection",
      prioritySequence: {
        day1to2: ["MB Lv10", "Crop Lv5"],
        day2to3: ["Academy Lv10", "Barracks Lv3", "Palisade/Stone Wall"],
        day3to4: ["Town Hall Lv1", "More defense buildings"],
        day4to5: ["Stable (if tribe has cavalry)", "Residence"]
      },
      focusMetric: "Defense readiness when protection ends + CP secondary"
    }
  },

  // ============================================================================
  // SECTION 6: CULTURE POINT (CP) BOTTLENECK ANALYSIS
  // ============================================================================
  culturePointSystem: {
    description: "CP is the PRIMARY bottleneck for 2nd village timing, not resources",

    sourceData: "Fastest 2nd Village Guide §1.2, Research Report §7",

    requirements_2ndVillage: {
      culturalPoints: 2000,
      ResidenceLevel: 10,
      SettersNeeded: 3,
      distanceRequirement: "≤20 tiles from main village (or Tournament Square)"
    },

    cpGeneration_earlyGame: {
      passiveProduction: {
        description: "Buildings generate CP daily automatically",
        example: {
          academyLv10: 40,
          mainBuildingLv10: 20,
          residenceLv10: 20,
          marketplaceLv10: 15,
          otherBuildings: 20,
          resourceFields_avg18atLv7: 63,
          totalDaily: 178
        },
        rationale: "More buildings = faster CP. Every lv1 building counts."
      },

      smallCelebration: {
        building: "Town Hall Lv1+",
        reward: "CP = village's current daily CP production (NOT fixed 500)",
        cooldown: "24 hours at Lv1 (reduces with upgrades)",
        example_earlyGame: {
          day3_firstCelebration: "Village producing ~100-150 CP/day → gain 100-150 CP",
          day4_secondCelebration: "Village now producing ~150-200 CP/day → gain 150-200 CP",
          note: "CP gain scales up as you add more buildings"
        }
      }
    },

    timeline_to2000CP: {
      x1Speed_GaulsOptimal: {
        day3: { passiveCP: 350, celebrationCP: 150, totalCP: 500 },
        day4: { passiveCP: 530, celebrationCP: 200, totalCP: 886 },
        day5: { passiveCP: 710, celebrationCP: 250, totalCP: 1244 },
        day6: { passiveCP: 900, celebrationCP: 300, totalCP: 1612 },
        day7: { passiveCP: 1080, celebrationCP: 300, totalCP: 1792 },
        day8: { passiveCP: 1260, celebrationCP: 350, totalCP: 2160 },
        achievedDay: "Day 8 (192 hours)"
      },

      x1Speed_RomansOptimal: {
        description: "Dual build queues accelerate building construction, slightly faster CP",
        achievedDay: "Day 7-8 (similar to Gauls, but more flexible)"
      }
    },

    cpBottleneckReality: {
      statement: "CP is PRIMARY blocker for 2nd village, NOT resources",
      evidence: [
        "Settler costs: 54,300+ resources (Gauls). Obtainable by Day 5-6 with farming.",
        "CP requirement: 2,000 points. Obtained by Day 7-8 minimum.",
        "Decision: Focus on maximizing CP generation (more buildings, celebrations) rather than optimizing oasis farming."
      ]
    },

    strategyImplication: {
      focusArea: "Cram as many buildings as possible early (even Lv1) to boost daily CP output",
      buildings: ["Academy", "Town Hall", "Marketplace", "Embassy", "Warehouse", "Granary"],
      rationale: "Each building contributes to daily CP total. Lv1 is sufficient for CP contribution."
    }
  },

  // ============================================================================
  // SECTION 7: PHASE-BASED DECISION FRAMEWORK
  // ============================================================================
  phaseBasedStrategy: {
    description: "Strategy recommendations per game phase with decision trees",

    phase1_BeginnerProtection: {
      duration: "0-72 hours (Day 1-3)",
      situation: "Invulnerable. Multiple oases available (one-time bounty). Resource gathering phase.",

      decisions: {
        heroAllocation: {
          options: [
            "Option A: All Fighting (maximize oasis bounty)",
            "Option B: All Resources (long-term scaling)",
            "Option C: Balanced (recommended)"
          ],
          decision: "Option C: 3 Fighting + 2 Resource (or 50/50)",
          expected_heroLevelDay3: 5
        },

        buildingFocus: {
          MB: "Lv10 (CRITICAL - affects all build times)",
          crop: "Lv5 (prevent starvation)",
          resources: "Lv3-4 (basic production)",
          defense: "Palisade Lv1 only (low priority)",
          warehouse: "Lv3 (basic storage)"
        },

        oasisFarming: {
          priority: "HIGH (one-time bounty)",
          animals: ["Rat", "Spider", "Snake", "Bat"],
          expectedBounty: "2,000-2,500 resources",
          strategy: "Hero solo farming 2-3 oases, then escort troops for medium animals"
        },

        adventures: {
          frequency: "Every 2-4 hours",
          riskLevel: "HIGH (protected, safe to lose hero)",
          goalMetric: "Level hero to Lv5+, gain XP + resources"
        }
      },

      expectedOutcomes_day3: {
        heroLevel: 5,
        mainBuildingLevel: 10,
        resourcesGenerated: 2500,
        defenseStatus: "Low, protected"
      }
    },

    phase2_PostProtection: {
      duration: "72-168 hours (Day 3-7)",
      situation: "Protection ends, attackable, oasis respawns slow/contested, CP farming critical",

      decisions: {
        heroAllocation: {
          action: "Respec with Book of Wisdom (if available) OR accept slow Day 3-7",
          allocationTarget: "100% Resource Production",
          strategy: "Continuous 24/7 income regardless of attack threats",
          expected_heroLevelDay7: 8
        },

        buildingFocus: {
          academy: "Lv10 (enables Town Hall)",
          townHall: "Lv1 (start CP generation via celebrations)",
          residence: "Lv1 → 5 (prepare for Settler unlock Day 5)",
          warehouse: "Lv8+ (prepare for Settler training)",
          defense: "Palisade/Stone Wall Lv3+ (raid deterrent)"
        },

        oasisFarming: {
          priority: "LOW (no respawn, other players competing)",
          animals: "Only slow respawns = 1-2 per day",
          expectedBounty: "300-500 per day",
          strategy: "Skip oasis farming. Focus on internal resource production."
        },

        adventures: {
          frequency: "Once per day max",
          riskLevel: "MEDIUM (not protected, but hero valuable)",
          heroHealthTarget: ">50% HP always",
          goalMetric: "Continue XP gains, accumulate items"
        },

        militaryBuildup: {
          barracks: "Lv1-2 (minimal)",
          strategy: "No troop training yet. Save resources for buildings."
        }
      },

      expectedOutcomes_day7: {
        heroLevel: 8,
        residenceLevel: 5,
        townHallLevel: 1,
        cumulativeCP: 800-1200,
        cumulativeResources: 4000,
        defenseStatus: "Basic protection in place"
      }
    },

    phase3_AccelerationToSF: {
      duration: "168-336 hours (Day 7-14)",
      situation: "CP becoming more abundant, Settlers trainable by Day 5-6, 2nd village setup finalized",

      decisions: {
        heroAllocation: {
          allocation: "90% Resource Production, 10% Fighting (for tough adventures)",
          rationale: "Resource bottleneck is CRITICAL now. Need 54,300+ for 3 Settlers."
        },

        residenceLevel: {
          target: 10,
          deadline: "Day 6 for optimal Settler training",
          unlocks: "Settler unit production"
        },

        settlerTraining: {
          startDate: "Day 6-7 (once Residence Lv10)",
          trainCount: 3,
          costEach: 18100,
          totalCost: 54300,
          trainingTimePerSettler: "~2 hours at Residence Lv10 (Gauls faster)"
        },

        settlementSelection: {
          criteria: [
            "Distance ≤ 20 tiles (or Tournament Square for farther)",
            "High crop field count (15c > 9c)",
            "Proximity to good oases",
            "Nearby NPC villages for farming"
          ]
        },

        culturePoints: {
          targetForDay7: 1500-2000,
          method: "Celebrations + building spam",
          deadline: "By Day 7-8 to launch 2nd village Day 8-9"
        }
      },

      expectedOutcomes_day14: {
        secondVillageStatus: "Active (launched Day 7-8)",
        settlersStatus: "All 3 deployed, 2nd village established",
        mainVillageResources: "Growing via production",
        militaryStatus: "Still minimal, focus on economy"
      }
    },

    phase4_PostSecondVillage: {
      duration: "336+ hours (Day 14+)",
      situation: "Two villages operational, early military options available, long-term strategy execution",

      description: "Beyond scope of early-game focus. Decisions depend on: tribe choice, server meta, alliance strategy."
    }
  },

  // ============================================================================
  // SECTION 8: RESOURCE PROJECTION MODEL
  // ============================================================================
  resourceProjection: {
    description: "Daily resource accumulation over 14 days (early game complete)",

    assumptions: {
      tribe: "Romans (balanced reference)",
      startingResources: 400,
      oasisFarmingPhase1: 2200,
      mainBuildingLevel: "Reaches Lv10 Day 2",
      heroSkillAllocation: "Balanced (Fighting/Resource)",
      bookOfWisdomRespec: "Available Day 14, hypothetically used Day 4"
    },

    dailyIncome: {
      day1: {
        resourceFieldsLv2: 50,
        oasisFarming: 800,
        heroProduction: 100,
        total: 950
      },
      day2: {
        resourceFieldsLv4: 150,
        oasisFarming: 700,
        heroProduction: 150,
        total: 1000
      },
      day3: {
        resourceFieldsLv5: 200,
        oasisFarming: 500,
        heroProduction: 200,
        total: 900
      },
      day4to7: {
        resourceFieldsLv6to7: 350,
        oasisFarming: 200,
        heroProduction_afterRespec: 400, // 4 skill points dedicated
        total: 950
      },
      day8to14: {
        resourceFieldsLv8plus: 500,
        oasisFarming: 100,
        heroProduction: 400,
        total: 1000
      }
    },

    cumulativeByDay: {
      day3: {
        description: "Protection ends, 1st oasis bounty collected",
        oasisBounty: 2200,
        productionIncome: 2850,
        total: 5050
      },
      day7: {
        description: "Residence Lv5, CP ~1200, resource production ramping",
        oasisBounty: 2200,
        productionIncome: 5600,
        total: 7800
      },
      day14: {
        description: "2nd village deployed, resource production peak",
        oasisBounty: 2200,
        productionIncome: 11000,
        total: 13200
      }
    },

    resourceAllocation: {
      day1to3: "80% buildings, 20% buffer",
      day3to7: "70% buildings, 15% Settlers prep, 15% buffer",
      day7to14: "50% village 2 construction, 30% Settler costs, 20% buffer"
    }
  },

  // ============================================================================
  // SECTION 9: KNOWN LIMITATIONS & FUTURE REFINEMENTS
  // ============================================================================
  limitations: {
    modelAssumptions: [
      "Oasis availability estimated at 3-5 per player (unconfirmed from direct gameplay)",
      "Respawn rate 'slowly' estimated at 4-8 hour cycle (no exact data available)",
      "Hero damage formula estimated from combat research (exact formula undocumented)",
      "CP per building estimated from few examples (exact scaling unknown)",
      "NPC merchant usage excluded (assumed no Gold spending)"
    ],

    unremodelledFactors: [
      "Alliance dynamics (bonus buildings, shared defense)",
      "Server-specific NPC villages (farming targets)",
      "Trade route optimization (Gold Club feature)",
      "Artifact villages (late game)",
      "Server speed variations (only x1 modeled)",
      "Tribal balance patches (model assumes current balance)"
    ],

    futureRefinements: [
      "Direct gameplay data validation (test 2nd village timeline empirically)",
      "Player competition modeling (multi-player oasis contested scenarios)",
      "Alliance bonuses integration (communal granary/warehouse)",
      "Smithy upgrade impact (troop stat scaling Day 7+)",
      "Seasonal event timing (double resource weekends, etc.)"
    ]
  },

  // ============================================================================
  // SECTION 10: PRACTICAL QUICK-REFERENCE TABLES
  // ============================================================================
  quickReference: {

    "MB_BuildTimeEffect": {
      "Lv0": "100%",
      "Lv3": "91%",
      "Lv5": "85%",
      "Lv10": "70%",
      "Lv20": "50%"
    },

    "HeroFightingPowerByTribe": {
      "romans": "+100 per point (highest)",
      "teutons": "+80 per point",
      "gauls": "+80 per point",
      "egyptians": "+80 per point",
      "huns": "+80 per point"
    },

    "EarlyGameAnimalRewards": {
      "Rat/Spider/Snake/Bat (1 crop)": 160,
      "Wild Boar/Wolf (2 crop)": 320,
      "Bear/Tiger/Crocodile (3 crop)": 480,
      "Elephant (5 crop)": 800
    },

    "SettlerCostComparison": {
      "Gauls_x3": 54300,
      "Romans_x3": 57000,
      "Egyptians_x3": 57000,
      "Teutons_x3": 60000,
      "Huns_x3": 62700
    },

    "CPGenerationSources": {
      "Passive (buildings)": "~100-200 per day early game",
      "Small Celebration": "= daily village CP production",
      "Town Hall cooldown": "24 hours at Lv1",
      "Total by Day 7": "~1200-1600 CP (enough by Day 8)"
    }
  }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SIMULATION_DATA;
}
