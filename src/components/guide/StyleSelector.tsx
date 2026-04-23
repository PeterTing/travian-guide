import { useState } from 'react';
import { useLang } from '../../i18n/LangContext';
import { STRATEGIES } from '../../data/build-order';
import type { StrategyId } from '../../data/build-order';
import styles from './StyleSelector.module.css';

type Base = '4p' | '3p' | 'lazy';
type Farming = 'farming' | 'sim';
type Active = 'active' | 'casual';

/**
 * Pure decision-tree resolver. Exported for unit testing.
 *
 * - `base === 'lazy'` short-circuits to `lazy-decent` (Q2/Q3 ignored).
 * - `farming === 'sim'` short-circuits to `${base}-sim` (Q3 not required).
 * - `farming === 'farming'` requires Q3: `active` → real farming choice, `casual` → sim fallback.
 */
export function resolveStrategy(
  base: Base | null,
  farming: Farming | null,
  active: Active | null,
): StrategyId | null {
  if (base === 'lazy') return 'lazy-decent';
  if (!base || !farming) return null;
  if (farming === 'sim') return `${base}-sim` as StrategyId;
  // farming === 'farming' — check activity level
  if (active === 'active') return `${base}-farming` as StrategyId;
  if (active === 'casual') return `${base}-sim` as StrategyId; // fallback for low-activity player
  return null; // Q3 not yet answered
}

export default function StyleSelector() {
  const { lang } = useLang();
  const [base, setBase] = useState<Base | null>(null);
  const [farming, setFarming] = useState<Farming | null>(null);
  const [active, setActive] = useState<Active | null>(null);

  const recommendedId = resolveStrategy(base, farming, active);
  const recommended = recommendedId ? STRATEGIES[recommendedId] : null;

  const reset = () => {
    setBase(null);
    setFarming(null);
    setActive(null);
  };

  const showQ2 = base === '4p' || base === '3p';
  const showQ3 = showQ2 && farming === 'farming';
  const showResult = recommendedId !== null && recommended !== null;

  return (
    <div className={styles.container}>
      {/* Q1 — base path */}
      <fieldset className={styles.question}>
        <legend className={styles.legend}>
          <span className={styles.qNum}>Q1</span>
          <span className={styles.qText}>
            {lang === 'zh'
              ? '你要更便宜還是更好的定居後基礎？'
              : 'Do you want cheaper opening or a stronger base?'}
          </span>
        </legend>
        <div className={styles.options}>
          <label className={styles.option}>
            <input
              type="radio"
              name="base"
              className={styles.radio}
              checked={base === '4p'}
              onChange={() => {
                setBase('4p');
                setFarming(null);
                setActive(null);
              }}
            />
            <div className={styles.optionBody}>
              <strong className={styles.optionTitle}>
                {lang === 'zh' ? '便宜、彈性加速' : 'Cheaper, more flexibility'}
              </strong>
              <p className={styles.optionDesc}>
                {lang === 'zh'
                  ? '4 派對路線：總成本低，不用先升 Town Hall。'
                  : '4-party path: lower total cost, no early Town Hall.'}
              </p>
            </div>
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="base"
              className={styles.radio}
              checked={base === '3p'}
              onChange={() => {
                setBase('3p');
                setFarming(null);
                setActive(null);
              }}
            />
            <div className={styles.optionBody}>
              <strong className={styles.optionTitle}>
                {lang === 'zh' ? '基礎好、CP +10%' : 'Better base, +10% CP'}
              </strong>
              <p className={styles.optionDesc}>
                {lang === 'zh'
                  ? '3 派對路線：TH 先升，定居後 CP 和產量略高。'
                  : '3-party path: earlier TH, higher CP and prod post-settle.'}
              </p>
            </div>
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="base"
              className={styles.radio}
              checked={base === 'lazy'}
              onChange={() => {
                setBase('lazy');
                setFarming(null);
                setActive(null);
              }}
            />
            <div className={styles.optionBody}>
              <strong className={styles.optionTitle}>
                {lang === 'zh' ? '不衝時間，輕鬆玩' : 'No rush, just chill'}
              </strong>
              <p className={styles.optionDesc}>
                {lang === 'zh' ? '佛系路線：120-144h 結帳。' : 'Lazy path: settles in 120-144h.'}
              </p>
            </div>
          </label>
        </div>
      </fieldset>

      {/* Q2 — farming intent */}
      {showQ2 && (
        <fieldset className={styles.question}>
          <legend className={styles.legend}>
            <span className={styles.qNum}>Q2</span>
            <span className={styles.qText}>
              {lang === 'zh'
                ? '你要不要主動掠奪 inactive 玩家？'
                : 'Will you actively farm inactive players?'}
            </span>
          </legend>
          <div className={styles.options}>
            <label className={styles.option}>
              <input
                type="radio"
                name="farming"
                className={styles.radio}
                checked={farming === 'farming'}
                onChange={() => {
                  setFarming('farming');
                  setActive(null);
                }}
              />
              <div className={styles.optionBody}>
                <strong className={styles.optionTitle}>
                  {lang === 'zh' ? '會主動 farming' : "Yes, I'll farm"}
                </strong>
                <p className={styles.optionDesc}>
                  {lang === 'zh'
                    ? '訓兵掠奪 inactive 玩家，收益比純 sim 高'
                    : 'Train troops + raid inactives — higher income than pure sim'}
                </p>
              </div>
            </label>
            <label className={styles.option}>
              <input
                type="radio"
                name="farming"
                className={styles.radio}
                checked={farming === 'sim'}
                onChange={() => {
                  setFarming('sim');
                  setActive(null);
                }}
              />
              <div className={styles.optionBody}>
                <strong className={styles.optionTitle}>
                  {lang === 'zh' ? '不會，只靠 hero' : 'No, hero only'}
                </strong>
                <p className={styles.optionDesc}>
                  {lang === 'zh'
                    ? '純 hero 打綠洲 + 經濟 sim'
                    : 'Pure hero oasis + economy sim'}
                </p>
              </div>
            </label>
          </div>
        </fieldset>
      )}

      {/* Q3 — activity level (only if farming chosen) */}
      {showQ3 && (
        <fieldset className={styles.question}>
          <legend className={styles.legend}>
            <span className={styles.qNum}>Q3</span>
            <span className={styles.qText}>
              {lang === 'zh'
                ? '你的活躍度夠支撐 farming 嗎？'
                : 'Can you sustain the farming tempo?'}
            </span>
          </legend>
          <p className={styles.qDesc}>
            {lang === 'zh'
              ? 'Farming 要每 5-30 分鐘點一次。兵會死。不夠活躍改 Sim 比較安全。'
              : 'Farming needs clicks every 5-30 min. Troops will die. Switch to Sim if not active enough.'}
          </p>
          <div className={styles.options}>
            <label className={styles.option}>
              <input
                type="radio"
                name="active"
                className={styles.radio}
                checked={active === 'active'}
                onChange={() => setActive('active')}
              />
              <div className={styles.optionBody}>
                <strong className={styles.optionTitle}>
                  {lang === 'zh' ? '活躍度夠，願意點' : 'High activity, willing to click'}
                </strong>
              </div>
            </label>
            <label className={styles.option}>
              <input
                type="radio"
                name="active"
                className={styles.radio}
                checked={active === 'casual'}
                onChange={() => setActive('casual')}
              />
              <div className={styles.optionBody}>
                <strong className={styles.optionTitle}>
                  {lang === 'zh' ? '不夠，改 Sim 好了' : 'Not that active, switch to Sim'}
                </strong>
              </div>
            </label>
          </div>
        </fieldset>
      )}

      {/* Result card */}
      {showResult && recommended && (
        <div className={styles.result} role="status" aria-live="polite">
          <h3 className={styles.resultH}>
            {lang === 'zh' ? '推薦你：' : 'Recommended: '}
            <strong className={styles.resultName}>{recommended.name[lang]}</strong>
          </h3>
          <p className={styles.resultTagline}>{recommended.tagline[lang]}</p>
          <div className={styles.resultActions}>
            <a href="#build-order" className={styles.cta}>
              {lang === 'zh' ? '看這個風格的完整建築順序 ↓' : 'See the full build order ↓'}
            </a>
            <button type="button" onClick={reset} className={styles.reset}>
              {lang === 'zh' ? '重來一次' : 'Start over'}
            </button>
          </div>
          {active === 'casual' && farming === 'farming' && (
            <p className={styles.note}>
              {lang === 'zh'
                ? '↑ 因為你選「活躍度不夠」，我們把你從 Farming 改為 Sim。'
                : '↑ Since you flagged low activity, we downgraded Farming to Sim for safety.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
