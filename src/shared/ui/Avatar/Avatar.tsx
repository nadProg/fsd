import {
  CSSProperties, FC, ImgHTMLAttributes, useMemo,
} from 'react';
import classNames from 'classnames';

import { ExtendableProps, PropsWithClassName } from 'shared/types';
import Placeholder from 'shared/assets/img/user-avatar-placeholder.jpeg';

import styles from './Avatar.module.scss';

type ExtendedProps = ImgHTMLAttributes<HTMLImageElement>;

type OverrideProps = {
  size?: number;
};

type AvatarProps = PropsWithClassName & ExtendableProps<ExtendedProps, OverrideProps>;

const DEFAULT_SIZE = 100;

export const Avatar: FC<AvatarProps> = ({
  className, src, alt, size = DEFAULT_SIZE, ...restProps
}) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src || Placeholder}
      alt={alt}
      className={classNames(className, styles.Avatar)}
      style={style}
      {...restProps}
    />
  );
};
