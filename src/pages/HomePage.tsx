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

export const HomePage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Reference Index</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight text-zinc-100">Gundex</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">A modern firearm reference index blending encyclopedia rigor, museum catalog structure, and collector-grade metadata.</p>
        <div className="mt-5 space-y-3">
          <SearchBar value={query} onChange={setQuery} />
          <button onClick={() => navigate(`/browse?q=${encodeURIComponent(query)}`)} className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm hover:bg-zinc-800">Search catalog</button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="rounded-lg border border-zinc-700 px-3 py-2 text-sm" to="/browse">Browse</Link>
          <Link className="rounded-lg border border-zinc-700 px-3 py-2 text-sm" to="/compare">Compare</Link>
          <Link className="rounded-lg border border-zinc-700 px-3 py-2 text-sm" to="/collections">Collections</Link>
        </div>
      </section>

      <section>
        <SectionHeader title="Browse by category" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {categories.map((category) => <Link key={category} to={`/browse?category=${encodeURIComponent(category)}`} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-200 hover:bg-zinc-900">{category}</Link>)}
        </div>
      </section>

      <section>
        <SectionHeader title="Browse by era" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {eras.map((era) => <Link key={era} to={`/browse?era=${encodeURIComponent(era)}`} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">{era}</Link>)}
        </div>
      </section>

      <section>
        <SectionHeader title="Featured collections" action={<Link to="/collections" className="text-sm text-zinc-300">View all</Link>} />
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

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <SectionHeader title="Popular comparisons" />
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><Link to="/compare">Glock 17 vs Beretta 92FS</Link></li>
            <li><Link to="/compare">AK-47 vs M16A1</Link></li>
            <li><Link to="/compare">Remington 870 vs Mossberg 500</Link></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <SectionHeader title="Methodology" />
          <p className="text-sm text-zinc-400">Entries are structured as historical-technical records with confidence levels, source notes, and last-reviewed metadata.</p>
        </div>
      </section>
    </div>
  );
};
