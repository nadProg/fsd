import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ValuesOf } from 'shared/types';
import { useMountEffect } from 'shared/hooks/useMountEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';

import {
  articlesPageReducer, getArticles, articlesPageActions,
} from '../model/slices/articlePageSlice/articlesPageSlice';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { getArticlesPageView } from '../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageIsLoading } from '../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageError } from '../model/selectors/getArticlesPageError/getArticlesPageError';

import styles from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

export const ArticlesPage = () => {
  useDynamicReducers(reducers);
  const dispatch = useAppDispatch();

  useMountEffect(() => {
    dispatch(articlesPageActions.initState());
  });

  useProjectEffect(() => {
    dispatch(fetchArticles({}));
  }, []);

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const { t } = useTranslation();

  const onViewSelect = useCallback((newView: ValuesOf<typeof ArticleView>) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  return (
    <div>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>

      <ArticleViewSelector
        className={styles.viewSelector}
        view={view}
        onSelect={onViewSelect}
      />

      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
      />
    </div>
  );
};
