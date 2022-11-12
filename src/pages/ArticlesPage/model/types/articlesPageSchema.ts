import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ValuesOf } from 'shared/types';

export type ArticlesPageSchema = EntityState<Article> & {
  isLoading: boolean;
  error?: string;
  view: ValuesOf<typeof ArticleView>;
  page: number;
  limit?: number;
  hasMore?: boolean;
};
