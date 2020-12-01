import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _FieldInfo, { FieldInfoProps } from '../src/field-info';

export const FieldInfo = _FieldInfo;

export default {
  title: 'Inputs/FieldInfo',
  component: FieldInfo,
  excludeStories: ['FieldInfo'],
} as Meta;

const defaultArgs = {
  children: 'Some hint goes here'
};

const BasicTemplate: Story<FieldInfoProps> = ({
  ...args
}) => (
  <FieldInfo {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
