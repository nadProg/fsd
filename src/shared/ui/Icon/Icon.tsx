import { VFC, SVGProps } from 'react';
import { PropsWithClassName } from 'shared/types';
import classNames from 'classnames';

import styles from './Icon.module.scss';

type IconProps = PropsWithClassName & {
  icon: VFC<SVGProps<SVGSVGElement>>
};

export const Icon = (props: IconProps) => {
  const { className, icon: IconComponent } = props;

  return <IconComponent className={classNames(className, styles.Icon)} />;
};
