import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import {
  InvertedBackgroundDecorator,
} from '@/shared/config/storybook/InvertedBackgroundDectorator/InvertedBackgroundColor';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [InvertedBackgroundDecorator(), StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'Username',
      },
    },
  })],
} as ComponentMeta<typeof NotificationButton>;

// todo: mock api request

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.Orange)];
