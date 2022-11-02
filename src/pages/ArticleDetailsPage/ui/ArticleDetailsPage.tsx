import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Id } from 'shared/types';
import { Text, TextVariant } from 'shared/ui/Text';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';

import styles from './ArticleDetailsPage.module.scss';

export const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: Id }>();

  if (!id) {
    return (
      <div>
        {t('article-details.error.not-found')}
      </div>
    );
  }

  return (
    <div>
      <ArticleDetails id={id} />

      <Text variant={TextVariant.Title} className={styles.commentsTitle}>
        {t('article-details.comments')}
      </Text>

      <CommentList
        isLoading
        comments={[]}
      />
    </div>
  );
};
