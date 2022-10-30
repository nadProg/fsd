import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { getUserInitialized, userActions } from 'entities/User';

import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useDispatch();

  const userInitialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
