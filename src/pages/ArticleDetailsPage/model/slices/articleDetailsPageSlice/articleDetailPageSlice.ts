import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../../types/articleDetailsPageSchema';
import {
  articleDetailsCommentsReducer,
} from '../artilceDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
  articleDetailsRecommendationsReducer,
} from '../artcileDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';

export const articleDetailPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
});
