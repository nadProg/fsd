import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsCommentsIsLoading } from './getArticleDetailsCommentsIsLoading';

describe('getArticleDetailsCommentsIsLoading', () => {
  test('should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { isLoading: false },
      },
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(false);
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsCommentsIsLoading({} as StateSchema)).toBe(true);
  });
});
