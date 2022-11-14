import { ValuesOf } from 'shared/types';
import { User } from 'entities/User';

export const ArticleBlockType = {
  Code: 'CODE',
  Text: 'TEXT',
  Image: 'IMAGE',
} as const;

export type ArticleCommonBlock<T extends ValuesOf<typeof ArticleBlockType>> = {
  id: string;
  type: T;
};

export type ArticleCodeBlock = ArticleCommonBlock<typeof ArticleBlockType.Code> & {
  code: string;
};

export type ArticleTextBlock = ArticleCommonBlock<typeof ArticleBlockType.Text> & {
  title?: string;
  paragraphs: string[];
};

export type ArticleImageBlock = ArticleCommonBlock<typeof ArticleBlockType.Image> & {
  title: string;
  src: string;
};

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export const ArticleType = {
  It: 'IT',
  Science: 'SCIENCE',
  Economics: 'ECONOMICS',
} as const;

export type ValuesOfArticleType = ValuesOf<typeof ArticleType>;

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  types: ValuesOfArticleType[];
  blocks: ArticleBlock[];
  user: User;
};

export const ArticleView = {
  List: 'list',
  Grid: 'grid',
} as const;

export const ArticleSortField = {
  Views: 'views',
  Title: 'title',
  CreatedAt: 'createdAt',
} as const;
