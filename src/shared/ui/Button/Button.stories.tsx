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
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.Clear,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.Outlined,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.Background,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BackgroundInverted,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.Large,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.XLarge,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.Clear,
};
ClearDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.Outlined,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.Dark)];

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.Background,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.Dark)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BackgroundInverted,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeMDark = Template.bind({});
SquareSizeMDark.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
};
SquareSizeMDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeLDark = Template.bind({});
SquareSizeLDark.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.Large,
};
SquareSizeLDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SquareSizeXLDark = Template.bind({});
SquareSizeXLDark.args = {
  children: '>',
  theme: ButtonTheme.BackgroundInverted,
  square: true,
  size: ButtonSize.XLarge,
};
SquareSizeXLDark.decorators = [ThemeDecorator(Theme.Dark)];
