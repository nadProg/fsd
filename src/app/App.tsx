import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { userActions } from 'entities/User';

import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
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
};
