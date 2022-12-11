import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import type { Id, PropsWithClassName } from '@/shared/types';
import { Skeleton } from '@/shared/ui/Skeleton';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';

import styles from './ArticleRating.module.scss';
import { useArticleRatings, useRateArticle } from '../../api/articleRatingApi';

type ArticleRatingProps = PropsWithClassName & {
  articleId: Id
};

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const user = useSelector(getUserAuthData);

  const { data: articleRatings, isLoading } = useArticleRatings({ userId: user?.id as Id, articleId });

  const [rateArticleMutation] = useRateArticle();

  if (isLoading) {
    return <Skeleton height="150px" />;
  }

  const existentRating = articleRatings && articleRatings[0];

  const title = existentRating ? t('article-rating.your-rate') : t('article-rating.rate-article ');

  return (
    <RatingCard className={classNames(className, styles.ArticleRating)} title={title} rate={existentRating?.rate} />
  );
});

ArticleRating.displayName = 'ArticleRating';
