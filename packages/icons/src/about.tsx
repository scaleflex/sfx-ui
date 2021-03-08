import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const About = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M42.6793 7.32203C32.916 -2.44013 17.0863 -2.44122 7.32197 7.32203C-2.44128 17.0853 -2.4402 32.915 7.32197 42.6793C17.0852 52.4404 32.9149 52.4415 42.6793 42.6793C52.4414 32.915 52.4403 17.0864 42.6793 7.32203ZM28.2605 35.8705C28.2605 37.6716 26.8007 39.1314 24.9995 39.1314C23.1984 39.1314 21.7386 37.6716 21.7386 35.8705V22.8267C21.7386 21.0256 23.1984 19.5658 24.9995 19.5658C26.8007 19.5658 28.2605 21.0256 28.2605 22.8267V35.8705ZM24.9419 17.2527C23.0636 17.2527 21.8114 15.9222 21.8506 14.2798C21.8114 12.558 23.0636 11.2678 24.98 11.2678C26.8974 11.2678 28.1105 12.5591 28.1507 14.2798C28.1496 15.9222 26.8985 17.2527 24.9419 17.2527Z"
        fill={color}
      />
    </svg>
  )
);

export default About;
