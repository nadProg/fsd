import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';
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
}) => {
  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
