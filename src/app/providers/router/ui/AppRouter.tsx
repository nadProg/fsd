import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routerConfig } from 'shared/config/router/routeConfig/routeConfig';

export function AppRouter() {
  return (
    <div className="page-wrapper">
      <Suspense
        fallback={<PageLoader />}
      >
        <Routes>
          {Object.values(routerConfig).map(({ path, ...restProps }) => (
            <Route key={path} path={path} {...restProps} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}
