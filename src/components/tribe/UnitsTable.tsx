import { useMemo, useState } from 'react';
import type { Tribe, UnitCategory } from '../../data/tribes-types';
import { useLang } from '../../i18n/LangContext';
import styles from './UnitsTable.module.css';

type SortKey = 'tier' | 'name' | 'attack' | 'defInfantry' | 'defCavalry' | 'speed' | 'carry' | 'upkeep' | 'trainTime' | 'totalCost';
type Dir = 'asc' | 'desc';

const CAT_ORDER: UnitCategory[] = ['infantry', 'cavalry', 'scout', 'siege', 'chief', 'settler'];

const CAT_LABEL: Record<UnitCategory, { zh: string; en: string }> = {
  infantry: { zh: '步兵', en: 'Infantry' },
  cavalry: { zh: '騎兵', en: 'Cavalry' },
  scout: { zh: '偵察', en: 'Scout' },
  siege: { zh: '攻城', en: 'Siege' },
  chief: { zh: '酋長', en: 'Chief' },
  settler: { zh: '拓荒者', en: 'Settler' },
};

interface Props { tribe: Tribe }

export default function UnitsTable({ tribe }: Props) {
  const { lang, t } = useLang();
  // Default sort: T1 → T10 (natural array order from data files).
  const [sortKey, setSortKey] = useState<SortKey>('tier');
  const [dir, setDir] = useState<Dir>('asc');

  const rows = useMemo(() => tribe.units.map((u, idx) => ({
    ...u,
    tier: idx,           // 0-indexed tier (matches T1..T10 ordering)
    totalCost: u.cost.wood + u.cost.clay + u.cost.iron + u.cost.crop,
  })), [tribe]);

  const sorted = useMemo(() => {
    const r = [...rows];
    r.sort((a, b) => {
      let av: number | string = 0;
      let bv: number | string = 0;
      if (sortKey === 'name') { av = t(a.name); bv = t(b.name); }
      else { av = (a as any)[sortKey]; bv = (b as any)[sortKey]; }
      if (typeof av === 'string' && typeof bv === 'string') {
        return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return dir === 'asc' ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
    return r;
  }, [rows, sortKey, dir, lang]);

  const headerClick = (k: SortKey) => {
    if (sortKey === k) setDir(d => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(k); setDir(k === 'name' ? 'asc' : 'desc'); }
  };

  const sortIndicator = (k: SortKey) => sortKey === k ? (dir === 'asc' ? '↑' : '↓') : '';

  const h = (k: SortKey, zh: string, en: string) => (
    <th
      role="button"
      tabIndex={0}
      className={sortKey === k ? styles.thActive : styles.th}
      onClick={() => headerClick(k)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); headerClick(k); } }}
    >
      {lang === 'en' ? en : zh} <span className={styles.sortInd}>{sortIndicator(k)}</span>
    </th>
  );

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    if (h) return `${h}h ${m}m`;
    if (m) return `${m}m ${s % 60}s`;
    return `${s}s`;
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {h('tier', '#', '#')}
            {h('name', '單位', 'Unit')}
            <th className={styles.thPlain}>{lang === 'en' ? 'Cat.' : '類別'}</th>
            {h('attack', '攻擊', 'Atk')}
            {h('defInfantry', '防步', 'DvI')}
            {h('defCavalry', '防騎', 'DvC')}
            {h('speed', '速度', 'Speed')}
            {h('carry', '搬運', 'Carry')}
            {h('upkeep', '維持', 'Up')}
            {h('totalCost', '總成本', 'Total cost')}
            {h('trainTime', '訓練時間', 'Train')}
          </tr>
        </thead>
        <tbody>
          {sorted.map(u => {
            const catColor = `cat-${u.category}`;
            return (
              <tr key={u.id}>
                <td className={styles.tierCell}>T{u.tier + 1}</td>
                <td>
                  <div className={styles.unitName}>{t(u.name)}</div>
                  <div className={styles.unitRole}>{t(u.role)}</div>
                </td>
                <td><span className={`${styles.catBadge} ${styles[catColor as keyof typeof styles]}`}>{t(CAT_LABEL[u.category])}</span></td>
                <td className={styles.num}>{u.attack}</td>
                <td className={styles.num}>{u.defInfantry}</td>
                <td className={styles.num}>{u.defCavalry}</td>
                <td className={styles.num}>{u.speed}</td>
                <td className={styles.num}>{u.carry}</td>
                <td className={styles.num}>{u.upkeep}</td>
                <td className={styles.num}>{u.totalCost.toLocaleString()}</td>
                <td className={styles.num}>{formatTime(u.trainTime)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className={styles.footnote}>
        {lang === 'en'
          ? 'Stats: 1x speed, base training time, unboosted. Click any column header to sort.'
          : '數據：1x 速度、基礎訓練時間、無加成狀態。點欄位標題可排序。'}
      </p>
    </div>
  );
}
