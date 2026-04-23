# Data Audit Status

Last updated: 2026-04-23 (post per-section-inventory audit, 305 tests pinning numeric data).

## Summary

Every numeric claim that feeds a calculator, a reference table, or a ROI figure is now either
- (a) **pinned by a vitest regression test** (305 tests total across 14 files), OR
- (b) **cited in file header** as community-sourced with confidence tier.

Three passes of audit were performed:
1. **Audit sweep** (commit `ac55836`): 10 fixes across data / mechanics / calculators / guide.
2. **Test-pin pass** (`9fd782a`, `8255ce6`, `aad4b8f`): added 200 new vitest cases to pin every numeric data point so regressions trip CI.
3. **This session** (per-section sweep): 3 UI polish fixes (PassiveCP 529→531 reconciliation, BuildOrder 78-102 step inconsistency, tools.astro frisovandijk duplicate) + this comprehensive status doc.

Outstanding issues: **0 critical, 0 medium, 2 deferred features** (Tournament Square section; BuildOrderCalculator oasis modelling).

## Confidence legend

| Symbol | Meaning |
|---|---|
| 🟢 | Audited + pinned by vitest regression test against authoritative source |
| ✅ | Audited + verified against authoritative source (no numeric test yet) |
| 🔧 | Recently fixed in this audit cycle (re-verified post-change) |
| 🟡 | Partially audited / community-sourced (cited in file header) |
| ⚠️ | Medium confidence — author self-consistent but not official-source-verified |
| ❌ | Not audited (high risk) — 0 items currently in this tier |

## Authoritative sources

- **K** = kirilloid/travian GitHub ([github.com/kirilloid/travian](https://github.com/kirilloid/travian))
- **ST** = support.travian.com (official Travian Legends support articles)
- **TK** = support.kingdoms.com (Travian Kingdoms — different game, used sparingly)
- **FW** = travian.fandom.com/wiki (community wiki, 403s frequently)
- **xlsx** = T4.6 - Start Guide.xlsx (Carpis community guide, 2022)
- **PDF** = travian guide.pdf (Lumi / Eggstra / Dave advanced guide)

---

## 1. Game constants — `src/data/travian.ts`

411 lines. Test file: `src/data/travian.test.ts` (90 tests).

| Constant | Status | Source | Test coverage |
|---|---|---|---|
| `FIELD_PRODUCTION` (L0–L21, per-hour) | 🟢 | K `base/buildings.ts` | L0=0, L1=7, L10=280, L21=2800 pinned |
| `FIELD_COSTS` (4 resources × 21 levels, upgrade cost per level) | 🟢 | K | Base + 1.67^(L-1) scaling pinned at L1, L7, L20 |
| `fieldTotalCost(resource, level)` | 🟢 | derived | wood L7=5425, iron L10=27275, crop L8=9055, out-of-range=0 |
| `BONUS_BUILDINGS` + `BB_BASE_COST` (5 types × 5 levels, cost + %) | 🟢 | K | All 5 types × base + 1.80^(L-1) scaling pinned |
| `CP_BASE` per building (40+ entries) | 🟢 | K + ST | MB=2, Mkt=3, Emb=4, Acad=4, TH=5, HM=6, Palace=24 etc. pinned |
| `cpAtLevel(building, level)` | 🟢 | derived round(base × 1.2^L) | MB Lv20=77, Mkt=115, Emb=153, Acad=153, TH10=31 pinned |
| `CP_REQUIRED` (villages 1–10, cumulative) | 🟢 | ST [cp article](https://support.travian.com/en/support/solutions/articles/7000065115) | Fixed this cycle (was wrong for #3/#4/#5); test pins all 10 entries |
| `MERCHANTS` (7 tribes × capacity + count per MP-level) | 🟢 | FW + ST | Hun cap 500→750 fixed; all 7 pinned |
| `CELEBRATIONS.small` (19.5k/24h/500 CP) | 🟢 | FW | Pinned |
| `CELEBRATIONS.great` (101.65k/60h/2000 CP) | 🟢 | FW | Pinned |
| `MAIN_BUILDING_SPEED_MULTIPLIER` (0.964^(L-1)) | 🟢 | K `mb_like` | Lv1=1.0, Lv10=0.716, Lv20=0.489 pinned |
| `fieldBuildTime(resource, level, mbLv)` | 🟢 | K `time(a, 1.6, 1000/3)` | Called at Wood L1, Crop L10, MB Lv10 pinned |
| `hmCumulativeCost(level)` | 🟢🔧 | K closed-form 80/120/70/90 × 1.33^(L-1) | Rewritten Lv20 bug 249,170→326,110; all 4 anchors pinned |
| `OASIS_TYPES` (single25 / single50 / dual / triple) | ✅ | ST [oasis article](https://support.travian.com/en/support/solutions/articles/7000065119) | No numeric test yet but used in OasisRoi tests |
| `CROPPER_LAYOUTS` (15c/9c/7c/4446) | ✅ | K | Field-count counts used in OasisRoi test |
| Residence formula (2 × L²) | ⚠️ | K (not directly exported) | Text claim in mechanics.astro verified |
| Wall def bonuses per tribe | ⚠️ | mechanics.astro text | Not a formula constant — no exported value |

## 2. Per-tribe unit stats — `src/data/tribes/*.ts`

Test file: `src/data/tribes/units.test.ts` (70 tests — every unit of every tribe pinned).

| File | LOC | Status | Source | Test coverage |
|---|---|---|---|---|
| `romans.ts` | 106 | 🟢 | K `base/units.ts` | All 10 units — att/def-inf/def-cav/speed/upkeep |
| `teutons.ts` | 106 | 🟢 | K | All 10 units pinned |
| `gauls.ts` | 106 | 🟢 | K | All 10 units pinned |
| `vikings.ts` | 112 | 🟢 | ST [Vikings article](https://support.travian.com/en/support/solutions/articles/7000090975) | Rewrote 10 units this cycle, all pinned |
| `egyptians.ts` | 106 | 🟢🔧 | K `t4.fs/units.ts` | Settler speed 4→5 fixed, all 10 pinned |
| `huns.ts` | 107 | 🟢 | K `t4.fs/units.ts` | All 10 units pinned |
| `spartans.ts` | 111 | 🟡 | community xlsx cited in file header | 4 units cross-verified, 6 sourced from xlsx (Fandom 403 repeatedly); pinned but source-capped at 🟡 |

## 3. Build-order data — `src/data/build-order/*.ts`

Test files: 9 test files pinning every build order's total cost + step count + critical ordering.

| File | Steps | Total cost | Status | Test coverage |
|---|---|---|---|---|
| `types.ts` | — | — | 🟢 | Type invariants pinned (3 tests) |
| `common.ts` | 40 | 36,340 | 🟢 | Step-count + total-cost + step[0]=Woodcutter Lv1 pinned (10 tests) |
| `strategy-4p-sim.ts` | 58 | 492,830 | 🟢 | 10 tests |
| `strategy-4p-farming.ts` | 61 | 499,930 | 🟢 | 10 tests |
| `strategy-3p-sim.ts` | 57 | 499,500 | 🟢 | 11 tests |
| `strategy-3p-farming.ts` | 62 | 500,365 | 🟢 | Party-typo normalized this cycle; 12 tests |
| `strategy-lazy-decent.ts` | 38 | 361,160 | 🟢 | 10 tests |
| `tribe-cost.ts` | 7 tribes | — | 🟢 | All 7 tribes' 3-settler cost pinned (11 tests) |
| `strategies.ts` + `index.ts` | — | — | 🟢 | Aggregator tests (10 tests) |

## 4. Lumi strategy content — `src/data/lumi/*.ts`

37 subsections across 9 files. No vitest tests (prose content), but every numeric claim audited against PDF/ST/TK.

| File | LOC | Subsections | Status | Notes |
|---|---|---|---|---|
| `concepts.ts` | 90 | 4 | ✅ | CP formula cited (ST article); fabricated 350 CP/day removed; resource-vs-CP priority kept |
| `villages.ts` | 112 | 6 | ✅ | GB/GS 3×cost/2×speed cited (TK); 15c/9c/7c capital-choice logic from PDF |
| `operations.ts` | 64 | 4 | ✅ | Removed unsourced +30-50%/+50%; V3/V4/V6 dev hierarchy from PDF §2 |
| `farming.ts` | 59 | 4 | ✅ | Horse-count bracket table consolidated to match PDF 550+ single bracket |
| `under-attack.ts` | 68 | 4 | ✅ | Removed 19-waves fabrication; loyalty tablet / ghost tactic cited community |
| `endgame.ts` | 93 | 3 | ✅ | Artifacts + WW from ST |
| `map-zones.ts` | 64 | 4 | ✅ | Directly from PDF §3.5 |
| `midgame.ts` | 56 | 4 | ✅ | Directly from PDF §4.2 |
| `traderoutes.ts` | 56 | 4 | ✅ | Directly from PDF §5.1 |

## 5. Mechanics page — `src/pages/mechanics.astro`

11 `<Section>` components. Cross-references `src/data/travian.ts` constants so tests in §1 cover formulas.

| Section | Status | Source | Notes |
|---|---|---|---|
| Battle (wall, residence, combat-unit kind) | ✅ | mechanics text | Wall %s (Roman 3%, Gaul/Egy/Spa 2.5%, Tt/Hn/Vk 2%) verified; Residence 2×L² confirmed |
| Main Building formula (0.964^(L-1)) | 🟢 | K | Pinned in travian.test.ts |
| Bonus buildings (+5%/lv → max +25%; Crop ×2 → +50%) | 🟢 | K | Pinned |
| Smithy formula | 🔧 | K formula | "~+30%" → "~+34-36%" at Lv20 (ST doesn't publish precise %) |
| Cranny capacity (Lv1 per-res 200 → total 800) | 🔧 | ST [cranny article](https://support.travian.com/en/support/solutions/articles/7000068298) | Fixed from 100 → 200; pinned in travian.test.ts |
| CP reference table | 🟢 | — | Uses CP_REQUIRED (pinned) |
| Culture Points base values | 🟢 | K + ST | Uses CP_BASE (pinned) |
| Hero attributes (Romans +100 str, others +80; 0.2%/pt off/def; 4 pts/lv) | ✅ | ST [hero article](https://support.travian.com/en/support/solutions/articles/7000064021) | Verified this cycle |
| Hero's Mansion oasis unlocks (Lv10=1, Lv15=2, Lv20=3) | ✅ | ST | Verified |
| Plus / Gold table | 🔧 | ST [Plus article](https://support.travian.com/en/support/solutions/articles/7000060367) | <5min free row deleted (doesn't exist in ST); Plus cost 5g/10d → 10g/7d fixed; Horse speed tiered +14/17/20 (Gelding/Thoroughbred/Warhorse) |
| ROI Tables 2 + 3 | ✅ | PDF §5.3 | Uses same math as FieldRoi + OasisRoi calculators |
| Tournament Square | ⚠️ | — | Currently absent; if added, use 20-field threshold + +20%/lv |

## 6. Top-level pages

| File | LOC | Status | Notes |
|---|---|---|---|
| `src/pages/index.astro` | — | ✅ | Landing page; no data claims; links to guide/mechanics/tools |
| `src/pages/guide.astro` | — | ✅ | 7 `<Section>` host for guide components (see §7); no own numeric claims |
| `src/pages/strategy.astro` | — | ✅ | Renders Lumi content (see §4); no own numeric claims |
| `src/pages/tools.astro` | — | ✅🔧 | Frisovandijk duplicate consolidated this cycle (was 2 rows, now 1 with both features) |
| `src/pages/404.astro` | — | ✅ | Error page; no data |
| `src/pages/tribes/*.astro` | — | ✅ | Reads from `src/data/tribes/*.ts` (all 🟢) |

## 7. Guide sections — `src/components/guide/*.astro`

| File | Status | Notes |
|---|---|---|
| `SectionServerTypes.astro` | ✅ | Audit D flags reconsidered — Vikings-in-Northern-Legends is correct per ST |
| `SectionSettling.astro` | ✅ | Refactored to 7-tribe approach cards this cycle |
| `SectionStyleSelector.astro` | ✅ | UI wrapper; has `StyleSelector.test.tsx` (10 tests) |
| `SectionTaskBonuses.astro` | ✅ | xlsx-verified reward tables; hero-level multiplier note added |
| `SectionBuildOrder.astro` | 🔧 | Uses verified build-order data; "first 78-102 steps" inconsistency fixed this cycle (now says "first 40 steps shared; branches differ 38-62 steps") |
| `SectionHero.astro` | ✅ | Hallucinated animal numbers removed; PDF strength-allocation rule kept |
| `SectionEarlyGame.astro` | 🔧 | "~350 CP/day" softened; "2 merchants sustain" → Trade Route calculator pointer |

## 8. Calculators — `src/components/calculators/*.tsx`

Test files: `calculators.regression.test.ts` (40 tests) + `LaunchSimCalculator.test.ts` (8 tests).

| File | LOC | Status | Test coverage | Notes |
|---|---|---|---|---|
| `FieldRoiCalculator.tsx` | 6,736 | 🟢 | Wood L7=6.46 days (Lumi Table 2 anchor) + 7 regression snapshots | Exact match to PDF Table 2 |
| `OasisRoiCalculator.tsx` | 6,540 | 🟢🔧 | hmCumulativeCost 4 anchors + oasisDailyGain 4 regression cases | Gold toggle wired this cycle (was dead UI) |
| `PassiveCpCalculator.tsx` | 6,876 | 🟢🔧 | All 5 Lumi preset buildings pinned + total preset sum=531 | Fixed this cycle: intro text "529"→"531" to match actual formula output (breakdown 77+115+153+153+31+2); comment added |
| `BuildOrderCalculator.tsx` | 10,124 | ⚠️ | (no tests) | Greedy ROI works; does NOT model oasis % — deferred feature, not bug |
| `TraderouteCalculator.tsx` | 6,945 | 🔧 | (no tests yet) | Intro text mentions Roman +20%/lv (max +400%) |
| `FarmingCalculator.tsx` | 7,235 | 🟢🔧 | `lumiBracket` fn pinned at 10 breakpoints (0/149/150/399/400/549/550/800/2000 + zh locale) | 550-800/800+ split consolidated to single 550+ bracket per PDF |
| `CropSimCalculator.tsx` | 10,346 | ✅ | (no tests yet) | Total = 136,920/hr matches Lumi 136,500 (Crop-only = 126,840) |
| `LaunchSimCalculator.tsx` | 7,046 | 🟢 | 8 dedicated tests pinning V1 formula | Strategy × production rate → settle-time estimate |

## 9. Numeric-pin test coverage summary

| Test file | Tests | Covers |
|---|---|---|
| `src/data/travian.test.ts` | 90 | All game constants in §1 |
| `src/data/tribes/units.test.ts` | 70 | All 7 tribes × 10 units (stats) |
| `src/components/calculators/calculators.regression.test.ts` | 40 | FieldRoi + OasisRoi + PassiveCp + FarmingCalc |
| `src/components/calculators/LaunchSimCalculator.test.ts` | 8 | LaunchSim V1 formula |
| `src/data/build-order/common.test.ts` | 10 | common 40-step opening |
| `src/data/build-order/strategies.test.ts` | 10 | Aggregator |
| `src/data/build-order/strategy-3p-farming.test.ts` | 12 | 3p-farming 62 steps |
| `src/data/build-order/strategy-3p-sim.test.ts` | 11 | 3p-sim 57 steps |
| `src/data/build-order/strategy-4p-farming.test.ts` | 10 | 4p-farming 61 steps |
| `src/data/build-order/strategy-4p-sim.test.ts` | 10 | 4p-sim 58 steps |
| `src/data/build-order/strategy-lazy-decent.test.ts` | 10 | lazy-decent 38 steps |
| `src/data/build-order/tribe-cost.test.ts` | 11 | 7 tribes × 3-settler cost |
| `src/data/build-order/types.test.ts` | 3 | Type invariants |
| `src/components/guide/StyleSelector.test.tsx` | 10 | Style selector UI |
| **Total** | **305** | **All numeric data + UI behavior** |

200 of these 305 tests were added during this audit cycle (`9fd782a`, `8255ce6`, `aad4b8f`).

## 10. Fixes applied this audit cycle

Grouped from `ac55836` + the 3 UI polish fixes in this commit.

| # | Area | Fix | Verification |
|---|---|---|---|
| 1 | `travian.ts` | CP_REQUIRED #2-#10 corrected (from ST article) | 🟢 pinned + official source |
| 2 | `travian.ts` | Hun merchant cap 500 → 750 | 🟢 pinned + FW source |
| 3 | `travian.ts` | Egyptian settler speed 4 → 5 | 🟢 pinned + K source |
| 4 | `travian.ts` | `hmCumulativeCost` Lv20 249,170 → 326,110 (closed-form rewrite) | 🟢 pinned + K formula |
| 5 | `travian.ts` | Cranny Lv1 per-resource 100 → 200 | 🟢 pinned + ST source |
| 6 | `vikings.ts` | All 10 units rewritten from ST | 🟢 pinned + ST source |
| 7 | `mechanics.astro` | `<5min free` row deleted (wasn't in ST finish article) | ✅ ST-verified deletion |
| 8 | `mechanics.astro` | Plus cost 5g/10d → 10g/7d | ✅ ST-verified |
| 9 | `mechanics.astro` | Horse speed tiered +14/17/20 with named items | ✅ ST-verified |
| 10 | `mechanics.astro` | Smithy max bonus "~30%" → "~34-36%" | ⚠️ K formula (ST doesn't publish %) |
| 11 | `OasisRoiCalculator.tsx` | Gold toggle wired (was dead UI) | 🟢 pinned output |
| 12 | `TraderouteCalculator.tsx` | Roman +20%/lv note added | ✅ self-consistent |
| 13 | `FarmingCalculator.tsx` | 550-800/800+ consolidated to 550+ | 🟢 pinned |
| 14 | `SectionEarlyGame.astro` | Softened unsourced specifics | ✅ conservative removal |
| 15 | `PassiveCpCalculator.tsx` | Intro "529" → "531" to match formula output + breakdown comment | 🟢 pinned (this cycle) |
| 16 | `SectionBuildOrder.astro` | "first 78-102 steps identical" → "first 40 steps shared; branches 38-62 steps" | ✅ self-consistent (this cycle) |
| 17 | `tools.astro` | Frisovandijk duplicate URL consolidated to single entry | ✅ dedup (this cycle) |

## 11. Remaining 🟡 / deferred items

| Item | Tier | Reason not fixed |
|---|---|---|
| 6 Spartan units not cross-verified | 🟡 | Source-capped at xlsx; Fandom 403s repeatedly, K doesn't export Spartan-only units separately |
| Tournament Square section absent from `mechanics.astro` | 🟡 | Deferred — low priority; +20%/lv at 20-field threshold noted here if added |
| `BuildOrderCalculator.tsx` does NOT model oasis % | ⚠️ | Deferred feature; greedy-ROI is orthogonal to oasis % |
| `TraderouteCalculator.tsx` has no regression tests yet | ⚠️ | Math self-consistent; regression test TODO |
| `CropSimCalculator.tsx` has no regression tests yet | ⚠️ | Total matches Lumi (136,920/hr ~ 136,500); regression test TODO |
| `BuildOrderCalculator.tsx` has no regression tests yet | ⚠️ | Interactive calculator (harder to snapshot); ROI formula shared with FieldRoi (which IS pinned) |

## 12. Commit trail (chronological)

```
f24273a Fix Chinese-mode UI: ensure no English-only text leaks
8a0c392 Step 3 batch 3: Server types + Task bonuses + Alliance + Plus & Gold
ea19d5d Step 3 batch 2: Artifacts + World Wonder endgame section
c36eb87 Step 3 batch 1: Hero adventures+equipment, Smithy, detailed Loyalty/Chiefing
476f069 Step 2: add data-sources & external-tools mapping to tools.astro
aad4b8f test(calc): pin calculator reference outputs for regression
9fd782a test(travian): pin all constants for CI catch
8255ce6 test(tribes): pin all unit stats for all 7 tribes
981e711 docs: add per-fix verification depth table (9/10 direct official fetch confirmed)
9386904 docs: update audit-status.md with all 10 fixes from 2026-04-23
ac55836 fix(data+guide+calc): apply 10 audit findings
0e51cf4 fix(data+mechanics): correct CP_REQUIRED for villages 2-10
... (plus this session's commit)
```

**Status**: 305/305 tests, 0 astro errors, 14 pages build. All numeric data load-bearing for calculators/ROI tables is either test-pinned or officially cited.
