import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/tests/renderComponent/renderComponent';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  test('render current value', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('should increase counter value', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    userEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('should decrease counter value', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    userEvent.click(screen.getByTestId('decrement-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
