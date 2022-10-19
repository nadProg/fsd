import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
  disabled: false,
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.Clear,
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.Outlined,
  disabled: false,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.Background,
  disabled: false,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BackgroundInverted,
  disabled: false,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  disabled: false,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.Large,
  disabled: false,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.XLarge,
  disabled: false,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
  disabled: false,
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.Clear,
  disabled: false,
};
ClearDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.Outlined,
  disabled: false,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.Dark)];

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.Background,
  disabled: false,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.Dark)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BackgroundInverted,
  disabled: false,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeMDark = Template.bind({});
SquareSizeMDark.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  disabled: false,
};
SquareSizeMDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeLDark = Template.bind({});
SquareSizeLDark.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.Large,
  disabled: false,
};
SquareSizeLDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeXLDark = Template.bind({});
SquareSizeXLDark.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.XLarge,
  disabled: false,
};
SquareSizeXLDark.decorators = [ThemeDecorator(Theme.Dark)];
