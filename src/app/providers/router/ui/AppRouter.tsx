import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { routerConfig } from '@/app/config/router/routerConfig';

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
