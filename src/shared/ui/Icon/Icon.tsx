import type { FC, SVGProps } from 'react';
import classNames from 'classnames';
import type { PropsWithClassName } from '@/shared/types';

import styles from './Icon.module.scss';

type IconProps = PropsWithClassName & {
  icon: FC<SVGProps<SVGSVGElement>>
};

export const Icon = (props: IconProps) => {
  const { className, icon: IconComponent } = props;

  return <IconComponent className={classNames(className, styles.Icon)} />;
};
