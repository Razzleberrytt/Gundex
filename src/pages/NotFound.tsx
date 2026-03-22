import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <main className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
    <p className="text-xs uppercase tracking-[0.2em] text-text-muted">404 • Target not found</p>
    <h1 className="text-4xl font-semibold text-text-primary">Looks like this entry slipped off the range.</h1>
    <p className="text-text-muted">No worries—your next discovery is one click away. Want to head back to familiar territory?</p>
    <div className="flex flex-wrap justify-center gap-3">
      <Link className="rounded-lg border border-accent/70 bg-accent-soft px-4 py-2 text-sm text-text-primary transition-colors duration-150 ease-out hover:bg-accent/20" to="/">Go Home</Link>
      <Link className="rounded-lg border border-border px-4 py-2 text-sm text-text-primary transition-colors duration-150 ease-out hover:bg-secondary" to="/browse">Browse Catalog</Link>
    </div>
  </main>
);
