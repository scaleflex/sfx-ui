import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import VisibilityOffIcon from '@sfx-ui/icons/visibility-off';
import SearchIcon from '@sfx-ui/icons/search';
import _Select, { SelectProps } from '../src/select';
import MenuItem from '../src/menu-item';
import { Size } from '../src/select/types';
import { StoryGroup } from './types';

export const Select = _Select;

export default {
  title: `${StoryGroup.Inputs}/Select`,
  component: Select,
  excludeStories: ['Select'],
} as Meta;

const defaultArgs = {
  size: Size.Md,
  multiple: false,
};

const BasicTemplate: Story<SelectProps> = ({
  ...args
}) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  useEffect(() => {
    setValue(args.multiple ? [] : '');
  }, [args.multiple]);

  return (
    <Select
      {...args}
      value={value}
      onChange={setValue}
    >
      <MenuItem value="item1">Menu item 1</MenuItem>
      <MenuItem value="item2">Menu item 2</MenuItem>
      <MenuItem value="item3">Menu item 3</MenuItem>
    </Select>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// // WithIconStart
// export const WithIconStart = BasicTemplate.bind({});
// WithIconStart.args = {
//   ...defaultArgs,
//   iconStart: (props) => <SearchIcon {...props} />,
// };

// // WithIconEnd
// export const WithIconEnd = BasicTemplate.bind({});
// WithIconEnd.args = {
//   ...defaultArgs,
//   iconEnd: (props) => <VisibilityOffIcon {...props} size={10} />,
// };

// // WithIcons
// export const WithIcons = BasicTemplate.bind({});
// WithIcons.args = {
//   ...defaultArgs,
//   iconStart: (props) => <SearchIcon {...props} />,
//   iconEnd: (props) => <VisibilityOffIcon {...props} size={10} />,
// };