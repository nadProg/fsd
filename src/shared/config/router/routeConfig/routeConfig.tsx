import { RouteProps } from 'react-router-dom';

import { ValuesOf } from 'shared/types';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const AppRoute = {
  Main: 'main',
  About: 'about',
  Profile: 'profile',
  NotFound: 'not_found',
} as const;

type ValuesOfAppRoute = ValuesOf<typeof AppRoute>;

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const RoutePath: Record<ValuesOfAppRoute, string> = {
  [AppRoute.Main]: '/',
  [AppRoute.About]: '/about',
  [AppRoute.Profile]: '/profile',
  [AppRoute.NotFound]: '*',
};

export const routerConfig: Record<ValuesOfAppRoute, AppRouteProps> = {
  [AppRoute.Main]: {
    path: RoutePath[AppRoute.Main],
    element: <MainPage />,
  },
  [AppRoute.About]: {
    path: RoutePath[AppRoute.About],
    element: <AboutPage />,
  },
  [AppRoute.Profile]: {
    path: RoutePath[AppRoute.Profile],
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoute.NotFound]: {
    path: RoutePath[AppRoute.NotFound],
    element: <NotFoundPage />,
  },
};
