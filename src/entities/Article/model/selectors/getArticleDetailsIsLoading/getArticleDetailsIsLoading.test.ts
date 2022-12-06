import { DeepPartial } from '@/shared/types';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading', () => {
  test('should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsIsLoading({} as StateSchema)).toBe(true);
  });
});
