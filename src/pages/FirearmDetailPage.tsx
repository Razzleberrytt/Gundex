import { Link, useParams } from 'react-router-dom';
import { firearms } from '../data/firearms';
import { EmptyState } from '../components/common/EmptyState';
import { SpecTable } from '../components/firearms/SpecTable';
import { FirearmCard } from '../components/firearms/FirearmCard';
import { useCompareStore } from '../hooks/compareContext';

export const FirearmDetailPage = () => {
  const { slug } = useParams();
  const firearm = firearms.find((item) => item.slug === slug);
  const { toggleCompare, isCompared } = useCompareStore();

  if (!firearm) return <EmptyState title="Entry not found" description="This firearm entry is missing from the current dataset." />;

  const related = firearms.filter((f) => firearm.relatedIds.includes(f.id));

  return (
    <article className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="space-y-3">
          <img src={firearm.images[0]} alt={firearm.name} className="h-72 w-full rounded-2xl border border-zinc-800 object-cover" />
          <div className="grid grid-cols-3 gap-2">{firearm.images.map((img) => <img key={img} src={img} className="h-20 w-full rounded-lg border border-zinc-800 object-cover" />)}</div>
        </div>
        <aside className="hidden lg:block lg:sticky lg:top-20 lg:h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Jump links</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-300">
            {['Overview', 'Specifications', 'Variants', 'History', 'Service', 'Sources'].map((s) => <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>)}
          </ul>
        </aside>
      </div>

      <div>
        <h1 className="text-3xl font-semibold">{firearm.name}</h1>
        <p className="text-zinc-400">{firearm.manufacturer} · {firearm.country} · Introduced {firearm.yearIntroduced}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {[['Category', firearm.category], ['Action', firearm.action], ['Caliber', firearm.caliber], ['Status', firearm.status]].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-zinc-800 bg-zinc-950 p-3"><p className="text-xs text-zinc-500">{k}</p><p className="text-sm text-zinc-100">{v}</p></div>
        ))}
      </div>

      <section id="overview" className="space-y-2"><h2 className="text-xl">Overview</h2><p className="text-zinc-300">{firearm.overview}</p></section>
      <section id="specifications" className="space-y-2"><h2 className="text-xl">Specifications</h2><SpecTable firearm={firearm} /></section>
      <section id="variants" className="space-y-2"><h2 className="text-xl">Variants</h2><ul className="space-y-2">{firearm.variants.map((v) => <li key={v.name} className="rounded-xl border border-zinc-800 bg-zinc-950 p-3"><p className="text-zinc-100">{v.name}</p><p className="text-sm text-zinc-400">{v.description}</p></li>)}</ul></section>
      <section id="history" className="space-y-2"><h2 className="text-xl">Development & history</h2><p className="text-zinc-300">{firearm.history}</p></section>
      <section id="service" className="space-y-2"><h2 className="text-xl">Service & adoption</h2><p className="text-zinc-300">{firearm.serviceUse}</p></section>
      <section id="sources" className="space-y-2"><h2 className="text-xl">Sources / notes</h2><ul className="list-disc space-y-1 pl-5 text-sm text-zinc-400">{firearm.sourceNotes.map((note) => <li key={note}>{note}</li>)}</ul><p className="text-xs text-zinc-500">Confidence: {firearm.confidence} · Last reviewed: {firearm.lastReviewed}</p></section>

      <button onClick={() => toggleCompare(firearm.id)} className="rounded-lg border border-zinc-700 px-4 py-2 text-sm">{isCompared(firearm.id) ? 'Remove from compare' : 'Add to compare'}</button>

      <section className="space-y-3">
        <div className="flex items-center justify-between"><h2 className="text-xl">Related firearms</h2><Link to="/browse" className="text-sm text-zinc-400">Browse all</Link></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{related.map((f) => <FirearmCard key={f.id} firearm={f} />)}</div>
      </section>
    </article>
  );
};
