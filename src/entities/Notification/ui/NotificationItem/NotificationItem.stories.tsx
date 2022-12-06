import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

export default {
  title: 'entities/NotificationItems',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    notification: {
      id: '1',
      title: 'Title',
      description: 'Description',
    },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.Orange)];
