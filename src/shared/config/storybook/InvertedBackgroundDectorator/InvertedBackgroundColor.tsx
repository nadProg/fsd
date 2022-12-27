/* eslint-disable import/no-extraneous-dependencies, react/display-name */
import { Story } from '@storybook/react';

export const InvertedBackgroundDecorator =
  (inverted = true) =>
  (StoryComponent: Story) => {
    document.body.dataset.bgInverted = String(inverted);

    return <StoryComponent />;
  };
