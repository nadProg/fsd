import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/shared/ui/PageLoader';

import { routerConfig } from '../model/routerConfig';

import { RequireAuth } from './RequiredAuth';

const routes = Object.values(routerConfig);

export const AppRouter: FC = () => (
  <Suspense
    fallback={<PageLoader />}
  >
    <Routes>
      {routes.map(({
        path,
        authOnly,
        roles,
        element,
        ...restProps
      }) => (
        authOnly
          ? (
            <Route
              key={path}
              path={path}
              element={<RequireAuth roles={roles}>{element}</RequireAuth>}
              {...restProps}
            />
          )
          : (
            <Route
              key={path}
              path={path}
              element={element}
              {...restProps}
            />
          )
      ))}
    </Routes>
  </Suspense>

);
