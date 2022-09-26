import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/App';
import { ThemeProvider } from 'shared/providers/ThemeProvider';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
