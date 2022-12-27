import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

import { InvertedBackgroundDecorator } from '@/shared/config/storybook/InvertedBackgroundDectorator/InvertedBackgroundColor';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Link',
    to: '',
  },
  decorators: [InvertedBackgroundDecorator()],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  theme: AppLinkTheme.Primary,
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  theme: AppLinkTheme.Secondary,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.Primary,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  theme: AppLinkTheme.Secondary,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const DefaultOrange = Template.bind({});
DefaultOrange.args = {};
DefaultOrange.decorators = [ThemeDecorator(Theme.Orange)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
  theme: AppLinkTheme.Primary,
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.Orange)];

export const SecondaryOrange = Template.bind({});
SecondaryOrange.args = {
  theme: AppLinkTheme.Secondary,
};
SecondaryOrange.decorators = [ThemeDecorator(Theme.Orange)];
