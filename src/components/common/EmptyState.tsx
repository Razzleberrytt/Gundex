export const EmptyState = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-2xl border border-border bg-surface p-6 text-center">
    <h3 className="text-lg font-medium text-text-primary">{title}</h3>
    <p className="mt-2 text-sm text-text-muted">💡 {description}</p>
  </div>
);
