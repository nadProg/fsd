import { ArticleView } from 'entities/Article';

import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const initialArticlesPageState: ArticlesPageSchema = {
  isLoading: true,
  ids: [],
  entities: {},
  error: undefined,
  view: ArticleView.List,
  page: 1,
  limit: 3,
  hasMore: true,
};
