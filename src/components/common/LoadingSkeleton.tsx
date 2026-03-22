export const LoadingSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {Array.from({ length: count }).map((_, idx) => (
      <div key={idx} className="h-64 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-900/70" />
    ))}
  </div>
);
