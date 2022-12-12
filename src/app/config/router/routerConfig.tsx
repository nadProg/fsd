import type { RouteProps } from 'react-router-dom';

import { AppRoute, RoutePath, ValuesOfAppRoute } from '@/shared/constants/router';

import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole, ValuesOfUserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: ValuesOfUserRole[]
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
    path: `${RoutePath[AppRoute.Profile]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoute.Articles]: {
    path: RoutePath[AppRoute.Articles],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoute.ArticleDetails]: {
    path: `${RoutePath[AppRoute.ArticleDetails]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoute.ArticleCreate]: {
    path: RoutePath[AppRoute.ArticleCreate],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoute.ArticleEdit]: {
    path: RoutePath[AppRoute.ArticleEdit],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoute.AdminPanel]: {
    path: RoutePath[AppRoute.AdminPanel],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.Manager, UserRole.Admin],
  },
  [AppRoute.Forbidden]: {
    path: RoutePath[AppRoute.Forbidden],
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoute.NotFound]: {
    path: RoutePath[AppRoute.NotFound],
    element: <NotFoundPage />,
  },
};
