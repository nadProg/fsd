/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

type RenderWithRouterOptions = {
  route?: string
};

export const renderWithRouter = (component: ReactNode, { route = '/' }: RenderWithRouterOptions = {}) => render(
  <MemoryRouter initialEntries={[route]}>
    {component}
  </MemoryRouter>,
);
