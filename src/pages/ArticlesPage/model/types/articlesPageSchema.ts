import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { ValuesOf } from 'shared/types';
import { SortOrder } from 'shared/constants/queryParams';

export type ArticlesPageSchema = EntityState<Article> & {
  isLoading: boolean;
  error?: string;
  page: number;
  limit: number;
  hasMore: boolean;
  __initialized__?: boolean;
  view: ValuesOf<typeof ArticleView>;
  order: ValuesOf<typeof SortOrder>;
  sort: ValuesOf<typeof ArticleSortField>;
  search: string;
};
