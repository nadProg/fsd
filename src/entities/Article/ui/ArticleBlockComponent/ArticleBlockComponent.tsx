import { PropsWithClassName } from '@/shared/types';

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

type ArticleBlockComponentProps = PropsWithClassName & {
  block: ArticleBlock
};

export const ArticleBlockComponent = (props: ArticleBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  const { type } = block;

  switch (type) {
  case ArticleBlockType.Text:
    return (
      <ArticleTextBlockComponent
        className={className}
        block={block}
      />
    );

  case ArticleBlockType.Code:
    return (
      <ArticleCodeBlockComponent
        className={className}
        block={block}
      />
    );

  case ArticleBlockType.Image:
    return (
      <ArticleImageBlockComponent
        className={className}
        block={block}
      />
    );

  default: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const exhaustiveCheck: never = type;
    return null;
  }
  }
};
