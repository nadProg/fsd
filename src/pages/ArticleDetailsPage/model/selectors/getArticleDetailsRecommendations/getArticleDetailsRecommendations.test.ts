import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsRecommendations } from './getArticleDetailsRecommendations';

describe('getArticleDetailsRecommendations', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          ids: [],
          entities: {},
          isLoading: false,
          error: '',
        },
      },
    };

    expect(getArticleDetailsRecommendations(state as StateSchema)).toEqual({
      ids: [],
      entities: {},
      isLoading: false,
      error: '',
    });
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsRecommendations({} as StateSchema)).toEqual({
      ids: [],
      entities: {},
      isLoading: true,
    });
  });
});
