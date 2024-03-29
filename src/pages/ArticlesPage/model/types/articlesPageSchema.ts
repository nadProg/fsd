import type { EntityState } from '@reduxjs/toolkit';
import type { ValuesOf } from '@/shared/types';
import { SortOrder } from '@/shared/constants/queryParams';

import type { Article } from '@/entities/Article';
import { ArticleType, ArticleView } from '@/entities/Article';

import { ArticleSortField } from '@/features/ArticleSortSelector';

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
  type: ValuesOf<typeof ArticleType> | 'ALL';
};
