import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';

import { getArticleDetails } from './getArticleDetails';

describe('getArticleDetails', () => {
  test.skip('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        // data: {},
      },
    };

    expect(getArticleDetails(state as StateSchema)).toBe({});
  });

  test('should handle empty state', () => {
    expect(getArticleDetails({} as StateSchema)).toBeUndefined();
  });
});
