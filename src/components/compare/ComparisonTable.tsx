import type { Firearm } from '../../types';

const fields: Array<[keyof Firearm, string]> = [
  ['yearIntroduced', 'Introduced'],
  ['category', 'Category'],
  ['action', 'Action'],
  ['caliber', 'Caliber'],
  ['capacity', 'Capacity'],
  ['weight', 'Weight'],
  ['barrelLength', 'Barrel length']
];

export const ComparisonTable = ({ items, highlightDiff }: { items: Firearm[]; highlightDiff: boolean }) => (
  <div className="overflow-auto rounded-2xl border border-zinc-800">
    <table className="min-w-full text-left text-sm">
      <thead>
        <tr>
          <th className="bg-zinc-950 px-4 py-3 text-zinc-500">Spec</th>
          {items.map((f) => <th key={f.id} className="bg-zinc-900 px-4 py-3 text-zinc-100">{f.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {fields.map(([key, label]) => {
          const values = items.map((item) => String(item[key]));
          const differs = new Set(values).size > 1;
          return (
            <tr key={String(key)} className="border-t border-zinc-800">
              <th className="bg-zinc-950 px-4 py-3 text-zinc-400">{label}</th>
              {values.map((value, idx) => (
                <td key={idx} className={`px-4 py-3 ${highlightDiff && differs ? 'bg-zinc-800/70 text-amber-200' : 'bg-zinc-900 text-zinc-100'}`}>
                  {value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
