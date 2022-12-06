import { DeepPartial } from '@/shared/types';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toBe('error');
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsError({} as StateSchema)).toBeUndefined();
  });
});
