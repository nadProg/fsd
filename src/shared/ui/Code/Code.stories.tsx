import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const code = `import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Code.module.scss';

export const Code = (props) => {
  const { className, children } = props;
  return (
    <div className={classNames(className, styles.Code)}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button theme={ButtonTheme.Outlined} className={styles.copyButton}>Copy</Button>
      <code> 
        <pre>
          {children} 
        </pre>
      </code> 
    </div>);
};`;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args}>{code}</Code>;

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
