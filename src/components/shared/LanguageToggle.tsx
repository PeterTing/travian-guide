import { useEffect, useState } from 'react';
import { LANG_STORAGE_KEY, type Lang } from '../../i18n/types';
import styles from './LanguageToggle.module.css';

/**
 * Standalone language toggle that works without the React context.
 * Writes to localStorage and dispatches a 'travian-lang-change' event.
 *
 * For static Astro content: pair with the small vanilla script in
 * BaseLayout that toggles `data-lang` attribute on <html> so CSS can
 * show/hide zh/en text without React.
 */
export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>('zh');

  useEffect(() => {
    const stored = (localStorage.getItem(LANG_STORAGE_KEY) as Lang | null) ?? 'zh';
    setLang(stored);
    document.documentElement.dataset.lang = stored;
    document.documentElement.lang = stored === 'en' ? 'en' : 'zh-Hant';

    const onChange = (e: Event) => {
      const { detail } = e as CustomEvent<Lang>;
      if (detail === 'zh' || detail === 'en') setLang(detail);
    };
    window.addEventListener('travian-lang-change', onChange);
    return () => window.removeEventListener('travian-lang-change', onChange);
  }, []);

  const change = (next: Lang) => {
    if (next === lang) return;
    localStorage.setItem(LANG_STORAGE_KEY, next);
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next === 'en' ? 'en' : 'zh-Hant';
    window.dispatchEvent(new CustomEvent('travian-lang-change', { detail: next }));
    setLang(next);
  };

  return (
    <div className={styles.toggle} role="group" aria-label="Language selector">
      <button
        type="button"
        className={lang === 'zh' ? styles.active : styles.btn}
        aria-pressed={lang === 'zh'}
        onClick={() => change('zh')}
      >繁中</button>
      <button
        type="button"
        className={lang === 'en' ? styles.active : styles.btn}
        aria-pressed={lang === 'en'}
        onClick={() => change('en')}
      >EN</button>
    </div>
  );
}
