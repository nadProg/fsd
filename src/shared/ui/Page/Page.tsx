import classNames from 'classnames';

import { PropsWithChildren, PropsWithClassName } from 'shared/types';

import styles from './Page.module.scss';

type PageProps = PropsWithChildren & PropsWithClassName;

export const Page = ({
  children,
  className,
}: PageProps) => <div className={classNames(className, styles.Page)}>{children}</div>;
