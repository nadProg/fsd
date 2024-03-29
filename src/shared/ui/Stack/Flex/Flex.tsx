import classNames from 'classnames';

import type { PropsWithChildren, PropsWithClassName, ValuesOf, ValuesOfArray } from '@/shared/types';

import styles from './Flex.module.scss';

export const FlexJustify = {
  Start: 'start',
  Center: 'center',
  End: 'end',
  Between: 'between',
} as const;

export const FlexAlign = {
  Start: 'start',
  Center: 'center',
  End: 'end',
  Stretch: 'stretch',
} as const;

export const FlexDirection = {
  Row: 'row',
  Column: 'column',
} as const;

export const FlexGaps = [4, 8, 12, 16, 32] as const;

type ValuesOfFlexJustify = ValuesOf<typeof FlexJustify>;
type ValuesOfFlexAlign = ValuesOf<typeof FlexAlign>;
type ValuesOfFlexDirection = ValuesOf<typeof FlexDirection>;
type ValuesOfFlexGap = ValuesOfArray<typeof FlexGaps>;

const mapJustifyToClassName: Record<ValuesOfFlexJustify, string> = {
  [FlexJustify.Start]: styles.justifyStart,
  [FlexJustify.End]: styles.justifyEnd,
  [FlexJustify.Center]: styles.justifyCenter,
  [FlexJustify.Between]: styles.justifyBetween,
};

const mapAlignToClassName: Record<ValuesOfFlexAlign, string> = {
  [FlexAlign.Start]: styles.alignStart,
  [FlexAlign.End]: styles.alignEnd,
  [FlexAlign.Center]: styles.alignCenter,
  [FlexAlign.Stretch]: styles.alignStretch,
};

const mapDirectionToClassName: Record<ValuesOfFlexDirection, string> = {
  [FlexDirection.Row]: styles.directionRow,
  [FlexDirection.Column]: styles.directionColumn,
};

const mapGapToClassName = FlexGaps.reduce(
  (map, gap) => ({
    ...map,
    [gap]: styles[`gap${gap}`],
  }),
  {} as Record<ValuesOfFlexGap, string>,
);

export type FlexProps = PropsWithClassName &
  PropsWithChildren & {
    justify?: ValuesOfFlexJustify;
    align?: ValuesOfFlexAlign;
    direction?: ValuesOfFlexDirection;
    gap?: ValuesOfFlexGap;
    max?: boolean;
  };

export const Flex = ({
  className,
  children,
  justify = FlexJustify.Start,
  align = FlexAlign.Center,
  direction = FlexDirection.Row,
  gap = FlexGaps[0],
  max = false,
}: FlexProps) => {
  const justifyClassName = mapJustifyToClassName[justify];
  const alignClassName = mapAlignToClassName[align];
  const directionClassName = mapDirectionToClassName[direction];
  const gapClassName = mapGapToClassName[gap];
  const maxClassName = {
    [styles.max]: max,
  };

  const flexClassName = classNames(
    className,
    styles.Flex,
    justifyClassName,
    alignClassName,
    directionClassName,
    gapClassName,
    maxClassName,
  );

  return <div className={flexClassName}>{children}</div>;
};
