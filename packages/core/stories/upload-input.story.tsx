import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _UploadInput, { UploadInputProps } from '../src/upload-input';
import { Size } from '../src/input/types';

export const UploadInput = _UploadInput;

export default {
  title: 'Inputs/UploadInput',
  component: UploadInput,
  excludeStories: ['UploadInput'],
} as Meta;

const defaultArgs = {
  size: Size.Md,
};

const BasicTemplate: Story<UploadInputProps> = ({
  ...args
}) => (
  <UploadInput
    {...args}
  />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// Multiple
export const Multiple = BasicTemplate.bind({});
Multiple.args = {
  ...defaultArgs,
  multiple: true,
};