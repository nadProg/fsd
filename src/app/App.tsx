import { Suspense } from 'react';

import { useTheme } from 'shared/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { AppRouter } from './providers/router';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="App Suspense">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
