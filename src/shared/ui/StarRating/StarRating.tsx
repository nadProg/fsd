import { memo, MouseEvent, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';

import type { Nullable, PropsWithClassName } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Button } from '@/shared/ui/Button';

import styles from './StarRating.module.scss';

type StarRatingProps = PropsWithClassName & {
  onSelect?: (value: Nullable<number>) => void;
  size?: number;
  selectedStar?: Nullable<number>;
  maxRating?: number;
};

const DEFAULT_MAX_RATING = 5;
const INITIAL_RATING = null;
const getStars = (max: number): number[] => new Array(max).fill(null).map((_, index) => index + 1);

const getStarValue = (evt: MouseEvent<HTMLButtonElement>) => {
  const target = evt.currentTarget as HTMLButtonElement;
  const { value } = target.dataset;

  if (!value) {
    return INITIAL_RATING;
  }

  const parsedValue = parseInt(value, 10);

  return Number.isFinite(parsedValue) ? parsedValue : INITIAL_RATING;
};

export const StarRating = memo(
  ({ className, onSelect, size, selectedStar, maxRating = DEFAULT_MAX_RATING }: StarRatingProps) => {
    const stars = useMemo(() => getStars(maxRating), [maxRating]);

    const [hoveredStar, setHoveredStar] = useState<Nullable<number>>(INITIAL_RATING);

    const onStarMouseOver = useCallback(
      (evt: MouseEvent<HTMLButtonElement>) => {
        setHoveredStar(getStarValue(evt));
      },
      [setHoveredStar],
    );

    const onStarMouseOut = useCallback(() => {
      setHoveredStar(INITIAL_RATING);
    }, [setHoveredStar]);

    const onStarClick = useCallback(
      (evt: MouseEvent<HTMLButtonElement>) => {
        onSelect?.(getStarValue(evt));
      },
      [onSelect],
    );

    const getIsIconFilled = (value: number) => {
      if (selectedStar !== undefined && selectedStar !== null) {
        return value <= selectedStar;
      }

      if (hoveredStar === null) {
        return false;
      }

      return value <= hoveredStar;
    };

    const isSelectedStar = selectedStar !== undefined && selectedStar !== null;
    const tabIndex = isSelectedStar ? -1 : undefined;

    return (
      <div className={classNames(className, styles.StarRating)}>
        {stars.map((value) => (
          <Button
            key={value}
            data-value={value}
            onMouseOver={onStarMouseOver}
            onMouseOut={onStarMouseOut}
            onClick={onStarClick}
            className={classNames({
              [styles.disabled]: isSelectedStar,
            })}
            tabIndex={tabIndex}
          >
            <Icon
              icon={StarIcon}
              className={classNames({
                [styles.filled]: getIsIconFilled(value),
              })}
            />
          </Button>
        ))}
      </div>
    );
  },
);

StarRating.displayName = 'StarRating';
