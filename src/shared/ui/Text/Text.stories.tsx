import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Text as TextComponent, TextTheme, TextVariant } from './Text';

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
