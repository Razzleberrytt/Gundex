import { Link, useParams } from 'react-router-dom';
import { manufacturers } from '../data/manufacturers';
import { ManufacturerCard } from '../components/manufacturers/ManufacturerCard';
import { EmptyState } from '../components/common/EmptyState';
import { firearms } from '../data/firearms';
import { FirearmCard } from '../components/firearms/FirearmCard';

export const ManufacturersPage = () => (
  <div className="space-y-4">
    <h1 className="text-3xl">Manufacturers</h1>
    <div className="grid gap-4 md:grid-cols-2">{manufacturers.map((m) => <ManufacturerCard key={m.id} manufacturer={m} />)}</div>
  </div>
);

export const ManufacturerDetailPage = () => {
  const { slug } = useParams();
  const manufacturer = manufacturers.find((m) => m.slug === slug);
  if (!manufacturer) return <EmptyState title="Manufacturer not found" description="Detail template exists and can be populated as the dataset grows." />;

  const notable = firearms.filter((f) => manufacturer.notableModelIds.includes(f.id));

  return (
    <div className="space-y-4">
      <Link to="/manufacturers" className="text-sm text-zinc-400">← Back to manufacturers</Link>
      <h1 className="text-3xl">{manufacturer.name}</h1>
      <p className="text-zinc-400">{manufacturer.country} · Founded {manufacturer.founded} · {manufacturer.yearsActive}</p>
      <p className="text-zinc-300">{manufacturer.overview}</p>
      <h2 className="text-xl">Notable models</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{notable.map((f) => <FirearmCard key={f.id} firearm={f} />)}</div>
    </div>
  );
};
