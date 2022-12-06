import { StateSchema } from '@/app/providers/StoreProvider';
import { initialArticlesPageState } from '../../slices/articlePageSlice/initialArticlePageState';

export const getArticlesPage = (state: StateSchema) => state.articlesPage ?? initialArticlesPageState;
