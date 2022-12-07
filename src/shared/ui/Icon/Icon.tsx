import type { FC, SVGProps } from 'react';
import classNames from 'classnames';
import { memo } from 'react';
import type { ExtendableProps } from '@/shared/types';

import styles from './Icon.module.scss';

type IconProps = ExtendableProps<SVGProps<SVGSVGElement>, {
  icon: FC<SVGProps<SVGSVGElement>> }
>;

export const Icon = memo((props: IconProps) => {
  const { className, icon: IconComponent, ...restIconProps } = props;

  return <IconComponent className={classNames(className, styles.Icon)} {...restIconProps} />;
});

Icon.displayName = 'Icon';
