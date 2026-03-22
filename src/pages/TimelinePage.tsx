import { useMemo, useState } from 'react';
import { firearms } from '../data/firearms';
import { TimelineStrip } from '../components/timeline/TimelineStrip';

const decades = ['All', '1800s', '1900s', '1940s', '1950s', '1960s', '1970s', '1980s', '2000s', '2010s'];

export const TimelinePage = () => {
  const [decade, setDecade] = useState('All');

  const filtered = useMemo(() => {
    if (decade === 'All') return firearms;
    const start = Number.parseInt(decade, 10);
    return firearms.filter((f) => f.yearIntroduced >= start && f.yearIntroduced < start + 10);
  }, [decade]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Timeline</h1>
      <p className="text-text-muted">Explore firearms by introduction period and historical context.</p>
      <div className="flex flex-wrap gap-2">{decades.map((d) => <button key={d} onClick={() => setDecade(d)} className={`rounded-full border px-3 py-1 text-xs ${d === decade ? 'border-accent/60 bg-secondary' : 'border-border'}`}>{d}</button>)}</div>
      <TimelineStrip items={filtered} />
    </div>
  );
};
