import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';

export { ArticleDetails, articleDetailsReducer, getArticleDetailsData };

export type { ArticleDetailsSchema };
