import { useState, useEffect } from 'react';
import { useLang } from '../../i18n/LangContext';
import FieldRoiCalculator from './FieldRoiCalculator';
import OasisRoiCalculator from './OasisRoiCalculator';
import PassiveCpCalculator from './PassiveCpCalculator';
import BuildOrderCalculator from './BuildOrderCalculator';
import TraderouteCalculator from './TraderouteCalculator';
import FarmingCalculator from './FarmingCalculator';
import CropSimCalculator from './CropSimCalculator';
import styles from './CalculatorTabs.module.css';

type TabId = 'field-roi' | 'oasis-roi' | 'cp' | 'build-order' | 'trade' | 'farming' | 'crop-sim';

const TABS: { id: TabId; zh: string; en: string }[] = [
  { id: 'field-roi',  zh: '① 資源田 ROI',     en: '① Field ROI' },
  { id: 'oasis-roi',  zh: '② 綠洲 ROI',       en: '② Oasis ROI' },
  { id: 'cp',         zh: '③ 被動 CP',        en: '③ Passive CP' },
  { id: 'build-order', zh: '④ 首都建築順序',   en: '④ Build Order' },
  { id: 'trade',      zh: '⑤ 商路 / 糧商',    en: '⑤ Trade Route' },
  { id: 'farming',    zh: '⑥ 農場效率',       en: '⑥ Farming' },
  { id: 'crop-sim',   zh: '⑦ 首都糧食模擬',   en: '⑦ Crop Sim' },
];

const VALID_HASH = new Set<string>(TABS.map(t => t.id));

export default function CalculatorTabs() {
  const { lang } = useLang();
  const [active, setActive] = useState<TabId>('field-roi');

  // Sync with URL hash for deep-link sharing
  useEffect(() => {
    const fromHash = window.location.hash.replace('#', '');
    if (VALID_HASH.has(fromHash)) setActive(fromHash as TabId);
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (VALID_HASH.has(h)) setActive(h as TabId);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const change = (id: TabId) => {
    setActive(id);
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <div>
      <div className={styles.tabs} role="tablist">
        {TABS.map(t => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            className={active === t.id ? styles.tabActive : styles.tab}
            onClick={() => change(t.id)}
          >
            {lang === 'en' ? t.en : t.zh}
          </button>
        ))}
      </div>

      <div className={styles.panel}>
        {active === 'field-roi'  && <FieldRoiCalculator />}
        {active === 'oasis-roi'  && <OasisRoiCalculator />}
        {active === 'cp'         && <PassiveCpCalculator />}
        {active === 'build-order'&& <BuildOrderCalculator />}
        {active === 'trade'      && <TraderouteCalculator />}
        {active === 'farming'    && <FarmingCalculator />}
        {active === 'crop-sim'   && <CropSimCalculator />}
      </div>
    </div>
  );
}
