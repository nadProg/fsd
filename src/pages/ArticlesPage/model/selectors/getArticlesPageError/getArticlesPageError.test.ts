import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageError } from './getArticlesPageError';

describe('getArticlesPageError', () => {
  test('should return error', () => {
    const errorState: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error',
      },
    };

    const noErrorState: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: undefined,
      },
    };

    expect(getArticlesPageError(errorState as StateSchema)).toBe('error');
    expect(getArticlesPageError(noErrorState as StateSchema)).toBeUndefined();
  });

  test('should handle empty state as undefined', () => {
    expect(getArticlesPageError({} as StateSchema)).toBeUndefined();
  });
});
