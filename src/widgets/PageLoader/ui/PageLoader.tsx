import { FC } from 'react';
import classNames from 'classnames';
import { PropsWithClassName } from 'shared/types';

import { Page } from 'shared/ui/Page';
import { Loader } from 'shared/ui/Loader';

import styles from './PageLoader.module.scss';

type PageLoaderProps = PropsWithClassName;

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <Page className={classNames(className, styles.PageLoader)}>
    <Loader />
  </Page>
);
