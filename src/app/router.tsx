import { createHashRouter } from 'react-router-dom';
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

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'browse', element: <BrowsePage /> },
      { path: 'firearms/:slug', element: <FirearmDetailPage /> },
      { path: 'compare', element: <ComparePage /> },
      { path: 'collections', element: <CollectionsPage /> },
      { path: 'collections/:slug', element: <CollectionDetailPage /> },
      { path: 'manufacturers', element: <ManufacturersPage /> },
      { path: 'manufacturers/:slug', element: <ManufacturerDetailPage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'glossary', element: <GlossaryPage /> },
      { path: 'about', element: <AboutPage /> }
    ]
  }
]);
