import type { RouteProps } from 'react-router-dom';

import { AppRoute } from '@/shared/constants/router';

import type { ValuesOfUserRole } from '@/entities/User';
import { UserRole } from '@/entities/User';

import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: ValuesOfUserRole[];
};
export const routerConfig: Record<keyof typeof AppRoute, AppRouteProps> = {
  Main: {
    path: AppRoute.Main(),
    element: <MainPage />,
  },
  About: {
    path: AppRoute.About(),
    element: <AboutPage />,
  },
  Profile: {
    path: AppRoute.Profile(),
    element: <ProfilePage />,
    authOnly: true,
  },
  Articles: {
    path: AppRoute.Articles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  ArticleDetails: {
    path: AppRoute.ArticleDetails(),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  ArticleCreate: {
    path: AppRoute.ArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  ArticleEdit: {
    path: AppRoute.ArticleEdit(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  AdminPanel: {
    path: AppRoute.AdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.Manager, UserRole.Admin],
  },
  Forbidden: {
    path: AppRoute.Forbidden(),
    element: <ForbiddenPage />,
    authOnly: true,
  },
  NotFound: {
    path: AppRoute.NotFound(),
    element: <NotFoundPage />,
  },
};
