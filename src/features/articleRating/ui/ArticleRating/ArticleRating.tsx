import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import type { Id, PropsWithClassName } from '@/shared/types';
import { Skeleton } from '@/shared/ui/Skeleton';

import { RatingCard } from '@/entities/Rating';
import type { RatingCardData } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';

import styles from './ArticleRating.module.scss';
import { useArticleRatings, useRateArticle } from '../../api/articleRatingApi';

type ArticleRatingProps = PropsWithClassName & {
  articleId: Id;
};

const onRateError = () => alert('Error');

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userId = useSelector(getUserAuthData)?.id;

  const {
    data: articleRatings,
    isLoading,
    isFetching,
  } = useArticleRatings({
    userId: userId as Id,
    articleId,
  });

  const [rateArticleMutation] = useRateArticle();

  const onRate = useCallback(
    async (data: RatingCardData) => {
      if (!userId) {
        throw new Error('User in not authorized');
      }

      await rateArticleMutation({
        ...data,
        userId,
        articleId,
      });
    },
    [rateArticleMutation, articleId, userId],
  );

  if (isLoading) {
    return <Skeleton height="150px" />;
  }

  const existentRating = articleRatings && articleRatings[0];
  const existentRate = existentRating?.rate;

  const title = existentRating ? t('article-rating.your-rate') : t('article-rating.rate-article ');

  return (
    <RatingCard
      className={classNames(className, styles.ArticleRating, {
        [styles.fetching]: isFetching,
      })}
      title={title}
      rate={existentRate}
      onRate={onRate}
      onRateError={onRateError}
    />
  );
});

ArticleRating.displayName = 'ArticleRating';
