import {addDecorator} from '@storybook/react';

import {StyledDecorator} from '../../src/shared/config/storybook/StyledDecorator/StyledDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '../../src/shared/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyledDecorator);
addDecorator(ThemeDecorator(Theme.Light));