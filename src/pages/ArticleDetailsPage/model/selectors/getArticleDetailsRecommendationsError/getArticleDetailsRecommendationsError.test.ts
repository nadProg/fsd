import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsRecommendationsError } from './getArticleDetailsRecommendationsError';

describe('getArticleDetailsRecommendationsError', () => {
  test('should return error state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          error: 'error',
        },
      },
    };

    expect(getArticleDetailsRecommendationsError(state as StateSchema)).toBe('error');
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsRecommendationsError({} as StateSchema)).toBeUndefined();
  });
});
