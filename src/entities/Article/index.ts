import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';
import { ArticleView } from './model/types/article';
import { ArticleList } from './ui/ArticleList/ArticleList';

export {
  ArticleDetails, articleDetailsReducer, getArticleDetailsData, ArticleView, ArticleList,
};

export type { ArticleDetailsSchema };
