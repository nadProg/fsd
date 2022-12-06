import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

import '@/shared/config/i18n/i18n';

import '@/app/styles/index.scss';

const rootNode = document.getElementById('root');

if (!rootNode) {
  throw new Error('DOM node with id="root" not found');
}

const root = createRoot(rootNode);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
