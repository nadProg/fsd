import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlesPagePage } from './getArticlesPagePage';

describe('getArticlesPagePage', () => {
  test('should return page', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 10,
      },
    };

    expect(getArticlesPagePage(state as StateSchema)).toBe(10);
  });

  test('should handle empty state as initial value - 1', () => {
    expect(getArticlesPagePage({} as StateSchema)).toBe(1);
  });
});
