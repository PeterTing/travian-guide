import { useState } from 'react';
import { useLang } from '../../i18n/LangContext';
import { STRATEGY_LIST } from '../../data/build-order';
import type { StrategyId } from '../../data/build-order';
import BuildOrderList from './BuildOrderList';
import styles from './StrategyTabs.module.css';

const FARMING_LABELS = {
  zh: { none: '無', light: '輕度', heavy: '重度' },
  en: { none: 'None', light: 'Light', heavy: 'Heavy' },
} as const;

export default function StrategyTabs() {
  const { lang } = useLang();
  const [activeId, setActiveId] = useState<StrategyId>('4p-sim');
  const active = STRATEGY_LIST.find((s) => s.id === activeId)!;

  return (
    <div className={styles.container}>
      <div className={styles.tabs} role="tablist">
        {STRATEGY_LIST.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === activeId}
            onClick={() => setActiveId(s.id)}
            className={s.id === activeId ? styles.tabActive : styles.tab}
          >
            {s.name[lang]}
          </button>
        ))}
      </div>

      <p className={styles.tagline}>
        <strong>{active.tagline[lang]}</strong>
      </p>

      <div className={styles.meta}>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>
            {lang === 'zh' ? '結帳時間' : 'Settle time'}
          </span>
          <span className={styles.metaValue}>
            {active.settleHours.best}–{active.settleHours.typical}h
          </span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>
            {lang === 'zh' ? 'CP 產量' : 'CP prod'}
          </span>
          <span className={styles.metaValue}>~{active.cpProd}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>
            {lang === 'zh' ? '派對數' : 'Parties'}
          </span>
          <span className={styles.metaValue}>{active.partyCount}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>Farming</span>
          <span className={styles.metaValue}>
            {FARMING_LABELS[lang][active.farmingLoad]}
          </span>
        </div>
      </div>

      <div className={styles.prosCons}>
        <div className={styles.pros}>
          <h4 className={styles.prosConsH}>{lang === 'zh' ? '優點' : 'Pros'}</h4>
          <ul className={styles.prosConsList}>
            {active.pros.map((p, i) => (
              <li key={i}>{p[lang]}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cons}>
          <h4 className={styles.prosConsH}>{lang === 'zh' ? '缺點' : 'Cons'}</h4>
          <ul className={styles.prosConsList}>
            {active.cons.map((c, i) => (
              <li key={i}>{c[lang]}</li>
            ))}
          </ul>
        </div>
      </div>

      <BuildOrderList strategyId={activeId} />
    </div>
  );
}
