import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Switcher from '../switcher';
import type { SwitcherGroupProps } from './switcher-group.props';
import Styled from './switcher-group.styles';

const SwitcherGroup = intrinsicComponent<SwitcherGroupProps, HTMLLabelElement>((
  {
    label, switcherProps, ...rest
  }: SwitcherGroupProps,
  ref
): JSX.Element => (
  <Styled.SwitcherGroup ref={ref}>
    <Switcher switcherProps={switcherProps} {...rest} />

    <Styled.Label>
      {label}
    </Styled.Label>
  </Styled.SwitcherGroup>
));

SwitcherGroup.defaultProps = {
  checked: false,
};

SwitcherGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  switcherProps: PT.object
};

export default SwitcherGroup;
