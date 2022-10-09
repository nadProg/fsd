import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Render', () => {
    render(<Button theme={ButtonTheme.Clear}>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
