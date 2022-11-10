import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text, TextVariant } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card/Card';
import { PropsWithClassName, ValuesOf } from 'shared/types';
import EyeIcon from 'shared/assets/icons/eye.svg';

import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

import styles from './ArticleListItem.module.scss';

type ArticleListItemProps = PropsWithClassName & {
  article: Article;
  view: ValuesOf<typeof ArticleView>;
};

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { t } = useTranslation();
  const { className, article, view } = props;
  const [isHover, hoverProps] = useHover();
  const formattedTypes = article.types.join(' ');
  const navigate = useNavigate();

  const onReadArticle = useCallback(() => {
    navigate(`${RoutePath['article-details']}${article.id}`);
  }, [article.id, navigate]);

  if (view === ArticleView.List) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.Text,
    ) as ArticleTextBlock | undefined;

    return (
      <Card className={classNames(className, styles.list)}>
        <div className={styles.header}>
          <Avatar className={styles.avatar} size={30} src={article.user.avatar} />
          <Text className={styles.username}>
            {article.user.username}
          </Text>
          <Text className={styles.date}>
            {article.createdAt}
          </Text>
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
          <Button
            theme={ButtonTheme.Outlined}
            className={styles.button}
            onClick={onReadArticle}
          >
            { t('article.read-more') }
          </Button>
          <Text className={styles.views}>{article.views}</Text>
          <Icon icon={EyeIcon} />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={classNames(
        className,
        styles.grid,
        { [styles.hover]: isHover },
      )}
      {...hoverProps}
    >
      <div className={styles.imageWrapper}>
        <img src={article.img} alt="" className={styles.image} />
        <Text className={styles.date}>{article.createdAt}</Text>
      </div>
      <div className={styles.infoWrapper}>
        <Text className={styles.types}>{formattedTypes}</Text>
        <Text className={styles.views}>{article.views}</Text>
        <Icon icon={EyeIcon} />
      </div>
      <Text className={styles.title}>
        {article.title}
      </Text>
    </Card>
  );
};
