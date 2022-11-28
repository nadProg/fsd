import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { VStack } from 'shared/ui/Stack';
import { Text, TextVariant } from 'shared/ui/Text';

import { ArticleList, ArticleView } from 'entities/Article';

import styles from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <VStack gap={8} className={classNames(className, styles.ArticleRecommendationsList)}>
      <Text variant={TextVariant.Title} className={styles.sectionTitle}>
        {t('article-details.recommendations')}
      </Text>
      <ArticleList
        className={styles.recommendations}
        articles={[]}
        isLoading={false}
        view={ArticleView.Grid}
        linksTarget="_blank"
      />
    </VStack>
  );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
