import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import StarIcon from '@sfx-ui/icons/star';
import StarOutlineIcon from '@sfx-ui/icons/star-outline';
import type { RatingProps, RatingItemProps, RatingItemReadOnlyProps } from './rating.props';
import Styled from './rating.styles';

const RatingIcon = ({ active }: {active: boolean}): JSX.Element => (
  <Styled.Icon>
    {active ? <StarIcon /> : <StarOutlineIcon />}
  </Styled.Icon>
);

const RatingItem = (
  {
    name, active, mark, onChange
  }: RatingItemProps
): JSX.Element => (
  <Styled.Item>
    <RatingIcon active={active} />

    <input
      type="radio"
      name={name}
      value={mark}
      onChange={onChange}
    />
  </Styled.Item>
);

const RatingItemReadOnly = ({ active }: RatingItemReadOnlyProps): JSX.Element => (
  <Styled.Item readOnly>
    <RatingIcon active={active} />
  </Styled.Item>
);

const Rating = intrinsicComponent<RatingProps, HTMLInputElement>((
  {
    value, readOnly, name, onChange, ...rest
  }: RatingProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const valueRounded = Math.min(value || 0, 5);

  return (
    <Styled.Rating
      ref={ref}
    >
      {[1, 2, 3, 4, 5].map((mark) => {
        const itemProps = {
          key: mark,
          mark,
          active: mark <= valueRounded,
          value: valueRounded,
          ...rest
        };

        return readOnly
          ? <RatingItemReadOnly {...itemProps} />
          : (
            <RatingItem
              {...itemProps}
              name={name || 'raiting-field'}
              onChange={onChange}
            />
          );
      })}
    </Styled.Rating>
  );
});

Rating.defaultProps = {
  value: 0,
  // name: 'raiting-field',
  readOnly: false,
};

Rating.propTypes = {
  value: PT.number.isRequired,
  name: PT.string,
  readOnly: PT.bool,
};

export default Rating;