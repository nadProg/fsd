import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { VStack } from '@/shared/ui/Stack';
import { Text, TextVariant } from '@/shared/ui/Text';

import { ArticleList, ArticleView } from '@/entities/Article';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import styles from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const response = useArticleRecommendationsList(3);

  const { data, isLoading } = response;

  return (
    <VStack gap={8} className={classNames(className, styles.ArticleRecommendationsList)}>
      <Text variant={TextVariant.Title} className={styles.sectionTitle}>
        {t('article-details.recommendations')}
      </Text>
      <ArticleList
        className={styles.recommendations}
        articles={data}
        isLoading={isLoading}
        view={ArticleView.Grid}
        linksTarget="_blank"
      />
    </VStack>
  );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
