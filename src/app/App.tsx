import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMountEffect } from '@/shared/hooks/useMountEffect';

import { getUserInitialized, userActions } from '@/entities/User';

import { TopBar } from '@/widgets/TopBar';
import { SideBar } from '@/widgets/SideBar';

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
        <TopBar />
        <div className="app__content">
          <SideBar />
          {userInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
