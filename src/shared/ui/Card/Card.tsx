import classNames from 'classnames';
import { MouseEventHandler } from 'react';

import { PropsWithChildren, PropsWithClassName, ValuesOf } from 'shared/types';

import styles from './Card.module.scss';

export const CardTheme = {
  Contained: 'contained',
  Outlined: 'outlined',
};

type CardProps = PropsWithClassName & PropsWithChildren & {
  theme?: ValuesOf<typeof CardTheme>;
  onClick?: MouseEventHandler;
};

export const Card = (props: CardProps) => {
  const {
    className, children, theme = CardTheme.Contained, ...restProps
  } = props;

  return <div className={classNames(className, styles.Card, styles[theme])} {...restProps}>{children}</div>;
};
