import { Link } from 'react-router-dom';
import type { Manufacturer } from '../../types';

export const ManufacturerCard = ({ manufacturer }: { manufacturer: Manufacturer }) => (
  <Link to={`/manufacturers/${manufacturer.slug}`} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 hover:bg-zinc-900">
    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{manufacturer.country}</p>
    <h3 className="mt-1 text-lg text-zinc-100">{manufacturer.name}</h3>
    <p className="mt-1 text-sm text-zinc-400">Founded {manufacturer.founded} · {manufacturer.yearsActive}</p>
    <p className="mt-3 text-sm text-zinc-300">{manufacturer.overview}</p>
  </Link>
);
