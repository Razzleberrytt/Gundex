import clsx from 'clsx';

export const TagChip = ({ label, active = false }: { label: string; active?: boolean }) => (
  <span
    className={clsx(
      'rounded-full border px-2.5 py-1 text-xs tracking-wide',
      active ? 'border-accent/70 bg-accent-soft text-text-primary' : 'border-border bg-secondary text-text-muted'
    )}
  >
    {label}
  </span>
);
