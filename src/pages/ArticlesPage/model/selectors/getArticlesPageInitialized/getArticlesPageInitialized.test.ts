import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageInitialized } from './getArticlesPageInitialized';

describe('getArticlesPageInitialized', () => {
  test('should return initialized status', () => {
    const trueState: DeepPartial<StateSchema> = {
      articlesPage: {
        __initialized__: true,
      },
    };

    const falseState: DeepPartial<StateSchema> = {
      articlesPage: {
        __initialized__: false,
      },
    };

    expect(getArticlesPageInitialized(trueState as StateSchema)).toBe(true);
    expect(getArticlesPageInitialized(falseState as StateSchema)).toBe(false);
  });

  test('should handle empty state as undefined', () => {
    expect(getArticlesPageInitialized({} as StateSchema)).toBeUndefined();
  });
});
