import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from '@/shared/types';
import { Text, TextVariant } from '@/shared/ui/Text';

import { Page } from '@/widgets/Page';

import styles from './AdminPanelPage.module.scss';

type AdminPanelPageProps = PropsWithClassName;

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(className, styles.AdminPanelPage)} data-testid="admin-panel-page">
      <Text variant={TextVariant.Title}>{t('admin.title')}</Text>
    </Page>
  );
});

AdminPanelPage.displayName = 'AdminPanelPage';
