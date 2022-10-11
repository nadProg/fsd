/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/react';

import 'app/styles/index.scss';

export const StyledDecorator = (story: () => Story) => story();
