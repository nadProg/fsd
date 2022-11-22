import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Flex, FlexAlign, FlexDirection, FlexJustify,
} from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children:
      Array(5)
        .fill(null)
        .map((_, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{
              border: '1px solid var(--primary-color)',
              padding: `${5 + 2 * index}px`,
            }}
          >
            Item
            {index + 1}
          </div>
        ))
    ,
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  direction: FlexDirection.Row,
  gap: 4,
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  direction: FlexDirection.Row,
  gap: 8,
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  direction: FlexDirection.Row,
  gap: 16,
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  direction: FlexDirection.Row,
  gap: 32,
};

export const RowJustifyStart = Template.bind({});
RowJustifyStart.args = {
  direction: FlexDirection.Row,
  justify: FlexJustify.Start,
};

export const RowJustifyCenter = Template.bind({});
RowJustifyCenter.args = {
  direction: FlexDirection.Row,
  justify: FlexJustify.Center,
};

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
  direction: FlexDirection.Row,
  justify: FlexJustify.End,
};

export const RowAlignStart = Template.bind({});
RowAlignStart.args = {
  direction: FlexDirection.Row,
  align: FlexAlign.Start,
};

export const RowAlignCenter = Template.bind({});
RowAlignCenter.args = {
  direction: FlexDirection.Row,
  align: FlexAlign.Center,
};

export const RowAlignEnd = Template.bind({});
RowAlignEnd.args = {
  direction: FlexDirection.Row,
  align: FlexAlign.End,
};

export const RowAlignStretch = Template.bind({});
RowAlignStretch.args = {
  direction: FlexDirection.Row,
  align: FlexAlign.Stretch,
};

export const Column = Template.bind({});
Column.args = {
  direction: FlexDirection.Column,
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  direction: FlexDirection.Column,
  gap: 4,
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  direction: FlexDirection.Column,
  gap: 8,
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: FlexDirection.Column,
  gap: 16,
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  direction: FlexDirection.Column,
  gap: 32,
};

export const ColumnJustifyStart = Template.bind({});
ColumnJustifyStart.args = {
  direction: FlexDirection.Column,
  justify: FlexJustify.Start,
};

export const ColumnJustifyCenter = Template.bind({});
ColumnJustifyCenter.args = {
  direction: FlexDirection.Column,
  justify: FlexJustify.Center,
};

export const ColumnJustifyEnd = Template.bind({});
ColumnJustifyEnd.args = {
  direction: FlexDirection.Column,
  justify: FlexJustify.End,
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
  direction: FlexDirection.Column,
  align: FlexAlign.Start,
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
  direction: FlexDirection.Column,
  align: FlexAlign.Center,
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  direction: FlexDirection.Column,
  align: FlexAlign.End,
};

export const ColumnAlignStretch = Template.bind({});
ColumnAlignStretch.args = {
  direction: FlexDirection.Column,
  align: FlexAlign.Stretch,
};
