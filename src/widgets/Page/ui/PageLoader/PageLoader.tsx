import classNames from 'classnames';

import type { PropsWithClassName } from '@/shared/types';
import { Loader } from '@/shared/ui/Loader';

import { Page } from '../Page/Page';

import styles from './PageLoader.module.scss';

export const PageLoader = ({ className }: PropsWithClassName) => (
  <Page className={classNames(className, styles.PageLoader)}>
    <Loader />
  </Page>
);
