import Fuse from 'fuse.js';
import type { BrowseFilters, Firearm, SortKey } from '../types';
import { getEraFromYear } from '../data/taxonomy';

export const defaultFilters: BrowseFilters = {
  category: [],
  manufacturer: [],
  country: [],
  era: [],
  caliber: [],
  action: [],
  status: []
};

export const filterFirearms = (items: Firearm[], filters: BrowseFilters) => {
  return items.filter((item) => {
    const era = getEraFromYear(item.yearIntroduced);
    return (
      (!filters.category.length || filters.category.includes(item.category)) &&
      (!filters.manufacturer.length || filters.manufacturer.includes(item.manufacturer)) &&
      (!filters.country.length || filters.country.includes(item.country)) &&
      (!filters.era.length || filters.era.includes(era)) &&
      (!filters.caliber.length || filters.caliber.includes(item.caliber)) &&
      (!filters.action.length || filters.action.includes(item.action)) &&
      (!filters.status.length || filters.status.includes(item.status))
    );
  });
};

export const searchFirearms = (items: Firearm[], query: string) => {
  if (!query.trim()) return items;
  const fuse = new Fuse(items, {
    threshold: 0.3,
    keys: ['name', 'aliases', 'manufacturer', 'category', 'caliber', 'tags']
  });
  return fuse.search(query).map((r) => r.item);
};

export const sortFirearms = (items: Firearm[], sortKey: SortKey) => {
  const sorted = [...items];
  switch (sortKey) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'year-asc':
      return sorted.sort((a, b) => a.yearIntroduced - b.yearIntroduced);
    case 'year-desc':
      return sorted.sort((a, b) => b.yearIntroduced - a.yearIntroduced);
    default:
      return sorted;
  }
};
