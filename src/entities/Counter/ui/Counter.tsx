import { FC } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import type { PropsWithClassName } from '@/shared/types';

import { counterActions } from '../model/slice/CounterSlice';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

type CounterProps = PropsWithClassName;

export const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increase = () => {
    dispatch(counterActions.increment());
  };

  const decrease = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div
      className={classNames(className, '')}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1 data-testid="counter-value">
        Value:
        {counterValue}
      </h1>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <button type="button" onClick={increase} data-testid="increment-button">increment</button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <button type="button" onClick={decrease} data-testid="decrement-button">decrement</button>
    </div>
  );
};
