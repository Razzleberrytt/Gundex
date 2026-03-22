import { useMemo, useState } from 'react';
import { SearchBar } from '../components/common/SearchBar';
import { glossaryTerms } from '../data/glossary';

export const GlossaryPage = () => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => glossaryTerms.filter((t) => `${t.term} ${t.definition}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Glossary</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Search terms…" />
      <div className="space-y-2">
        {filtered.map((term) => (
          <details key={term.id} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <summary className="cursor-pointer text-zinc-100">{term.term}</summary>
            <p className="mt-2 text-sm text-zinc-400">{term.definition}</p>
          </details>
        ))}
      </div>
    </div>
  );
};
