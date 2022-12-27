/* eslint-disable import/no-extraneous-dependencies */
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StoreProvider } from '@/app/providers/StoreProvider';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { DeepPartial } from '@/shared/types';
import type { ReducersList } from '@/shared/hooks/useDynamicReducers';

type RenderWithRouterOptions = {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
};

export const renderComponent = (
  component: ReactNode,
  { route = '/', initialState, asyncReducers = {} }: RenderWithRouterOptions = {},
) =>
  render(
    <StoreProvider
      initialState={initialState as StateSchema}
      asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
    >
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
