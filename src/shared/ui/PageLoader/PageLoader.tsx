import classNames from 'classnames';

import type { PropsWithClassName } from '@/shared/types';
import { Loader } from '@/shared/ui/Loader';

import styles from './PageLoader.module.scss';

export const PageLoader = ({ className }: PropsWithClassName) => (
  <div className={classNames(className, styles.PageLoader)}>
    <Loader />
  </div>
);
