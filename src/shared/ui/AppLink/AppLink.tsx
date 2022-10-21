import { FC } from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import { ValuesOf } from 'shared/types';

import styles from './AppLink.module.scss';

export const AppLinkTheme = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;

type AppLinkProps = LinkProps & {
  className?: string;
  theme?: ValuesOf<typeof AppLinkTheme>;
};

export const AppLink: FC<AppLinkProps> = ({
  className,
  theme = AppLinkTheme.Primary,
  children,
  ...restProps
}) => (
  <Link
    className={classNames(className, styles.AppLink, styles[theme])}
    {...restProps}
  >
    {children}
  </Link>
);
