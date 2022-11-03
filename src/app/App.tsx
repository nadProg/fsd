import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMountEffect } from 'shared/hooks/useMountEffect';

import { getUserInitialized, userActions } from 'entities/User';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useDispatch();

  const userInitialized = useSelector(getUserInitialized);

  useMountEffect(() => {
    dispatch(userActions.initAuthData());
  });

  return (
    <div className="app">
      <Suspense fallback="App Suspense">
        <NavBar />
        <div className="content-page">
          <SideBar />
          {userInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
