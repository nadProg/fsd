import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageType } from './getArticlesPageType';

describe('getArticlesPageType', () => {
  test('should return type', () => {
    const itState: DeepPartial<StateSchema> = {
      articlesPage: {
        type: 'IT',
      },
    };

    const economicsState: DeepPartial<StateSchema> = {
      articlesPage: {
        type: 'ECONOMICS',
      },
    };

    expect(getArticlesPageType(itState as StateSchema)).toBe('IT');
    expect(getArticlesPageType(economicsState as StateSchema)).toBe('ECONOMICS');
  });

  test('should handle empty state as ALL', () => {
    expect(getArticlesPageType({} as StateSchema)).toBe('ALL');
  });
});
