import { RouteProps } from 'react-router-dom';

import { ValuesOf } from 'shared/types';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export const AppRoute = {
  Main: 'main',
  About: 'about',
  Profile: 'profile',
  Articles: 'articles',
  ArticleDetails: 'article-details',
  NotFound: 'not_found',
} as const;

type ValuesOfAppRoute = ValuesOf<typeof AppRoute>;

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const RoutePath: Record<ValuesOfAppRoute, string> = {
  [AppRoute.Main]: '/',
  [AppRoute.About]: '/about',
  [AppRoute.Profile]: '/profile',
  [AppRoute.Articles]: '/articles',
  [AppRoute.ArticleDetails]: '/articles/:id',
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
  [AppRoute.Articles]: {
    path: RoutePath[AppRoute.Articles],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoute.ArticleDetails]: {
    path: RoutePath[AppRoute.ArticleDetails],
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoute.NotFound]: {
    path: RoutePath[AppRoute.NotFound],
    element: <NotFoundPage />,
  },
};
