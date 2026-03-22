import { NavLink } from 'react-router-dom';
import { useTheme } from '../themeContext';

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

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-primary/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-lg font-semibold tracking-[0.12em] text-text-primary">GUNDEX</NavLink>
        <nav className="hidden gap-3 md:flex" aria-label="Primary">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `rounded-md px-2 py-1 text-sm transition-colors duration-150 ease-out ${isActive ? 'bg-secondary text-text-primary' : 'text-text-muted hover:text-text-primary hover:bg-secondary/70'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="rounded-md border border-border px-2 py-1 text-sm text-text-primary transition-colors duration-150 ease-out hover:bg-secondary"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};
