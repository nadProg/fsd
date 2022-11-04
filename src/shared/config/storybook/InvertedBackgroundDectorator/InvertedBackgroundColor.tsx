/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const InvertedBackgroundDecorator = (inverted = true) => (StoryComponent: Story) => {
  document.body.dataset.bgInverted = String(inverted);

  return (
    <StoryComponent />
  );
};
