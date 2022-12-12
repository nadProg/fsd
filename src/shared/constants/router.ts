import type { ValuesOf } from '@/shared/types';

export const AppRoute = {
  Main: 'main',
  About: 'about',
  Profile: 'profile',
  Articles: 'articles',
  ArticleDetails: 'article_details',
  ArticleCreate: 'article_create',
  ArticleEdit: 'article_edit',
  AdminPanel: 'admin_panel',
  Forbidden: 'forbidden',
  NotFound: 'not_found',
} as const;

export type ValuesOfAppRoute = ValuesOf<typeof AppRoute>;

export const RoutePath: Record<ValuesOfAppRoute, string> = {
  [AppRoute.Main]: '/',
  [AppRoute.About]: '/about',
  [AppRoute.Profile]: '/profile/',
  [AppRoute.Articles]: '/articles',
  [AppRoute.ArticleDetails]: '/articles/',
  [AppRoute.ArticleCreate]: '/articles/new',
  [AppRoute.ArticleEdit]: '/articles/:id/edit',
  [AppRoute.AdminPanel]: '/admin',
  [AppRoute.Forbidden]: '/forbidden',
  [AppRoute.NotFound]: '*',
};
