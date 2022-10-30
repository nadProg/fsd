import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routerConfig } from 'shared/config/router/routeConfig/routeConfig';

import { RequireAuth } from 'app/providers/router/ui/RequiredAuth';

const routes = Object.values(routerConfig);

export const AppRouter: FC = () => (
  <div className="page-wrapper">
    <Suspense
      fallback={<PageLoader />}
    >
      <Routes>
        {routes.map(({
          path,
          authOnly,
          element,
          ...restProps
        }) => (
          authOnly
            ? (
              <Route
                key={path}
                path={path}
                element={<RequireAuth>{element}</RequireAuth>}
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
  </div>
);
