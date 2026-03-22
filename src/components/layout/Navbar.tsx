import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/browse', 'Browse'],
  ['/compare', 'Compare'],
  ['/collections', 'Collections'],
  ['/manufacturers', 'Manufacturers'],
  ['/timeline', 'Timeline'],
  ['/glossary', 'Glossary'],
  ['/about', 'Methodology']
] as const;

export const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <NavLink to="/" className="text-lg font-semibold tracking-[0.12em] text-zinc-100">GUNDEX</NavLink>
      <nav className="hidden gap-3 md:flex">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => `rounded-md px-2 py-1 text-sm ${isActive ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);
