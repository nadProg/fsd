import { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';

import { PropsWithClassName } from '@/shared/types';

import styles from './Skeleton.module.scss';

type SkeletonProps = PropsWithClassName & {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
};

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    borderRadius,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    height,
    width,
    borderRadius,
  }), [height, width, borderRadius]);

  return <div className={classNames(className, styles.Skeleton)} style={style} />;
};
