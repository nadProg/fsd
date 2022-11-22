import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import { Text, TextVariant } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';
import { ArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = PropsWithClassName & {
  block: ArticleTextBlock;
};

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <VStack
      gap={8}
      align="stretch"
      className={className}
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
    </VStack>
  );
};
