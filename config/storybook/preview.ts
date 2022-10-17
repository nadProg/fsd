/* eslint-disable import/no-extraneous-dependencies */
import { addDecorator } from '@storybook/react';
import i18n from './i18next';

import { StyledDecorator } from '../../src/shared/config/storybook/StyledDecorator/StyledDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/shared/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'ru',
  locales: {
    ru: 'Русский',
    en: 'English',
  },
};

addDecorator(StyledDecorator);
addDecorator(ThemeDecorator(Theme.Light));
addDecorator(RouterDecorator);
