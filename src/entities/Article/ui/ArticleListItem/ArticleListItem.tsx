import { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text, TextVariant } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card/Card';
import { PropsWithClassName, ValuesOf } from '@/shared/types';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { useHover } from '@/shared/hooks/useHover';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink, AppLinkProps } from '@/shared/ui/AppLink';
import { AppRoute } from '@/shared/constants/router';

import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticleListItem.module.scss';

type ArticleListItemProps = PropsWithClassName & {
  article: Article;
  view: ValuesOf<typeof ArticleView>;
  linksTarget?: AppLinkProps['target'];
};

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { t } = useTranslation();
  const { className, article, view, linksTarget } = props;
  const [isHover, hoverProps] = useHover();
  const formattedTypes = article.types.join(' ');

  const articlePath = AppRoute.ArticleDetails(article.id);

  if (view === ArticleView.List) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.Text) as
      | ArticleTextBlock
      | undefined;

    return (
      <Card className={classNames(className, styles.list)}>
        <div className={styles.header}>
          <Avatar className={styles.avatar} size={30} src={article.user.avatar} />
          <Text className={styles.username}>{article.user.username}</Text>
          <Text className={styles.date}>{article.createdAt}</Text>
        </div>

        <Text variant={TextVariant.Title} className={styles.title}>
          {article.title}
        </Text>

        <Text className={styles.types}>{formattedTypes}</Text>

        <div className={styles.imageWrapper}>
          <img src={article.img} alt="" className={styles.image} />
        </div>

        {textBlock && <ArticleTextBlockComponent block={textBlock} />}

        <div className={styles.footer}>
          <AppLink to={articlePath} target={linksTarget}>
            <Button theme={ButtonTheme.Outlined} className={styles.button}>
              {t('article.read-more')}
            </Button>
          </AppLink>
          <Text className={styles.views}>{article.views}</Text>
          <Icon icon={EyeIcon} />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={classNames(className, styles.grid, {
        [styles.hover]: isHover,
      })}
      {...hoverProps}
    >
      <div className={styles.imageWrapper}>
        <AppLink to={articlePath} target={linksTarget}>
          <img src={article.img} alt="" className={styles.image} />
          <Text className={styles.date}>{article.createdAt}</Text>
        </AppLink>
      </div>
      <div className={styles.infoWrapper}>
        <Text className={styles.types}>{formattedTypes}</Text>
        <Text className={styles.views}>{article.views}</Text>
        <Icon icon={EyeIcon} />
      </div>
      <AppLink to={articlePath} target={linksTarget}>
        <Text className={styles.title}>{article.title}</Text>
      </AppLink>
    </Card>
  );
};
