import classNames from 'classnames';

import { PropsWithChildren, PropsWithClassName } from 'shared/types';

import styles from './Card.module.scss';

type CardProps = PropsWithClassName & PropsWithChildren;

export const Card = (props: CardProps) => {
  const { className, children } = props;

  return <div className={classNames(className, styles.Card)}>{children}</div>;
};
