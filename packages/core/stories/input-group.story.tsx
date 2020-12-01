import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import QuestionMarkOutline from '@sfx-ui/icons/question-mark-outline';
import _InputGroup, { InputGroupProps } from '../src/input-group';
import { Type } from '../src/input-group/types';

export const InputGroup = _InputGroup;

export default {
  title: 'Inputs/InputGroup',
  component: InputGroup,
  excludeStories: ['InputGroup'],
} as Meta;

const defaultArgs = {
  type: Type.Input,
  label: 'Label',
  hint: 'Some hint goes here',
};

const BasicTemplate: Story<InputGroupProps> = ({
  ...args
}) => {
  const [valueState, setValueState] = useState('value');

  return (
    <InputGroup
      {...args}
      value={valueState}
      onChange={({ target }) => setValueState(target.value)}
    />
  );
};

// Input
export const Input = BasicTemplate.bind({});
Input.args = { ...defaultArgs };

// Input with icon
export const InputWithIcon = BasicTemplate.bind({});
InputWithIcon.args = {
  ...defaultArgs,
  LabelProps: {
    icon: (props) => <QuestionMarkOutline {...props} />,
  },
};

// Textarea
export const Textarea = BasicTemplate.bind({});
Textarea.args = {
  ...defaultArgs,
  type: Type.Textarea,
};