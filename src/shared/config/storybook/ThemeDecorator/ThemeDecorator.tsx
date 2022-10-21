/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import { ValuesOf } from 'shared/types';
import { Theme } from 'shared/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ValuesOf<typeof Theme>) => (StoryComponent: Story) => {
  document.body.dataset.theme = theme;
  document.body.style.background = 'none';

  return (
    <div className="app">
      <StoryComponent />
    </div>
  );
};
