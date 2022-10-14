import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/tests/renderComponent/renderComponent';

import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('Render', () => {
    renderComponent(<SideBar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle', () => {
    renderComponent(<SideBar />);

    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
