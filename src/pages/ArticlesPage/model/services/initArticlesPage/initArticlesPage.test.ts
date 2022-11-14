import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { articlesPageActions } from '../../slices/articlePageSlice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { initArticlesPage } from './initArticlesPage';

const mockParams: URLSearchParams = new URLSearchParams();

jest.mock('../fetchArticles/fetchArticles');
jest.mock('../../slices/articlePageSlice/articlesPageSlice');

describe('initArticlesPage', () => {
  test('should init articles page', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage);

    const { dispatch } = thunk;

    const result = await thunk.callThunk(mockParams);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(articlesPageActions.initState).toHaveBeenCalled();
    expect(fetchArticles).toHaveBeenCalledWith({ page: 1 });

    expect(dispatch).toHaveBeenCalledTimes(4);
  });

  test('should not init articles page', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        __initialized__: true,
      },
    });

    const { dispatch } = thunk;

    const result = await thunk.callThunk(mockParams);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(articlesPageActions.initState).not.toHaveBeenCalled();
    expect(fetchArticles).not.toHaveBeenCalled();

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
