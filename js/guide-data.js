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
        zh: "在市政廳Lv1後盡快開始，每24小時舉辦一次慶典。早期每場約100-200 CP，需6-8場才能累積2000 CP",
        en: "Start immediately after Town Hall Lv1, run celebration every 24 hours. Early-game ~100-200 CP per celebration, requiring 6-8 celebrations to reach 2000 CP"
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
                  zh: "開始訓練3個開拓者 [57,000資源: 木材13,800 + 黏土12,600 + 鐵礦17,400 + 穀物13,200]",
                  en: "Start training 3 Settlers [57,000 resources: 13,800 wood + 12,600 clay + 17,400 iron + 13,200 crop]"
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
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1（前6小時）：</strong>完成新手任務取資源 → 所有資源田升Lv2-3（優先穀田）→ 村莊大樓Lv3 → 地下室Lv1</li><li><strong>Day 1（6-12小時）：</strong>村莊大樓Lv5（<strong>關鍵：同時用雙佇列升穀田至Lv4</strong>）→ 其他資源田升Lv4 → 倉庫/糧倉Lv3</li><li><strong>Day 1-2（12-24小時）：</strong>村莊大樓Lv8-10（最高優先）→ 資源田升Lv5-6 → 兵營Lv1，訓練5個古羅馬步兵護衛英雄</li><li><strong>Day 2-3：</strong>學院升Lv10 → 市政廳Lv1 → 立即啟動第1場慶典 → 居所開始建造</li><li><strong>Day 4-5：</strong>居所升至Lv10 → 訓練3個開拓者（共57,000資源）→ CP達2,000後派出開拓者</li></ul>",
        en: "<ul><li><strong>Day 1 (first 6h):</strong> Complete beginner quests → All resource fields to Lv2-3 (prioritize crop) → Main Building Lv3 → Cranny Lv1</li><li><strong>Day 1 (6-12h):</strong> Main Building Lv5 (<strong>Key: use dual queue to upgrade crop to Lv4 simultaneously</strong>) → Other fields to Lv4 → Warehouse/Granary Lv3</li><li><strong>Day 1-2 (12-24h):</strong> Main Building Lv8-10 (highest priority) → Fields to Lv5-6 → Barracks Lv1, train 5 Legionnaires to escort hero</li><li><strong>Day 2-3:</strong> Academy Lv10 → Town Hall Lv1 → Start 1st celebration immediately → Begin Residence</li><li><strong>Day 4-5:</strong> Residence Lv10 → Train 3 Settlers (57,000 resources total) → Send settlers once CP reaches 2,000</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄升點：</strong>全部點數投入戰鬥力（+100戰力/點，其他族只有+80），讓英雄成為最強的綠洲獵人。</li><li><strong>護衛配置：</strong>派5-10個古羅馬步兵（Legionnaire）陪同英雄，抵擋綠洲動物的反擊。</li><li><strong>清理順序：</strong>Day 1先清攻擊力 &lt;50 的弱綠洲（老鼠、蜘蛛、蛇）→ Day 3後挑戰中型綠洲（狼、熊）→ 英雄等級夠高後才挑戰大型綠洲。</li><li><strong>戰利品處理：</strong>將所有動物屍體在市場賣出，換取額外資源補充建設，每日可額外獲得5,000-10,000+資源。</li></ul>",
        en: "<ul><li><strong>Hero stat allocation:</strong> All points into Fighting Strength (+100/pt vs. +80 for other tribes), making Roman hero the strongest oasis farmer.</li><li><strong>Escort setup:</strong> Bring 5-10 Legionnaires with the hero to absorb oasis animal counterattacks.</li><li><strong>Clearing order:</strong> Day 1 clear weak oases (attack &lt;50: Rats, Spiders, Snakes) → Day 3+ attempt medium oases (Wolves, Bears) → Only challenge large oases once hero level is high enough.</li><li><strong>Bounty handling:</strong> Sell all animal carcasses at the marketplace for extra resources, gaining 5,000-10,000+ additional resources per day.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：忘記使用雙佇列</strong> — 羅馬最大優勢就是雙佇列，必須時刻確保兩個建造槽都在工作，否則等於浪費部族特性。</li><li><strong>錯誤2：訓練太多兵種</strong> — 前期資源有限，訓練超過10個兵種會嚴重拖慢建設進度，優先建設優於囤兵。</li><li><strong>錯誤3：沒有在市政廳建好前備齊MB10和Academy10</strong> — 市政廳需要MB10 + Academy10才能建造，很多新手到了才發現條件不足，浪費大量時間。</li><li><strong>錯誤4：居所升級太晚</strong> — 居所需要約36-48小時升至Lv10，必須提前開始，否則開拓者訓練完卻還在等居所。</li><li><strong>錯誤5：英雄點數分散</strong> — 羅馬英雄最佳用法是全投戰鬥力，若分散在其他屬性則失去清洲效率。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Forgetting the dual queue</strong> — Romans' biggest advantage is the dual queue; always keep both building slots busy, otherwise you're wasting your tribe's unique trait.</li><li><strong>Mistake 2: Training too many troops</strong> — Resources are scarce early; training more than 10 troops severely delays construction. Prioritize building over hoarding soldiers.</li><li><strong>Mistake 3: Not having MB10 + Academy10 ready for Town Hall</strong> — Town Hall requires MB10 + Academy10; many beginners discover this too late and waste hours.</li><li><strong>Mistake 4: Upgrading Residence too late</strong> — Residence takes 36-48 hours to reach Lv10; start early or your Settlers will be ready before the Residence is.</li><li><strong>Mistake 5: Spreading hero points</strong> — Roman hero's best use is full Fighting Strength investment; spreading points reduces oasis farming efficiency.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>雙佇列優勢：</strong>羅馬是唯一能同時升級資源田和建築的部族。例如：讓村莊大樓在主佇列升級時，用副佇列升穀田 — 這在遊戲前期能節省整整1-2天時間。</li><li><strong>禁衛兵（Praetorian）防守：</strong>禁衛兵步兵防禦高達65，是所有部族中最強的步兵防守單位，非常適合作為主防禦村的駐軍。</li><li><strong>馬飲水槽（Horse Drinking Trough）：</strong>建造後讓騎士類兵種訓練速度大幅提升，中後期轉型為騎兵軍隊時效益極大。</li><li><strong>城牆加成最高：</strong>羅馬城牆每級給予3%防禦加成（每級最高），是最適合防守型玩家的部族選擇。</li></ul>",
        en: "<ul><li><strong>Dual queue advantage:</strong> Romans are the only tribe that can upgrade resource fields and buildings simultaneously. Example: run Main Building in the main queue while upgrading crop fields in the secondary queue — saves 1-2 days in early game.</li><li><strong>Praetorian defense:</strong> Praetorians have 65 infantry defense, the highest of any troop in the game, making Romans ideal for defensive village garrisons.</li><li><strong>Horse Drinking Trough:</strong> Dramatically speeds up cavalry training; extremely valuable in mid-to-late game when transitioning to a cavalry army.</li><li><strong>Highest wall bonus:</strong> Roman City Wall gives 3% defense bonus per level (highest in the game), making Romans the top choice for defensive players.</li></ul>"
      }
    },

    gauls: {
      name: { zh: "高盧人", en: "Gauls" },
      estimatedTime: { zh: "第4-5天", en: "Day 4-5" },
      speed: { zh: "最快", en: "Fastest" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4400, 5600, 4200, 3900] },
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
        zh: "同羅馬人策略，TH Lv1後盡快開始，早期每場約100-200 CP，需6-8場慶典達2000 CP",
        en: "Same as Romans - start immediately after TH Lv1. Early-game ~100-200 CP per celebration, requiring 6-8 celebrations for 2000 CP"
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
                  zh: "準備訓練5-10個方陣兵(速度7，步兵防禦最強)",
                  en: "Prepare to train 5-10 Phalanx (speed 7, strongest infantry defense)"
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
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1（前6小時）：</strong>完成新手任務 → 所有資源田升Lv2-3（優先穀田）→ 村莊大樓Lv3 → 地下室Lv1-3（高盧地下室防護能力強，每格保護450資源）</li><li><strong>Day 1-2（6-24小時）：</strong>村莊大樓升Lv10 → 學院升Lv10 → 同時訓練5-10個方陣兵（Phalanx）護衛英雄農業</li><li><strong>Day 2-3：</strong>市政廳Lv1 → 立即啟動第1場慶典 → 居所開始建造 → Day 3後訓練雷神戰士（速度19）加速掠奪</li><li><strong>Day 3-4：</strong>開拓者成本最低（54,300資源）→ 訓練速度快25% → 三個開拓者訓練速度遠快於其他部族</li><li><strong>Day 4-5：</strong>CP達2,000 + 居所Lv10完成 → 派出開拓者，高盧是最快能開第2村的部族</li></ul>",
        en: "<ul><li><strong>Day 1 (first 6h):</strong> Complete beginner quests → All resource fields to Lv2-3 (prioritize crop) → Main Building Lv3 → Cranny Lv1-3 (Gaul crannies protect 450 resources each)</li><li><strong>Day 1-2 (6-24h):</strong> Main Building Lv10 → Academy Lv10 → Train 5-10 Phalanx to escort hero farming</li><li><strong>Day 2-3:</strong> Town Hall Lv1 → Start 1st celebration immediately → Begin Residence → Day 3+ train Theutates Thunder (speed 19) for faster raiding</li><li><strong>Day 3-4:</strong> Cheapest settlers (54,300 resources) + 25% faster training → Settlers complete far faster than other tribes</li><li><strong>Day 4-5:</strong> CP hits 2,000 + Residence Lv10 done → Send settlers; Gauls are the fastest tribe to settle a 2nd village</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄升點：</strong>全部投入資源（採集量+100資源/點），因為高盧英雄戰鬥力相對較弱，靠大量採集資源來補償。</li><li><strong>護衛配置：</strong>Day 1-2用方陣兵（步兵防禦強）護衛英雄 → Day 3後換成雷神戰士（Theutates Thunder，速度19）護衛，速度更快且運載量大。</li><li><strong>雷神戰士農業：</strong>雷神戰士速度19、運載75，是全遊戲最快的掠奪單位之一，可以快速往返多個綠洲和不活躍玩家村莊。</li><li><strong>清理順序：</strong>與其他部族相同，從弱動物（老鼠、蜘蛛）開始，售出戰利品補充建設資源。</li></ul>",
        en: "<ul><li><strong>Hero stat allocation:</strong> All points into Resources (+100 resources/pt), since Gaul hero has weaker combat but compensates with higher resource gathering.</li><li><strong>Escort setup:</strong> Day 1-2 use Phalanx (strong infantry defense) to escort hero → Day 3+ switch to Theutates Thunder (speed 19) for faster trips.</li><li><strong>Theutates Thunder farming:</strong> Theutates Thunder at speed 19 and carry 75 is one of the fastest raiding units in the game, able to quickly hit multiple oases and inactive villages.</li><li><strong>Clearing order:</strong> Same as other tribes — start with weak animals (Rats, Spiders), sell bounty for construction resources.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：沒有早期訓練雷神戰士</strong> — 很多新手只訓練方陣兵，但雷神戰士（速度19）才是高盧的核心農業單位，應在Day 3後盡快訓練。</li><li><strong>錯誤2：忽略地下室的防護作用</strong> — 高盧地下室每格保護450資源（其他部族只有100），早期多建幾個地下室可以大幅減少被掠奪的損失。</li><li><strong>錯誤3：開拓者訓練太晚</strong> — 高盧訓練速度快25%，應在資源準備好後立刻開始訓練，不要等到居所升滿才訓練。</li><li><strong>錯誤4：英雄護衛不足</strong> — 高盧英雄戰鬥力弱，清洲時若護衛太少容易損失英雄，要確保有足夠護衛再出發。</li><li><strong>錯誤5：建太多防禦建築</strong> — 高盧防禦能力本就強，早期無需大量建造額外防禦，重點放在資源和速度上。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Not training Theutates Thunder early</strong> — Many beginners only train Phalanx, but Theutates Thunder (speed 19) is Gauls' core raiding unit; train them from Day 3 onward.</li><li><strong>Mistake 2: Ignoring cranny protection</strong> — Gaul crannies protect 450 resources each (other tribes only 100); build several early to significantly reduce raid losses.</li><li><strong>Mistake 3: Training settlers too late</strong> — Gaul settler training is 25% faster; start training as soon as resources are ready, don't wait until Residence is maxed.</li><li><strong>Mistake 4: Insufficient hero escort</strong> — Gaul hero has weaker combat; heading to oases with too few escorts risks losing the hero.</li><li><strong>Mistake 5: Over-building defenses</strong> — Gauls already have strong defense; no need for heavy defensive investment early — focus on resources and speed.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>最快開村優勢：</strong>開拓者成本54,300資源（條頓人需60,000）且訓練速度快25%，在相同條件下高盧比其他部族早1-2天開出第2村。</li><li><strong>雷神戰士（Theutates Thunder）：</strong>速度19、運載75、僅需2糧草維持，是全遊戲最佳早期掠奪單位，適合快速積累資源。</li><li><strong>方陣兵防守：</strong>方陣兵步兵防禦達40，是優秀的防禦兵種，高盧天然適合建立防守型據點村莊。</li><li><strong>地下室三倍保護：</strong>高盧地下室每格保護450資源，遠高於其他部族的100，能有效降低早期被掠奪的損失。</li></ul>",
        en: "<ul><li><strong>Fastest settlement advantage:</strong> Settler cost is 54,300 resources (Teutons need 60,000) with 25% faster training — Gauls settle their 2nd village 1-2 days earlier than other tribes under equal conditions.</li><li><strong>Theutates Thunder:</strong> Speed 19, carry 75, only 2 crop upkeep — the best early raiding unit in the game, ideal for rapidly accumulating resources.</li><li><strong>Phalanx defense:</strong> Phalanx has 40 infantry defense, an excellent defensive troop, naturally making Gauls suited for defensive garrison villages.</li><li><strong>Triple cranny protection:</strong> Gaul crannies protect 450 resources each vs. 100 for other tribes — significantly reduces early-game raid losses.</li></ul>"
      }
    },

    teutons: {
      name: { zh: "條頓人", en: "Teutons" },
      estimatedTime: { zh: "第5-7天", en: "Day 5-7" },
      speed: { zh: "中等(受掠奪影響)", en: "Medium (raid-dependent)" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [5800, 4400, 4600, 5200] },
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
        en: "Same as others, but settler cost is high (60,000 total, 2nd most expensive after Huns 62,700)"
      },
      troopTraining: {
        zh: "Day 1開始積極訓練棍棒兵(速度7，負載60)，從Hour 12開始掠奪綠洲和不活躍玩家補充資源",
        en: "Day 1 aggressively train Clubswingers (speed 7, carry 60), start raiding from Hour 12 to supplement resources"
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
                  zh: "掠奪不活躍玩家和綠洲(棍棒兵速度7,負載60) [必須維持掠奪節奏]",
                  en: "Raid inactive players and oases (Clubswinger speed 7, carry 60) [must maintain raid pace]"
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
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1（前6小時）：</strong>訓練第一批棍棒兵（Clubswinger，每個僅250資源）→ 資源田升Lv2 → 村莊大樓Lv3</li><li><strong>Day 1（6-12小時）：</strong>棍棒兵到位後立即開始掠奪綠洲（速度7）→ 訓練更多棍棒兵保持掠奪壓力 → 資源田升Lv3-4</li><li><strong>Day 1-3：</strong>大量掠奪綠洲和不活躍玩家 → 棍棒兵是最便宜的掠奪單位，用掠奪資源代替建設資源</li><li><strong>Day 2-3：</strong>村莊大樓Lv10 → 學院Lv10 → 市政廳Lv1 → 慶典積CP</li><li><strong>Day 5-7：</strong>居所Lv10 → 開拓者訓練完成（60,000資源，是最貴的部族）→ 派出開拓者</li></ul>",
        en: "<ul><li><strong>Day 1 (first 6h):</strong> Train first batch of Clubswingers (only 250 resources each) → Resource fields to Lv2 → Main Building Lv3</li><li><strong>Day 1 (6-12h):</strong> Start raiding oases with Clubswingers as soon as they're ready (speed 7) → Train more to maintain raiding pressure → Fields to Lv3-4</li><li><strong>Day 1-3:</strong> Aggressively raid oases and inactive players → Clubswingers are cheapest raiding unit; use raid income instead of building fields</li><li><strong>Day 2-3:</strong> Main Building Lv10 → Academy Lv10 → Town Hall Lv1 → Celebrations for CP</li><li><strong>Day 5-7:</strong> Residence Lv10 → Settlers trained (60,000 resources, most expensive tribe) → Send settlers</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄升點：</strong>戰鬥力和資源各分一半，條頓英雄需要清洲，但也需要資源補充開拓者的高成本。</li><li><strong>棍棒兵掠奪：</strong>棍棒兵速度7、運載60，雖然不是最快，但超低成本（250資源）讓你可以訓練大量棍棒兵同時掠奪多個目標。</li><li><strong>馬上騎兵（Paladin）：</strong>速度10、運載110，Day 3後如果資源充足，可以訓練聖騎士取代棍棒兵做更高效的農業。</li><li><strong>掠奪優先於建設：</strong>條頓的核心策略是「掠奪資助建設」，每日掠奪收入應超過自身資源田產出，才算真正發揮條頓優勢。</li></ul>",
        en: "<ul><li><strong>Hero stat allocation:</strong> Split between Fighting Strength and Resources — Teuton hero needs combat for oasis clearing, but Resources help offset the high settler cost.</li><li><strong>Clubswinger raiding:</strong> Clubswingers at speed 7 and carry 60 aren't the fastest, but their ultra-low cost (250 resources) lets you train many and raid multiple targets simultaneously.</li><li><strong>Paladin cavalry:</strong> Speed 10, carry 110 — if resources allow, train Paladins from Day 3 onward to replace Clubswingers for more efficient farming.</li><li><strong>Raid over build:</strong> Teuton's core strategy is &quot;raid to fund construction&quot; — daily raid income should exceed your own field output to truly leverage the Teuton advantage.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：只建資源田、不掠奪</strong> — 條頓最大優勢是掠奪，如果打法跟其他部族一樣靠建設，完全浪費了族群特性，等於用最貴的開拓者打最慢的策略。</li><li><strong>錯誤2：棍棒兵訓練太少</strong> — 掠奪需要數量，至少訓練20-30個棍棒兵才能持續有效掠奪，訓練太少則掠奪收入不夠彌補建設成本。</li><li><strong>錯誤3：太早拆散軍隊</strong> — 條頓玩家容易過度分散兵力到多個綠洲，導致每隊兵力不足，損傷率高。集中兵力打強目標比分散打弱目標更有效。</li><li><strong>錯誤4：忽視城牆升級</strong> — 條頓城牆防禦相對弱，但早期仍應升至Lv10以獲得防禦加成，不能完全忽視。</li><li><strong>錯誤5：沒有儲備資源備用</strong> — 開拓者成本60,000資源是全遊戲最貴，必須提前積累資源，不能全部花在訓練兵種上。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Only building fields, no raiding</strong> — Teutons' greatest advantage is raiding; playing like other tribes through pure construction wastes the tribe's traits and pairs the most expensive settlers with the slowest strategy.</li><li><strong>Mistake 2: Training too few Clubswingers</strong> — Raiding requires numbers; train at least 20-30 Clubswingers to sustain effective raids. Too few means raid income won't cover construction costs.</li><li><strong>Mistake 3: Spreading army too thin</strong> — Teuton players often split forces across too many oases, resulting in insufficient forces per raid and high casualty rates. Concentrate force on strong targets.</li><li><strong>Mistake 4: Neglecting wall upgrades</strong> — Teuton walls have weaker defense, but still upgrade to Lv10 early for the defense bonus; don't completely ignore it.</li><li><strong>Mistake 5: Not saving resources for settlers</strong> — Settlers cost 60,000 resources, the most expensive in the game; save up early instead of spending everything on troops.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>棍棒兵（Clubswinger）極致效益：</strong>僅250資源一個、速度7、運載60，是全遊戲CP值最高的初期掠奪單位，大量訓練可以建立滾雪球式的資源積累。</li><li><strong>掠奪倍率優勢：</strong>條頓攻擊強，掠奪成功率高，即使對方有一定防禦，棍棒兵數量優勢也能壓制。</li><li><strong>行動槌（Battering Ram）：</strong>條頓的城牆破壞器非常高效，進攻其他玩家時攜帶行動槌可以快速拆除城牆，減少進攻傷亡。</li><li><strong>高盧的剋星：</strong>條頓的攻擊型玩法天然克制防禦型的高盧，大量棍棒兵可以快速瓦解對方防線。</li></ul>",
        en: "<ul><li><strong>Clubswinger extreme value:</strong> Only 250 resources each, speed 7, carry 60 — highest efficiency early raiding unit in the game; mass training creates a snowball resource accumulation effect.</li><li><strong>Raid multiplier advantage:</strong> Teutons have high attack strength and high raid success rates; even against defended villages, numerical Clubswinger superiority wins through.</li><li><strong>Battering Ram:</strong> Teuton's wall-breaker is highly efficient; bringing Rams when attacking other players quickly destroys walls and reduces attack casualties.</li><li><strong>Gaul counter:</strong> Teuton's aggressive playstyle naturally counters defensive Gauls; mass Clubswingers can rapidly overwhelm their defensive lines.</li></ul>"
      }
    },

    egyptians: {
      name: { zh: "埃及人", en: "Egyptians" },
      estimatedTime: { zh: "第5-6天", en: "Day 5-6" },
      speed: { zh: "快速(英雄驅動)", en: "Fast (hero-driven)" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [4560, 5890, 4370, 4180] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 57000 }
      },
      keyAdvantage: {
        zh: "英雄+25% 資源採集被動(所有英雄行動都額外獲得25% 資源) + 最便宜兵種(奴隸民兵150資源)",
        en: "Hero +25% resource production passive (all hero actions get 25% bonus) + cheapest unit (Slave Militia 150 resources)"
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
        zh: "大量訓練奴隸民兵(150資源/個，訓練時間530ms最快)護衛英雄，Day 2開始大規模清理綠洲",
        en: "Mass train Slave Militia (150 res/each, 530ms fastest) escort hero, Day 2 massive oasis farming"
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
                  zh: "兵營Lv1，訓練10個奴隸民兵 [僅需1,500資源!] - 極便宜護衛兵",
                  en: "Barracks Lv1, train 10 Slave Militia [only 1,500 resources!] - ultra-cheap escort"
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
                  zh: "訓練10個奴隸民兵 [另1,500資源，總計20個守衛]",
                  en: "Train 10 more Slave Militia [another 1,500 resources, total 20 escorts]"
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
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1（前6小時）：</strong>完成新手任務 → 資源田升Lv2-3 → 村莊大樓Lv3 → 地下室Lv1</li><li><strong>Day 1-2：</strong>村莊大樓Lv10 → 學院Lv10 → 訓練灰燼衛士（Ash Warden）護衛英雄農業（步防強）</li><li><strong>Day 2-3：</strong>市政廳Lv1 → 慶典積CP → 居所開始建造 → 持續英雄農業（埃及英雄HP回復速度比其他族快25%，每天可以農業更多次）</li><li><strong>Day 3-4：</strong>訓練開拓者（成本57,000資源，與羅馬相同）→ 持續慶典達到2,000 CP</li><li><strong>Day 5-6：</strong>居所Lv10 + CP達標 → 派出開拓者建立第2村</li></ul>",
        en: "<ul><li><strong>Day 1 (first 6h):</strong> Complete beginner quests → Resource fields to Lv2-3 → Main Building Lv3 → Cranny Lv1</li><li><strong>Day 1-2:</strong> Main Building Lv10 → Academy Lv10 → Train Ash Wardens to escort hero farming (strong infantry defense)</li><li><strong>Day 2-3:</strong> Town Hall Lv1 → Celebrations for CP → Begin Residence → Continue hero farming (Egyptian hero HP regenerates 25% faster, allowing more farming trips per day)</li><li><strong>Day 3-4:</strong> Train settlers (cost 57,000 resources, same as Romans) → Keep celebrating to reach 2,000 CP</li><li><strong>Day 5-6:</strong> Residence Lv10 + CP threshold met → Send settlers to establish 2nd village</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄HP回復優勢：</strong>埃及英雄HP回復速度比其他部族快25%，意味著每天可以進行更多次農業行動，在同樣時間內能獲得更多綠洲資源。</li><li><strong>英雄升點：</strong>全部投入戰鬥力或資源均可，但建議前期投資源（+資源採集），後期轉投戰鬥力用於更難的綠洲。</li><li><strong>護衛配置：</strong>Day 1-2用灰燼衛士（Ash Warden，步防55）護衛英雄 → 後期用安赫衛隊（Anhur Guard）護衛更危險的綠洲。</li><li><strong>綠洲優先選擇：</strong>埃及的水力磨坊可以提升綠洲農業産量，優先占領農業綠洲（+25%糧食或+25%木材等）後再配合水力磨坊加成。</li></ul>",
        en: "<ul><li><strong>Hero HP regeneration advantage:</strong> Egyptian hero regenerates HP 25% faster than other tribes, enabling more farming trips per day and significantly more oasis resources over time.</li><li><strong>Hero stat allocation:</strong> Resources or Fighting Strength both work; recommended Resources early (for more resource yield), then switch to Fighting Strength for harder oases later.</li><li><strong>Escort setup:</strong> Day 1-2 use Ash Wardens (infantry def 55) to escort hero → Later use Anhur Guards for more dangerous oases.</li><li><strong>Oasis priority:</strong> Egyptian Waterworks boosts oasis output; prioritize claiming farming oases (+25% crop or +25% wood etc.) then combine with Waterworks bonus.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：忘記建造水力磨坊</strong> — 水力磨坊是埃及獨有的特殊建築，可以大幅提升綠洲農業產量，很多新手完全忽略它的存在。</li><li><strong>錯誤2：沒有利用英雄HP快速回復</strong> — 埃及英雄每次農業後HP扣減，但回復比其他族快25%，若不頻繁使用英雄等於浪費族群優勢。</li><li><strong>錯誤3：護衛兵種選擇不當</strong> — 埃及兵種較防禦導向，選錯護衛會導致護衛本身在農業過程中大量損失。灰燼衛士適合初期，安赫衛隊適合中期。</li><li><strong>錯誤4：投資過多在騎兵上</strong> — 埃及騎兵成本高昂，早期不應過度訓練雷沙戰車（Resheph Chariot），應先穩住基礎建設。</li><li><strong>錯誤5：沒有積極占領綠洲</strong> — 埃及的水力磨坊需要配合綠洲才能發揮效益，若不積極占領3個綠洲，水力磨坊加成大幅降低。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Forgetting to build Waterworks</strong> — Waterworks is Egypt's exclusive special building that greatly boosts oasis farming output; many beginners completely overlook it.</li><li><strong>Mistake 2: Not exploiting fast hero HP regeneration</strong> — Egyptian hero HP depletes per farming trip but regenerates 25% faster; not using the hero frequently wastes the tribe's advantage.</li><li><strong>Mistake 3: Wrong escort unit selection</strong> — Egyptian troops lean defensive; choosing wrong escorts leads to heavy escort losses during farming. Ash Wardens for early game, Anhur Guards for mid game.</li><li><strong>Mistake 4: Over-investing in cavalry</strong> — Egyptian cavalry is expensive; avoid mass-training Resheph Chariots early, stabilize construction first.</li><li><strong>Mistake 5: Not aggressively claiming oases</strong> — Egyptian Waterworks needs oases to work; without claiming 3 oases, the Waterworks bonus drops significantly.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>水力磨坊（Waterworks）：</strong>埃及獨有建築，每升一級增加綠洲資源產出加成，配合3個農業綠洲可以獲得遠超其他部族的資源收入，是中後期最強的資源型部族。</li><li><strong>英雄HP快速回復：</strong>比其他部族快25%，在伺服器前期積累資源的關鍵時期，這個優勢能讓埃及比其他部族多出20-30%的綠洲資源。</li><li><strong>石牆（Stone Wall）：</strong>每級提供2.5%防禦加成，耐久度最高，是最難被破壞的城牆，適合長期防守策略。</li><li><strong>推薦打法：</strong>中後期以農業村為主力，配合水力磨坊和3個農業綠洲，可以建立全伺服器最高的資源產出，成為聯盟的資源供應後盾。</li></ul>",
        en: "<ul><li><strong>Waterworks:</strong> Egypt's exclusive building — each level boosts oasis resource output; with 3 farming oases, Egyptians can generate far more resources than other tribes, making them the strongest resource-focused tribe in mid-to-late game.</li><li><strong>Fast hero HP regeneration:</strong> 25% faster than other tribes; during the critical early resource accumulation phase, this advantage yields 20-30% more oasis resources than other tribes.</li><li><strong>Stone Wall:</strong> Gives 2.5% defense bonus per level with the highest durability — the hardest wall to destroy, ideal for long-term defensive strategies.</li><li><strong>Recommended playstyle:</strong> Mid-to-late game focus on farming villages combined with Waterworks and 3 farming oases to achieve the highest resource output on the server, becoming the alliance's resource backbone.</li></ul>"
      }
    },

    huns: {
      name: { zh: "匈人", en: "Huns" },
      estimatedTime: { zh: "第6-8天", en: "Day 6-8" },
      speed: { zh: "中等(研究加速)", en: "Medium (research-accelerated)" },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [6100, 4600, 4800, 5400] },
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
        zh: "Day 1開始訓練草原騎手(速度16，負載115)，從Hour 12開始積極掠奪綠洲和不活躍玩家，資助開拓者訓練",
        en: "Day 1 train Steppe Riders (speed 16, carry 115), Hour 12 start aggressive raiding to fund settlers"
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
                  zh: "馬廄Lv1-3，訓練3-5個草原騎手 [速度16，負載115 = 掠奪利器]",
                  en: "Steppe Lv1-3, train 3-5 Steppe Riders [speed 16, carry 115 = raiding tool]"
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
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1：</strong>資源田升Lv2-3 → 村莊大樓Lv3 → 立即開始研究偵察員（Spotter，速度19）→ 利用20-40%快速研究加成讓科技推進更快</li><li><strong>Day 1-2：</strong>村莊大樓Lv10 → 訓練傭兵（Mercenary）護衛英雄 → 研究草原騎手（Steppe Rider）</li><li><strong>Day 2-3：</strong>學院Lv10 → 市政廳Lv1 → 慶典積CP → 居所開始建造（匈人用指揮中心代替居所/皇宮）</li><li><strong>Day 3-5：</strong>草原騎手（速度16）訓練後開始高效農業 → 開拓者訓練（成本62,700，最貴的族群）</li><li><strong>Day 6-8：</strong>CP達2,000 + 指揮中心Lv10 → 派出開拓者（匈人開村最慢，主要因為開拓者成本最高）</li></ul>",
        en: "<ul><li><strong>Day 1:</strong> Resource fields to Lv2-3 → Main Building Lv3 → Immediately research Spotter (speed 19) → Use 20-40% research speed bonus to advance tech faster</li><li><strong>Day 1-2:</strong> Main Building Lv10 → Train Mercenaries to escort hero → Research Steppe Rider</li><li><strong>Day 2-3:</strong> Academy Lv10 → Town Hall Lv1 → Celebrations for CP → Begin Command Center (Huns use Command Center instead of Residence/Palace)</li><li><strong>Day 3-5:</strong> Steppe Riders (speed 16) trained for efficient farming → Begin training settlers (cost 62,700, most expensive tribe)</li><li><strong>Day 6-8:</strong> CP hits 2,000 + Command Center Lv10 → Send settlers (Huns settle slowest mainly due to highest settler cost)</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄升點：</strong>騎兵軍隊時速度+3格/小時（騎馬狀態），讓英雄搭配草原騎手部隊農業時，整支部隊速度大幅提升。</li><li><strong>草原騎手護衛：</strong>草原騎手速度16、運載115，是極佳的農業和護衛單位，訓練完成後每次農業行程時間大幅縮短。</li><li><strong>偵察員清洲：</strong>偵察員（Spotter）速度19，是全遊戲最快的偵兵，可以先行偵察綠洲動物數量和強度，決定是否需要更多護衛。</li><li><strong>農業效率：</strong>因為草原騎手速度快，匈人的農業效率在所有部族中排名前二，中後期單日農業收入可以達到非常高的水準。</li></ul>",
        en: "<ul><li><strong>Hero passive:</strong> +3 tiles/hour speed when mounted with cavalry-only armies — hero riding with Steppe Rider squads dramatically increases the whole force's travel speed.</li><li><strong>Steppe Rider escort:</strong> Steppe Riders at speed 16 and carry 115 are excellent farming and escort units; once trained, farming trip times drop significantly.</li><li><strong>Spotter scouting:</strong> Spotter (speed 19) is the fastest scout in the game; use them to scout oasis animal counts and strength before deciding how many escorts to bring.</li><li><strong>Farming efficiency:</strong> Due to Steppe Rider speed, Huns rank among the top 2 tribes for farming efficiency; mid-to-late game daily farming income can reach very high levels.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：沒有利用20-40%快速研究加成</strong> — 匈人研究加速是核心優勢，應盡早研究騎兵科技，讓草原騎手和箭手儘快上線，拖延研究等於浪費優勢。</li><li><strong>錯誤2：訓練步兵而不是騎兵</strong> — 匈人幾乎沒有優秀的步兵，所有資源應優先投入騎兵訓練，把資源花在傭兵身上是對族群優勢的極大浪費。</li><li><strong>錯誤3：忽視開拓者成本</strong> — 62,700資源是全遊戲最高，必須比其他族更早開始積累資源，否則開村時間會大幅延後。</li><li><strong>錯誤4：城牆防禦太弱</strong> — 匈人的臨時城牆每級只有1.5%防禦加成（最低），需要靠大量騎兵野外防守而非城牆，但新手容易忽略這點而被攻擊。</li><li><strong>錯誤5：忘記匈人僅限5部族伺服器</strong> — 匈人只在5部族伺服器可用，選伺服器時必須確認。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Not using 20-40% research speed bonus</strong> — Research speed is Huns' core advantage; research cavalry tech early to get Steppe Riders and Marksmen online fast. Delaying research wastes the advantage.</li><li><strong>Mistake 2: Training infantry instead of cavalry</strong> — Huns have almost no good infantry; all resources should prioritize cavalry training. Spending on Mercenaries is a huge waste of the tribe's strengths.</li><li><strong>Mistake 3: Ignoring settler cost</strong> — At 62,700 resources (highest in game), start accumulating resources earlier than other tribes or settlement will be heavily delayed.</li><li><strong>Mistake 4: Weak wall defense</strong> — Huns' Makeshift Wall gives only 1.5% defense per level (lowest); relies on cavalry for field defense rather than walls. New players often get caught by this vulnerability.</li><li><strong>Mistake 5: Forgetting Huns are 5-tribe servers only</strong> — Huns are only available on 5-tribe servers; confirm this when choosing your server.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>草原騎手（Steppe Rider）：</strong>速度16、運載115、僅需2糧草，是全遊戲最佳的早期重騎兵，掠奪效率極高，每次可以攜帶大量資源回村。</li><li><strong>偵察員（Spotter）速度19：</strong>全遊戲最快的偵兵，可以在比任何其他部族更快的速度完成偵察，讓匈人在戰場情報上佔有優勢。</li><li><strong>指揮中心3槽擴張：</strong>匈人的指揮中心提供3個擴張槽（其他部族居所/皇宮只有2個），讓匈人在後期擴張上限比其他部族高，最終村莊數量可以更多。</li><li><strong>英雄騎馬加速：</strong>騎馬時速度+3格/小時，配合草原騎手的速度16，整支農業騎兵隊速度可達19+，是後期最強的農業部隊之一。</li></ul>",
        en: "<ul><li><strong>Steppe Rider:</strong> Speed 16, carry 115, only 2 crop upkeep — the best early heavy cavalry in the game with extremely high raiding efficiency; brings back massive resources each trip.</li><li><strong>Spotter (speed 19):</strong> Fastest scout in the game — completes reconnaissance faster than any other tribe, giving Huns battlefield intelligence advantage.</li><li><strong>Command Center 3-slot expansion:</strong> Huns' Command Center provides 3 expansion slots (other tribes' Residence/Palace only gives 2), enabling a higher village count ceiling than other tribes in late game.</li><li><strong>Hero mounted speed bonus:</strong> +3 tiles/hour when mounted; combined with Steppe Rider speed 16, the whole farming cavalry force can reach 19+ speed — one of the most efficient late-game farming armies.</li></ul>"
      }
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
        per: { zh: "單位", en: "per unit", values: [5200, 5000, 4800, 4200] },
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
        zh: "同其他族，開拓者成本適中，需6-8場慶典達成2000 CP",
        en: "Same timing, moderate settler cost - 6-8 celebrations needed for 2000 CP"
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
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1：</strong>資源田升Lv2-3 → 村莊大樓Lv3 → 訓練盾女（Shieldmaiden，步防55）作為初期護衛</li><li><strong>Day 1-2：</strong>村莊大樓Lv10 → 學院Lv10 → 研究烏鴉（Raven，速度17）作為偵兵 → 訓練少量狂戰士（Berserker）清洲（注意：每個狂戰士耗糧2）</li><li><strong>Day 2-3：</strong>市政廳Lv1 → 慶典積CP → 居所開始建造 → 如有沿海村莊可考慮建造港口解鎖船隊</li><li><strong>Day 3-5：</strong>訓練約姆斯維京戰士（Jomsviking）和瓦爾基里（Valkyrie，僅2糧草）作為主力攻擊騎兵</li><li><strong>Day 6-7：</strong>居所Lv10 + CP達2,000 → 派出開拓者（注意：維京僅限特殊伺服器）</li></ul>",
        en: "<ul><li><strong>Day 1:</strong> Resource fields to Lv2-3 → Main Building Lv3 → Train Shieldmaidens (infantry def 55) as initial escorts</li><li><strong>Day 1-2:</strong> Main Building Lv10 → Academy Lv10 → Research Raven (speed 17) for scouting → Train a few Berserkers for oasis clearing (note: each Berserker costs 2 crop upkeep)</li><li><strong>Day 2-3:</strong> Town Hall Lv1 → Celebrations for CP → Begin Residence → If coastal village, consider building Harbor to unlock ship fleet</li><li><strong>Day 3-5:</strong> Train Jomsvikings and Valkyries (only 2 crop upkeep) as main attack cavalry</li><li><strong>Day 6-7:</strong> Residence Lv10 + CP hits 2,000 → Send settlers (note: Vikings limited to special servers only)</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄升點：</strong>狂戰士戰術需要攻擊力，英雄投戰鬥力最能發揮維京的大傷害潛力。</li><li><strong>狂戰士清洲：</strong>狂戰士攻擊90、保證至少擊殺1個敵方單位，清洲效率高，但每個2糧草成本較高，不能無限量訓練。</li><li><strong>護衛選擇：</strong>盾女（Shieldmaiden）步防55，適合用來保護英雄在危險綠洲中不被反擊打死。</li><li><strong>船隊農業（特殊玩法）：</strong>維京特有的掠奪船速度24，可以沿海岸線快速掠奪其他村莊，是獨特的海上農業玩法。</li></ul>",
        en: "<ul><li><strong>Hero stat allocation:</strong> Berserker tactics need attack power; invest in Fighting Strength to maximize Vikings' big damage potential.</li><li><strong>Berserker oasis clearing:</strong> Berserker attack 90, guaranteed to kill at least 1 enemy unit — high oasis clearing efficiency, but 2 crop upkeep per unit limits mass training.</li><li><strong>Escort choice:</strong> Shieldmaiden (infantry def 55) is ideal for protecting the hero from oasis animal counterattacks.</li><li><strong>Raid Ship farming (special mechanic):</strong> Viking Raid Ship speed 24 can quickly raid coastal villages — a unique naval farming playstyle exclusive to Vikings.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：大量訓練狂戰士而不考慮糧草</strong> — 狂戰士每個消耗2糧草，大量訓練後糧草壓力極大，容易導致糧食負值，讓整個村莊陷入停滯。</li><li><strong>錯誤2：不訓練瓦爾基里</strong> — 瓦爾基里是2糧草的重騎兵，攻擊130、兩防各55/120，是全遊戲CP值最高的騎兵之一，新手常常忽略這個「廉價重騎」優勢。</li><li><strong>錯誤3：在非特殊伺服器選維京</strong> — 維京只在特定伺服器可用，新手選伺服器時必須先確認，否則可能根本選不到維京。</li><li><strong>錯誤4：忽視港口的戰略價值</strong> — 港口是維京獨有建築，解鎖後可以建造掠奪船和戰艦，放棄這個優勢等於放棄了維京的核心特性之一。</li><li><strong>錯誤5：拿狂戰士硬衝有重防守的目標</strong> — 狂戰士攻擊高但防禦極低（步防20），攻擊有大量防禦兵種的村莊時損傷率極高，應先偵察確認防守薄弱再出擊。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Mass-training Berserkers without managing crop</strong> — Berserkers cost 2 crop each; mass training creates extreme crop pressure, easily causing negative crop production and freezing the village.</li><li><strong>Mistake 2: Not training Valkyries</strong> — Valkyrie is a 2-crop heavy cavalry with attack 130 and def 55/120 — one of the best value cavalry units in the game; beginners often miss this 'cheap heavy cavalry' advantage.</li><li><strong>Mistake 3: Picking Vikings on non-special servers</strong> — Vikings are only available on specific servers; verify availability before selecting the server, or you may not be able to play Vikings at all.</li><li><strong>Mistake 4: Ignoring the Harbor's strategic value</strong> — Harbor is Vikings' exclusive building unlocking Raid Ships and warships; abandoning it means abandoning one of Vikings' core unique traits.</li><li><strong>Mistake 5: Rushing Berserkers against heavily defended targets</strong> — Berserkers have high attack but very low defense (infantry def 20); attacking villages with many defenders results in massive casualties. Scout first, confirm weak defense before attacking.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>瓦爾基里（Valkyrie）超值重騎兵：</strong>僅2糧草維持費的重騎兵，攻擊130、步防55、騎防120，是全遊戲最划算的重騎兵，中後期大量訓練瓦爾基里是維京的核心戰術。</li><li><strong>狂戰士（Berserker）保證擊殺機制：</strong>每個狂戰士保證至少擊殺1個敵方單位，在面對大量弱兵種時，少量狂戰士就能造成毀滅性破壞。</li><li><strong>掠奪船速度24：</strong>維京特有的海上掠奪工具，速度遠超任何陸地騎兵，在沿海地圖上可以快速掠奪大片區域，是獨特的海戰擴張路線。</li><li><strong>特殊伺服器限制：</strong>維京只在特定傳奇伺服器開放，這讓維京玩家群體更小，在可用的伺服器上，維京往往能形成非常獨特的戰術體系。</li></ul>",
        en: "<ul><li><strong>Valkyrie — exceptional value heavy cavalry:</strong> Only 2 crop upkeep, attack 130, infantry def 55, cavalry def 120 — the most cost-efficient heavy cavalry in the game; mass-training Valkyries in mid-to-late game is Vikings' core tactic.</li><li><strong>Berserker guaranteed kill mechanic:</strong> Each Berserker guarantees at least 1 enemy kill; against large numbers of weak troops, a few Berserkers cause devastating destruction.</li><li><strong>Raid Ship speed 24:</strong> Vikings' exclusive naval raiding tool — far faster than any land cavalry; on coastal maps, can quickly raid vast areas, offering a unique naval expansion route.</li><li><strong>Special server restriction:</strong> Vikings only available on specific Legend servers, making the Viking player base smaller; on available servers, Vikings often form a very unique tactical system.</li></ul>"
      }
    },

    spartans: {
      name: { zh: "斯巴達人", en: "Spartans" },
      estimatedTime: { zh: "第6-7天（特殊伺服器）", en: "Day 6-7 (special servers only)" },
      speed: { zh: "中速（精兵路線）", en: "Medium (elite troop focus)" },
      availability: {
        zh: "僅在特定傳奇伺服器開放",
        en: "Only on special Legend servers"
      },
      settlerCost: {
        zh: "開拓者成本",
        en: "Settler Cost",
        per: { zh: "單位", en: "per unit", values: [5115, 5580, 6045, 3255] },
        total3: { zh: "3個開拓者", en: "3 settlers", value: 59985 }
      },
      keyAdvantage: {
        zh: "全遊戲最高每穀戰力 + Asclepeion 回收 60% 陣亡部隊 + 英雄武器 +50% = 最強精兵效率",
        en: "Highest combat per crop in game + Asclepeion 60% troop recovery + hero weapon +50% = ultimate elite efficiency"
      },
      heroStrategy: {
        zh: "投入戰鬥力，英雄武器效果 +50% 且覆蓋全部斯巴達兵種，清洲和防守都大幅強化",
        en: "Invest in Fighting Strength; hero weapon +50% bonus covers all Spartan units, greatly boosting oasis clearing and defense"
      },
      celebrationPlan: {
        zh: "同其他族，開拓者成本適中，需6-8場慶典達成2000 CP",
        en: "Same timing as others, moderate settler cost — 6-8 celebrations needed for 2000 CP"
      },
      troopTraining: {
        zh: "Day 1-2訓練5-10個哨兵（Sentinel）護衛英雄；Day 3後訓練重裝步兵（Hoplite）清洲",
        en: "Day 1-2 train 5-10 Sentinels to escort hero; Day 3+ train Hoplites for oasis clearing"
      },
      phases: [
        {
          name: { zh: "階段1: 基礎建設", en: "Phase 1: Foundation" },
          timeRange: { zh: "第0-24小時", en: "Hour 0-24" },
          steps: [
            {
              time: { zh: "0-6小時", en: "Hour 0-6" },
              actions: [
                { zh: "完成新手任務取得免費資源", en: "Complete beginner quests for free resources" },
                { zh: "資源田升至Lv2-3", en: "Resource fields to Lv2-3" },
                { zh: "村莊大樓升至Lv3", en: "Main Building to Lv3" },
                { zh: "斯巴達城牆Lv1 [城牆耐久度低，優先升城牆]", en: "Spartan Wall Lv1 [low durability wall, prioritize upgrading]" }
              ]
            },
            {
              time: { zh: "6-12小時", en: "Hour 6-12" },
              actions: [
                { zh: "村莊大樓升至Lv5", en: "Main Building to Lv5" },
                { zh: "資源田升至Lv4-5", en: "Resource fields to Lv4-5" },
                { zh: "倉庫Lv3、糧倉Lv3", en: "Warehouse Lv3, Granary Lv3" },
                { zh: "兵營Lv1-3，訓練5-10個哨兵（Sentinel）[防守護衛]", en: "Barracks Lv1-3, train 5-10 Sentinels [defense escort]" }
              ]
            },
            {
              time: { zh: "12-24小時", en: "Hour 12-24" },
              actions: [
                { zh: "村莊大樓升至Lv8-10 ★★★", en: "Main Building to Lv8-10 ★★★" },
                { zh: "資源田升至Lv6", en: "Resource fields to Lv6" },
                { zh: "倉庫/糧倉升至Lv5-6", en: "Warehouse/Granary to Lv5-6" },
                { zh: "英雄+哨兵清理弱綠洲 [英雄武器+50%加成生效]", en: "Hero + Sentinels clear weak oases [hero weapon +50% bonus active]" }
              ]
            }
          ]
        },
        {
          name: { zh: "階段2: 軍事發展", en: "Phase 2: Military Development" },
          timeRange: { zh: "第24-72小時", en: "Hour 24-72" },
          steps: [
            {
              time: { zh: "24-48小時", en: "Hour 24-48" },
              actions: [
                { zh: "學院Lv10 → 研究重裝步兵（Hoplite）", en: "Academy Lv10 → Research Hoplite" },
                { zh: "市政廳Lv1 → 開始慶典積CP", en: "Town Hall Lv1 → Begin celebrations for CP" },
                { zh: "訓練重裝步兵（Hoplite）清洲 [均衡攻防，清洲主力]", en: "Train Hoplites for oasis clearing [balanced stats, main oasis clearer]" },
                { zh: "開始建造 Asclepeion [核心特色建築，越早越好]", en: "Start building Asclepeion [core unique building, build ASAP]" }
              ]
            },
            {
              time: { zh: "48-72小時", en: "Hour 48-72" },
              actions: [
                { zh: "居所Lv1開始建設", en: "Begin Residence Lv1" },
                { zh: "馬廄建設 → 研究希望騎士（Elpida Rider）[步防120，強力防守]", en: "Build Stable → Research Elpida Rider [infantry def 120, strong defense]" },
                { zh: "訓練盾衛（Shieldsman）[步防85，防禦核心]", en: "Train Shieldsmen [infantry def 85, defensive core]" },
                { zh: "升級城牆至Lv5+ [彌補城牆耐久不足]", en: "Upgrade Wall to Lv5+ [compensate for low wall durability]" }
              ]
            }
          ]
        },
        {
          name: { zh: "階段3: 開拓第二村", en: "Phase 3: Second Village" },
          timeRange: { zh: "第72小時+", en: "Hour 72+" },
          steps: [
            {
              time: { zh: "72-144小時", en: "Hour 72-144" },
              actions: [
                { zh: "繼續慶典直到CP達2000", en: "Continue celebrations until CP reaches 2000" },
                { zh: "居所升至Lv10 → 訓練3個開拓者", en: "Residence to Lv10 → Train 3 Settlers" },
                { zh: "訓練科林斯碎甲騎（Corinthian Crusher）[攻擊195，頂級重騎]", en: "Train Corinthian Crushers [attack 195, top-tier heavy cavalry]" },
                { zh: "派出開拓者建立第二村 ★★★", en: "Send Settlers to establish second village ★★★" }
              ]
            }
          ]
        }
      ],
      earlyGameTips: {
        zh: "<ul><li><strong>Day 1：</strong>資源田升Lv2-3 → 村莊大樓Lv3 → 訓練哨兵（Sentinel，步防40）作為初期護衛</li><li><strong>Day 1-2：</strong>村莊大樓Lv10 → 學院Lv10 → 研究重裝步兵（Hoplite）清洲 → 盡早建造 Asclepeion（核心特色）</li><li><strong>Day 2-3：</strong>市政廳Lv1 → 慶典積CP → 居所開始建造 → 馬廄研究希望騎士</li><li><strong>Day 3-5：</strong>訓練盾衛（Shieldsman）和希望騎士（Elpida Rider）作為防守主力</li><li><strong>Day 6-7：</strong>居所Lv10 + CP達2,000 → 派出開拓者</li></ul>",
        en: "<ul><li><strong>Day 1:</strong> Resource fields to Lv2-3 → Main Building Lv3 → Train Sentinels (infantry def 40) as initial escorts</li><li><strong>Day 1-2:</strong> Main Building Lv10 → Academy Lv10 → Research Hoplite for oasis clearing → Build Asclepeion ASAP (core unique building)</li><li><strong>Day 2-3:</strong> Town Hall Lv1 → Celebrations for CP → Begin Residence → Stable to research Elpida Rider</li><li><strong>Day 3-5:</strong> Train Shieldsmen and Elpida Riders as defensive core</li><li><strong>Day 6-7:</strong> Residence Lv10 + CP hits 2,000 → Send settlers</li></ul>"
      },
      oasisTips: {
        zh: "<ul><li><strong>英雄升點：</strong>斯巴達英雄武器效果+50%且強化所有斯巴達兵種，建議優先投戰鬥力，最大化清洲效率。</li><li><strong>Hoplite清洲：</strong>重裝步兵攻擊50、步防35，均衡的清洲主力，配合英雄可高效清除中等難度綠洲。</li><li><strong>護衛選擇：</strong>哨兵（Sentinel）步防40，適合護衛英雄；盾衛（Shieldsman）步防85，適合較難的綠洲。</li><li><strong>Asclepeion 回收：</strong>清洲受傷的兵種可通過 Asclepeion 回收，大幅降低兵力損耗成本。</li></ul>",
        en: "<ul><li><strong>Hero stat allocation:</strong> Spartan hero weapon +50% covers all Spartan units; invest in Fighting Strength to maximize oasis clearing efficiency.</li><li><strong>Hoplite oasis clearing:</strong> Attack 50, infantry def 35 — well-rounded oasis clearer; with hero bonus, efficiently clears medium-difficulty oases.</li><li><strong>Escort choice:</strong> Sentinel (infantry def 40) ideal for hero escort; Shieldsman (infantry def 85) for harder oases.</li><li><strong>Asclepeion recovery:</strong> Troops lost during oasis clearing can be partially recovered via Asclepeion, significantly reducing attrition costs.</li></ul>"
      },
      mistakesTips: {
        zh: "<ul><li><strong>錯誤1：忽視 Asclepeion 建造時機</strong> — Asclepeion 是斯巴達最核心的特色建築，越早建造越早獲益，拖延建造等於放棄了60%部隊回收的巨大優勢。</li><li><strong>錯誤2：急於訓練昂貴兵種</strong> — 斯巴達兵種訓練成本普遍偏高，前期資源有限時不要急著訓練科林斯碎甲騎，應先確保基礎建設完成。</li><li><strong>錯誤3：忽視城牆升級</strong> — 斯巴達城牆耐久度僅2，相對較弱，需要更積極地升級城牆等級以提升防禦加成。</li><li><strong>錯誤4：不善用英雄武器加成</strong> — 英雄武器效果+50%且覆蓋全部斯巴達兵種，應盡早裝備高品質武器，大幅提升整體戰力。</li><li><strong>錯誤5：在非特殊伺服器選斯巴達</strong> — 斯巴達只在特定伺服器可用，選擇伺服器前必須確認可用性。</li></ul>",
        en: "<ul><li><strong>Mistake 1: Delaying Asclepeion construction</strong> — Asclepeion is Spartans' most critical unique building; build it ASAP to start recovering fallen troops. Delaying means forfeiting the massive 60% recovery advantage.</li><li><strong>Mistake 2: Rushing expensive troops</strong> — Spartan unit training costs are high across the board; don't rush Corinthian Crushers when resources are limited early game — finish core infrastructure first.</li><li><strong>Mistake 3: Neglecting wall upgrades</strong> — Spartan Wall durability is only 2, relatively weak; actively upgrade wall levels to increase the defense bonus.</li><li><strong>Mistake 4: Underutilizing hero weapon bonus</strong> — Hero weapon +50% applies to all Spartan units; equip high-quality weapons early to dramatically boost overall combat power.</li><li><strong>Mistake 5: Picking Spartans on non-special servers</strong> — Spartans are only available on specific servers; verify availability before selecting.</li></ul>"
      },
      tribeTips: {
        zh: "<ul><li><strong>Asclepeion — 最強復活機制：</strong>最多恢復60%陣亡部隊，是全遊戲唯一能大規模回收戰損的特殊建築。配合昂貴的斯巴達精兵，投資一次訓練，長期都能保持高效戰力。</li><li><strong>科林斯碎甲騎（Corinthian Crusher）頂級重騎：</strong>攻擊195、步防80、騎防75，是全遊戲攻擊力最強的重騎兵之一，3穀草的維持費相比戰力性價比極高。</li><li><strong>每穀消耗戰力最高：</strong>斯巴達兵種雖貴，但每消耗1穀草所提供的攻防戰力是所有部族中最高的，適合以少勝多的精兵戰術。</li><li><strong>英雄武器覆蓋全族兵種：</strong>其他部族英雄武器只強化英雄本身，斯巴達的英雄武器效果+50%且同時強化所有斯巴達兵種，是獨特的全軍加成機制。</li></ul>",
        en: "<ul><li><strong>Asclepeion — strongest revival mechanic:</strong> Recovers up to 60% of fallen troops — the only building in the game that large-scale recovers battle losses. Combined with expensive Spartan elites, one training investment sustains long-term combat efficiency.</li><li><strong>Corinthian Crusher — top-tier heavy cavalry:</strong> Attack 195, infantry def 80, cavalry def 75 — one of the strongest heavy cavalry units in the game; 3-crop upkeep delivers exceptional combat value.</li><li><strong>Highest combat power per crop:</strong> Spartan troops are expensive but deliver the highest attack/defense per crop consumed of any tribe — ideal for elite quality-over-quantity tactics.</li><li><strong>Hero weapon covers entire army:</strong> Unlike other tribes where hero weapons only boost the hero, Spartan hero weapons grant +50% and apply to all Spartan units simultaneously — a unique whole-army buff mechanic.</li></ul>"
      }
    }
  }
};

// Export for use in browser or Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SETTLEMENT_GUIDE };
}
