import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { LANG_STORAGE_KEY, pick, type Lang, type LangText } from './types';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: LangText | string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  // SSR-safe: default to 'zh', hydrate from localStorage on mount
  const [lang, setLangState] = useState<Lang>('zh');

  useEffect(() => {
    const stored = typeof window !== 'undefined'
      ? (localStorage.getItem(LANG_STORAGE_KEY) as Lang | null)
      : null;
    if (stored === 'zh' || stored === 'en') setLangState(stored);

    // Subscribe to changes from other tabs / the vanilla <LanguageToggle/>
    const onStorage = (e: StorageEvent) => {
      if (e.key === LANG_STORAGE_KEY && (e.newValue === 'zh' || e.newValue === 'en')) {
        setLangState(e.newValue);
      }
    };
    const onCustom = (e: Event) => {
      const { detail } = e as CustomEvent<Lang>;
      if (detail === 'zh' || detail === 'en') setLangState(detail);
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener('travian-lang-change', onCustom);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('travian-lang-change', onCustom);
    };
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
      document.documentElement.lang = next === 'en' ? 'en' : 'zh-Hant';
      document.documentElement.dataset.lang = next;
      window.dispatchEvent(new CustomEvent('travian-lang-change', { detail: next }));
    } catch {
      /* no-op (private mode / SSR) */
    }
  }, []);

  const t = useCallback((text: LangText | string) => pick(text, lang), [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Outside provider — return a best-effort fallback that reads localStorage.
    const lang: Lang = typeof window !== 'undefined'
      ? ((localStorage.getItem(LANG_STORAGE_KEY) as Lang) ?? 'zh')
      : 'zh';
    return {
      lang,
      setLang: () => {},
      t: (text) => pick(text, lang),
    };
  }
  return ctx;
}
