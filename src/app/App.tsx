import { Suspense } from 'react';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { AppRouter } from './providers/router';

export const App = () => (
  <div className="app">
    <Suspense fallback="App Suspense">
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
