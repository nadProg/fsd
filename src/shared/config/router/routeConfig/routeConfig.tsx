import { RouteProps } from 'react-router-dom';

import { ValuesOf } from 'shared/types';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export const AppRoute = {
  Main: 'main',
  About: 'about',
} as const;

type ValuesOfAppRoute = ValuesOf<Partial<typeof AppRoute>>;

export const RoutePath: Record<ValuesOfAppRoute, string> = {
  [AppRoute.Main]: '/',
  [AppRoute.About]: '/about',
};

export const routerConfig: Record<ValuesOfAppRoute, RouteProps> = {
  [AppRoute.Main]: {
    path: RoutePath[AppRoute.Main],
    element: <MainPage />,
  },
  [AppRoute.About]: {
    path: RoutePath[AppRoute.About],
    element: <AboutPage />,
  },
};
