import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import {
  InvertedBackgroundDecorator,
} from '@/shared/config/storybook/InvertedBackgroundDectorator/InvertedBackgroundColor';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Notification } from '@/entities/Notification';

const mockResponse: Notification[] = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: '2',
    title: 'Title 2 ',
    description: 'Description 2',
  },
];

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
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/notifications`,
        method: 'GET',
        status: 200,
        response: mockResponse,
      },
    ],
  },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.Orange)];
