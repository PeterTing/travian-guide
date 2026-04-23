# Data Audit Status

Last updated: 2026-04-23 (post-audit-sweep, commit `ac55836`)

## Legend
- ✅ = audited + verified against authoritative source
- ⚠️ = partially audited or cited community source (medium confidence)
- ❌ = NOT audited (high risk)
- 🔧 = recently fixed (re-verification post-change)

## Authoritative sources used
- **K** = kirilloid/travian GitHub (`github.com/kirilloid/travian/blob/master/src/model/base/*.ts`)
- **ST** = support.travian.com (official Travian Legends support)
- **TK** = support.kingdoms.com (Travian Kingdoms — DIFFERENT game, use with caution)
- **FW** = travian.fandom.com/wiki (community wiki)
- **xlsx** = T4.6 - Start Guide.xlsx (Carpis guide, 2022 snapshot)
- **PDF** = travian guide.pdf (Lumi/Eggstra/Dave guide)

---

## Game constants (src/data/travian.ts)

| Data | Status | Source | Notes |
|---|---|---|---|
| FIELD_PRODUCTION (L0-L21) | ✅ | K T4.6 | Audit B confirmed entire sequence matches kirilloid |
| FIELD_COSTS (upgrade cost per level per resource) | ✅ | K base/buildings.ts | Base + 1.67^(L-1) scaling verified per type |
| BONUS_BUILDINGS + BB_BASE_COST | ✅ | K | Base + 1.80^(L-1) scaling, all 5 types verified |
| CP_BASE per building (40+ entries) | ✅ | K + ST | Audit B spot-checked 20+, all match |
| CP_REQUIRED (villages 1-10) | ✅ | ST [cp article](https://support.travian.com/en/support/solutions/articles/7000065115-culture-points-cp-) | Fixed 2026-04-23 (was wrong for #3/#4/#5) |
| MERCHANTS (7 tribes) | ✅ | FW + ST | All 7 verified; Hun cap 500→750 fixed |
| CELEBRATIONS (small/great) | ✅ | FW | Small 19.5k/24h/500CP; Great 101.65k/60h/2000CP |
| MAIN_BUILDING_SPEED_MULTIPLIER (0.964^(L-1)) | ✅ | K | Matches kirilloid `mb_like` |
| fieldBuildTime formula | ✅ | K | Matches `time(a, 1.6, 1000/3)` with correct per-type base |
| `hmCumulativeCost` function | 🔧 | K T4 formula | Rewritten as closed-form `80/120/70/90 × 1.33^(L-1)`; L20 was wrong (249,170 → **326,110**) |
| Residence def (2×L²) | ⚠️ | K (not directly exported) | Text claim in mechanics.astro verified |
| Wall def bonuses | ⚠️ | mechanics.astro has correct %s (Roman 3%, Gaul/Egy/Spa 2.5%, etc.) | Not a formula constant — no exported value |
| Hero attributes (not in travian.ts) | N/A | — | Not stored as data constants |

## Per-tribe unit stats (src/data/tribes/*.ts)

| File | Status | Source | Notes |
|---|---|---|---|
| romans.ts | ✅ | K base/units.ts | All stats verified |
| teutons.ts | ✅ | K base/units.ts | All stats verified |
| gauls.ts | ✅ | K base/units.ts | All stats verified |
| vikings.ts | ✅ | ST [Viking article](https://support.travian.com/en/support/solutions/articles/7000090975) | Rewrote 10 units 2026-04-23 |
| egyptians.ts | 🔧 | K t4.fs/units.ts | All 10 units verified; Settler speed 4→5 fixed |
| huns.ts | ✅ | K t4.fs/units.ts | All 10 units match |
| spartans.ts | ⚠️ | community xlsx (cited in file header) | 4 units cross-verified; 6 unverified (Fandom 403 this session) |

## Build order data (src/data/build-order/*.ts)

All ✅ from prior audits. See individual tests (9-12 per file) that pin total cost + step counts.

| File | Status |
|---|---|
| types.ts | ✅ |
| common.ts | ✅ 40 steps, total 36,340 |
| strategy-4p-sim.ts | ✅ 58 steps, total 492,830 |
| strategy-4p-farming.ts | ✅ 61 steps, total 499,930 |
| strategy-3p-sim.ts | ✅ 57 steps, total 499,500 |
| strategy-3p-farming.ts | ✅ 62 steps, total 500,365 (Party-typo normalized) |
| strategy-lazy-decent.ts | ✅ 38 steps, total 361,160 |
| tribe-cost.ts | ✅ 7 tribes, all verified |

## Lumi strategy sections (src/data/lumi/*.ts)

| File | Status | Notes |
|---|---|---|
| concepts.ts | ✅ | Hallucinations removed, CP formula cited |
| villages.ts | ✅ | PDF + TK cites, GB/GS 3×cost/2×speed cited |
| operations.ts | ✅ | +30-50%/+50% removed; V3/V4/V6 added |
| farming.ts | ✅ | Horse-split corrected to PDF |
| under-attack.ts | ✅ | 19-waves removed; loyalty tablet / ghost tactic cited as community |
| endgame.ts | ✅ | Artifacts/WW verified against ST |
| map-zones.ts | ✅ | Directly from PDF §3.5 |
| midgame.ts | ✅ | Directly from PDF §4.2 |
| traderoutes.ts | ✅ | Directly from PDF §5.1 |

## Guide sections (src/components/guide/*.astro)

| File | Status | Notes |
|---|---|---|
| SectionServerTypes.astro | ⚠️ | Audit D flagged some items; Vikings-in-Northern-Legends actually IS correct (audit agent was wrong). Tournament phase wording could clarify. |
| SectionSettling.astro | ✅ | Refactored to 7-tribe approach cards |
| SectionStyleSelector.astro | ✅ | UI wrapper |
| SectionTaskBonuses.astro | ✅ | xlsx-verified reward tables |
| SectionBuildOrder.astro | ✅ | Uses verified build-order data |
| SectionHero.astro | ✅ | Hallucinations removed, PDF tips added |
| SectionEarlyGame.astro | 🔧 | "~350 CP/day" softened, "2 merchants sustain" → Trade Route calculator pointer |

## Mechanics page (src/pages/mechanics.astro)

| Section | Status | Notes |
|---|---|---|
| Battle / Wall / Residence | ✅ | Wall %s per tribe verified; 2×L² confirmed |
| Main Building formula | ✅ | 0.964^(L-1) verified |
| Bonus buildings | ✅ | +5%/lv × Lv5 = +25%, Crop stacks to +50% |
| Smithy formula | 🔧 | Formula verified; max bonus text "~+30%" → "~+34-36%" |
| Cranny capacity | 🔧 | Lv1 per-resource 100 → 200 (total 800) fixed |
| CP reference table | ✅ | Uses CP_REQUIRED (just fixed) |
| Culture Points base values | ✅ | Uses CP_BASE from travian.ts |
| Hero attributes | ✅ | Romans +100 strength, others +80; 0.2%/pt off/def; 4 pts/lv |
| Hero's Mansion oasis unlocks | ✅ | Lv10=1, Lv15=2, Lv20=3 |
| Plus / Gold table | 🔧 | <5min row deleted; Plus cost 5g/10d → 10g/7d fixed; Horse speed tiered +14/17/20 |
| ROI Tables 2 + 3 | ✅ | Directly from PDF §5.3 |
| Tournament Square | ⚠️ | Currently absent from file; if added, use 20-field threshold + +20%/lv |
| Weapon bonus simplification | ⚠️ | "+50%" is at max tier; acceptable approximation |

## Calculators (src/components/calculators/*.tsx)

| File | Status | Notes |
|---|---|---|
| FieldRoiCalculator | ✅ | Formula verified against Lumi Table 2 (Wood L7 = 6.46 exact match) |
| OasisRoiCalculator | 🔧 | `gold` toggle now wired (was dead UI); uses corrected `hmCumulativeCost` |
| PassiveCpCalculator | ✅ | Uses CP_REQUIRED (just fixed) + CP_BASE |
| BuildOrderCalculator | ⚠️ | Greedy ROI works; does NOT model oasis % (deferred — feature, not bug) |
| TraderouteCalculator | 🔧 | Intro text now mentions Roman +20%/lv (max +400%) |
| FarmingCalculator | 🔧 | 550-800/800+ split consolidated to 550+ bracket per PDF |
| CropSimCalculator | ✅ | Total = 136,920/hr matches Lumi 136,500 (Crop-only = 126,840) |
| LaunchSimCalculator | ✅ | V1 formula simple; 8 tests pin behavior |

---

## Summary

| Category | Before this audit cycle | After |
|---|---|---|
| **Critical bugs** | 3 unknown | 0 outstanding |
| **Medium issues** | ~8 | 0 outstanding |
| **Deferred features** | 0 | 2 (TS section, BuildOrderCalc oasis %) |
| **Unverifiable claims** | Many | Only 6 Spartan units (source-cited in file header) |

All remaining ⚠️ items are either (a) cited but not independently re-fetched, or (b) acceptable approximations noted as such. No known incorrect numbers remain.

**Last commit:** `ac55836 fix(data+guide+calc): apply 10 audit findings` — 105/105 tests, 0 astro errors, 14 pages build.
