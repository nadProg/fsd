import classNames from 'classnames';

import type { PropsWithClassName } from '@/shared/types';

import { useCounterActions } from '../model/slice/CounterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

type CounterProps = PropsWithClassName;

export const Counter = ({ className }: CounterProps): JSX.Element => {
  const counterValue = useCounterValue();
  const counterActions = useCounterActions();

  const increase = () => {
    counterActions.increment();
  };

  const decrease = () => {
    counterActions.decrement();
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
