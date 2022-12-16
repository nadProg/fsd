import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useProjectEffect } from '@/shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from '@/shared/hooks/useDynamicReducers';

import { Page } from '@/widgets/Page';

import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice/articlesPageSlice';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';

import styles from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

export const ArticlesPage = () => {
  useDynamicReducers(reducers, {
    keepMounted: true,
  });

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  useProjectEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch]);

  const onPageScrollEnd = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onPageScrollEnd}>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>
      <ArticlesPageFilters className={styles.filters} />
      <ArticlesInfiniteList />
    </Page>
  );
};
