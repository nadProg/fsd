import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PropsWithClassName, ValuesOf } from 'shared/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/constants/queryParams';
import { useDebouncedCallback } from 'shared/hooks/useDebouncedCallback/useDebouncedCallback';

import {
  ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article';

import { Tab, Tabs } from 'shared/ui/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import { articlesPageActions } from '../../model/slices/articlePageSlice/articlesPageSlice';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';

import styles from './ArticlesPageFilters.module.scss';

type ArticlesPageFiltersProps = PropsWithClassName;

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const dispatch = useAppDispatch();

  const refetchData = useDebouncedCallback(() => {
    // todo: resetPage to 1 ?
    dispatch(fetchArticles({ replace: true }));
  }, 500, [dispatch]);

  const onViewSelect = useCallback((newView: ValuesOf<typeof ArticleView>) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onOrderSelect = useCallback((newOrder: ValuesOf<typeof SortOrder>) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    refetchData();
  }, [dispatch, refetchData]);

  const onSortSelect = useCallback((newSort: ValuesOf<typeof ArticleSortField>) => {
    dispatch(articlesPageActions.setSort(newSort));
    refetchData();
  }, [dispatch, refetchData]);

  const onSearchChange = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
    refetchData();
  }, [dispatch, refetchData]);

  const onTabClick = useCallback((newTab: ValuesOf<typeof ArticleType> | 'ALL') => {
    dispatch(articlesPageActions.setType(newTab));
    refetchData();
  }, [dispatch, refetchData]);

  // todo: add translations
  const tabs = useMemo<Tab<ValuesOf<typeof ArticleType> | 'ALL', string>[]>(() => (
    [
      {
        value: 'ALL',
        label: 'All',
      },
      {
        value: ArticleType.It,
        label: 'IT',
      },
      {
        value: ArticleType.Economics,
        label: 'Economics',
      },
      {
        value: ArticleType.Science,
        label: 'Science',
      },
    ]
  ), [t]);

  return (
    <div className={classNames(className, styles.ArticlesPageFilters)}>
      <div className={styles.filters}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onSortSelect={onSortSelect}
          onOrderSelect={onOrderSelect}
        />
        <ArticleViewSelector
          className={styles.viewSelector}
          view={view}
          onSelect={onViewSelect}
        />
      </div>
      <Card>
        <Input placeholder="Поиск" value={search} onChange={onSearchChange} />
      </Card>

      <Tabs tabs={tabs} value={type} onTabClick={onTabClick} />
    </div>
  );
};
