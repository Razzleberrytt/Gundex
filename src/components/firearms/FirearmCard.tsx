import { Link } from 'react-router-dom';
import { TagChip } from '../common/TagChip';
import type { Firearm } from '../../types';
import { useCompareStore } from '../../hooks/compareContext';

export const FirearmCard = ({ firearm }: { firearm: Firearm }) => {
  const { toggleCompare, isCompared } = useCompareStore();

  return (
    <article role="button" aria-label={`View details for ${firearm.name}`} className="animate-fade-in overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-150 ease-out hover:bg-secondary hover:shadow-md">
      <img loading="lazy" src={firearm.images[0]} alt={`${firearm.name} by ${firearm.manufacturer}`} className="h-40 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-text-muted">{firearm.category}</p>
          <Link to={`/firearms/${firearm.slug}`} className="text-lg font-semibold text-text-primary transition-colors duration-150 ease-out hover:text-accent">
            {firearm.name}
          </Link>
          <p className="text-sm text-text-muted">{firearm.manufacturer} · {firearm.country}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <TagChip label={firearm.caliber} />
          <TagChip label={String(firearm.yearIntroduced)} />
        </div>
        <button
          onClick={() => toggleCompare(firearm.id)}
          className="w-full rounded-lg border border-border bg-primary px-3 py-2 text-sm text-text-primary transition duration-150 ease-out hover:scale-[1.01] hover:bg-accent-soft focus:scale-[1.01]"
        >
          {isCompared(firearm.id) ? 'Remove from Compare' : 'Add to Compare'}
        </button>
      </div>
    </article>
  );
};
