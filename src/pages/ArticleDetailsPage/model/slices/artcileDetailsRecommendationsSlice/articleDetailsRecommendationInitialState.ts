import { ArticleDetailsRecommendationsSchema } from '../../types/articleDetailsRecommendationsSchema';

export const articleDetailsRecommendationInitialState: ArticleDetailsRecommendationsSchema = {
  isLoading: true,
  ids: [],
  entities: {},
  error: undefined,
};
