const TRIBES_DATA = {
  romans: {
    id: "romans",
    name: { zh: "羅馬", en: "Romans" },
    icon: "🏛️",
    archetype: { zh: "平衡型", en: "Balanced" },
    difficulty: { zh: "★☆☆☆☆ 最適合新手", en: "★☆☆☆☆ Most beginner-friendly" },
    servers: { zh: "所有伺服器", en: "All servers" },
    description: {
      zh: "羅馬是經典的平衡部族，擁有雙佇列建築隊伍的獨特優勢。其步兵防禦力最強，適合穩妥發展和防守。",
      en: "Romans are the classic balanced tribe with unique dual building queues. They excel in infantry defense and steady development."
    },
    heroPassive: {
      zh: "英雄每級技能點 +100 戰鬥力（其他部族 +80）",
      en: "Hero gains +100 fighting power per skill point (others gain +80)"
    },
    specialBuildings: [
      { zh: "雙佇列建築隊伍", en: "Dual Building Queue" },
      { zh: "馬飲水槽", en: "Horse Drinking Trough" },
      { zh: "城牆（每級 +3% 防禦）", en: "City Wall (3% defense bonus per level)" }
    ],
    strengths: [
      { zh: "雙佇列建築隊伍加速發展", en: "Dual building queues accelerate development" },
      { zh: "禁衛兵（Praetorian）步兵防禦最強", en: "Praetorians have strongest infantry defense" },
      { zh: "攻防均衡的軍隊配置", en: "Balanced attack and defense capabilities" }
    ],
    weaknesses: [
      { zh: "兵種成本較高", en: "Expensive unit costs" },
      { zh: "沒有掠奪奬勵，早期略顯緩慢", en: "No raid bonuses, slower early game without raids" }
    ],
    units: [
      {
        name: { zh: "古羅馬步兵", en: "Legionnaire" },
        type: "infantry",
        attack: 40,
        infantryDef: 35,
        cavalryDef: 50,
        speed: 6,
        carry: 50,
        upkeep: 1,
        cost: { wood: 120, clay: 100, iron: 150, crop: 30 },
        trainTime: 1600,
        role: { zh: "攻守兼備的基礎兵種", en: "Versatile basic unit" }
      },
      {
        name: { zh: "禁衛兵", en: "Praetorian" },
        type: "infantry",
        attack: 30,
        infantryDef: 65,
        cavalryDef: 35,
        speed: 5,
        carry: 20,
        upkeep: 1,
        cost: { wood: 100, clay: 130, iron: 160, crop: 70 },
        trainTime: 1760,
        role: { zh: "超強步兵防禦", en: "Superior infantry defense" }
      },
      {
        name: { zh: "帝國兵", en: "Imperian" },
        type: "infantry",
        attack: 70,
        infantryDef: 40,
        cavalryDef: 25,
        speed: 7,
        carry: 50,
        upkeep: 1,
        cost: { wood: 150, clay: 160, iron: 210, crop: 80 },
        trainTime: 1920,
        role: { zh: "高攻擊力步兵", en: "High attack infantry" }
      },
      {
        name: { zh: "公路騎士", en: "Equites Legati" },
        type: "scout",
        attack: 0,
        infantryDef: 20,
        cavalryDef: 10,
        speed: 16,
        carry: 0,
        upkeep: 2,
        cost: { wood: 140, clay: 160, iron: 20, crop: 40 },
        trainTime: 1360,
        role: { zh: "高速偵兵", en: "Fast scout unit" }
      },
      {
        name: { zh: "帝國騎士", en: "Equites Imperatoris" },
        type: "cavalry",
        attack: 120,
        infantryDef: 65,
        cavalryDef: 50,
        speed: 14,
        carry: 100,
        upkeep: 3,
        cost: { wood: 550, clay: 440, iron: 320, crop: 100 },
        trainTime: 2640,
        role: { zh: "均衡的重騎兵", en: "Balanced heavy cavalry" }
      },
      {
        name: { zh: "將軍騎士", en: "Equites Caesaris" },
        type: "cavalry",
        attack: 180,
        infantryDef: 80,
        cavalryDef: 105,
        speed: 10,
        carry: 70,
        upkeep: 4,
        cost: { wood: 550, clay: 640, iron: 800, crop: 180 },
        trainTime: 3520,
        role: { zh: "高攻防騎兵", en: "High attack and defense cavalry" }
      },
      {
        name: { zh: "攻城槌", en: "Battering Ram" },
        type: "siege",
        attack: 60,
        infantryDef: 30,
        cavalryDef: 75,
        speed: 4,
        carry: 0,
        upkeep: 3,
        cost: { wood: 900, clay: 360, iron: 500, crop: 70 },
        trainTime: 4600,
        role: { zh: "破壞城牆的攻城器", en: "Wall destruction siege unit" }
      },
      {
        name: { zh: "火焰投石機", en: "Fire Catapult" },
        type: "siege",
        attack: 75,
        infantryDef: 60,
        cavalryDef: 10,
        speed: 3,
        carry: 0,
        upkeep: 6,
        cost: { wood: 950, clay: 1350, iron: 600, crop: 90 },
        trainTime: 9000,
        role: { zh: "遠程攻城器", en: "Long-range siege unit" }
      },
      {
        name: { zh: "參議員", en: "Senator" },
        type: "special",
        attack: 50,
        infantryDef: 40,
        cavalryDef: 30,
        speed: 4,
        carry: 0,
        upkeep: 5,
        cost: { wood: 30750, clay: 27200, iron: 45000, crop: 37500 },
        trainTime: 90700,
        role: { zh: "佔領敵方村莊", en: "Conquers enemy villages" }
      },
      {
        name: { zh: "開拓者", en: "Settler" },
        type: "special",
        attack: 0,
        infantryDef: 0,
        cavalryDef: 0,
        speed: 4,
        carry: 3000,
        upkeep: 1,
        cost: { wood: 4600, clay: 4200, iron: 5800, crop: 4400 },
        trainTime: 90700,
        role: { zh: "建立新村莊", en: "Establishes new villages" }
      }
    ],
    defenseRatio: {
      zh: "70% 禁衛兵（Praetorian）/ 30% 古羅馬步兵（Legionnaire）",
      en: "70% Praetorians / 30% Legionnaires"
    },
    merchantCapacity: 500,
    merchantSpeed: 16
  },

  gauls: {
    id: "gauls",
    name: { zh: "高盧", en: "Gauls" },
    icon: "🛡️",
    archetype: { zh: "防禦型", en: "Defense" },
    difficulty: { zh: "★★☆☆☆ 適合新手", en: "★★☆☆☆ Beginner-friendly" },
    servers: { zh: "所有伺服器", en: "All servers" },
    description: {
      zh: "高盧以速度和防禦見長，擁有最快的騎兵和獨特的陷阱建築。他們的定居者是最便宜的，發展速度快。",
      en: "Gauls excel in speed and defense with the fastest cavalry and unique trap buildings. Their settlers are the cheapest for rapid expansion."
    },
    heroPassive: {
      zh: "英雄騎馬時速度 +5 格/小時",
      en: "Hero gains +5 tiles/hour speed when mounted"
    },
    specialBuildings: [
      { zh: "獵人陷阱（捕捉來襲者）", en: "Trapper (catches attackers)" },
      { zh: "秘密倉庫容量 1.5× 加成", en: "1.5× 秘密倉庫容量" },
      { zh: "柵欄（每級 +2.5% 防禦）", en: "Palisade (2.5% defense bonus per level)" }
    ],
    strengths: [
      { zh: "最快的騎兵單位（Theutates Thunder 速度 19）", en: "Fastest cavalry units (TT speed 19)" },
      { zh: "最便宜的定居者", en: "Cheapest settlers" },
      { zh: "秘密倉庫容量 1.5×，陷阱捕捉襲擊者", en: "1.5× cranny capacity and trap buildings" }
    ],
    weaknesses: [
      { zh: "弱點步兵攻擊力（方陣兵攻擊 15）", en: "Weak attack infantry (Phalanx attack=15)" },
      { zh: "攻城器成本高", en: "Expensive siege units" }
    ],
    units: [
      {
        name: { zh: "方陣兵", en: "Phalanx" },
        type: "infantry",
        attack: 15,
        infantryDef: 40,
        cavalryDef: 50,
        speed: 7,
        carry: 35,
        upkeep: 1,
        cost: { wood: 100, clay: 130, iron: 55, crop: 30 },
        trainTime: 1040,
        role: { zh: "防禦型步兵", en: "Defensive infantry unit" }
      },
      {
        name: { zh: "劍客", en: "Swordsman" },
        type: "infantry",
        attack: 65,
        infantryDef: 35,
        cavalryDef: 20,
        speed: 6,
        carry: 45,
        upkeep: 1,
        cost: { wood: 140, clay: 150, iron: 185, crop: 60 },
        trainTime: 1440,
        role: { zh: "高攻擊力步兵", en: "High attack infantry" }
      },
      {
        name: { zh: "探路者", en: "Pathfinder" },
        type: "scout",
        attack: 0,
        infantryDef: 20,
        cavalryDef: 10,
        speed: 17,
        carry: 0,
        upkeep: 2,
        cost: { wood: 170, clay: 150, iron: 20, crop: 40 },
        trainTime: 1360,
        role: { zh: "高速偵兵", en: "Fast scout unit" }
      },
      {
        name: { zh: "雷法師", en: "Theutates Thunder" },
        type: "cavalry",
        attack: 90,
        infantryDef: 25,
        cavalryDef: 40,
        speed: 19,
        carry: 75,
        upkeep: 2,
        cost: { wood: 350, clay: 450, iron: 230, crop: 60 },
        trainTime: 1760,
        role: { zh: "最快的騎兵", en: "Fastest cavalry unit" }
      },
      {
        name: { zh: "德魯伊騎兵", en: "Druidrider" },
        type: "cavalry",
        attack: 45,
        infantryDef: 115,
        cavalryDef: 55,
        speed: 16,
        carry: 35,
        upkeep: 2,
        cost: { wood: 360, clay: 330, iron: 280, crop: 120 },
        trainTime: 2160,
        role: { zh: "防禦型重騎兵", en: "Defensive heavy cavalry" }
      },
      {
        name: { zh: "海頓聖騎", en: "Haeduan" },
        type: "cavalry",
        attack: 140,
        infantryDef: 50,
        cavalryDef: 165,
        speed: 13,
        carry: 65,
        upkeep: 3,
        cost: { wood: 500, clay: 620, iron: 675, crop: 170 },
        trainTime: 3120,
        role: { zh: "高防禦騎兵", en: "High defense cavalry" }
      },
      {
        name: { zh: "攻城槌", en: "Ram" },
        type: "siege",
        attack: 50,
        infantryDef: 30,
        cavalryDef: 105,
        speed: 4,
        carry: 0,
        upkeep: 3,
        cost: { wood: 950, clay: 555, iron: 330, crop: 75 },
        trainTime: 4600,
        role: { zh: "破壞城牆的攻城器", en: "Wall destruction siege unit" }
      },
      {
        name: { zh: "投石機", en: "Trebuchet" },
        type: "siege",
        attack: 70,
        infantryDef: 45,
        cavalryDef: 10,
        speed: 3,
        carry: 0,
        upkeep: 6,
        cost: { wood: 960, clay: 1450, iron: 630, crop: 90 },
        trainTime: 9000,
        role: { zh: "遠程攻城器", en: "Long-range siege unit" }
      },
      {
        name: { zh: "族長", en: "Chieftain" },
        type: "special",
        attack: 40,
        infantryDef: 50,
        cavalryDef: 50,
        speed: 5,
        carry: 0,
        upkeep: 4,
        cost: { wood: 30750, clay: 45400, iron: 31000, crop: 37500 },
        trainTime: 90700,
        role: { zh: "佔領敵方村莊", en: "Conquers enemy villages" }
      },
      {
        name: { zh: "開拓者", en: "Settler" },
        type: "special",
        attack: 0,
        infantryDef: 0,
        cavalryDef: 0,
        speed: 4,
        carry: 3000,
        upkeep: 1,
        cost: { wood: 4400, clay: 5600, iron: 4200, crop: 3900 },
        trainTime: 68025,
        role: { zh: "建立新村莊（25% 更快）", en: "Establishes new villages (25% faster)" }
      }
    ],
    defenseRatio: {
      zh: "70% 方陣兵（Phalanx）/ 30% 德魯伊騎兵（Druidrider）",
      en: "70% Phalanx / 30% Druidrider"
    },
    merchantCapacity: 750,
    merchantSpeed: 24
  },

  teutons: {
    id: "teutons",
    name: { zh: "條頓", en: "Teutons" },
    icon: "⚔️",
    archetype: { zh: "掠奪型", en: "Raiding" },
    difficulty: { zh: "★★★☆☆ 經驗玩家", en: "★★★☆☆ Experienced players" },
    servers: { zh: "所有伺服器", en: "All servers" },
    description: {
      zh: "條頓是掠奪大師，以最便宜、最快的訓練時間聞名。他們的商人運力最強，單位攜帶容量大。",
      en: "Teutons are raiding masters with the cheapest and fastest training times. They have the strongest merchant capacity and high unit carrying capacity."
    },
    heroPassive: {
      zh: "掠奪時獲得 20% 地窖穿透",
      en: "20% cranny penetration when raiding"
    },
    specialBuildings: [
      { zh: "釀酒廠（首都專用，慶典期間 +1% 攻擊全帳號）", en: "Brewery (capital only, +1% attack account-wide during celebration)" },
      { zh: "土牆（每級 +2%，幾乎堅不可摧）", en: "Earth Wall (2% defense bonus per level, nearly indestructible)" }
    ],
    strengths: [
      { zh: "最便宜、最快的訓練（棍棒兵）", en: "Cheapest and fastest training (Clubswinger)" },
      { zh: "最高的單位攜帶容量", en: "Highest unit carrying capacity" },
      { zh: "商人運力最強（1000）", en: "Strongest merchant capacity (1000)" }
    ],
    weaknesses: [
      { zh: "防禦能力較弱", en: "Weak defense capabilities" },
      { zh: "無雙建築佇列（羅馬人獨有）", en: "No dual building queue (Roman exclusive)" },
      { zh: "城牆防禦加成較低（2%/級）", en: "Low wall defense bonus (2%/level)" }
    ],
    units: [
      {
        name: { zh: "棍棒兵", en: "Clubswinger" },
        type: "infantry",
        attack: 40,
        infantryDef: 20,
        cavalryDef: 5,
        speed: 7,
        carry: 60,
        upkeep: 1,
        cost: { wood: 95, clay: 75, iron: 40, crop: 40 },
        trainTime: 900,
        role: { zh: "最便宜的基礎步兵", en: "Cheapest basic infantry" }
      },
      {
        name: { zh: "矛兵", en: "Spearman" },
        type: "infantry",
        attack: 10,
        infantryDef: 35,
        cavalryDef: 60,
        speed: 7,
        carry: 40,
        upkeep: 1,
        cost: { wood: 145, clay: 70, iron: 85, crop: 40 },
        trainTime: 1100,
        role: { zh: "防禦型步兵", en: "Defensive infantry unit" }
      },
      {
        name: { zh: "斧頭兵", en: "Axeman" },
        type: "infantry",
        attack: 60,
        infantryDef: 30,
        cavalryDef: 30,
        speed: 6,
        carry: 50,
        upkeep: 1,
        cost: { wood: 130, clay: 120, iron: 170, crop: 70 },
        trainTime: 1500,
        role: { zh: "均衡的步兵", en: "Balanced infantry unit" }
      },
      {
        name: { zh: "偵兵", en: "Scout" },
        type: "scout",
        attack: 0,
        infantryDef: 10,
        cavalryDef: 5,
        speed: 9,
        carry: 0,
        upkeep: 1,
        cost: { wood: 160, clay: 100, iron: 50, crop: 50 },
        trainTime: 1120,
        role: { zh: "快速偵察", en: "Fast scout unit" }
      },
      {
        name: { zh: "俠客", en: "Paladin" },
        type: "cavalry",
        attack: 55,
        infantryDef: 100,
        cavalryDef: 40,
        speed: 10,
        carry: 110,
        upkeep: 2,
        cost: { wood: 370, clay: 270, iron: 290, crop: 75 },
        trainTime: 2400,
        role: { zh: "防禦型騎兵", en: "Defensive cavalry unit" }
      },
      {
        name: { zh: "條頓騎士", en: "Teutonic Knight" },
        type: "cavalry",
        attack: 150,
        infantryDef: 50,
        cavalryDef: 75,
        speed: 9,
        carry: 80,
        upkeep: 3,
        cost: { wood: 450, clay: 515, iron: 480, crop: 80 },
        trainTime: 3480,
        role: { zh: "高攻擊力騎兵", en: "High attack cavalry" }
      },
      {
        name: { zh: "攻城槌", en: "Ram" },
        type: "siege",
        attack: 65,
        infantryDef: 30,
        cavalryDef: 80,
        speed: 4,
        carry: 0,
        upkeep: 3,
        cost: { wood: 1000, clay: 300, iron: 350, crop: 70 },
        trainTime: 4600,
        role: { zh: "破壞城牆的攻城器", en: "Wall destruction siege unit" }
      },
      {
        name: { zh: "投石機", en: "Catapult" },
        type: "siege",
        attack: 50,
        infantryDef: 60,
        cavalryDef: 10,
        speed: 3,
        carry: 0,
        upkeep: 6,
        cost: { wood: 900, clay: 1200, iron: 600, crop: 60 },
        trainTime: 9000,
        role: { zh: "遠程攻城器", en: "Long-range siege unit" }
      },
      {
        name: { zh: "司令官", en: "Chief" },
        type: "special",
        attack: 40,
        infantryDef: 60,
        cavalryDef: 40,
        speed: 4,
        carry: 0,
        upkeep: 4,
        cost: { wood: 35500, clay: 26600, iron: 25000, crop: 27200 },
        trainTime: 90700,
        role: { zh: "佔領敵方村莊", en: "Conquers enemy villages" }
      },
      {
        name: { zh: "開拓者", en: "Settler" },
        type: "special",
        attack: 0,
        infantryDef: 0,
        cavalryDef: 0,
        speed: 4,
        carry: 3000,
        upkeep: 1,
        cost: { wood: 5800, clay: 4400, iron: 4600, crop: 5200 },
        trainTime: 90700,
        role: { zh: "建立新村莊", en: "Establishes new villages" }
      }
    ],
    defenseRatio: {
      zh: "75% 矛兵（Spearman）/ 25% 俠客（Paladin）",
      en: "75% Spearmen / 25% Paladins"
    },
    merchantCapacity: 1000,
    merchantSpeed: 12
  },

  egyptians: {
    id: "egyptians",
    name: { zh: "埃及", en: "Egyptians" },
    icon: "🐪",
    archetype: { zh: "生產型", en: "Production" },
    difficulty: { zh: "★★☆☆☆ 新手與老手皆宜", en: "★★☆☆☆ Beginners & experienced" },
    servers: { zh: "5部族伺服器", en: "5-tribe servers only" },
    description: {
      zh: "埃及是生產大師，擁有最便宜的單位訓練和英雄資源加成。他們的城牆最堅不可摧，水力磨坊特殊建築獨樹一幟。",
      en: "Egyptians are production masters with the cheapest unit training and hero resource bonuses. They have the most durable walls and unique waterworks buildings."
    },
    heroPassive: {
      zh: "英雄資源產量 +25%",
      en: "+25% hero resource production"
    },
    specialBuildings: [
      { zh: "水力磨坊（增強綠洲加成）", en: "Waterworks (enhances oasis bonus)" },
      { zh: "石牆（每級 +2.5%，最高耐久度）", en: "Stone Wall (2.5% defense bonus per level, HIGHEST durability)" }
    ],
    strengths: [
      { zh: "最便宜的單位（奴隸民兵 150 資源）", en: "Cheapest units (Slave Militia 150 resources)" },
      { zh: "最快的訓練時間", en: "Fastest training times" },
      { zh: "英雄資源 +25%，城牆最堅不可摧", en: "Hero resource boost and indestructible walls" }
    ],
    weaknesses: [
      { zh: "攻擊力弱於其他部族", en: "Weaker attack than other tribes" },
      { zh: "僅限 5 部族伺服器", en: "Only available on 5-tribe servers" }
    ],
    units: [
      {
        name: { zh: "奴隸民兵", en: "Slave Militia" },
        type: "infantry",
        attack: 10,
        infantryDef: 30,
        cavalryDef: 20,
        speed: 7,
        carry: 15,
        upkeep: 1,
        cost: { wood: 45, clay: 60, iron: 30, crop: 15 },
        trainTime: 530,
        role: { zh: "最便宜的單位", en: "Cheapest unit" }
      },
      {
        name: { zh: "灰燼衛士", en: "Ash Warden" },
        type: "infantry",
        attack: 30,
        infantryDef: 55,
        cavalryDef: 40,
        speed: 6,
        carry: 50,
        upkeep: 1,
        cost: { wood: 115, clay: 100, iron: 145, crop: 60 },
        trainTime: 1320,
        role: { zh: "防禦型步兵", en: "Defensive infantry unit" }
      },
      {
        name: { zh: "彎刀戰士", en: "Khopesh Warrior" },
        type: "infantry",
        attack: 65,
        infantryDef: 50,
        cavalryDef: 20,
        speed: 7,
        carry: 45,
        upkeep: 1,
        cost: { wood: 170, clay: 180, iron: 220, crop: 80 },
        trainTime: 1440,
        role: { zh: "高攻擊力步兵", en: "High attack infantry" }
      },
      {
        name: { zh: "索普杜探險家", en: "Sopdu Explorer" },
        type: "scout",
        attack: 0,
        infantryDef: 20,
        cavalryDef: 10,
        speed: 16,
        carry: 0,
        upkeep: 2,
        cost: { wood: 170, clay: 150, iron: 20, crop: 40 },
        trainTime: 1360,
        role: { zh: "高速偵兵", en: "Fast scout unit" }
      },
      {
        name: { zh: "安赫衛隊", en: "Anhur Guard" },
        type: "cavalry",
        attack: 50,
        infantryDef: 110,
        cavalryDef: 50,
        speed: 15,
        carry: 50,
        upkeep: 2,
        cost: { wood: 360, clay: 330, iron: 280, crop: 120 },
        trainTime: 2560,
        role: { zh: "防禦型騎兵", en: "Defensive cavalry unit" }
      },
      {
        name: { zh: "雷沙戰車", en: "Resheph Chariot" },
        type: "cavalry",
        attack: 110,
        infantryDef: 120,
        cavalryDef: 150,
        speed: 10,
        carry: 70,
        upkeep: 3,
        cost: { wood: 450, clay: 560, iron: 610, crop: 180 },
        trainTime: 3240,
        role: { zh: "均衡的重騎兵", en: "Balanced heavy cavalry" }
      },
      {
        name: { zh: "攻城槌", en: "Ram" },
        type: "siege",
        attack: 55,
        infantryDef: 30,
        cavalryDef: 95,
        speed: 4,
        carry: 0,
        upkeep: 3,
        cost: { wood: 995, clay: 575, iron: 340, crop: 80 },
        trainTime: 4800,
        role: { zh: "破壞城牆的攻城器", en: "Wall destruction siege unit" }
      },
      {
        name: { zh: "石頭投石機", en: "Stone Catapult" },
        type: "siege",
        attack: 65,
        infantryDef: 55,
        cavalryDef: 10,
        speed: 3,
        carry: 0,
        upkeep: 6,
        cost: { wood: 980, clay: 1510, iron: 660, crop: 100 },
        trainTime: 9000,
        role: { zh: "遠程攻城器", en: "Long-range siege unit" }
      },
      {
        name: { zh: "諾馬克", en: "Nomarch" },
        type: "special",
        attack: 40,
        infantryDef: 50,
        cavalryDef: 50,
        speed: 4,
        carry: 0,
        upkeep: 4,
        cost: { wood: 34000, clay: 50000, iron: 34000, crop: 42000 },
        trainTime: 90700,
        role: { zh: "佔領敵方村莊", en: "Conquers enemy villages" }
      },
      {
        name: { zh: "開拓者", en: "Settler" },
        type: "special",
        attack: 0,
        infantryDef: 0,
        cavalryDef: 0,
        speed: 4,
        carry: 3000,
        upkeep: 1,
        cost: { wood: 4560, clay: 5890, iron: 4370, crop: 4180 },
        trainTime: 90700,
        role: { zh: "建立新村莊", en: "Establishes new villages" }
      }
    ],
    defenseRatio: {
      zh: "70% 灰燼衛士（Ash Warden）/ 30% 安赫衛隊（Anhur Guard）",
      en: "70% Ash Wardens / 30% Anhur Guards"
    },
    merchantCapacity: 750,
    merchantSpeed: 16
  },

  huns: {
    id: "huns",
    name: { zh: "匈人", en: "Huns" },
    icon: "🏇",
    archetype: { zh: "騎兵型", en: "Cavalry" },
    difficulty: { zh: "★★★★☆ 經驗玩家推薦", en: "★★★★☆ Experienced players" },
    servers: { zh: "5部族伺服器", en: "5-tribe servers only" },
    description: {
      zh: "匈人是純騎兵部族，擁有最快的騎兵和偵兵。他們有 20-40% 快速研究加成，但定居者成本最高。",
      en: "Huns are pure cavalry tribe with the fastest cavalry and scouts. They have 20-40% faster research but the most expensive settlers."
    },
    heroPassive: {
      zh: "英雄速度 +3 格/小時（騎馬專用、僅騎兵軍隊）",
      en: "+3 tiles/hour speed (mounted, cavalry-only armies)"
    },
    specialBuildings: [
      { zh: "司令部（替代居所/皇宮，3 個擴張槽）", en: "Command Center (replaces Residence/Palace, 3 expansion slots)" },
      { zh: "臨時城牆（每級 +1.5%，防禦力低）", en: "Makeshift Wall (1.5% defense bonus per level, low durability)" }
    ],
    strengths: [
      { zh: "最快的騎兵（草原騎手速度 16，攜帶 115）", en: "Fastest cavalry (Steppe Rider speed 16, carry 115)" },
      { zh: "最快的偵兵（斥候速度 19）", en: "Fastest scout (Spotter speed 19)" },
      { zh: "20-40% 快速研究加成", en: "20-40% faster research" }
    ],
    weaknesses: [
      { zh: "定居者成本最高（62,700 × 3）", en: "Most expensive settlers (62,700 total ×3)" },
      { zh: "城牆防禦最弱", en: "Weakest walls" },
      { zh: "僅限 5 部族伺服器", en: "Only available on 5-tribe servers" }
    ],
    units: [
      {
        name: { zh: "傭兵", en: "Mercenary" },
        type: "infantry",
        attack: 35,
        infantryDef: 40,
        cavalryDef: 30,
        speed: 6,
        carry: 50,
        upkeep: 1,
        cost: { wood: 130, clay: 80, iron: 40, crop: 40 },
        trainTime: 810,
        role: { zh: "均衡的步兵", en: "Balanced infantry unit" }
      },
      {
        name: { zh: "弓箭手", en: "Bowman" },
        type: "infantry",
        attack: 50,
        infantryDef: 30,
        cavalryDef: 10,
        speed: 6,
        carry: 30,
        upkeep: 1,
        cost: { wood: 140, clay: 110, iron: 60, crop: 60 },
        trainTime: 1120,
        role: { zh: "高攻擊力步兵", en: "High attack infantry" }
      },
      {
        name: { zh: "偵察員", en: "Spotter" },
        type: "scout",
        attack: 0,
        infantryDef: 20,
        cavalryDef: 10,
        speed: 19,
        carry: 0,
        upkeep: 2,
        cost: { wood: 170, clay: 150, iron: 20, crop: 40 },
        trainTime: 1360,
        role: { zh: "最快的偵兵", en: "Fastest scout unit" }
      },
      {
        name: { zh: "草原騎手", en: "Steppe Rider" },
        type: "cavalry",
        attack: 120,
        infantryDef: 30,
        cavalryDef: 15,
        speed: 16,
        carry: 115,
        upkeep: 2,
        cost: { wood: 290, clay: 370, iron: 190, crop: 45 },
        trainTime: 2400,
        role: { zh: "最快的騎兵", en: "Fastest cavalry unit" }
      },
      {
        name: { zh: "箭手", en: "Marksman" },
        type: "cavalry",
        attack: 115,
        infantryDef: 80,
        cavalryDef: 70,
        speed: 16,
        carry: 105,
        upkeep: 2,
        cost: { wood: 320, clay: 350, iron: 330, crop: 50 },
        trainTime: 2480,
        role: { zh: "防禦型騎兵", en: "Defensive cavalry unit" }
      },
      {
        name: { zh: "掠奪者", en: "Marauder" },
        type: "cavalry",
        attack: 180,
        infantryDef: 60,
        cavalryDef: 40,
        speed: 14,
        carry: 80,
        upkeep: 3,
        cost: { wood: 450, clay: 560, iron: 610, crop: 140 },
        trainTime: 2990,
        role: { zh: "高攻擊力騎兵", en: "High attack cavalry" }
      },
      {
        name: { zh: "攻城槌", en: "Ram" },
        type: "siege",
        attack: 60,
        infantryDef: 30,
        cavalryDef: 75,
        speed: 4,
        carry: 0,
        upkeep: 3,
        cost: { wood: 920, clay: 340, iron: 420, crop: 70 },
        trainTime: 4600,
        role: { zh: "破壞城牆的攻城器", en: "Wall destruction siege unit" }
      },
      {
        name: { zh: "投石機", en: "Catapult" },
        type: "siege",
        attack: 60,
        infantryDef: 55,
        cavalryDef: 10,
        speed: 3,
        carry: 0,
        upkeep: 6,
        cost: { wood: 940, clay: 1300, iron: 610, crop: 75 },
        trainTime: 9000,
        role: { zh: "遠程攻城器", en: "Long-range siege unit" }
      },
      {
        name: { zh: "洛加迪斯", en: "Logades" },
        type: "special",
        attack: 40,
        infantryDef: 60,
        cavalryDef: 40,
        speed: 5,
        carry: 0,
        upkeep: 4,
        cost: { wood: 34000, clay: 28500, iron: 38500, crop: 30000 },
        trainTime: 90700,
        role: { zh: "佔領敵方村莊", en: "Conquers enemy villages" }
      },
      {
        name: { zh: "開拓者", en: "Settler" },
        type: "special",
        attack: 0,
        infantryDef: 0,
        cavalryDef: 0,
        speed: 4,
        carry: 3000,
        upkeep: 1,
        cost: { wood: 6100, clay: 4600, iron: 4800, crop: 5400 },
        trainTime: 90700,
        role: { zh: "建立新村莊", en: "Establishes new villages" }
      }
    ],
    defenseRatio: {
      zh: "70% 傭兵（Mercenary）/ 30% 箭手（Marksman）",
      en: "70% Mercenaries / 30% Marksmen"
    },
    merchantCapacity: 500,
    merchantSpeed: 20
  },

  vikings: {
    id: "vikings",
    name: { zh: "維京", en: "Vikings" },
    icon: "⛵",
    archetype: { zh: "海洋型", en: "Naval" },
    difficulty: { zh: "★★★☆☆ 攻擊型玩家", en: "★★★☆☆ Aggressive players" },
    servers: { zh: "特殊伺服器", en: "Special servers only" },
    description: {
      zh: "維京是獨特的海洋部族，擁有狂戰士的大規模傷害和瓦爾基里的低成本重騎兵。他們是唯一有船隊系統的部族。",
      en: "Vikings are unique naval tribe with Berserkers dealing massive damage and Valkyries offering exceptional cost-efficient heavy cavalry. They are the only tribe with ship systems."
    },
    heroPassive: {
      zh: "攻擊時 -5% 敵方忠誠度（與 Jarl 疊加）",
      en: "-5% enemy loyalty on attack (stacks with Jarl)"
    },
    specialBuildings: [
      { zh: "港口（啟用船隊）", en: "Harbor (enables ships)" },
      { zh: "路障（每級 +1.5%，防禦力低）", en: "Barricade (1.5% defense bonus per level, low durability)" }
    ],
    strengths: [
      { zh: "狂戰士大規模傷害能力", en: "Berserker massive damage output" },
      { zh: "瓦爾基里僅 2 糧草的重騎兵（超值）", en: "Valkyrie only 2 crop heavy cavalry (exceptional value)" },
      { zh: "掠奪船速度 24/小時（維京獨有）", en: "Raid Ship speed 24/hr (Vikings exclusive)" }
    ],
    weaknesses: [
      { zh: "狂戰士 2× 糧草成本", en: "Berserker 2× grain cost" },
      { zh: "特殊伺服器限制", en: "Limited to special servers" },
      { zh: "數據有限可用", en: "Limited data available" }
    ],
    units: [
      {
        name: { zh: "盾女", en: "Shieldmaiden" },
        type: "infantry",
        attack: 20,
        infantryDef: 55,
        cavalryDef: 30,
        speed: 6,
        carry: 30,
        upkeep: 1,
        cost: { wood: 110, clay: 120, iron: 130, crop: 50 },
        trainTime: 1200,
        role: { zh: "防禦型步兵", en: "Defensive infantry unit" }
      },
      {
        name: { zh: "狂戰士", en: "Berserker" },
        type: "infantry",
        attack: 90,
        infantryDef: 20,
        cavalryDef: 10,
        speed: 6,
        carry: 50,
        upkeep: 2,
        cost: { wood: 200, clay: 180, iron: 250, crop: 90 },
        trainTime: 1800,
        role: { zh: "超強攻擊（殺死至少 1 敵軍）", en: "Massive attack (kills at least 1 enemy)" }
      },
      {
        name: { zh: "烏鴉", en: "Raven" },
        type: "scout",
        attack: 0,
        infantryDef: 20,
        cavalryDef: 10,
        speed: 17,
        carry: 0,
        upkeep: 2,
        cost: { wood: 170, clay: 150, iron: 20, crop: 40 },
        trainTime: 1360,
        role: { zh: "高速偵兵", en: "Fast scout unit" }
      },
      {
        name: { zh: "約姆斯維京戰士", en: "Jomsviking" },
        type: "cavalry",
        attack: 75,
        infantryDef: 30,
        cavalryDef: 35,
        speed: 14,
        carry: 70,
        upkeep: 2,
        cost: { wood: 300, clay: 350, iron: 200, crop: 70 },
        trainTime: 2000,
        role: { zh: "均衡的騎兵", en: "Balanced cavalry unit" }
      },
      {
        name: { zh: "瓦爾基里", en: "Valkyrie" },
        type: "cavalry",
        attack: 130,
        infantryDef: 55,
        cavalryDef: 120,
        speed: 12,
        carry: 65,
        upkeep: 2,
        cost: { wood: 480, clay: 580, iron: 650, crop: 160 },
        trainTime: 3000,
        role: { zh: "僅 2 糧草的超值重騎兵", en: "Heavy cavalry with exceptional 2-crop cost value" }
      },
      {
        name: { zh: "攻城槌", en: "Ram" },
        type: "siege",
        attack: 55,
        infantryDef: 30,
        cavalryDef: 80,
        speed: 4,
        carry: 0,
        upkeep: 3,
        cost: { wood: 900, clay: 380, iron: 450, crop: 75 },
        trainTime: 4600,
        role: { zh: "破壞城牆的攻城器", en: "Wall destruction siege unit" }
      },
      {
        name: { zh: "投石機", en: "Catapult" },
        type: "siege",
        attack: 65,
        infantryDef: 50,
        cavalryDef: 10,
        speed: 3,
        carry: 0,
        upkeep: 6,
        cost: { wood: 930, clay: 1300, iron: 610, crop: 85 },
        trainTime: 9000,
        role: { zh: "遠程攻城器", en: "Long-range siege unit" }
      },
      {
        name: { zh: "雅爾", en: "Jarl" },
        type: "special",
        attack: 40,
        infantryDef: 60,
        cavalryDef: 40,
        speed: 5,
        carry: 0,
        upkeep: 4,
        cost: { wood: 33000, clay: 40000, iron: 32000, crop: 35000 },
        trainTime: 90700,
        role: { zh: "佔領敵方村莊（-5% 忠誠疊加）", en: "Conquers enemy villages (stacks -5% loyalty)" }
      },
      {
        name: { zh: "開拓者", en: "Settler" },
        type: "special",
        attack: 0,
        infantryDef: 0,
        cavalryDef: 0,
        speed: 4,
        carry: 3000,
        upkeep: 1,
        cost: { wood: 5200, clay: 5000, iron: 4800, crop: 4200 },
        trainTime: 90700,
        role: { zh: "建立新村莊", en: "Establishes new villages" }
      }
    ],
    defenseRatio: {
      zh: "70% 盾女（Shieldmaiden）/ 30% 瓦爾基里（Valkyrie）",
      en: "70% Shieldmaidens / 30% Valkyries"
    },
    merchantCapacity: 500,
    merchantSpeed: 16,
    shipSystem: {
      tradeShip: {
        name: { zh: "商船", en: "Trade Ship" },
        speed: 18,
        role: { zh: "運輸資源", en: "Resource transport" }
      },
      warship: {
        name: { zh: "戰船", en: "Warship" },
        speed: 18,
        role: { zh: "海上戰鬥", en: "Naval combat" }
      },
      decoyWarship: {
        name: { zh: "誘餌戰船", en: "Decoy Warship" },
        speed: 18,
        maxCount: 60,
        role: { zh: "迷惑敵人", en: "Enemy deception" }
      },
      raidShip: {
        name: { zh: "掠奪船", en: "Raid Ship" },
        speed: 24,
        maxCount: 200,
        unique: true,
        role: { zh: "維京獨有速度 24/小時", en: "Vikings exclusive speed 24/hr" }
      }
    }
  }
};

// Export for use in HTML/JS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRIBES_DATA;
}
