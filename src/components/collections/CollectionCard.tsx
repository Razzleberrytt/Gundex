import { Link } from 'react-router-dom';
import type { Collection } from '../../types';

export const CollectionCard = ({ collection }: { collection: Collection }) => (
  <Link to={`/collections/${collection.slug}`} className="block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
    <img src={collection.image} alt={collection.title} className="h-36 w-full object-cover" />
    <div className="space-y-2 p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{collection.era}</p>
      <h3 className="text-lg text-zinc-100">{collection.title}</h3>
      <p className="text-sm text-zinc-400">{collection.summary}</p>
    </div>
  </Link>
);
