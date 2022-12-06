import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('Render', () => {
    renderComponent(<SideBar />);

    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(sidebar).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();
  });

  test('Toggle', () => {
    renderComponent(<SideBar />);

    const toggleButton = screen.getByTestId('sidebar-toggle');
    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).not.toHaveClass('collapsed');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });
});
