import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ComparisonTable } from '../components/compare/ComparisonTable';
import { EmptyState } from '../components/common/EmptyState';
import { firearms } from '../data/firearms';
import { useCompareStore } from '../hooks/compareContext';

export const ComparePage = () => {
  const { compareIds, removeCompare } = useCompareStore();
  const [highlightDiff, setHighlightDiff] = useState(true);
  const selected = firearms.filter((f) => compareIds.includes(f.id));

  if (!selected.length) {
    return <EmptyState title="No firearms selected" description="Add 2 to 4 firearms from browse or detail pages to compare technical metadata." />;
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-primary p-4">
        <h1 className="text-2xl">Compare firearms</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.map((f) => <button key={f.id} onClick={() => removeCompare(f.id)} className="rounded-full border border-border px-3 py-1 text-xs">{f.name} ×</button>)}
        </div>
        <label className="mt-3 inline-flex items-center gap-2 text-sm text-text-primary"><input type="checkbox" checked={highlightDiff} onChange={(e) => setHighlightDiff(e.target.checked)} /> Highlight differences</label>
      </div>
      <ComparisonTable items={selected} highlightDiff={highlightDiff} />
      <Link to="/browse" className="text-sm text-text-muted">Add more entries from Browse</Link>
    </div>
  );
};
