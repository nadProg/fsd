import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Id, PropsWithClassName } from 'shared/types';
import {
  Text, TextTheme, TextVariant, TextSize,
} from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import {
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlockComponent } from '../ArticleBlockComponent/ArticleBlockComponent';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';

import styles from './ArticleDetails.module.scss';

const dynamicReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

type ArticleDetailsProps = PropsWithClassName & {
  id: Id;
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  useDynamicReducers(dynamicReducers);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const articleDetailsData = useSelector(getArticleDetailsData);
  const articleDetailsIsLoading = useSelector(getArticleDetailsIsLoading);
  const articleDetailsError = useSelector(getArticleDetailsError);

  useProjectEffect(() => {
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
      className={classNames(className, styles.ArticleDetails, styles.article)}
    >

      { articleDetailsData?.img && (
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={articleDetailsData?.img} alt="" className={styles.avatar} />
        </div>
      ) }

      <div className={styles.header}>
        <Text
          variant={TextVariant.Title}
          size={TextSize.Large}
        >
          {articleDetailsData?.title}
        </Text>
        <Text size={TextSize.Large}>{articleDetailsData?.subtitle}</Text>
      </div>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <Icon icon={EyeIcon} className={styles.metaIcon} />
          <Text>{articleDetailsData?.views}</Text>
        </div>

        <div className={styles.metaItem}>
          <Icon icon={CalendarIcon} className={styles.metaIcon} />
          <Text>{articleDetailsData?.createdAt}</Text>
        </div>
      </div>

      <div className={styles.content}>
        {articleDetailsData?.blocks.map((block) => <ArticleBlockComponent key={block.id} block={block} />)}
      </div>
    </div>
  );
};
