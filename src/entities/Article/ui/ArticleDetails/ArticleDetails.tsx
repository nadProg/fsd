import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Id, PropsWithClassName } from 'shared/types';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { Text, TextTheme } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';

import {
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';

import styles from './ArticleDetails.module.scss';

type ArticleDetailsProps = PropsWithClassName & {
  id: Id;
};

const dynamicReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useDynamicReducers(dynamicReducers);

  const articleDetailsData = useSelector(getArticleDetailsData);
  const articleDetailsIsLoading = useSelector(getArticleDetailsIsLoading);
  const articleDetailsError = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleDetailsData(id));
  }, [dispatch, id]);

  if (articleDetailsIsLoading) {
    return (
      <div
        className={classNames(className, styles.ArticleDetails, styles.loading)}
      >
        <Skeleton className={styles.loadingImage} width={200} height={200} borderRadius="50%" />
        <Skeleton width={300} height={24} />
        <Skeleton width={600} height={24} />
        <Skeleton height={200} />
        <Skeleton height={200} />
      </div>
    );
  }

  if (articleDetailsError) {
    return (
      <div
        className={classNames(className, styles.ArticleDetails)}
      >
        <Text theme={TextTheme.Error}>{t('Error')}</Text>
      </div>
    );
  }

  return (
    <div
      className={classNames(className, styles.ArticleDetails)}
    >
      <div style={{ maxWidth: '500px' }}>
        <pre>
          {JSON.stringify(articleDetailsData, null, 2)}
        </pre>
      </div>
    </div>
  );
};
