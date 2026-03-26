/**
 * simulation-data.js
 * 策略分析數據 — 基於 kirilloid/travian 原始碼 + 官方 support.travian.com 文件
 */
window.SIMULATION_DATA = {

  // ===== 英雄技能點配置策略 =====
  heroPointStrategy: {
    conclusion: '早期將英雄技能點全部投入「戰鬥力（Strength / Fighting Strength）」，可在新手保護期內以最低成本清掃綠洲並獲取資源。',
    phases: [
      {
        name: '第 1–3 天（新手保護期）',
        description: '每升一級可得 5 點技能點。前 3 天英雄升至約 5–7 級。',
        recommendation: '全部投入戰鬥力（Strength），最大化英雄戰鬥輸出，用於清掃周邊綠洲。',
        details: '此階段英雄裝備尚未取得，戰鬥力是唯一有效的提升方向。避免早期分散投資於資源生產。'
      },
      {
        name: '第 4–7 天（過渡期）',
        description: '英雄升至約 10–14 級，開始取得裝備。',
        recommendation: '若已裝備提升戰鬥力的武器，可開始將部分點數投入所需資源類型（根據部族短板）。',
        details: '羅馬人可考慮投入鐵礦；高盧人可投入木材；條頓人通常食糧消耗較大，可投入糧食。'
      },
      {
        name: '第 8 天以後（穩定期）',
        description: '英雄達到 20+ 級，資源生產趨於穩定。',
        recommendation: '依個人策略分配：進攻型繼續強化戰鬥力；防禦型可轉向資源生產補充維護費。',
        details: '此時主要升級路線應已確定（一村主攻 vs 資源村），技能點分配應配合整體發展方向。'
      }
    ]
  },

  // ===== 冒險系統分析 =====
  adventureROI: {
    conclusion: '冒險回報因英雄等級與當前血量而異。低血量英雄應避免冒險，防止 24 小時死亡懲罰。',
    riskManagement: '英雄死亡後需 24 小時復活，此期間無法冒險也無法清掃綠洲。建議保持英雄血量 > 40% 再出發冒險。',
    recommendations: [
      '每日至少進行 1–2 次冒險，累積稀有資源與銀幣',
      '優先選擇「短距離」冒險（≤ 20 格），降低往返時間',
      '英雄血量低於 30% 時停止冒險，改用藥水回復',
      '智慧之書（Book of Wisdom）可重置技能點，只用一次——慎重使用',
      '冒險掉落的資源袋可在緊急時期補充資源短缺',
      '多人搶奪同一綠洲時，提高英雄戰鬥力可增加奪得機率'
    ]
  },

  // ===== 兵種效率排名 =====
  troopEfficiency: {
    bestRaider: '條頓人 Clubswinger（棍棒兵）— 訓練成本最低、速度最快，最適合早期大量掠奪',
    bestAttack: '匈人 Mercenary（步兵傭兵）或羅馬人 Legionnaire（軍團兵）— 攻擊/成本比最優',
    bestDefense: '高盧人 Phalanx（方陣兵）— 步騎兵防禦值均衡且成本低廉',
    bestBudget: '條頓人 Clubswinger — 總成本 95 資源，訓練時間最短（約 1 分鐘/人）',
    rankings: [
      { name: '條頓 Clubswinger', attackPerCost: '0.42', defPerCost: '0.21', raidEfficiency: '★★★★★' },
      { name: '高盧 Phalanx', attackPerCost: '0.22', defPerCost: '0.52', raidEfficiency: '★★★☆☆' },
      { name: '羅馬 Legionnaire', attackPerCost: '0.30', defPerCost: '0.35', raidEfficiency: '★★★☆☆' },
      { name: '匈人 Mercenary', attackPerCost: '0.38', defPerCost: '0.18', raidEfficiency: '★★★★☆' },
      { name: '埃及 Slave Militia', attackPerCost: '0.28', defPerCost: '0.38', raidEfficiency: '★★☆☆☆' },
      { name: '維京 Spearman', attackPerCost: '0.25', defPerCost: '0.44', raidEfficiency: '★★★☆☆' }
    ]
  },

  // ===== 建築升級優先順序 =====
  buildingPriority: {
    conclusion: '前 7 天的建築決策決定整場遊戲的走向。資源田→倉庫→兵營是普世最優先順序。',
    scenarios: [
      {
        name: '🛡️ 通用新手路線（1–7 天）',
        priority: [
          '資源田升至 Lv.3（全部 4 種）',
          '倉庫（Warehouse）升至 Lv.3，穀倉（Granary）升至 Lv.3',
          '主府（Main Building）升至 Lv.5',
          '資源田繼續升至 Lv.5',
          '兵營（Barracks）Lv.1',
          '市集（Marketplace）Lv.1 — 啟用交易',
          '繼續升主府至 Lv.10（加快建造速度）'
        ]
      },
      {
        name: '⚔️ 條頓人快速掠奪路線',
        priority: [
          '資源田升至 Lv.2–3',
          '兵營（Barracks）Lv.1（盡快訓練 Clubswinger）',
          '主府升至 Lv.3',
          '訓練至少 20 名 Clubswinger 再開始掠奪',
          '用掠奪資源升級資源田至 Lv.5+',
          '鐵匠（Smithy）Lv.1 升級兵種'
        ]
      },
      {
        name: '🏰 羅馬人均衡發展路線',
        priority: [
          '資源田升至 Lv.4（利用羅馬同步建造特性）',
          '主府升至 Lv.5',
          '倉庫 + 穀倉升至 Lv.5',
          '兵營（Barracks）Lv.1 + 馬廄（Stable）Lv.1',
          '鐵礦田重點升至 Lv.7+（鐵礦消耗大）',
          '學院（Academy）Lv.1 解鎖進階兵種'
        ]
      },
      {
        name: '🌲 高盧人防禦要塞路線',
        priority: [
          '資源田升至 Lv.3–4',
          '城牆（City Wall）Lv.1（越早越好）',
          '兵營 Lv.1 開始訓練 Phalanx',
          '主府升至 Lv.5',
          '市集 Lv.1（高盧商人移動快，交易效率高）',
          '騎兵學院解鎖 Pathfinder 偵查'
        ]
      }
    ]
  },

  // ===== 階段策略框架 =====
  phaseFramework: {
    phases: [
      {
        name: '📅 第一階段：紮根期（第 1–3 天）',
        income: '約 200–400 資源/小時（資源田 Lv.2–3）',
        spending: '建築升級消耗約 2,000–5,000 資源/天',
        keyDecisions: [
          '選定部族發展路線（掠奪型 vs 防禦型 vs 均衡型）',
          '英雄技能點全投戰鬥力，清掃周邊綠洲',
          '優先升資源田，不要急於訓練兵種'
        ]
      },
      {
        name: '📅 第二階段：擴張期（第 4–7 天）',
        income: '約 600–1,200 資源/小時（資源田 Lv.4–5）',
        spending: '兵種訓練每天消耗約 5,000–15,000 資源',
        keyDecisions: [
          '新手保護期結束，開始遭受攻擊——部署防禦兵種',
          '條頓人：積累 30+ 棍棒兵開始掠奪循環',
          '加入聯盟，尋求保護與資源援助',
          '升級倉庫至 Lv.5+ 避免資源溢出'
        ]
      },
      {
        name: '📅 第三階段：穩定期（第 8–14 天）',
        income: '約 1,500–3,000 資源/小時（資源田 Lv.6–7）',
        spending: '軍隊維護費開始明顯，注意糧食平衡',
        keyDecisions: [
          '規劃第二村位置（建議在 75–125 格範圍內）',
          '開始累積文化點（Culture Points）',
          '升級主府至 Lv.10 提高建造效率',
          '開始考慮綠洲佔領（需先佔領周邊綠洲）'
        ]
      },
      {
        name: '📅 第四階段：多村期（第 15 天以後）',
        income: '依村莊數量線性增長',
        spending: '定居者成本：約 3×3,750 木材 + 黏土 + 鐵礦 + 糧食',
        keyDecisions: [
          '建立第二村，分工：主村攻擊，資源村供糧',
          '加強聯盟協調，參與聯合防禦',
          '規劃長期目標：奇觀競爭 vs 掠奪統治'
        ]
      }
    ]
  }
};
