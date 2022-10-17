/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

type RenderWithRouterOptions = {
  route?: string
  initialState?: DeepPartial<StateSchema>;
};

export const renderComponent = (component: ReactNode, {
  route = '/',
  initialState,
}: RenderWithRouterOptions = {}) => render(
  <StoreProvider initialState={initialState as StateSchema}>
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
    ,
  </StoreProvider>,
);
