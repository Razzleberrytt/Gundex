import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CompareTray } from '../components/compare/CompareTray';

export const AppLayout = () => (
  <div className="min-h-screen bg-zinc-950 text-zinc-100">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-6">
      <Outlet />
    </main>
    <CompareTray />
    <Footer />
  </div>
);
