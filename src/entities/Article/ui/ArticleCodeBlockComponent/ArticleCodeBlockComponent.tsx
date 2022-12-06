import classNames from 'classnames';

import { PropsWithClassName } from '@/shared/types';
import { Code } from '@/shared/ui/Code';

import { ArticleCodeBlock } from '../../model/types/article';

import styles from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = PropsWithClassName & {
  block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div
      className={classNames(className, styles.ArticleCodeBlockComponent)}
    >
      <Code>
        {block.code}
      </Code>
    </div>
  );
};
