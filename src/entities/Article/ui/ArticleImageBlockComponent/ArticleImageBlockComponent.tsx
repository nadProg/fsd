import classNames from 'classnames';

import { PropsWithClassName } from 'shared/types';
import { Text } from 'shared/ui/Text';

import { ArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = PropsWithClassName & {
  block: ArticleImageBlock;
};

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div
      className={classNames(className, styles.ArticleImageBlockComponent)}
    >
      <figure className={styles.figure}>
        <img className={styles.image} src={block.src} alt={block.title} />
        {block.title && (
          <figcaption>
            <Text>{block.title}</Text>
          </figcaption>
        )}
      </figure>

    </div>
  );
};
