# Changelog

## 2026-04-23 — Build order restructure (feat/build-order-restructure)

### Summary

Rebuilt the `/guide` opening teaching around the xlsx source of truth (T4.6 Start Guide by Carpis). Replaced the AI-fabricated 7-tribe timeline with 5 strategy branches (4P-Sim / 4P-Farming / 3P-Sim / 3P-Farming / Lazy-Decent-Sim) plus a verified settler cost table for all 7 tribes. Fixed 2 known errors (Viking + Egyptian settler costs).

### Data layer (new)

- `src/data/build-order/types.ts` — `BuildStep`, `Strategy`, `StrategyId`, `Phase`
- `src/data/build-order/common.ts` — 40 steps shared by all 5 strategies (xlsx step 1-40)
- `src/data/build-order/strategy-4p-sim.ts` — 58 branch steps (xlsx step 41-98)
- `src/data/build-order/strategy-4p-farming.ts` — 61 branch steps (xlsx step 41-101)
- `src/data/build-order/strategy-3p-sim.ts` — 57 branch steps (xlsx step 41-97)
- `src/data/build-order/strategy-3p-farming.ts` — 62 branch steps (xlsx step 41-102; normalizes xlsx Party 1/3/4 typo to 1/2/3)
- `src/data/build-order/strategy-lazy-decent.ts` — 38 branch steps (xlsx step 41-78)
- `src/data/build-order/strategies.ts` + `index.ts` — registry + barrel
- `src/data/build-order/tribe-cost.ts` — settler cost + combat stats for all 7 tribes; verified against kirilloid (Roman/Teuton/Gaul), support.travian.com (Viking), and in-game stats screen (Egyptian/Hun/Spartan). Each tribe marks `verified: true` with a `source` field.

### UI layer (new)

- `src/components/guide/StrategyTabs.tsx` + `.module.css` — 5 strategy tabs with metadata + pros/cons
- `src/components/guide/BuildOrderList.tsx` + `.module.css` — phase-folded build-step list
- `src/components/guide/StyleSelector.tsx` + `.module.css` + `.test.tsx` — 3-question decision tree recommending 1 of 5 strategies
- `src/components/guide/SectionStyleSelector.astro` — Astro section wrapper for the StyleSelector island
- `src/components/guide/TribeCostTable.astro` — 7-row comparison table (wood/clay/iron/crop/total/training/3×) from `tribe-cost.ts`

### Refactors

- `src/components/guide/SectionBuildOrder.astro` — now mounts `StrategyTabs` + `TribeCostTable` instead of the old 7-tribe `BuildOrderTabs`
- `src/components/guide/SectionSettling.astro` — replaced per-tribe timeline with a 7-card tribe approach+keyTips grid; links to `#style-selector` and `#build-order`
- `src/data/settlement-types.ts` — slimmed to only `approach` + `keyTips` (removed `steps` and `targetDay`)
- `src/data/settlement/{romans,gauls,teutons,others}.ts` — step-by-step timelines removed
- `src/pages/guide.astro` — TOC grew 6 → 7 phases; inserted `<SectionStyleSelector />` between Settling and TaskBonuses

### Bug fixes

- **Viking settler cost**: was `~4,500 per res × 3 = 54,000 total` — corrected to 5800 / 4600 / 4800 / 4800 per settler (20,000 × 3 = 60,000), verified via support.travian.com Viking article
- **Egyptian settler cost**: was 4,560 / 5,890 / 4,370 / 4,180 (19,000 each) — corrected to 5,040 / 6,510 / 4,830 / 4,620 (21,000 each), verified in-game 2026-04-23

### Deletions

- `src/components/guide/BuildOrderTabs.tsx` + `.module.css` — replaced by StrategyTabs

### Verification

- 97 vitest tests pass across 10 test files (was 0 before this branch)
- 0 TypeScript errors (`astro check`)
- 14-page production build succeeds

### Not in this PR (follow-ups)

- PDF §3.5 Greyzone / Populated / Boonies regional strategy (new section on /strategy)
- PDF Table 1 full 9-cell production grid (15c/9c/7c × 150/125/100/75%)
- PDF §3.4.1 extras: V3 no-oasis rule, V4 HM10/15 paths, V6 re-chief
- Hero strength-point allocation rules (0/1-5/6+ oasis tiers) on SectionHero
- Hero level × 2% task reward multiplier
- xlsx Task sheet full reward table expansion
- xlsx Launching Simulator converted into a calculator (larger scope)
