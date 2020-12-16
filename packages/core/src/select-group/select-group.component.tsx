import React from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import Label from '../label';
import type { LabelProps } from '../label';
import { propTypes as labelPropTypes } from '../label/label.component';
import Select from '../select';
import type { SelectProps } from '../select';
import { propTypes as selectPropTypes } from '../select/select.component';
import FieldInfo from '../field-info';
import type { SelectGroupProps } from './select-group.props';
import Styled from './select-group.styles';

const SelectGroup = intrinsicComponent<SelectGroupProps, HTMLDivElement>((
  {
    children, error, label, hint, LabelProps: LabelPropsData, SelectProps: SelectPropsData,
    value, multiple, onChange, ...rest
  }: SelectGroupProps,
  ref
): JSX.Element => {
  const renderLabel = (): string | number | null | JSX.Element | any => {
    if (label) {
      if (typeof label === 'function') {
        return label({ error });
      }

      if (typeof label === 'object') {
        return label;
      }

      return (
        <Label error={error} {...(LabelPropsData || {})}>{label}</Label>
      );
    }

    return null;
  };

  const renderHint = (): string | number | null | JSX.Element | any => {
    if (hint) {
      if (typeof hint === 'function') {
        return hint({ error });
      }

      if (typeof hint === 'object') {
        return hint;
      }

      return (
        <FieldInfo error={error}>{hint}</FieldInfo>
      );
    }

    return null;
  };

  return (
    <Styled.SelectGroup {...rest} ref={ref}>
      {renderLabel()}

      <Select
        error={error}
        value={value}
        onChange={onChange}
        multiple={multiple}
        {...(SelectPropsData || {})}
      >
        {children}
      </Select>

      {renderHint()}
    </Styled.SelectGroup>
  );
});

SelectGroup.defaultProps = {
  error: false,
};

const { size, ...restSelectPropTypes } = selectPropTypes;

SelectGroup.propTypes = {
  ...restSelectPropTypes, // Extends from SelectProps: multiple, error, children, value, onChange

  label: PT.node,
  hint: PT.node,
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  SelectProps: PT.exact(selectPropTypes)as Validator<SelectProps>,
};

export default SelectGroup;