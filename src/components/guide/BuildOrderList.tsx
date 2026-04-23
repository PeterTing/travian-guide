import { useState } from 'react';
import { useLang } from '../../i18n/LangContext';
import { common, STRATEGIES } from '../../data/build-order';
import type { BuildStep, StrategyId, Phase } from '../../data/build-order';
import styles from './BuildOrderList.module.css';

const PHASE_LABELS: Record<Phase, { zh: string; en: string }> = {
  'pre-party-1': { zh: '開局 → Party 1', en: 'Opening → Party 1' },
  'post-party-1': { zh: 'Party 1 → Party 2', en: 'Party 1 → Party 2' },
  'post-party-2': { zh: 'Party 2 → Party 3', en: 'Party 2 → Party 3' },
  'post-party-3': { zh: 'Party 3 → Party 4', en: 'Party 3 → Party 4' },
  'post-party-final': { zh: '最後 Party → 定居', en: 'Final Party → Settle' },
  'post-settle': { zh: '定居後首都延伸', en: 'Post-settle capital dev' },
};

const PHASE_ORDER: Phase[] = [
  'pre-party-1',
  'post-party-1',
  'post-party-2',
  'post-party-3',
  'post-party-final',
  'post-settle',
];

export default function BuildOrderList({ strategyId }: { strategyId: StrategyId }) {
  const { lang } = useLang();
  const strategy = STRATEGIES[strategyId];
  const allSteps: BuildStep[] = [...common, ...strategy.branchSteps];

  // Only phases that actually contain steps
  const phases = PHASE_ORDER.filter((p) => allSteps.some((s) => s.phase === p));

  const [openPhases, setOpenPhases] = useState<Set<Phase>>(new Set(['pre-party-1']));
  const toggle = (p: Phase) => {
    setOpenPhases((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  return (
    <div className={styles.container}>
      {phases.map((phase) => {
        const steps = allSteps.filter((s) => s.phase === phase);
        const open = openPhases.has(phase);
        const phaseCost = steps.reduce((sum, s) => sum + (s.cost ?? 0), 0);
        return (
          <section key={phase} className={styles.phase}>
            <button
              type="button"
              onClick={() => toggle(phase)}
              className={styles.phaseHeader}
              aria-expanded={open}
            >
              <span className={styles.arrow}>{open ? '▼' : '▶'}</span>
              <span className={styles.title}>{PHASE_LABELS[phase][lang]}</span>
              <span className={styles.meta}>
                {steps.length}
                {lang === 'zh' ? ' 步' : ' steps'} · {phaseCost.toLocaleString()}
              </span>
            </button>
            {open && (
              <ol className={styles.stepList}>
                {steps.map((s) => (
                  <li key={s.step} className={styles.step}>
                    <span className={styles.stepNum}>{s.step}.</span>
                    <span className={styles.stepName}>
                      {s.building[lang]}
                      {s.targetLevel !== null && ` → Lv ${s.targetLevel}`}
                    </span>
                    {s.cost !== null && s.cost > 0 && (
                      <span className={styles.stepCost}>{s.cost.toLocaleString()}</span>
                    )}
                    {s.notes && <div className={styles.stepNote}>{s.notes[lang]}</div>}
                  </li>
                ))}
              </ol>
            )}
          </section>
        );
      })}
    </div>
  );
}
