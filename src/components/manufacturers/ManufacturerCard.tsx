import { Link } from 'react-router-dom';
import type { Manufacturer } from '../../types';

export const ManufacturerCard = ({ manufacturer }: { manufacturer: Manufacturer }) => (
  <Link to={`/manufacturers/${manufacturer.slug}`} className="rounded-2xl border border-border bg-primary p-4 hover:bg-surface">
    <p className="text-xs uppercase tracking-[0.14em] text-text-muted">{manufacturer.country}</p>
    <h3 className="mt-1 text-lg text-text-primary">{manufacturer.name}</h3>
    <p className="mt-1 text-sm text-text-muted">Founded {manufacturer.founded} · {manufacturer.yearsActive}</p>
    <p className="mt-3 text-sm text-text-primary">{manufacturer.overview}</p>
  </Link>
);
