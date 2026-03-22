import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { HomePage } from '../pages/HomePage';
import { BrowsePage } from '../pages/BrowsePage';
import { FirearmDetailPage } from '../pages/FirearmDetailPage';
import { ComparePage } from '../pages/ComparePage';
import { CollectionsPage, CollectionDetailPage } from '../pages/CollectionsPage';
import { ManufacturersPage, ManufacturerDetailPage } from '../pages/ManufacturersPage';
import { TimelinePage } from '../pages/TimelinePage';
import { GlossaryPage } from '../pages/GlossaryPage';
import { AboutPage } from '../pages/AboutPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="browse" element={<BrowsePage />} />
      <Route path="firearms/:slug" element={<FirearmDetailPage />} />
      <Route path="compare" element={<ComparePage />} />
      <Route path="collections" element={<CollectionsPage />} />
      <Route path="collections/:slug" element={<CollectionDetailPage />} />
      <Route path="manufacturers" element={<ManufacturersPage />} />
      <Route path="manufacturers/:slug" element={<ManufacturerDetailPage />} />
      <Route path="timeline" element={<TimelinePage />} />
      <Route path="glossary" element={<GlossaryPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  </Routes>
);
