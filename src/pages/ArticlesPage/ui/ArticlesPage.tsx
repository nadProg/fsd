import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { ArticleList } from 'entities/Article';

import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { getArticlesPageView } from '../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageIsLoading } from '../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageError } from '../model/selectors/getArticlesPageError/getArticlesPageError';
import { articlesPageSliceReducer, getArticles } from '../model/slices/articlePageSlice/articlesPageSlice';

const reducers: ReducersList = {
  articlesPage: articlesPageSliceReducer,
};

export const ArticlesPage = () => {
  useDynamicReducers(reducers);
  const dispatch = useAppDispatch();

  useProjectEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>

      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
      />
    </div>
  );
};
