export const SearchBar = ({ value, onChange, placeholder = 'Search firearms, manufacturers, calibers…' }: { value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <label className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 transition-colors duration-150 ease-out focus-within:border-accent">
    <span className="text-text-muted">⌕</span>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
      placeholder={placeholder}
    />
  </label>
);
