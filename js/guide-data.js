const SETTLEMENT_GUIDE = {
  requirements: {
    cp: 2000,
    residence: 10,
    settlers: 3,
    resources: 57000,
    serverSpeed: "x1",
    notes: {
      zh: "假設在中立村鎮(無NPC/外交保護)進行，國王系統啟用",
      en: "Assumes neutral village (no NPC/diplomatic protection), King system enabled"
    }
  },

  cpMechanics: {
    zh: "CP機制詳解",
    en: "CP Mechanics Explained",
    content: {
      smallCelebration: {
        zh: "小型慶典",
        en: "Small Celebration",
        details: {
          zh: "每個村莊每天自動產生被動CP(基於建築數量和等級)。小慶典可額外獲得CP = 該村每日CP產出(上限500 CP/次，x1速)",
          en: "Each village generates passive CP daily (based on building count and level). Small celebrations grant bonus CP = village daily CP output (capped at 500 CP/celebration, x1 speed)"
        },
        townHallRequirements: {
          zh: "市政廳Lv1條件",
          en: "Town Hall Lv1 Requirements",
          items: [
            { zh: "村莊大樓Lv10", en: "Main Building Lv10" },
            { zh: "學院Lv10", en: "Academy Lv10" },
            { zh: "沒有其他市政廳", en: "No other Town Hall" }
          ]
        },
        celebrationCooldown: {
          zh: "慶典冷卻時間",
          en: "Celebration Cooldown",
          description: {
            zh: "TH Lv1時約24小時；升級TH縮短冷卻時間",
            en: "~24 hours at TH Lv1; upgrading TH reduces cooldown"
          }
        },
        calculation: {
          zh: "到達2000 CP需要",
          en: "To reach 2000 CP need",
          formula: {
            zh: "4~8場慶典(取決於建築數量) + 被動CP累積",
            en: "4~8 celebrations (depends on building count) + passive CP accumulation"
          }
        }
      }
    }
  },

  oasisFarming: {
    zh: "綠洲農業指南",
    en: "Oasis Farming Guide",
    strategy: {
      zh: "策略",
      en: "Strategy",
      details: {
        zh: "英雄+低階兵種在Day 1-2清理弱綠洲(動物<50攻擊力)；賣掉戰利品補充資源",
        en: "Hero + low-tier troops clear weak oases (animals <50 attack) on Day 1-2; sell bounty to supplement resources"
      }
    },
    animals: [
      {
        name: { zh: "老鼠", en: "Rat" },
        stats: {
          attack: 10,
          infantryDefense: 25,
          cavalryDefense: 20,
          upkeep: 1
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 40
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 160
        }
      },
      {
        name: { zh: "蜘蛛", en: "Spider" },
        stats: {
          attack: 20,
          infantryDefense: 35,
          cavalryDefense: 40,
          upkeep: 1
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 40
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 160
        }
      },
      {
        name: { zh: "蛇", en: "Snake" },
        stats: {
          attack: 60,
          infantryDefense: 40,
          cavalryDefense: 60,
          upkeep: 1
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 40
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 160
        }
      },
      {
        name: { zh: "蝙蝠", en: "Bat" },
        stats: {
          attack: 80,
          infantryDefense: 66,
          cavalryDefense: 50,
          upkeep: 1
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 40
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 160
        }
      },
      {
        name: { zh: "野豬", en: "Wild Boar" },
        stats: {
          attack: 50,
          infantryDefense: 70,
          cavalryDefense: 33,
          upkeep: 2
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 80
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 320
        }
      },
      {
        name: { zh: "狼", en: "Wolf" },
        stats: {
          attack: 100,
          infantryDefense: 80,
          cavalryDefense: 70,
          upkeep: 2
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 80
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 320
        }
      },
      {
        name: { zh: "熊", en: "Bear" },
        stats: {
          attack: 250,
          infantryDefense: 140,
          cavalryDefense: 200,
          upkeep: 3
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 120
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 480
        }
      },
      {
        name: { zh: "鱷魚", en: "Crocodile" },
        stats: {
          attack: 450,
          infantryDefense: 380,
          cavalryDefense: 240,
          upkeep: 3
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 120
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 480
        }
      },
      {
        name: { zh: "老虎", en: "Tiger" },
        stats: {
          attack: 200,
          infantryDefense: 170,
          cavalryDefense: 250,
          upkeep: 3
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 120
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 480
        }
      },
      {
        name: { zh: "大象", en: "Elephant" },
        stats: {
          attack: 600,
          infantryDefense: 440,
          cavalryDefense: 520,
          upkeep: 5
        },
        bounty: {
          zh: "每隻獎勵",
          en: "Reward each",
          value: 200
        },
        bountyTotal: {
          zh: "總獎勵(4隻)",
          en: "Total bounty (4x)",
          value: 800
        }
      }
    ]
  },

  tribes: {
    romans: {
      name: { zh: "羅馬人", en: "Romans" },
      estimatedTime: { zh: "第5-6天", en: "Day 5-6" },
      speed: { zh: "快速", en: "Fast" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4600, 4200, 5800, 4400] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 57000 }
      },
      keyAdvantage: {
        zh: "雙建築佇列 - 同時升級資源田和建築，加快前期發展",
        en: "Dual building queue - upgrade resource fields and buildings simultaneously, accelerates early progression"
      },
      heroStrategy: {
        zh: "所有點數投入戰鬥力(+100/點)，成為綠洲清理的最強戰士，快速積累資源",
        en: "All points to Fighting Strength (+100/pt), becomes strongest oasis farmer, rapidly accumulates resources"
      },
      celebrationPlan: {
        zh: "在市政廳Lv1後盡快開始，每24小時舉辦一次慶典，連續進行5場以達2000 CP",
        en: "Start immediately after Town Hall Lv1, run celebration every 24 hours, continuous 5 celebrations for 2000 CP"
      },
      troopTraining: {
        zh: "Day 1-2訓練5-10個古羅馬步兵，用於護衛綠洲農業，無需大規模駐軍",
        en: "Day 1-2 train 5-10 Legionnaires for oasis escort, no major garrison needed"
      },
      phases: [
        {
          name: { zh: "階段1: 基礎建設", en: "Phase 1: Foundation" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                {
                  zh: "完成新手任務獲取免費資源(木材、黏土、鐵礦各數百)",
                  en: "Complete beginner quests for free resources (wood, clay, iron ~500 each)"
                },
                {
                  zh: "所有資源田升級至Lv2-3(優先穀田，確保兵種與英雄維持)",
                  en: "All resource fields to Lv2-3 (prioritize crop, ensure troop/hero upkeep)"
                },
                {
                  zh: "村莊大樓升至Lv3",
                  en: "Main Building to Lv3"
                },
                {
                  zh: "地下室Lv1(保護100資源/類型)",
                  en: "Cranny Lv1 (protects 100 res/type)"
                }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                {
                  zh: "村莊大樓升至Lv5 [雙佇列: 同時升級穀田至Lv4]",
                  en: "Main Building to Lv5 [DUAL QUEUE: upgrade crop to Lv4 simultaneously]"
                },
                {
                  zh: "其他資源田升至Lv4",
                  en: "Other resource fields to Lv4"
                },
                {
                  zh: "倉庫Lv3、糧倉Lv3",
                  en: "Warehouse Lv3, Granary Lv3"
                },
                {
                  zh: "準備訓練5個古羅馬步兵(共2300資源)",
                  en: "Prepare to train 5 Legionnaires (2,300 resources total)"
                }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                {
                  zh: "村莊大樓升至Lv8-10 ★★★ [關鍵: 最高優先級]",
                  en: "Main Building to Lv8-10 ★★★ [CRITICAL: highest priority]"
                },
                {
                  zh: "資源田升至Lv5-6",
                  en: "Resource fields to Lv5-6"
                },
                {
                  zh: "倉庫/糧倉升至Lv5",
                  en: "Warehouse/Granary to Lv5"
                },
                {
                  zh: "兵營Lv1-3，訓練5個古羅馬步兵",
                  en: "Barracks Lv1-3, train 5 Legionnaires"
                },
                {
                  zh: "英雄開始清理攻擊力<50的綠洲(鼠、蜘蛛、蛇) [需用兵團兵護衛]",
                  en: "Hero starts clearing weak oases (attack <50: Rat, Spider, Snake) [escort with Legionnaires]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 學院衝刺", en: "Phase 2: Academy Rush" },
          timeRange: { zh: "第24-48小時", en: "Hour 24-48" },
          steps: [
            {
              time: { zh: "24-36小時", en: "Hour 24-36" },
              actions: [
                {
                  zh: "學院升至Lv10 [雙佇列: 同時升級資源田至Lv7]",
                  en: "Academy to Lv10 [DUAL QUEUE: upgrade resource fields to Lv7 simultaneously]"
                },
                {
                  zh: "大使館Lv1 [無需升級，僅為今後使用]",
                  en: "Embassy Lv1 [no upgrade needed, just for future use]"
                },
                {
                  zh: "英雄持續農業，販售所有綠洲戰利品至市場補充資源",
                  en: "Hero continues farming, sell all oasis bounty at market to supplement resources"
                }
              ]
            },
            {
              time: { zh: "36-48小時", en: "Hour 36-48" },
              actions: [
                {
                  zh: "市政廳Lv1 [需MB10 + Academy10] → 立即啟動第1場慶典!",
                  en: "Town Hall Lv1 [requires MB10 + Academy10] → START 1st celebration immediately!"
                },
                {
                  zh: "居所開始建築 [0/等級]",
                  en: "Residence starts building [0/level]"
                },
                {
                  zh: "資源田升至Lv7-8",
                  en: "Resource fields to Lv7-8"
                },
                {
                  zh: "倉庫/糧倉升至Lv7",
                  en: "Warehouse/Granary to Lv7"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 居所+CP推進", en: "Phase 3: Residence + CP Push" },
          timeRange: { zh: "第48-96小時", en: "Hour 48-96" },
          steps: [
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                {
                  zh: "居所升至Lv10 [遊戲最耗時建築，預計36-48小時]",
                  en: "Residence to Lv10 [game's longest build, ~36-48 hours]"
                },
                {
                  zh: "第2、3場慶典已完成/排隊中",
                  en: "2nd, 3rd celebrations completed/queued"
                },
                {
                  zh: "資源田升至Lv8-9",
                  en: "Resource fields to Lv8-9"
                },
                {
                  zh: "倉庫/糧倉升至Lv9-10",
                  en: "Warehouse/Granary to Lv9-10"
                },
                {
                  zh: "英雄農業持續，庫存補充開拓者訓練資源",
                  en: "Hero farming continues, inventory supplements settler training resources"
                }
              ]
            },
            {
              time: { zh: "72-96小時", en: "Hour 72-96" },
              actions: [
                {
                  zh: "研究開拓者科技 [學院內，需Academy Lv5+]",
                  en: "Research Settler technology [in Academy, requires Academy Lv5+]"
                },
                {
                  zh: "開始訓練3個開拓者 [57,000資源: 木材19,000 + 黏土19,000 + 鐵礦19,000]",
                  en: "Start training 3 Settlers [57,000 resources: 19k wood + 19k clay + 19k iron]"
                },
                {
                  zh: "第4、5場慶典啟動",
                  en: "4th, 5th celebrations activated"
                },
                {
                  zh: "英雄庫存用於填補資源缺口 [英雄負載:4,000資源]",
                  en: "Hero inventory fills resource gaps [hero capacity: 4,000 resources]"
                },
                {
                  zh: "追蹤CP計數 [目標: 72小時內2000+ CP]",
                  en: "Track CP count [target: 2000+ CP by 72 hours]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段4: 定居", en: "Phase 4: Settlement" },
          timeRange: { zh: "第96-144小時", en: "Hour 96-144" },
          steps: [
            {
              time: { zh: "96-120小時", en: "Hour 96-120" },
              actions: [
                {
                  zh: "驗證CP ≥ 2000",
                  en: "Verify CP ≥ 2000"
                },
                {
                  zh: "3個開拓者訓練完成 [預計Hour 80-96完成]",
                  en: "3 Settlers training completed [expected by Hour 80-96]"
                },
                {
                  zh: "選擇定居點: 20格內15綠洲或9綠洲村莊 [避免玩家定居點]",
                  en: "Select settlement: 15c or 9c village within 20 tiles [avoid player villages]"
                },
                {
                  zh: "準備軍隊護衛 [5個古羅馬步兵足夠，定居點通常無防守]",
                  en: "Prepare escort army [5 Legionnaires sufficient, settlement usually undefended]"
                }
              ]
            },
            {
              time: { zh: "120-144小時", en: "Hour 120-144" },
              actions: [
                {
                  zh: "發送3個開拓者至目標村莊",
                  en: "Send 3 Settlers to target village"
                },
                {
                  zh: "定居完成 → 第2村莊建立! [Day 5-6完成]",
                  en: "Settlement complete → 2nd village established! [Day 5-6 completion]"
                },
                {
                  zh: "新村莊起始: 建造資源田、倉庫、糧倉 [接續主村莊發展]",
                  en: "New village startup: build resource fields, warehouse, granary [continue main village development]"
                }
              ]
            }
          ]
        }
      ]
    },

    gauls: {
      name: { zh: "高盧人", en: "Gauls" },
      estimatedTime: { zh: "第4-5天", en: "Day 4-5" },
      speed: { zh: "最快", en: "Fastest" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4350, 3900, 5220, 3960] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 54300 }
      },
      keyAdvantage: {
        zh: "最便宜的開拓者(54,300資源) + 開拓者訓練速度快25% = 最快達成第2村莊",
        en: "Cheapest settlers (54,300 resources) + 25% faster settler training = fastest 2nd village completion"
      },
      heroStrategy: {
        zh: "所有點數投入資源(採集量+100/點)，高盧英雄戰鬥力弱，依靠方陣兵護衛農業",
        en: "All points to Resources (+100 resources/point), Gaul hero weak at combat, rely on Phalanx escort for farming"
      },
      celebrationPlan: {
        zh: "同羅馬人策略，TH Lv1後盡快開始，5場慶典達2000 CP",
        en: "Same as Romans - start immediately after TH Lv1, 5 celebrations for 2000 CP"
      },
      troopTraining: {
        zh: "Day 1-2訓練5-10個方陣兵(方陣兵:步兵防禦強)護衛英雄農業；Day 3後加訓雷神戰士(速度19)用於快速農業",
        en: "Day 1-2 train 5-10 Phalanx (strong infantry defense) to escort hero; Day 3+ add Theutates Thunder (speed 19) for fast farming"
      },
      phases: [
        {
          name: { zh: "階段1: 基礎建設", en: "Phase 1: Foundation" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                {
                  zh: "完成新手任務取得免費資源",
                  en: "Complete beginner quests for free resources"
                },
                {
                  zh: "所有資源田升級至Lv2-3 [優先穀田]",
                  en: "All resource fields to Lv2-3 [prioritize crop]"
                },
                {
                  zh: "村莊大樓升至Lv3",
                  en: "Main Building to Lv3"
                },
                {
                  zh: "地下室Lv1-3 [高盧人防守力強，地下室保護450/類型]",
                  en: "Cranny Lv1-3 [Gauls excel at defense, cranny protects 450/type]"
                }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                {
                  zh: "村莊大樓升至Lv5",
                  en: "Main Building to Lv5"
                },
                {
                  zh: "資源田升至Lv4-5",
                  en: "Resource fields to Lv4-5"
                },
                {
                  zh: "倉庫Lv3、糧倉Lv3",
                  en: "Warehouse Lv3, Granary Lv3"
                },
                {
                  zh: "準備訓練5-10個方陣兵(速度24，步兵防禦最強)",
                  en: "Prepare to train 5-10 Phalanx (speed 24, strongest infantry defense)"
                }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                {
                  zh: "村莊大樓升至Lv10 ★★★",
                  en: "Main Building to Lv10 ★★★"
                },
                {
                  zh: "資源田升至Lv6",
                  en: "Resource fields to Lv6"
                },
                {
                  zh: "倉庫/糧倉升至Lv5-6",
                  en: "Warehouse/Granary to Lv5-6"
                },
                {
                  zh: "兵營Lv3，訓練5-10個方陣兵",
                  en: "Barracks Lv3, train 5-10 Phalanx"
                },
                {
                  zh: "聚集點Lv1 [方便軍隊調度]",
                  en: "Rally Point Lv1 [coordinates troop dispatch]"
                },
                {
                  zh: "英雄+新手任務贈送兵種開始清理弱綠洲(攻擊<50)",
                  en: "Hero + beginner quest troops start clearing weak oases (attack <50)"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 學院+市政廳", en: "Phase 2: Academy + Town Hall" },
          timeRange: { zh: "第24-48小時", en: "Hour 24-48" },
          steps: [
            {
              time: { zh: "24-36小時", en: "Hour 24-36" },
              actions: [
                {
                  zh: "學院升至Lv10",
                  en: "Academy to Lv10"
                },
                {
                  zh: "兵營升至Lv3，訓練5-10個方陣兵(總計10-20個方陣兵)",
                  en: "Barracks to Lv3, train 5-10 Phalanx (total 10-20 Phalanx)"
                },
                {
                  zh: "英雄農業持續，販售綠洲戰利品補充資源",
                  en: "Hero farming continues, sell oasis bounty for resources"
                }
              ]
            },
            {
              time: { zh: "36-48小時", en: "Hour 36-48" },
              actions: [
                {
                  zh: "市政廳Lv1 → 啟動第1場慶典!",
                  en: "Town Hall Lv1 → START 1st celebration!"
                },
                {
                  zh: "居所開始建築",
                  en: "Residence starts building"
                },
                {
                  zh: "資源田升至Lv7",
                  en: "Resource fields to Lv7"
                },
                {
                  zh: "倉庫/糧倉升至Lv6-7",
                  en: "Warehouse/Granary to Lv6-7"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 居所+開拓者訓練", en: "Phase 3: Residence + Settler Training" },
          timeRange: { zh: "第48-96小時", en: "Hour 48-96" },
          steps: [
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                {
                  zh: "居所升至Lv10 [預計36-48小時完成]",
                  en: "Residence to Lv10 [~36-48 hours to complete]"
                },
                {
                  zh: "第2、3場慶典已進行中",
                  en: "2nd, 3rd celebrations underway"
                },
                {
                  zh: "資源田升至Lv8",
                  en: "Resource fields to Lv8"
                },
                {
                  zh: "倉庫/糧倉升至Lv8-9",
                  en: "Warehouse/Granary to Lv8-9"
                },
                {
                  zh: "英雄農業補充資源",
                  en: "Hero farming supplements resources"
                }
              ]
            },
            {
              time: { zh: "72-96小時", en: "Hour 72-96" },
              actions: [
                {
                  zh: "研究開拓者科技",
                  en: "Research Settler technology"
                },
                {
                  zh: "開始訓練3個開拓者 [54,300資源 - 最便宜! 訓練速度快25%加成]",
                  en: "Start training 3 Settlers [54,300 resources - cheapest! 25% speed bonus]"
                },
                {
                  zh: "第4、5場慶典啟動",
                  en: "4th, 5th celebrations activated"
                },
                {
                  zh: "英雄庫存填補資源缺口",
                  en: "Hero inventory fills resource gaps"
                },
                {
                  zh: "追蹤開拓者完成時間 [應在Hour 80-88完成]",
                  en: "Track settler completion [should finish by Hour 80-88]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段4: 定居", en: "Phase 4: Settlement" },
          timeRange: { zh: "第96-120小時", en: "Hour 96-120" },
          steps: [
            {
              time: { zh: "96-110小時", en: "Hour 96-110" },
              actions: [
                {
                  zh: "3個開拓者已訓練完成",
                  en: "3 Settlers completed"
                },
                {
                  zh: "CP驗證 ≥ 2000",
                  en: "Verify CP ≥ 2000"
                },
                {
                  zh: "選擇目標村莊 [20格內15綠洲或9綠洲]",
                  en: "Select target village [15c or 9c within 20 tiles]"
                },
                {
                  zh: "雷神戰士(速度19)可快速偵察位置 [可選，節省時間]",
                  en: "Theutates Thunder (speed 19) can scout locations quickly [optional, saves time]"
                }
              ]
            },
            {
              time: { zh: "110-120小時", en: "Hour 110-120" },
              actions: [
                {
                  zh: "發送3個開拓者至目標村莊",
                  en: "Send 3 Settlers to target village"
                },
                {
                  zh: "定居完成 → 第2村莊建立! [Day 4-5完成 - 最快!]",
                  en: "Settlement complete → 2nd village established! [Day 4-5 completion - FASTEST!]"
                },
                {
                  zh: "高盧快速擴張優勢確立",
                  en: "Gaul expansion advantage established"
                }
              ]
            }
          ]
        }
      ]
    },

    teutons: {
      name: { zh: "條頓人", en: "Teutons" },
      estimatedTime: { zh: "第5-7天", en: "Day 5-7" },
      speed: { zh: "中等(受掠奪影響)", en: "Medium (raid-dependent)" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4800, 4400, 6000, 4600] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 60000 }
      },
      keyAdvantage: {
        zh: "最便宜的兵種(棍棒兵250資源) - 掠奪綠洲和不活躍玩家資助經濟發展",
        en: "Cheapest unit (Clubswinger 250 resources) - raid oases and inactive players to fund economy"
      },
      heroStrategy: {
        zh: "分配戰鬥力(需清理綠洲)和資源(補充掠奪不足)，傾向戰鬥力",
        en: "Split between Fighting Strength (oasis clearing) and Resources (supplement raid shortfalls), lean toward combat"
      },
      celebrationPlan: {
        zh: "同其他族，但因開拓者昂貴，CP需求可能較高",
        en: "Same as others, but settler cost is highest - may need more CP buffer"
      },
      troopTraining: {
        zh: "Day 1開始積極訓練棍棒兵(速度18，負載100)，從Hour 12開始掠奪綠洲和不活躍玩家補充資源",
        en: "Day 1 aggressively train Clubswingers (speed 18, carry 100), start raiding from Hour 12 to supplement resources"
      },
      phases: [
        {
          name: { zh: "階段1: 掠奪開始", en: "Phase 1: Raid Start" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                {
                  zh: "完成新手任務取得免費資源",
                  en: "Complete beginner quests for free resources"
                },
                {
                  zh: "資源田升至Lv2 [條頓人重掠奪輕防守，不需超高產能]",
                  en: "Resource fields to Lv2 [Teutons raid-focused, don't need high production]"
                },
                {
                  zh: "村莊大樓升至Lv3",
                  en: "Main Building to Lv3"
                },
                {
                  zh: "兵營Lv1，立即訓練5個棍棒兵 [僅需1,250資源!]",
                  en: "Barracks Lv1, immediately train 5 Clubswingers [only 1,250 resources!]"
                }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                {
                  zh: "村莊大樓升至Lv5",
                  en: "Main Building to Lv5"
                },
                {
                  zh: "訓練更多棍棒兵(總計10-15個) [掠奪需要足夠兵力]",
                  en: "Train more Clubswingers (total 10-15) [raiding needs sufficient force]"
                },
                {
                  zh: "開始掠奪附近綠洲(攻擊<50動物)和不活躍玩家村莊 [戰利品補充資源]",
                  en: "Start raiding nearby oases (attack <50) and inactive player villages [bounty supplements resources]"
                },
                {
                  zh: "倉庫Lv1-2、糧倉Lv1-2",
                  en: "Warehouse Lv1-2, Granary Lv1-2"
                }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                {
                  zh: "村莊大樓升至Lv7-8 [掠奪資源補充大量建築成本]",
                  en: "Main Building to Lv7-8 [raid income supplements building costs]"
                },
                {
                  zh: "資源田升至Lv4-5 [背景生產，掠奪為主]",
                  en: "Resource fields to Lv4-5 [background production, raids are primary]"
                },
                {
                  zh: "倉庫/糧倉升至Lv5",
                  en: "Warehouse/Granary to Lv5"
                },
                {
                  zh: "地下室Lv1 [條頓人防守力弱，可略過]",
                  en: "Cranny Lv1 only [Teutons weak at defense, skip otherwise]"
                },
                {
                  zh: "持續掠奪，英雄配合棍棒兵清理綠洲",
                  en: "Continue raiding, hero assists Clubswingers clearing oases"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 建築衝刺", en: "Phase 2: Building Rush" },
          timeRange: { zh: "第24-48小時", en: "Hour 24-48" },
          steps: [
            {
              time: { zh: "24-36小時", en: "Hour 24-36" },
              actions: [
                {
                  zh: "村莊大樓升至Lv10 [掠奪資源支持]",
                  en: "Main Building to Lv10 [raid income supports]"
                },
                {
                  zh: "學院開始建築",
                  en: "Academy starts building"
                },
                {
                  zh: "掠奪持續進行，確保資源充足",
                  en: "Raiding continues, ensure sufficient resources"
                },
                {
                  zh: "英雄已清理多個綠洲，積累戰鬥經驗",
                  en: "Hero has cleared multiple oases, accumulates combat experience"
                }
              ]
            },
            {
              time: { zh: "36-48小時", en: "Hour 36-48" },
              actions: [
                {
                  zh: "學院升至Lv10",
                  en: "Academy to Lv10"
                },
                {
                  zh: "市政廳Lv1 → 啟動第1場慶典!",
                  en: "Town Hall Lv1 → START 1st celebration!"
                },
                {
                  zh: "大使館Lv1 [可選]",
                  en: "Embassy Lv1 [optional]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 居所+昂貴開拓者", en: "Phase 3: Residence + Expensive Settlers" },
          timeRange: { zh: "第48-120小時", en: "Hour 48-120" },
          steps: [
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                {
                  zh: "居所開始建築 [長期投資]",
                  en: "Residence starts building [long-term investment]"
                },
                {
                  zh: "第2、3場慶典進行中",
                  en: "2nd, 3rd celebrations underway"
                },
                {
                  zh: "資源田升至Lv7-8",
                  en: "Resource fields to Lv7-8"
                },
                {
                  zh: "倉庫/糧倉升至Lv8-9 [存儲開拓者資源]",
                  en: "Warehouse/Granary to Lv8-9 [store settler resources]"
                },
                {
                  zh: "掠奪資源填補居所建築缺口 [Hour 72預計完成]",
                  en: "Raid income fills residence building gap [Hour 72 estimated completion]"
                }
              ]
            },
            {
              time: { zh: "72-120小時", en: "Hour 72-120" },
              actions: [
                {
                  zh: "研究開拓者科技",
                  en: "Research Settler technology"
                },
                {
                  zh: "開始訓練3個開拓者 [60,000資源 - 最昂貴! 掠奪必須積極進行]",
                  en: "Start training 3 Settlers [60,000 resources - MOST expensive! raiding must be aggressive]"
                },
                {
                  zh: "第4、5場慶典啟動",
                  en: "4th, 5th celebrations activated"
                },
                {
                  zh: "倉庫/糧倉升至Lv10 [確保存儲60,000資源]",
                  en: "Warehouse/Granary to Lv10 [ensure 60k storage]"
                },
                {
                  zh: "英雄掠奪輸入: 預計Hour 110-120才能完成開拓者訓練",
                  en: "Hero raiding input critical: settlers expected Hour 110-120 completion"
                },
                {
                  zh: "掠奪不活躍玩家和綠洲(速度18棍棒兵,負載100) [必須維持掠奪節奏]",
                  en: "Raid inactive players and oases (speed 18, carry 100) [must maintain raid pace]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段4: 定居", en: "Phase 4: Settlement" },
          timeRange: { zh: "第120-168小時", en: "Hour 120-168" },
          steps: [
            {
              time: { zh: "120-140小時", en: "Hour 120-140" },
              actions: [
                {
                  zh: "3個開拓者訓練完成 [若掠奪充分，Hour 110-120完成]",
                  en: "3 Settlers training completed [if raiding sufficient, Hour 110-120]"
                },
                {
                  zh: "CP驗證 ≥ 2000",
                  en: "Verify CP ≥ 2000"
                },
                {
                  zh: "選擇目標村莊 [20格內15綠洲或9綠洲]",
                  en: "Select target village [15c or 9c within 20 tiles]"
                },
                {
                  zh: "掠奪與開拓者護衛部隊準備",
                  en: "Prepare raid and settler escort force"
                }
              ]
            },
            {
              time: { zh: "140-168小時", en: "Hour 140-168" },
              actions: [
                {
                  zh: "發送3個開拓者至目標村莊",
                  en: "Send 3 Settlers to target village"
                },
                {
                  zh: "定居完成 → 第2村莊建立! [Day 5-7完成]",
                  en: "Settlement complete → 2nd village established! [Day 5-7 completion]"
                },
                {
                  zh: "條頓人掠奪經濟模式確立，新村莊也繼續掠奪",
                  en: "Teuton raid economy established, new village continues raiding"
                }
              ]
            }
          ]
        }
      ]
    },

    egyptians: {
      name: { zh: "埃及人", en: "Egyptians" },
      estimatedTime: { zh: "第5-6天", en: "Day 5-6" },
      speed: { zh: "快速(英雄驅動)", en: "Fast (hero-driven)" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4600, 4200, 5800, 4400] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 57000 }
      },
      keyAdvantage: {
        zh: "英雄+25% 資源採集被動(所有英雄行動都額外獲得25% 資源) + 最便宜兵種(奴隸民兵125資源)",
        en: "Hero +25% resource production passive (all hero actions get 25% bonus) + cheapest unit (Slave Militia 125 resources)"
      },
      heroStrategy: {
        zh: "所有點數投入資源(最多+500資源/點總額) - 埃及英雄被動乘以1.25，成為最強經濟引擎",
        en: "All points to Resources (passive +25% multiplier), Egyptian hero becomes strongest economic engine"
      },
      celebrationPlan: {
        zh: "同其他族，英雄資源加成可快速積累CP建築，慶典速度更快",
        en: "Same timing, hero resource bonus accelerates CP building upgrades, faster celebrations"
      },
      troopTraining: {
        zh: "大量訓練奴隸民兵(125資源/個，訓練時間530ms最快)護衛英雄，Day 2開始大規模清理綠洲",
        en: "Mass train Slave Militia (125 res/each, 530ms fastest) escort hero, Day 2 massive oasis farming"
      },
      phases: [
        {
          name: { zh: "階段1: 經濟基礎", en: "Phase 1: Economy Foundation" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                {
                  zh: "完成新手任務取得免費資源",
                  en: "Complete beginner quests for free resources"
                },
                {
                  zh: "資源田升至Lv2-3 [所有類型均衡，埃及人不依賴特定資源]",
                  en: "All resource fields to Lv2-3 [balanced, Egyptians don't rely on specific resources]"
                },
                {
                  zh: "村莊大樓升至Lv3",
                  en: "Main Building to Lv3"
                },
                {
                  zh: "石牆Lv1 [埃及防牆幾乎無敵，可選防守投資]",
                  en: "Stone Wall Lv1 [Egyptian walls nearly indestructible, optional defense]"
                }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                {
                  zh: "村莊大樓升至Lv5",
                  en: "Main Building to Lv5"
                },
                {
                  zh: "資源田升至Lv4-5",
                  en: "Resource fields to Lv4-5"
                },
                {
                  zh: "倉庫Lv3、糧倉Lv3",
                  en: "Warehouse Lv3, Granary Lv3"
                },
                {
                  zh: "兵營Lv1，訓練10個奴隸民兵 [僅需1,250資源!] - 極便宜護衛兵",
                  en: "Barracks Lv1, train 10 Slave Militia [only 1,250 resources!] - ultra-cheap escort"
                },
                {
                  zh: "英雄資源被動已啟用 [+25% 資源採集]",
                  en: "Hero resource passive active [+25% resource gathering]"
                }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                {
                  zh: "村莊大樓升至Lv8-10 ★★★",
                  en: "Main Building to Lv8-10 ★★★"
                },
                {
                  zh: "資源田升至Lv5-6",
                  en: "Resource fields to Lv5-6"
                },
                {
                  zh: "倉庫/糧倉升至Lv5-6",
                  en: "Warehouse/Granary to Lv5-6"
                },
                {
                  zh: "英雄+奴隸民兵清理弱綠洲(攻擊<50) [英雄資源加成已開始產出]",
                  en: "Hero + Slave Militia clear weak oases (attack <50) [hero bonus resources already generating]"
                },
                {
                  zh: "英雄庫存開始積累資源 [負載4,000+25% = 5,000有效資源]",
                  en: "Hero inventory accumulates resources [capacity 4,000 + 25% = 5,000 effective]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 學院+市政廳", en: "Phase 2: Academy + Town Hall" },
          timeRange: { zh: "第24-48小時", en: "Hour 24-48" },
          steps: [
            {
              time: { zh: "24-36小時", en: "Hour 24-36" },
              actions: [
                {
                  zh: "學院升至Lv10",
                  en: "Academy to Lv10"
                },
                {
                  zh: "訓練10個奴隸民兵 [另1,250資源，總計20個守衛]",
                  en: "Train 10 more Slave Militia [another 1,250 resources, total 20 escorts]"
                },
                {
                  zh: "英雄積極農業 [+25% 被動資源正全力運作]",
                  en: "Hero aggressive farming [+25% passive at full strength]"
                },
                {
                  zh: "英雄每次綠洲清理額外獲得25% 戰利品 [超級加成!]",
                  en: "Hero gains 25% bonus on every oasis clear [massive multiplier!]"
                }
              ]
            },
            {
              time: { zh: "36-48小時", en: "Hour 36-48" },
              actions: [
                {
                  zh: "市政廳Lv1 → 啟動第1場慶典!",
                  en: "Town Hall Lv1 → START 1st celebration!"
                },
                {
                  zh: "居所開始建築",
                  en: "Residence starts building"
                },
                {
                  zh: "資源田升至Lv7",
                  en: "Resource fields to Lv7"
                },
                {
                  zh: "倉庫/糧倉升至Lv7",
                  en: "Warehouse/Granary to Lv7"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 居所+開拓者訓練", en: "Phase 3: Residence + Settler Training" },
          timeRange: { zh: "第48-96小時", en: "Hour 48-96" },
          steps: [
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                {
                  zh: "居所升至Lv10",
                  en: "Residence to Lv10"
                },
                {
                  zh: "第2、3場慶典進行中",
                  en: "2nd, 3rd celebrations underway"
                },
                {
                  zh: "資源田升至Lv8",
                  en: "Resource fields to Lv8"
                },
                {
                  zh: "倉庫/糧倉升至Lv8-9",
                  en: "Warehouse/Granary to Lv8-9"
                },
                {
                  zh: "英雄農業已產出~1,800資源/天額外加成 [+25% × 基礎產出]",
                  en: "Hero farming already generating ~1,800 res/day bonus [+25% multiplier on base]"
                }
              ]
            },
            {
              time: { zh: "72-96小時", en: "Hour 72-96" },
              actions: [
                {
                  zh: "研究開拓者科技",
                  en: "Research Settler technology"
                },
                {
                  zh: "開始訓練3個定居者 [57,000資源，英雄被動補充]",
                  en: "Start training 3 Settlers [57,000 resources, hero bonus supplements]"
                },
                {
                  zh: "第4、5場慶典啟動",
                  en: "4th, 5th celebrations activated"
                },
                {
                  zh: "英雄庫存供應定居者資源 [持續清理綠洲填補]",
                  en: "Hero inventory supplies settler resources [continuous oasis farming fills gaps]"
                },
                {
                  zh: "埃及經濟引擎全力運作 [英雄+25% 加成+奴隸民兵+綠洲農業=完美協同]",
                  en: "Egyptian economic engine at full strength [hero +25% + Slave Militia + oasis farming = synergy]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段4: 定居", en: "Phase 4: Settlement" },
          timeRange: { zh: "第96-144小時", en: "Hour 96-144" },
          steps: [
            {
              time: { zh: "96-120小時", en: "Hour 96-120" },
              actions: [
                {
                  zh: "3個開拓者訓練完成",
                  en: "3 Settlers training completed"
                },
                {
                  zh: "CP驗證 ≥ 2000",
                  en: "Verify CP ≥ 2000"
                },
                {
                  zh: "選擇目標村莊 [20格內15綠洲或9綠洲，優先靠近綠洲點]",
                  en: "Select target village [15c or 9c within 20 tiles, prioritize oasis proximity]"
                },
                {
                  zh: "護衛準備: 20個奴隸民兵充足 (總資源僅2,500)",
                  en: "Escort prepared: 20 Slave Militia sufficient (total 2,500 resources)"
                }
              ]
            },
            {
              time: { zh: "120-144小時", en: "Hour 120-144" },
              actions: [
                {
                  zh: "發送3個開拓者至目標村莊",
                  en: "Send 3 Settlers to target village"
                },
                {
                  zh: "定居完成 → 第2村莊建立! [Day 5-6完成]",
                  en: "Settlement complete → 2nd village established! [Day 5-6 completion]"
                },
                {
                  zh: "新村莊建造水利工程 [埃及特殊建築，提高綠洲產出] - 可選優化",
                  en: "New village: build Waterworks [Egyptian special building, enhances oasis output] - optional"
                }
              ]
            }
          ]
        }
      ]
    },

    huns: {
      name: { zh: "匈人", en: "Huns" },
      estimatedTime: { zh: "第6-8天", en: "Day 6-8" },
      speed: { zh: "中等(研究加速)", en: "Medium (research-accelerated)" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4950, 4550, 6300, 4750] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 62700 }
      },
      keyAdvantage: {
        zh: "研究速度快20-40% + 指揮中心(3個擴張槽) vs 居所(2個槽) = 前期軍事優勢",
        en: "20-40% faster research + Command Center (3 expansion slots) vs Residence (2) = early military advantage"
      },
      heroStrategy: {
        zh: "分配戰鬥力(草原騎手掠奪) 和資源(補充昂貴開拓者) - 傾向戰鬥力70% 資源30%",
        en: "Split Fighting (Steppe Rider raids) and Resources (settler supplements) - 70% combat / 30% resources"
      },
      celebrationPlan: {
        zh: "同其他族，但開拓者最昂貴(62,700)，可能需要等待第6場慶典",
        en: "Same timing, but settlers most expensive (62,700) - may need 6th celebration"
      },
      troopTraining: {
        zh: "Day 1開始訓練草原騎手(速度16，負載110)，從Hour 12開始積極掠奪綠洲和不活躍玩家，資助開拓者訓練",
        en: "Day 1 train Steppe Riders (speed 16, carry 110), Hour 12 start aggressive raiding to fund settlers"
      },
      phases: [
        {
          name: { zh: "階段1: 騎兵衝刺", en: "Phase 1: Cavalry Rush" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                {
                  zh: "完成新手任務取得免費資源",
                  en: "Complete beginner quests for free resources"
                },
                {
                  zh: "資源田升至Lv2-3",
                  en: "Resource fields to Lv2-3"
                },
                {
                  zh: "村莊大樓升至Lv3",
                  en: "Main Building to Lv3"
                }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                {
                  zh: "村莊大樓升至Lv5",
                  en: "Main Building to Lv5"
                },
                {
                  zh: "資源田升至Lv4",
                  en: "Resource fields to Lv4"
                },
                {
                  zh: "馬廄Lv1-3，訓練3-5個草原騎手 [速度16，負載110 = 掠奪利器]",
                  en: "Steppe Lv1-3, train 3-5 Steppe Riders [speed 16, carry 110 = raiding tool]"
                },
                {
                  zh: "倉庫Lv1-2、糧倉Lv1-2",
                  en: "Warehouse Lv1-2, Granary Lv1-2"
                }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                {
                  zh: "村莊大樓升至Lv8-10 ★★★",
                  en: "Main Building to Lv8-10 ★★★"
                },
                {
                  zh: "草原騎手開始掠奪綠洲和不活躍玩家 [速度16讓多次往返成為可能]",
                  en: "Steppe Riders start raiding oases and inactive players [speed 16 enables multiple trips]"
                },
                {
                  zh: "資源田升至Lv5-6",
                  en: "Resource fields to Lv5-6"
                },
                {
                  zh: "英雄+草原騎手配合清理綠洲",
                  en: "Hero + Steppe Riders clear oases together"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 建築衝刺", en: "Phase 2: Building Rush" },
          timeRange: { zh: "第24-48小時", en: "Hour 24-48" },
          steps: [
            {
              time: { zh: "24-36小時", en: "Hour 24-36" },
              actions: [
                {
                  zh: "學院升至Lv10 [匈人20-40% 研究加速啟動!]",
                  en: "Academy to Lv10 [Huns' 20-40% research boost active!]"
                },
                {
                  zh: "掠奪持續，補充學院建築資源",
                  en: "Raiding continues, supplements academy building"
                },
                {
                  zh: "英雄掠奪收入累積",
                  en: "Hero raid income accumulates"
                }
              ]
            },
            {
              time: { zh: "36-48小時", en: "Hour 36-48" },
              actions: [
                {
                  zh: "市政廳Lv1 → 啟動第1場慶典!",
                  en: "Town Hall Lv1 → START 1st celebration!"
                },
                {
                  zh: "指揮中心開始建築 [替代居所，3個擴張槽 vs 2個]",
                  en: "Command Center starts building [replaces Residence, 3 slots vs 2]"
                },
                {
                  zh: "資源田升至Lv7",
                  en: "Resource fields to Lv7"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 指揮中心+昂貴開拓者", en: "Phase 3: Command Center + Expensive Settlers" },
          timeRange: { zh: "第48-120小時", en: "Hour 48-120" },
          steps: [
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                {
                  zh: "指揮中心升至Lv10 [與居所同耗時，但提供3槽優勢]",
                  en: "Command Center to Lv10 [same duration as Residence, but 3-slot advantage]"
                },
                {
                  zh: "第2、3場慶典進行中",
                  en: "2nd, 3rd celebrations underway"
                },
                {
                  zh: "倉庫/糧倉升至Lv9-10 [儲備62,700資源]",
                  en: "Warehouse/Granary to Lv9-10 [store 62,700 resources]"
                },
                {
                  zh: "掠奪與被動產出並行，補充建築資源",
                  en: "Raiding + production fill building gap"
                }
              ]
            },
            {
              time: { zh: "72-120小時", en: "Hour 72-120" },
              actions: [
                {
                  zh: "研究開拓者科技 [20-40% 研究加速中]",
                  en: "Research Settler technology [20-40% speed boost active]"
                },
                {
                  zh: "開始訓練3個開拓者 [62,700資源 - 最昂貴! 掠奪必須充足]",
                  en: "Start training 3 Settlers [62,700 resources - MOST expensive! raiding critical]"
                },
                {
                  zh: "第4、5、6場慶典啟動 [可能需要6場達成2000+ CP]",
                  en: "4th, 5th, 6th celebrations activated [may need 6th for 2000+ CP]"
                },
                {
                  zh: "草原騎手掠奪維持高強度 [預計Hour 110-130才能完成開拓者]",
                  en: "Steppe Rider raiding at high intensity [settlers expected Hour 110-130 completion]"
                },
                {
                  zh: "英雄庫存補充開拓者資源缺口",
                  en: "Hero inventory supplements settler resource gap"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段4: 定居", en: "Phase 4: Settlement" },
          timeRange: { zh: "第120-192小時", en: "Hour 120-192" },
          steps: [
            {
              time: { zh: "120-150小時", en: "Hour 120-150" },
              actions: [
                {
                  zh: "3個開拓者訓練完成 [若掠奪充分]",
                  en: "3 Settlers training completed [if raiding sufficient]"
                },
                {
                  zh: "CP驗證 ≥ 2000",
                  en: "Verify CP ≥ 2000"
                },
                {
                  zh: "選擇目標村莊 [20格內15綠洲或9綠洲]",
                  en: "Select target village [15c or 9c within 20 tiles]"
                },
                {
                  zh: "草原騎手(速度16)可快速偵察定居點",
                  en: "Steppe Riders (speed 16) can scout settlements quickly"
                }
              ]
            },
            {
              time: { zh: "150-192小時", en: "Hour 150-192" },
              actions: [
                {
                  zh: "發送3個開拓者至目標村莊",
                  en: "Send 3 Settlers to target village"
                },
                {
                  zh: "定居完成 → 第2村莊建立! [Day 6-8完成]",
                  en: "Settlement complete → 2nd village established! [Day 6-8 completion]"
                },
                {
                  zh: "新村莊優勢: 指揮中心3槽設計保證擴張上限最高",
                  en: "New village advantage: Command Center's 3-slot design ensures maximum expansion ceiling"
                }
              ]
            }
          ]
        }
      ]
    },

    vikings: {
      name: { zh: "維京人", en: "Vikings" },
      estimatedTime: { zh: "第6-7天(特殊伺服器)", en: "Day 6-7 (special servers only)" },
      speed: { zh: "中快(海軍系統)", en: "Medium-fast (naval system)" },
      availability: {
        zh: "僅在特定傳奇伺服器開放(非所有伺服器)",
        en: "Only on special Legend servers (not all servers)"
      },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4700, 4300, 5900, 4500] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 57600 }
      },
      keyAdvantage: {
        zh: "狂戰士大傷害 + 瓦爾基麗2穀物重騎兵 + 海軍系統 = 獨特的海岸開發潛力",
        en: "Berserker massive damage + Valkyrie 2-crop cavalry + naval system = unique coastal expansion potential"
      },
      heroStrategy: {
        zh: "投入戰鬥力(綠洲清理+掠奪)，維京英雄-5% 忠誠度與雅爾堆疊，強化掠奪能力",
        en: "Fighting Strength focus (oasis + raiding), hero -5% loyalty stacks with Jarl, strengthens raids"
      },
      celebrationPlan: {
        zh: "同其他族，開拓者成本適中，4-5場慶典達成",
        en: "Same timing, moderate settler cost - 4-5 celebrations for 2000 CP"
      },
      troopTraining: {
        zh: "Day 1-2訓練5-10個盾女(防守+掠奪混用)；Day 3後備選女狂戰士(快速掠奪)",
        en: "Day 1-2 train 5-10 Shieldmaidens (defense + raid hybrid); Day 3+ optional Jomsvikings (fast raids)"
      },
      phases: [
        {
          name: { zh: "階段1: 基礎建設", en: "Phase 1: Foundation" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                {
                  zh: "完成新手任務取得免費資源",
                  en: "Complete beginner quests for free resources"
                },
                {
                  zh: "資源田升至Lv2-3",
                  en: "Resource fields to Lv2-3"
                },
                {
                  zh: "村莊大樓升至Lv3",
                  en: "Main Building to Lv3"
                },
                {
                  zh: "防壘Lv1 [維京防牆較弱，可最小化投資]",
                  en: "Barricade Lv1 [Viking walls weak, minimize investment]"
                }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                {
                  zh: "村莊大樓升至Lv5",
                  en: "Main Building to Lv5"
                },
                {
                  zh: "資源田升至Lv4-5",
                  en: "Resource fields to Lv4-5"
                },
                {
                  zh: "倉庫Lv3、糧倉Lv3",
                  en: "Warehouse Lv3, Granary Lv3"
                },
                {
                  zh: "兵營Lv1-3，訓練5-10個盾女 [防守與掠奪兼用]",
                  en: "Barracks Lv1-3, train 5-10 Shieldmaidens [defense + raid hybrid]"
                }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                {
                  zh: "村莊大樓升至Lv8-10 ★★★",
                  en: "Main Building to Lv8-10 ★★★"
                },
                {
                  zh: "資源田升至Lv6",
                  en: "Resource fields to Lv6"
                },
                {
                  zh: "倉庫/糧倉升至Lv5-6",
                  en: "Warehouse/Granary to Lv5-6"
                },
                {
                  zh: "英雄+盾女清理弱綠洲 [英雄-5% 忠誠度優勢開始]",
                  en: "Hero + Shieldmaidens clear weak oases [hero -5% loyalty advantage active]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 學院+考慮港口", en: "Phase 2: Academy + Harbor Consideration" },
          timeRange: { zh: "第24-48小時", en: "Hour 24-48" },
          steps: [
            {
              time: { zh: "24-36小時", en: "Hour 24-36" },
              actions: [
                {
                  zh: "學院升至Lv10",
                  en: "Academy to Lv10"
                },
                {
                  zh: "大使館Lv1 [維京人海軍系統相關]",
                  en: "Embassy Lv1 [Vikings' naval system related]"
                },
                {
                  zh: "暫不建造港口 [港口是奢侈品，第2村落再考慮]",
                  en: "Don't build Harbor yet [Harbor is luxury, consider in 2nd village]"
                },
                {
                  zh: "英雄農業繼續，積累資源",
                  en: "Hero farming continues, accumulate resources"
                }
              ]
            },
            {
              time: { zh: "36-48小時", en: "Hour 36-48" },
              actions: [
                {
                  zh: "市政廳Lv1 → 啟動第1場慶典!",
                  en: "Town Hall Lv1 → START 1st celebration!"
                },
                {
                  zh: "居所開始建築 [非港口，為了擴張槽]",
                  en: "Residence starts building [for expansion slots, not Harbor]"
                },
                {
                  zh: "資源田升至Lv7",
                  en: "Resource fields to Lv7"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 居所+開拓者訓練", en: "Phase 3: Residence + Settler Training" },
          timeRange: { zh: "第48-120小時", en: "Hour 48-120" },
          steps: [
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                {
                  zh: "居所升至Lv10",
                  en: "Residence to Lv10"
                },
                {
                  zh: "第2、3場慶典進行中",
                  en: "2nd, 3rd celebrations underway"
                },
                {
                  zh: "倉庫/糧倉升至Lv9",
                  en: "Warehouse/Granary to Lv9"
                },
                {
                  zh: "英雄農業持續，堡壘建築+掠奪資源支持開拓者訓練",
                  en: "Hero farming continues, building + raid income supports settler training"
                }
              ]
            },
            {
              time: { zh: "72-120小時", en: "Hour 72-120" },
              actions: [
                {
                  zh: "研究開拓者科技",
                  en: "Research Settler technology"
                },
                {
                  zh: "開始訓練3個開拓者 [57,600資源，略高於平均]",
                  en: "Start training 3 Settlers [57,600 resources, slightly above average]"
                },
                {
                  zh: "第4、5場慶典啟動",
                  en: "4th, 5th celebrations activated"
                },
                {
                  zh: "英雄庫存補充開拓者資源",
                  en: "Hero inventory supplements settler resources"
                },
                {
                  zh: "備選: 女狂戰士(可選，若資源充足) [快速掠奪能力，加強Day 4-6]",
                  en: "Optional: Jomsvikings if resources allow [fast raiding, strengthens Day 4-6]"
                }
              ]
            }
          ]
        },
        {
          name: { zh: "階段4: 定居", en: "Phase 4: Settlement" },
          timeRange: { zh: "第120-168小時", en: "Hour 120-168" },
          steps: [
            {
              time: { zh: "120-140小時", en: "Hour 120-140" },
              actions: [
                {
                  zh: "3個開拓者訓練完成",
                  en: "3 Settlers training completed"
                },
                {
                  zh: "CP驗證 ≥ 2000",
                  en: "Verify CP ≥ 2000"
                },
                {
                  zh: "選擇目標村莊 [優先沿海或近綠洲的15c/9c - 未來港口擴張]",
                  en: "Select target village [prioritize coastal or oasis-near 15c/9c - future harbor expansion]"
                },
                {
                  zh: "護衛軍隊準備: 盾女10個足夠",
                  en: "Escort prepared: 10 Shieldmaidens sufficient"
                }
              ]
            },
            {
              time: { zh: "140-168小時", en: "Hour 140-168" },
              actions: [
                {
                  zh: "發送3個開拓者至目標村莊",
                  en: "Send 3 Settlers to target village"
                },
                {
                  zh: "定居完成 → 第2村莊建立! [Day 6-7完成]",
                  en: "Settlement complete → 2nd village established! [Day 6-7 completion]"
                },
                {
                  zh: "新村莊: 考慮港口建築 [如果沿海，港口可解鎖海軍擴張]",
                  en: "New village: consider Harbor [if coastal, unlocks naval expansion]"
                },
                {
                  zh: "新村莊: 瓦爾基麗(2穀物重騎兵)訓練 = 高效軍事擴張",
                  en: "New village: Valkyrie (2-crop cavalry) training = efficient military expansion"
                }
              ]
            }
          ]
        }
      ]
    }
  }
};

// Export for use in browser or Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SETTLEMENT_GUIDE };
}
