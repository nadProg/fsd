import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageLimit } from './getArticlesPageLimit';

describe('getArticlesPageLimit', () => {
  test('should return limit', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 10,
      },
    };

    expect(getArticlesPageLimit(state as StateSchema)).toBe(10);
  });

  test('should handle empty state as initial value - 3', () => {
    expect(getArticlesPageLimit({} as StateSchema)).toBe(3);
  });
});
