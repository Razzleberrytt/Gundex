import type { Firearm } from '../../types';

export const TimelineStrip = ({ items }: { items: Firearm[] }) => (
  <div className="space-y-3">
    {items.sort((a, b) => a.yearIntroduced - b.yearIntroduced).map((item) => (
      <div key={item.id} className="flex gap-3 rounded-xl border border-border bg-primary p-3">
        <div className="w-20 shrink-0 text-sm font-semibold text-text-primary">{item.yearIntroduced}</div>
        <div>
          <p className="text-text-primary">{item.name}</p>
          <p className="text-sm text-text-muted">{item.manufacturer} · {item.category}</p>
        </div>
      </div>
    ))}
  </div>
);
