import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticleDetailsData } from './fetchArticleDetailsData';
import { Article, ArticleType } from '../../types/article';

const mockData: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: '',
  views: 1,
  type: [ArticleType.It],
  blocks: [],
  createdAt: '22.22.2022',
};

describe('fetchArticleDetailsData', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      data: mockData,
    }));

    const result = await thunk.callThunk(mockData.id);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.get).toHaveBeenCalled();

    expect(result.payload).toEqual(mockData);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk(mockData.id);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no data returned', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      data: undefined,
    }));

    const result = await thunk.callThunk(mockData.id);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
