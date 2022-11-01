import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import { Text, TextVariant } from 'shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = PropsWithClassName & {
  block: ArticleTextBlock;
};

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleTextBlockComponent)}
    >
      {block.title && (
        <Text
          variant={TextVariant.Title}
          className={styles.title}
        >
          {block.title}
        </Text>
      )}

      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          className={styles.paragraph}
        >
          {paragraph}
        </Text>
      ))}
    </div>
  );
};
