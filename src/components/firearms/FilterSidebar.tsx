import type { BrowseFilters } from '../../types';

interface FilterGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}

const FilterGroup = ({ label, options, selected, onToggle }: FilterGroupProps) => (
  <div className="space-y-2">
    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</p>
    <div className="space-y-1.5">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 text-sm text-zinc-300">
          <input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(option)} />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export const FilterSidebar = ({ filters, facets, onToggle, onClear }: { filters: BrowseFilters; facets: Record<keyof BrowseFilters, string[]>; onToggle: (key: keyof BrowseFilters, value: string) => void; onClear: () => void }) => (
  <aside className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold text-zinc-200">Filters</h3>
      <button onClick={onClear} className="text-xs text-zinc-400 hover:text-zinc-200">Clear all</button>
    </div>
    {(Object.keys(facets) as Array<keyof BrowseFilters>).map((key) => (
      <FilterGroup key={key} label={key} options={facets[key]} selected={filters[key]} onToggle={(val) => onToggle(key, val)} />
    ))}
  </aside>
);
