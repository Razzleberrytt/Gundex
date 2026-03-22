import { Link } from 'react-router-dom';
import { firearms } from '../../data/firearms';
import { useCompareStore } from '../../hooks/compareContext';

export const CompareTray = () => {
  const { compareIds, removeCompare, clearCompare } = useCompareStore();
  if (!compareIds.length) return null;

  return (
    <div className="animate-slide-up sticky bottom-0 z-40 border-t border-border bg-primary/95 p-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
        {compareIds.map((id) => {
          const firearm = firearms.find((f) => f.id === id);
          if (!firearm) return null;
          return (
            <button key={id} onClick={() => removeCompare(id)} className="rounded-full border border-border px-3 py-1 text-xs text-text-primary transition-colors duration-150 ease-out hover:bg-secondary">
              {firearm.name} ×
            </button>
          );
        })}
        <div className="ml-auto flex gap-2">
          <button onClick={clearCompare} className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-muted transition-colors duration-150 ease-out hover:bg-secondary">Clear</button>
          <Link to="/compare" className="rounded-lg border border-accent/60 bg-accent-soft px-3 py-1.5 text-xs text-text-primary transition duration-150 ease-out hover:scale-[1.02]">Compare ({compareIds.length})</Link>
        </div>
      </div>
    </div>
  );
};
