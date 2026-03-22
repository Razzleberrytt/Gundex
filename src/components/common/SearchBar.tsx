export const SearchBar = ({ value, onChange, placeholder = 'Search firearms, manufacturers, calibers…' }: { value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <label className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2">
    <span className="text-zinc-500">⌕</span>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
      placeholder={placeholder}
    />
  </label>
);
