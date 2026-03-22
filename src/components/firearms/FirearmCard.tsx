import { Link } from 'react-router-dom';
import { TagChip } from '../common/TagChip';
import type { Firearm } from '../../types';
import { useCompareStore } from '../../hooks/compareContext';

export const FirearmCard = ({ firearm }: { firearm: Firearm }) => {
  const { toggleCompare, isCompared } = useCompareStore();

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <img src={firearm.images[0]} alt={firearm.name} className="h-40 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{firearm.category}</p>
          <Link to={`/firearms/${firearm.slug}`} className="text-lg font-semibold text-zinc-100 hover:text-zinc-300">
            {firearm.name}
          </Link>
          <p className="text-sm text-zinc-400">{firearm.manufacturer} · {firearm.country}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <TagChip label={firearm.caliber} />
          <TagChip label={String(firearm.yearIntroduced)} />
        </div>
        <button
          onClick={() => toggleCompare(firearm.id)}
          className="w-full rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800"
        >
          {isCompared(firearm.id) ? 'Remove from Compare' : 'Add to Compare'}
        </button>
      </div>
    </article>
  );
};
