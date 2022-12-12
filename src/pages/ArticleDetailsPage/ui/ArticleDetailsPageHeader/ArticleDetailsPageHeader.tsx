import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AppLink } from '@/shared/ui/AppLink';
import type { PropsWithClassName } from '@/shared/types';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/constants/router';

import { getArticleDetailsData } from '@/entities/Article';

import {
  getIsArticleAuthorView,
} from '../../model/selectors/getIsArticleAuthorView/getIsArticleAuthorView';

import styles from './ArticleDetailsPageHeader.module.scss';

type ArticleDetailsPageHeaderProps = PropsWithClassName;

const BACK_PATH = RoutePath.articles;

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps): JSX.Element => {
  const { t } = useTranslation();
  const isAuthorView = useSelector(getIsArticleAuthorView);
  const article = useSelector(getArticleDetailsData);

  const editPath = `${RoutePath.articles}/${article?.id}/edit`;

  return (
    <div className={classNames(className, styles.ArticleDetailsPageHeader)}>
      <AppLink to={BACK_PATH}>
        <Button
          theme={ButtonTheme.Outlined}
          className={styles.backButton}
        >
          {t('article-details.back')}
        </Button>
      </AppLink>

      {isAuthorView
      && (
        <AppLink to={editPath}>
          <Button
            theme={ButtonTheme.Outlined}
            className={styles.backButton}
          >
            {t('article-details.edit')}
          </Button>
        </AppLink>
      )}
    </div>
  );
};
