import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { firearms } from '../data/firearms';
import { actions, calibers, categories, countries, eras, manufacturerNames, statuses } from '../data/taxonomy';
import type { BrowseFilters, SortKey } from '../types';
import { defaultFilters, filterFirearms, searchFirearms, sortFirearms } from '../utils/firearmUtils';
import { SearchBar } from '../components/common/SearchBar';
import { FilterSidebar } from '../components/firearms/FilterSidebar';
import { MobileFilterDrawer } from '../components/firearms/MobileFilterDrawer';
import { FirearmCard } from '../components/firearms/FirearmCard';
import { EmptyState } from '../components/common/EmptyState';
import { LoadingSkeleton } from '../components/common/LoadingSkeleton';
import { TagChip } from '../components/common/TagChip';

const facets: Record<keyof BrowseFilters, string[]> = { category: categories, manufacturer: manufacturerNames, country: countries, era: eras, caliber: calibers, action: actions, status: statuses };

const readMulti = (params: URLSearchParams, key: keyof BrowseFilters) => params.getAll(key);

export const BrowsePage = () => {
  const [params, setParams] = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const search = params.get('q') ?? '';
  const sort = (params.get('sort') as SortKey) ?? 'relevance';

  const filters: BrowseFilters = {
    category: readMulti(params, 'category'),
    manufacturer: readMulti(params, 'manufacturer'),
    country: readMulti(params, 'country'),
    era: readMulti(params, 'era'),
    caliber: readMulti(params, 'caliber'),
    action: readMulti(params, 'action'),
    status: readMulti(params, 'status')
  };

  const searched = searchFirearms(firearms, search);
  const filtered = filterFirearms(searched, filters);
  const results = sortFirearms(filtered, sort);

  const update = (next: Partial<BrowseFilters> & { q?: string; sort?: SortKey }) => {
    const merged = { ...filters, ...next };
    const qp = new URLSearchParams();
    if ((next.q ?? search).trim()) qp.set('q', (next.q ?? search).trim());
    if ((next.sort ?? sort) !== 'relevance') qp.set('sort', next.sort ?? sort);
    (Object.keys(defaultFilters) as Array<keyof BrowseFilters>).forEach((key) => {
      merged[key].forEach((value) => qp.append(key, value));
    });
    setParams(qp);
  };

  const toggleFilter = (key: keyof BrowseFilters, value: string) => {
    const next = filters[key].includes(value) ? filters[key].filter((v) => v !== value) : [...filters[key], value];
    update({ [key]: next } as Partial<BrowseFilters>);
  };

  const clearAll = () => setParams(new URLSearchParams(search ? { q: search } : {}));

  const activePills = (Object.keys(filters) as Array<keyof BrowseFilters>).flatMap((key) => filters[key].map((value) => ({ key, value })));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="min-w-60 flex-1"><SearchBar value={search} onChange={(v) => update({ q: v })} /></div>
        <select value={sort} onChange={(e) => update({ sort: e.target.value as SortKey })} className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm">
          <option value="relevance">Relevance</option><option value="name-asc">Name A-Z</option><option value="year-desc">Newest era</option><option value="year-asc">Oldest era</option>
        </select>
        <button onClick={() => setView(view === 'grid' ? 'list' : 'grid')} className="rounded-lg border border-zinc-700 px-3 py-2 text-sm">{view === 'grid' ? 'List view' : 'Grid view'}</button>
        <button onClick={() => setMobileOpen(true)} className="rounded-lg border border-zinc-700 px-3 py-2 text-sm md:hidden">Filters</button>
      </div>

      <div className="flex flex-wrap gap-2">
        {activePills.map(({ key, value }) => (
          <button key={`${key}-${value}`} onClick={() => toggleFilter(key, value)}><TagChip label={`${key}: ${value} ×`} active /></button>
        ))}
        {!!activePills.length && <button onClick={clearAll} className="text-xs text-zinc-400">Clear all</button>}
      </div>

      <p className="text-sm text-zinc-400">{results.length} results</p>

      <div className="grid gap-4 md:grid-cols-[280px_1fr]">
        <div className="hidden md:block"><FilterSidebar filters={filters} facets={facets} onToggle={toggleFilter} onClear={clearAll} /></div>
        <div>
          {loading ? <LoadingSkeleton /> : results.length ? (
            <div className={view === 'grid' ? 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3' : 'space-y-4'}>
              {results.map((firearm) => <FirearmCard key={firearm.id} firearm={firearm} />)}
            </div>
          ) : (
            <EmptyState title="No entries found" description="Try removing filters or broadening your search terms." />
          )}
          <div className="mt-4 rounded-xl border border-dashed border-zinc-700 p-3 text-center text-xs text-zinc-500">Pagination / infinite load stub</div>
        </div>
      </div>

      <MobileFilterDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} filters={filters} facets={facets} onToggle={toggleFilter} onClear={clearAll} />
    </div>
  );
};
