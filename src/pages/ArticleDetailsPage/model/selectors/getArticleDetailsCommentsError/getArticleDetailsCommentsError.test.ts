import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsCommentsError } from './getArticleDetailsCommentsError';

describe('getArticleDetailsCommentsError', () => {
  test('should return error state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: 'error',
        },
      },
    };

    expect(getArticleDetailsCommentsError(state as StateSchema)).toBe('error');
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsCommentsError({} as StateSchema)).toBeUndefined();
  });
});
