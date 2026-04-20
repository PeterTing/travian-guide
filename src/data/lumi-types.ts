/**
 * Bilingual content types for the Lumi Advanced Strategy guide.
 * Each section is its own data file (split to keep individual writes
 * small and avoid stream-idle timeouts).
 */

export interface LumiText {
  zh: string;
  en: string;
}

export interface LumiBlock {
  type: 'paragraph' | 'list' | 'quote' | 'callout';
  variant?: 'tip' | 'warn' | 'danger' | 'info';
  text?: LumiText;
  items?: LumiText[];
  title?: LumiText;
}

export interface LumiSubsection {
  id: string;
  title: LumiText;
  blocks: LumiBlock[];
}

export interface LumiSection {
  id: string;
  number: string;          // e.g. "§2", "§3.1"
  title: LumiText;
  intro?: LumiText;
  subsections: LumiSubsection[];
}
