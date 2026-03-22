import { Link, useNavigate } from 'react-router-dom';
import { collections } from '../data/collections';
import { firearms } from '../data/firearms';
import { SectionHeader } from '../components/common/SectionHeader';
import { SearchBar } from '../components/common/SearchBar';
import { CollectionCard } from '../components/collections/CollectionCard';
import { FirearmCard } from '../components/firearms/FirearmCard';
import { useState } from 'react';

const categories = ['Pistol', 'Revolver', 'Rifle', 'Shotgun', 'Submachine Gun', 'Machine Gun'];
const eras = ['Pre-1900', '1900-1945', '1946-1990', '1991-Present'];
const RECENT_QUERIES_KEY = 'recentQueries';

export const HomePage = () => {
  const [query, setQuery] = useState('');
  const [recentQueries, setRecentQueries] = useState<string[]>(() => {
    const recent = localStorage.getItem(RECENT_QUERIES_KEY);
    return recent ? (JSON.parse(recent) as string[]) : [];
  });
  const [compareQuickList] = useState<string[]>(() => {
    const compare = localStorage.getItem('compareList');
    return compare ? (JSON.parse(compare) as string[]) : [];
  });
  const navigate = useNavigate();

  const submitSearch = () => {
    const trimmed = query.trim();
    if (trimmed) {
      const next = [trimmed, ...recentQueries.filter((item) => item !== trimmed)].slice(0, 6);
      localStorage.setItem(RECENT_QUERIES_KEY, JSON.stringify(next));
      setRecentQueries(next);
    }
    navigate(`/browse?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="space-y-10">
      <section className="flex min-h-[420px] flex-col justify-center rounded-2xl border border-accent/30 bg-gradient-to-br from-electric-blue/20 via-olive/20 to-bronze/20 p-6 text-center md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Reference Index</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight text-text-primary md:text-5xl">Gundex: A historical and technical firearm reference site</h1>
        <p className="mx-auto mt-3 max-w-2xl text-text-muted">Explore manufacturers, variants, timelines, and vetted specs in a clean catalog built for research, education, and comparison.</p>
        <div className="mx-auto mt-6 w-full max-w-2xl space-y-3">
          <SearchBar value={query} onChange={setQuery} />
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={submitSearch} className="rounded-xl border border-accent/70 bg-accent-soft px-4 py-2 text-sm transition duration-150 ease-out hover:scale-[1.02] hover:bg-accent/20 focus:scale-[1.02]">Search catalog</button>
            <Link className="rounded-xl border border-border bg-surface px-4 py-2 text-sm transition duration-150 ease-out hover:scale-[1.02] hover:bg-secondary" to="/browse">Browse</Link>
            <Link className="rounded-xl border border-border bg-surface px-4 py-2 text-sm transition duration-150 ease-out hover:scale-[1.02] hover:bg-secondary" to="/compare">Compare</Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-secondary p-5">
        <SectionHeader title="Recent searches" subtitle="Quickly jump back into previous queries." />
        {recentQueries.length ? (
          <div className="flex flex-wrap gap-2">
            {recentQueries.map((recent) => (
              <Link key={recent} className="rounded-lg border border-border bg-primary px-3 py-2 text-sm transition-colors duration-150 ease-out hover:bg-surface" to={`/browse?q=${encodeURIComponent(recent)}`}>{recent}</Link>
            ))}
          </div>
        ) : <p className="text-sm text-text-muted">No recent searches yet—run a query to pin it here.</p>}
      </section>

      <section className="rounded-2xl border border-border bg-primary p-5">
        <SectionHeader title="Saved compare picks" subtitle="Continue where your last comparison left off." action={<Link to="/compare" className="text-sm text-accent">Open compare</Link>} />
        {compareQuickList.length ? (
          <div className="flex flex-wrap gap-2">
            {compareQuickList.map((id) => {
              const firearm = firearms.find((item) => item.id === id);
              if (!firearm) return null;
              return <Link key={id} to={`/firearms/${firearm.slug}`} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm transition-colors duration-150 ease-out hover:bg-secondary">{firearm.name}</Link>;
            })}
          </div>
        ) : <p className="text-sm text-text-muted">Add firearms to compare and they will appear here.</p>}
      </section>

      <section className="rounded-2xl border border-border bg-secondary p-5">
        <SectionHeader title="Browse by category" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {categories.map((category) => <Link key={category} to={`/browse?category=${encodeURIComponent(category)}`} className="rounded-xl border border-border bg-primary p-4 text-sm transition-colors duration-150 ease-out hover:bg-surface">{category}</Link>)}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-primary p-5">
        <SectionHeader title="Browse by era" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {eras.map((era) => <Link key={era} to={`/browse?era=${encodeURIComponent(era)}`} className="rounded-xl border border-border bg-surface p-4 text-sm">{era}</Link>)}
        </div>
      </section>

      <section>
        <SectionHeader title="Featured collections" action={<Link to="/collections" className="text-sm text-accent">View all</Link>} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {collections.slice(0, 3).map((collection) => <CollectionCard key={collection.id} collection={collection} />)}
        </div>
      </section>

      <section>
        <SectionHeader title="Recently added entries" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {firearms.slice(0, 6).map((f) => <FirearmCard key={f.id} firearm={f} />)}
        </div>
      </section>
    </div>
  );
};
