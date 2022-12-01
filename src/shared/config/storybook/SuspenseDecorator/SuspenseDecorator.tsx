/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import { Suspense } from 'react';

import 'app/styles/index.scss';

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
);
