import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Id, PropsWithClassName } from 'shared/types';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { Text, TextTheme } from 'shared/ui/Text';

import { PageLoader } from 'widgets/PageLoader';
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
      <PageLoader />
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
