import { Link } from 'react-router-dom';
import type { Collection } from '../../types';

export const CollectionCard = ({ collection }: { collection: Collection }) => (
  <Link to={`/collections/${collection.slug}`} className="block overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-150 ease-out hover:bg-secondary">
    <img loading="lazy" src={collection.image} alt={`${collection.title} collection`} className="h-36 w-full object-cover" />
    <div className="space-y-2 p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-text-muted">{collection.era}</p>
      <h3 className="text-lg text-text-primary">{collection.title}</h3>
      <p className="text-sm text-text-muted">{collection.summary}</p>
    </div>
  </Link>
);
