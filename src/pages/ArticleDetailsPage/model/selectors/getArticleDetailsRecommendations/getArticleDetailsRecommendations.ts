import { StateSchema } from '@/app/providers/StoreProvider';
import {
  articleDetailsRecommendationInitialState,
} from '../../slices/artcileDetailsRecommendationsSlice/articleDetailsRecommendationInitialState';

export const getArticleDetailsRecommendations = (state: StateSchema) => state.articleDetailsPage?.recommendations
  ?? articleDetailsRecommendationInitialState;
