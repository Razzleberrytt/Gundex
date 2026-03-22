import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { CompareProvider } from './hooks/CompareProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CompareProvider>
      <RouterProvider router={router} />
    </CompareProvider>
  </StrictMode>
);
