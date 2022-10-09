import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations';

import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('Render', () => {
    renderWithTranslations(<SideBar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle', () => {
    renderWithTranslations(<SideBar />);

    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
