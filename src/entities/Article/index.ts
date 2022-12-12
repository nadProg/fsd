import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';
import {
  ArticleView, ArticleSortField, ArticleTypeTab, ArticleType,
} from './model/types/article';
import { ArticleList } from './ui/ArticleList/ArticleList';
import type { Article } from './model/types/article';
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
import { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export {
  ArticleDetails,
  articleDetailsReducer,
  getArticleDetailsData,
  ArticleView,
  ArticleSortField,
  ArticleList,
  ArticleViewSelector,
  ArticleSortSelector,
  ArticleTypeTab,
  ArticleType,
  ArticleTypeTabs,
};

export type { ArticleDetailsSchema, Article };
