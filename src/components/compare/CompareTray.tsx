import { Link } from 'react-router-dom';
import { firearms } from '../../data/firearms';
import { useCompareStore } from '../../hooks/compareContext';

export const CompareTray = () => {
  const { compareIds, removeCompare, clearCompare } = useCompareStore();
  if (!compareIds.length) return null;

  return (
    <div className="sticky bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/95 p-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
        {compareIds.map((id) => {
          const firearm = firearms.find((f) => f.id === id);
          if (!firearm) return null;
          return (
            <button key={id} onClick={() => removeCompare(id)} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-200">
              {firearm.name} ×
            </button>
          );
        })}
        <div className="ml-auto flex gap-2">
          <button onClick={clearCompare} className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300">Clear</button>
          <Link to="/compare" className="rounded-lg border border-zinc-500 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-100">Compare ({compareIds.length})</Link>
        </div>
      </div>
    </div>
  );
};
