import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import Image from './mock-avatar.png';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: Image,
};

export const Size100 = Template.bind({});
Size100.args = {
  src: Image,
  size: 100,
};

export const Size200 = Template.bind({});
Size200.args = {
  src: Image,
  size: 200,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  src: Image,
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Size100Dark = Template.bind({});
Size100Dark.args = {
  src: Image,
  size: 100,
};
Size100Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Size200Dark = Template.bind({});
Size200Dark.args = {
  src: Image,
  size: 200,
};
Size200Dark.decorators = [ThemeDecorator(Theme.Dark)];
