import { useState } from 'react';
import { SETTLEMENT_LIST } from '../../data/settlement/index';
import { TRIBES } from '../../data/tribes/index';
import { useLang } from '../../i18n/LangContext';
import type { TribeId } from '../../data/travian';
import styles from './BuildOrderTabs.module.css';

export default function BuildOrderTabs() {
  const { lang, t } = useLang();
  const [active, setActive] = useState<TribeId>('romans');

  const current = SETTLEMENT_LIST.find(s => s.tribe === active)!;
  const tribe = TRIBES[active];

  return (
    <div>
      <div className={styles.tabs} role="tablist">
        {SETTLEMENT_LIST.map(s => {
          const tr = TRIBES[s.tribe];
          return (
            <button
              key={s.tribe}
              type="button"
              role="tab"
              aria-selected={active === s.tribe}
              className={active === s.tribe ? styles.tabActive : styles.tab}
              onClick={() => setActive(s.tribe)}
              style={active === s.tribe ? { '--accent': tr.color } as React.CSSProperties : undefined}
            >
              <span className={styles.tabIcon}>{tr.icon}</span>
              <span>{t(tr.name)}</span>
              <span className={styles.tabTarget}>{t(s.targetDay)}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.panel} style={{ borderLeftColor: tribe.color } as React.CSSProperties}>
        <div className={styles.panelHead}>
          <div>
            <h3 className={styles.panelTitle}>
              {tribe.icon} {t(tribe.name)} — {t(current.targetDay)}
            </h3>
            <p className={styles.panelApproach}>{t(current.approach)}</p>
          </div>
        </div>

        <h4 className={styles.h4}>{lang === 'en' ? 'Hour-by-hour timeline' : '時程表'}</h4>
        <ol className={styles.steps}>
          {current.steps.map((step, i) => (
            <li key={i}>
              <span className={styles.when}>{step.at}</span>
              <span className={styles.action}>{t(step.action)}</span>
              {step.note && <span className={styles.note}>{t(step.note)}</span>}
            </li>
          ))}
        </ol>

        <h4 className={styles.h4}>{lang === 'en' ? 'Key tips' : '關鍵要點'}</h4>
        <ul className={styles.tips}>
          {current.keyTips.map((tip, i) => (
            <li key={i}>{t(tip)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
