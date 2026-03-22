export const EmptyState = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
    <h3 className="text-lg font-medium text-zinc-200">{title}</h3>
    <p className="mt-2 text-sm text-zinc-400">{description}</p>
  </div>
);
