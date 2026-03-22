import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CompareTray } from '../components/compare/CompareTray';

export const AppLayout = () => (
  <div className="min-h-screen bg-primary text-text-primary transition-colors duration-150 ease-out">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-6" role="main">
      <Outlet />
    </main>
    <CompareTray />
    <Footer />
  </div>
);
