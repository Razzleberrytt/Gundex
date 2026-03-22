import type { Firearm } from '../../types';

export const SpecTable = ({ firearm }: { firearm: Firearm }) => {
  const specs: Array<[string, string]> = [
    ['Action', firearm.action],
    ['Operating system', firearm.operatingSystem],
    ['Caliber', firearm.caliber],
    ['Feed system', firearm.feedSystem],
    ['Capacity', firearm.capacity],
    ['Barrel length', firearm.barrelLength],
    ['Overall length', firearm.overallLength],
    ['Weight', firearm.weight],
    ['Sights', firearm.sights]
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map(([k, v]) => (
            <tr key={k} className="border-b border-zinc-800 last:border-0">
              <th className="w-1/3 bg-zinc-950 px-4 py-2.5 text-zinc-400">{k}</th>
              <td className="bg-zinc-900 px-4 py-2.5 text-zinc-100">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
