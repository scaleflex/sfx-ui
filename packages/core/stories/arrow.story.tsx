import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Arrow, { ArrowProps } from '../src/arrow';
import { Type } from '../src/arrow/types';

export const Arrow = _Arrow;

export default {
  title: 'Data Display/Arrow',
  component: Arrow,
  excludeStories: ['Arrow'],
} as Meta;

const defaultArgs = {
  type: Type.Right,
};

const BasicTemplate: Story<ArrowProps> = (args) => (
  <Arrow {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };