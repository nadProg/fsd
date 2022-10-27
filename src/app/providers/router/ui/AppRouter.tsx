import { FC, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { getUserAuthData } from 'entities/User';
import { routerConfig } from 'shared/config/router/routeConfig/routeConfig';

export const AppRouter: FC = () => {
  const authData = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routerConfig)
    .filter((route) => !(route.authOnly && !authData)), [authData]);

  return (
    <div className="page-wrapper">
      <Suspense
        fallback={<PageLoader />}
      >
        <Routes>
          {routes.map(({
            path,
            ...restProps
          }) => (
            <Route key={path} path={path} {...restProps} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
