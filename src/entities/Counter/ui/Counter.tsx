import { FC } from 'react';
import classNames from 'classnames';

import { PropsWithClassName } from 'shared/types';

import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from 'entities/Counter';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

import styles from './Counter.module.scss';

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
      className={classNames(className, styles.Counter)}
    >
      <h1>
        Value:
        {counterValue}
      </h1>

      <button type="button" onClick={increase} data-testid="increment-button">increment</button>
      <button type="button" onClick={decrease} data-testid="decrement-button">decrement</button>
    </div>
  );
};
