import type { ValuesOf } from '@/shared/types';
import { ArticleType } from '@/entities/Article';

export const ArticleTypeTab = {
  All: 'ALL',
  ...ArticleType,
} as const;

export type ValuesOfArticleTypeTab = ValuesOf<typeof ArticleTypeTab>;
