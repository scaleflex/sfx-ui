import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Arrow, { ArrowProps } from '../../src/core/arrow';
import { Type } from '../../src/core/arrow/types';
import { StoryGroup } from './types';

export const Arrow = _Arrow;

export default {
  title: `${StoryGroup.DataDisplay}/Arrow`,
  component: Arrow,
  excludeStories: ['Arrow'],
} as Meta;

const defaultArgs = {
  type: Type.Right,
};

const BasicTemplate: Story<ArrowProps> = (args) => <Arrow {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
