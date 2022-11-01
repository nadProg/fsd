import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import {
  Text as TextComponent, TextSize, TextTheme, TextVariant,
} from './Text';

export default {
  title: 'shared/Text',
  component: TextComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => <TextComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Text,
};

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Title,
};

export const PrimaryTextLarge = Template.bind({});
PrimaryTextLarge.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Text,
  size: TextSize.Large,
};

export const PrimaryTitleLarge = Template.bind({});
PrimaryTitleLarge.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Title,
  size: TextSize.Large,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  children: 'Text',
  theme: TextTheme.Error,
  variant: TextVariant.Text,
};

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
  children: 'Text',
  theme: TextTheme.Error,
  variant: TextVariant.Title,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Text,
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryTitleDark = Template.bind({});
PrimaryTitleDark.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Text,
};
PrimaryTitleDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryTextDarkLarge = Template.bind({});
PrimaryTextDarkLarge.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Text,
  size: TextSize.Large,
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryTitleDarkLarge = Template.bind({});
PrimaryTitleDarkLarge.args = {
  children: 'Text',
  theme: TextTheme.Primary,
  variant: TextVariant.Text,
  size: TextSize.Large,
};
PrimaryTitleDark.decorators = [ThemeDecorator(Theme.Dark)];

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
  children: 'Text',
  theme: TextTheme.Error,
  variant: TextVariant.Text,
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const ErrorTitleDark = Template.bind({});
ErrorTitleDark.args = {
  children: 'Text',
  theme: TextTheme.Error,
  variant: TextVariant.Title,
};
ErrorTitleDark.decorators = [ThemeDecorator(Theme.Dark)];
