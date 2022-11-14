import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';
import { ArticleView, ArticleSortField } from './model/types/article';
import { ArticleList } from './ui/ArticleList/ArticleList';
import type { Article } from './model/types/article';
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';

export {
  ArticleDetails,
  articleDetailsReducer,
  getArticleDetailsData,
  ArticleView,
  ArticleSortField,
  ArticleList,
  ArticleViewSelector,
};

export type { ArticleDetailsSchema, Article };
