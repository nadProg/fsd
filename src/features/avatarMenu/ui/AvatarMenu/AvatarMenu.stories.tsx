import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarMenu } from './AvatarMenu';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/avatarMenu',
  component: AvatarMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'Username',
      },
    },
  })],
} as ComponentMeta<typeof AvatarMenu>;

const Template: ComponentStory<typeof AvatarMenu> = (args) => <AvatarMenu {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.Orange)];
