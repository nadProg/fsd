import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { Page } from 'shared/ui/Page';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { ArticleList } from 'entities/Article';

import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer, getArticles } from '../../model/slices/articlePageSlice/articlesPageSlice';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';

import styles from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

export const ArticlesPage = () => {
  useDynamicReducers(reducers, {
    keepMounted: true,
  });

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  useProjectEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch]);

  const onPageScrollEnd = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  const { t } = useTranslation();

  return (
    <Page onScrollEnd={onPageScrollEnd}>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>

      <ArticlesPageFilters className={styles.filters} />

      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
      />
    </Page>
  );
};
