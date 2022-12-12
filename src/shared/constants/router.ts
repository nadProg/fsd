const Path = {
  About: 'about',
  Profile: 'profile',
  Articles: 'articles',
  New: 'new',
  Edit: 'edit',
  Admin: 'admin',
  Forbidden: 'forbidden',
} as const;

const getRoutePath = (...paths: string[]) => `/${paths.join('/')}`;

const ID_PLACEHOLDER = ':id';

export const AppRoute = {
  Main: () => getRoutePath(),
  About: () => getRoutePath(Path.About),
  Profile: (id = ID_PLACEHOLDER) => getRoutePath(Path.Profile, id),
  Articles: () => getRoutePath(Path.Articles),
  ArticleDetails: (id = ID_PLACEHOLDER) => getRoutePath(Path.Articles, id),
  ArticleCreate: () => getRoutePath(Path.Articles, Path.New),
  ArticleEdit: (id = ID_PLACEHOLDER) => getRoutePath(Path.Articles, id, Path.Edit),
  AdminPanel: () => getRoutePath(Path.Admin),
  Forbidden: () => getRoutePath(Path.Forbidden),
  NotFound: () => '*',
} as const;
