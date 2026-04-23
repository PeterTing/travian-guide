import type { LumiSection } from '../lumi-types';

export const traderoutes: LumiSection = {
  id: 'traderoutes',
  number: '§4.7',
  title: { zh: '商路管理（Traderoute Management）', en: 'Traderoute management' },
  intro: {
    zh: 'Lumi 原話：「我很聰明，我不手動從 feeder 送資源。我花了點時間把商路設好。」這不是 optional — 一旦帳號擴到 8–10 村以上，手動送資源會直接讓你操作量爆炸，沒人扛得住。',
    en: 'Lumi, quoted verbatim: "I am smart. I\'m not sending resources manually from my feeders. I took some time to set up proper traderoutes." This is NOT optional. Once an account scales past 8–10 villages, manual resource shuttling explodes your click budget and no one can sustain it.',
  },
  subsections: [
    {
      id: 'why-traderoutes',
      title: { zh: '為什麼一定要用 traderoutes', en: 'Why traderoutes are mandatory' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '當 feeder「蓋完」之後（13 個基本建築到位、田升到 Lv 10），它的角色就是每天穩定產資、自動送出。商路一旦設好，你每天只需要點派對一次。如果不這樣做，你沒辦法管理大帳號 — 操作壓力會變無法負荷。',
          en: 'Once a feeder is "done" (13 core buildings up, fields at Lv 10), its role is: produce steady resources every hour and auto-ship them. With traderoutes set up properly, your daily load drops to one click — party. If you aren\'t doing it that way, you won\'t be able to handle bigger accounts. Too much stress.',
        }},
      ],
    },
    {
      id: 'calculating-budget',
      title: { zh: '計算每小時能送出多少資源', en: 'Calculating how much you can ship per hour' },
      blocks: [
        { type: 'paragraph', text: {
          zh: '第一步：算出派對的每小時成本。公式：每種資源總量 ÷ 派對時間 = 每小時成本。算完後，feeder 每小時的產量扣掉派對成本，剩下的就是可送出的量。',
          en: 'Step 1: calculate the per-hour cost of your party queue. Formula: each resource total ÷ party duration = cost per hour. Subtract that from the feeder\'s hourly production and what remains is the per-hour shippable amount.',
        }},
        { type: 'list', items: [
          { zh: '拿出一張 Excel 或紙筆 — 把「每小時該送多少木 / 土 / 鐵 / 糧」記下來，不要用感覺', en: 'Break out a spreadsheet or pen + paper — write down how much wood / clay / iron / crop ships per hour. Don\'t guess' },
          { zh: '訓兵村同樣處理：算出隊伍每小時的兵資消耗，送夠讓隊伍不斷線', en: 'Do the same for troop-producing villages: calculate the queue\'s hourly resource cost, ship enough to keep queues running' },
          { zh: '剩下的資源全部流向 NPC 村 — NPC 換成糧，再送錘子 / 鐵砧吃', en: 'All other excess resources flow to the NPC village — NPC-convert everything into crop, then ship that crop to hammers / anvils' },
        ]},
        { type: 'callout', variant: 'tip', title: { zh: '每村都要蓋 Trade Office', en: 'Build a Trade Office in every village' }, text: {
          zh: 'Trade Office 翻倍商人容量。有了它，每條商路只需要 1–2 個商人就能撐起每小時的送資量。沒蓋 TO 就等於商人數量得 ×2 — 那是很浪費的槽位配置。',
          en: 'Trade Office doubles merchant capacity. With one in each village, most hourly traderoutes only need 1–2 merchants each. Without TO you double the merchant count — a wasteful slot allocation.',
        }},
        { type: 'paragraph', text: {
          zh: '這真的不是什麼火箭科學 — 就是紀律。把數字記下來、商路設好、每小時自動跑，你的生活會輕鬆非常多。',
          en: 'It\'s really not rocket science — it\'s discipline. Record the numbers, set the routes, let them run hourly, and your life gets massively easier.',
        }},
      ],
    },
    {
      id: 'toggling-off',
      title: { zh: '彈性：商路可以暫時關掉', en: 'Flex move: toggle traderoutes off when needed' },
      blocks: [
        { type: 'paragraph', text: {
          zh: 'Feeder 的商路不是「設定一次就永遠不動」。你可以隨時暫停商路讓資源累積在 feeder，用來：接 alliance push、付 hospital bill、攢資源辦大慶典、或臨時換裝備。這種彈性就是為什麼 feeder 要保留「足夠多的倉庫」— 暫停商路時才有地方放資源。',
          en: 'Feeder traderoutes are NOT "set once, never touch". You can deactivate them anytime to let resources stockpile in the feeder, then use that stockpile for: incoming alliance pushes, hospital bills, saving up for great celebrations, or one-off purchases. This flexibility is exactly why feeders need ample warehouse space — so that when you pause routes, there\'s room to hold the surplus.',
        }},
      ],
    },
  ],
};
