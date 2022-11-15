import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsComments } from './getArticleDetailsComments';

describe('getArticleDetailsComments', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          ids: [],
          entities: {},
          isLoading: false,
          error: '',
        },
      },
    };

    expect(getArticleDetailsComments(state as StateSchema)).toEqual({
      ids: [],
      entities: {},
      isLoading: false,
      error: '',
    });
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsComments({} as StateSchema)).toBeUndefined();
  });
});
