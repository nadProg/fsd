import { act, screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { AppRoute } from '@/shared/constants/router';
import { AppRouter } from './AppRouter';

describe('app/providers/AppRouter', () => {
  test('should render current route', async () => {
    await act(() =>
      renderComponent(<AppRouter />, {
        route: AppRoute.Main(),
      }),
    );

    const mainPage = await screen.findByTestId('main-page');

    expect(mainPage).toBeInTheDocument();

    renderComponent(<AppRouter />, {
      route: AppRoute.About(),
    });

    const aboutPage = await screen.findByTestId('about-page');

    expect(aboutPage).toBeInTheDocument();
  });

  test('should handle unknown route as not found page', async () => {
    await act(() =>
      renderComponent(<AppRouter />, {
        route: '/unknown_route',
      }),
    );

    const notFoundPage = await screen.findByTestId('not-found-page');

    expect(notFoundPage).toBeInTheDocument();
  });

  test('should redirect guest to main page when trying to get private page', async () => {
    await act(() =>
      renderComponent(<AppRouter />, {
        route: AppRoute.Profile('1'),
      }),
    );

    const profilePage = await screen.queryByTestId('profile-page');
    const mainPage = await screen.findByTestId('main-page');

    expect(profilePage).not.toBeInTheDocument();
    expect(mainPage).toBeInTheDocument();
  });

  test('should render private page when user is authorized', async () => {
    await act(() =>
      renderComponent(<AppRouter />, {
        route: AppRoute.Profile('1'),
        initialState: {
          user: {
            authData: {
              id: '1',
              username: 'username',
              roles: [],
            },
            __initialized__: true,
          },
        },
      }),
    );

    const profilePage = await screen.findByTestId('profile-page');
    const mainPage = await screen.queryByTestId('main-page');

    expect(profilePage).toBeInTheDocument();
    expect(mainPage).not.toBeInTheDocument();
  });

  test('should render forbidden page when trying to watch admin page without corresponding role', async () => {
    await act(() =>
      renderComponent(<AppRouter />, {
        route: AppRoute.AdminPanel(),
        initialState: {
          user: {
            authData: {
              id: '1',
              username: 'username',
              roles: [],
            },
            __initialized__: true,
          },
        },
      }),
    );

    const adminPanelPage = await screen.queryByTestId('admin-panel-page');
    const forbiddenPage = await screen.findByTestId('forbidden-page');

    expect(adminPanelPage).not.toBeInTheDocument();
    expect(forbiddenPage).toBeInTheDocument();
  });

  test('should render admin page when user is admin', async () => {
    await act(() =>
      renderComponent(<AppRouter />, {
        route: AppRoute.AdminPanel(),
        initialState: {
          user: {
            authData: {
              id: '1',
              username: 'username',
              roles: ['ADMIN'],
            },
            __initialized__: true,
          },
        },
      }),
    );

    const adminPanelPage = await screen.findByTestId('admin-panel-page');
    const forbiddenPage = await screen.queryByTestId('forbidden-page');

    expect(adminPanelPage).toBeInTheDocument();
    expect(forbiddenPage).not.toBeInTheDocument();
  });
});
