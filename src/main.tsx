import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from './app/router';
import { CompareProvider } from './hooks/CompareProvider';
import { ThemeProvider } from './components/ThemeProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <CompareProvider>
          <AppRoutes />
        </CompareProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
);
