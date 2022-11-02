import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
  <Code {...args}>
    {'\n'
      + 'import classNames from \'classnames\';\n'
      + '\n'
      + 'import { Button, ButtonTheme } from \'shared/ui/Button\';\n'
      + 'import styles from \'./Code.module.scss\';\n'
      + '\n'
      + 'export const Code = (props) => {\n'
      + '  const { className, children } = props;\n'
      + '\n'
      + '  return (\n'
      + '    <div className={classNames(className, styles.Code)}>\n'
      + '\n'
      + '      {/* eslint-disable-next-line i18next/no-literal-string */}\n'
      + '      <Button theme={ButtonTheme.Outlined} className={styles.copyButton}>Copy</Button>\n'
      + '\n'
      + '      <code>\n'
      + '        <pre>\n'
      + '          {children}\n'
      + '        </pre>\n'
      + '      </code>\n'
      + '    </div>\n'
      + '  );\n'
      + '};'}
  </Code>
);

export const Default = Template.bind({});
Default.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange)];
