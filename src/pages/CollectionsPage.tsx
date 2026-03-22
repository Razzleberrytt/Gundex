import { Link, useParams } from 'react-router-dom';
import { CollectionCard } from '../components/collections/CollectionCard';
import { EmptyState } from '../components/common/EmptyState';
import { collections } from '../data/collections';
import { firearms } from '../data/firearms';
import { FirearmCard } from '../components/firearms/FirearmCard';

export const CollectionsPage = () => (
  <div className="space-y-4">
    <h1 className="text-3xl">Curated collections</h1>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{collections.map((c) => <CollectionCard key={c.id} collection={c} />)}</div>
  </div>
);

export const CollectionDetailPage = () => {
  const { slug } = useParams();
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return <EmptyState title="Collection not found" description="This collection template is ready for future data expansion." />;
  const items = firearms.filter((f) => collection.firearmIds.includes(f.id));

  return (
    <div className="space-y-4">
      <Link to="/collections" className="text-sm text-zinc-400">← Back to collections</Link>
      <img src={collection.image} className="h-56 w-full rounded-2xl border border-zinc-800 object-cover" />
      <h1 className="text-3xl">{collection.title}</h1>
      <p className="text-zinc-400">{collection.summary}</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{items.map((item) => <FirearmCard key={item.id} firearm={item} />)}</div>
    </div>
  );
};
