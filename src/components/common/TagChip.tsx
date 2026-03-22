import clsx from 'clsx';

export const TagChip = ({ label, active = false }: { label: string; active?: boolean }) => (
  <span
    className={clsx(
      'rounded-full border px-2.5 py-1 text-xs tracking-wide',
      active ? 'border-zinc-500 bg-zinc-800 text-zinc-100' : 'border-zinc-700 bg-zinc-900 text-zinc-400'
    )}
  >
    {label}
  </span>
);
