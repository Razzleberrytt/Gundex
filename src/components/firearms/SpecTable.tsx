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
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map(([k, v]) => (
            <tr key={k} className="border-b border-border last:border-0">
              <th className="w-1/3 bg-primary px-4 py-2.5 text-text-muted">{k}</th>
              <td className="bg-surface px-4 py-2.5 text-text-primary">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
