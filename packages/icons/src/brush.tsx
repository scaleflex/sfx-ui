import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Brush = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M49.0422 4.23203C48.2596 3.4502 47.2197 3.01279 46.114 3.00029C46.0978 3.0001 46.0816 3 46.0655 3C44.9774 3 43.9466 3.41299 43.1582 4.1665L19.696 26.6008C22.2073 27.2409 24.3525 28.8524 25.755 31.2098C26.1823 31.9281 26.5225 32.6886 26.7758 33.4733L49.1089 10.1167C49.8607 9.32988 50.2749 8.29736 50.2749 7.20937C50.2749 6.08564 49.8376 5.02871 49.0422 4.23203Z"
        fill={color}
      />
      <path
        d="M17.5198 29.2264C17.4018 29.2214 17.2837 29.2189 17.1657 29.2189C15.1859 29.2189 13.2223 29.9074 11.6204 31.0599C9.68955 32.449 8.91963 34.4442 7.50186 36.262C5.72412 38.5412 2.98926 39.6557 0.274902 40.4157C1.85566 44.5936 7.72803 46.3041 11.5788 46.3962C11.7171 46.3995 11.8561 46.4012 11.9961 46.4012C16.3561 46.4012 21.4915 44.7807 23.5933 40.4908C25.9007 35.7814 23.0565 29.4581 17.5198 29.2264Z"
        fill={color}
      />
    </svg>
  )
);

export default Brush;
