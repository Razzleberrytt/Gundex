import { FilterSidebar } from './FilterSidebar';
import type { BrowseFilters } from '../../types';

export const MobileFilterDrawer = ({ open, onClose, ...props }: { open: boolean; onClose: () => void; filters: BrowseFilters; facets: Record<keyof BrowseFilters, string[]>; onToggle: (key: keyof BrowseFilters, value: string) => void; onClear: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 p-4 md:hidden" onClick={onClose}>
      <div className="max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <FilterSidebar {...props} />
      </div>
    </div>
  );
};
