interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const SectionHeader = ({ title, subtitle, action }: Props) => (
  <div className="mb-4 flex items-end justify-between gap-3">
    <div>
      <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
    </div>
    {action}
  </div>
);
