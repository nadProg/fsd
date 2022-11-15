import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsRecommendationsIsLoading } from './getArticleDetailsRecommendationsIsLoading';

describe('getArticleDetailsRecommendationsIsLoading', () => {
  test('should return loading state', () => {
    const falseState: DeepPartial<StateSchema> = {
      articleDetailsRecommendations: {
        isLoading: false,
      },
    };

    const trueState: DeepPartial<StateSchema> = {
      articleDetailsRecommendations: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsRecommendationsIsLoading(trueState as StateSchema)).toBe(true);
    expect(getArticleDetailsRecommendationsIsLoading(falseState as StateSchema)).toBe(false);
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsRecommendationsIsLoading({} as StateSchema)).toBe(true);
  });
});
