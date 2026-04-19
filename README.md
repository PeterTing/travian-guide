# Travian Legends Guide

Bilingual (繁體中文 / English) Travian Legends **T4.6** strategy guide and on-site calculators,
built with [Astro](https://astro.build) + React + TypeScript.

Content is based on the Lumi / Eggstra / Dave advanced guide, validated against
[kirilloid/travian](https://github.com/kirilloid/travian) game data and cross-checked
against Lumi's ROI tables (Field ROI Table 2, Oasis ROI Table 3, Production Table 1).

## Development

```bash
npm install
npm run dev        # http://localhost:4321/travian-guide/
npm run build      # outputs dist/
npm run preview    # preview built site
npm run typecheck  # tsc --noEmit
```

## Deploy (GitHub Pages)

This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds on every push to `main` and publishes `dist/` to GitHub Pages.

**One-time setup (repo owner):**

1. Repo **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
   (not "Deploy from a branch")
3. Push to `main` — the workflow will build and deploy automatically
4. Your site will be served at `https://<user>.github.io/travian-guide/`

If the URL changes, update `site` and `base` in `astro.config.mjs`.

## Project structure

```
src/
├── data/           # T4.6 canonical data (field production, costs, CP, troops, Lumi content)
├── i18n/           # Language context + bilingual helpers
├── layouts/        # Astro layouts
├── pages/          # File-based routing
│   ├── index.astro
│   ├── tribe/[id].astro
│   ├── guide.astro
│   ├── mechanics.astro
│   ├── tools.astro
│   └── strategy.astro
├── components/
│   ├── shared/     # Header, Footer, LanguageToggle, …
│   └── calculators/  # 7 React calculators
└── styles/         # global tokens + base CSS (CSS Modules used per-component)
```

## Calculators

All 7 calculators are validated against published Travian/Lumi data:

| # | Calculator | Validation |
|---|------------|------------|
| 1 | Field ROI | Wood L7 ROI = 6.46 days (Lumi Table 2: 6.46 ✓) |
| 2 | Oasis ROI | 15c HM10 50%-crop = 1.83 days (Lumi Table 3: 1.83 ✓) |
| 3 | Passive CP | MB20+Market20+Embassy20+Academy20+TH10 = 529 CP/day (Lumi: 529 ✓) |
| 4 | Capital Build Order | kirilloid field times match (L7 @ MB1 = 2h 40m ✓) |
| 5 | Trade Route / Feeder | Merchant capacity & speed per tribe (kirilloid) |
| 6 | Farming Efficiency | Lumi pop brackets: <400 = 1 horse, 400–550 = 2, 550+ = 3–7 |
| 7 | Capital Crop Simulator | 15c @ Lv18 Egyptian +150% crop oasis = 136,920 /hr (Lumi Table 1: 136,500 ✓) |

## License / attribution

Game data from Travian Legends T4.6 (Travian Games). This site is unofficial and not
affiliated with Travian Games. "Travian" is a trademark of Travian Games GmbH.

Guide content adapted from the Lumi / Eggstra / Dave player guide with permission
for educational use.
