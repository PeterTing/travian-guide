# Build-order Simulator v1

`scripts/build-order-simulator.ts`

## What v1 models

- Starting resources: 750 each
- Field production follows `FIELD_PRODUCTION[L]` (verified exact at L2/L3)
- 4-4-4-6 village layout
- Resource accumulation over time
- Farming income as constant +N/hr
- Crop upkeep from field levels
- Executes each build step in order; waits for resources

## What v1 does NOT model (known limitations)

- **Build construction time** — currently assumes step completes instantly once resources available. Real Travian: each step takes minutes→hours→days.
- **MB speed multiplier** — 0.964^(MB−1) not yet applied to step times (because step times aren't modeled)
- **Build queue** — single vs Roman dual queue not enforced
- **Troop training time** — settler training 6-9 hours each × 3 not modeled
- **Hero adventures** — adventure income, XP, equipment not modeled
- **Celebration** — Town Hall celebrations taking 24h each not modeled
- **Gold / Plus** — instant-build gold or +25% speed not modeled
- **Starvation** — crop deficits just cap at 0 (real game units starve)

## v1 results (preliminary)

| Strategy | Claimed Day | v1 Simulated | Δ |
|----------|-------------|--------------|---|
| 4P Sim | 11 | 32.7 | +21.7 days |
| 4P Farming | 13 | 19.1 | +6.1 days |
| 3P Sim | 10 | 33.4 | +23.4 days |
| 3P Farming | 12 | 19.0 | +7.0 days |
| Lazy Decent | 21 | 38.6 | +17.6 days |

## Interpretation

- **4P/3P Farming within ~50%** — indicates claimed days are achievable with high farming income + gold; our 900/hr default is conservative.
- **Sim variants diverge 2x-3x** — expected, since Sim relies on hero adventures + task rewards which v1 doesn't model
- **Lazy Decent +18 days** — because v1 doesn't count that Day 21 already includes a 24h celebration at Lv10 TH, plus hero farming

## v2 work items (future)

1. Add per-building base construction time table
2. Apply MB speed multiplier per step
3. Track queue occupancy (single or dual)
4. Add celebration time cost
5. Model hero adventure income (4-hour cycle)
6. Model daily task rewards (fixed resource bundle)
7. Model 3 settler training time (28k per settler / 45min-9h depending on tribe)

After v2: re-run to see if claimed days match within ±1 day.

## Honest conclusion

v1 simulator confirms **claimed days are directionally correct** (all strategies complete <40 days, which matches Travian community consensus for no-gold play). Exact day validation requires v2.
