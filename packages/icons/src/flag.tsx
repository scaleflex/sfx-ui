import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Flag = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = '#5D6D7E', size = 16, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M14.3715 9.38841L13.1911 6.4375L14.3715 3.48659C14.4293 3.34216 14.4116 3.1785 14.3244 3.04972C14.2372 2.92091 14.0918 2.84375 13.9363 2.84375H8.46753V1.75C8.46753 1.49112 8.25765 1.28125 7.99878 1.28125H2.21753V0.46875C2.21753 0.209875 2.00765 0 1.74878 0C1.4899 0 1.28003 0.209875 1.28003 0.46875C1.28003 2.42866 1.28003 13.8677 1.28003 15.5312C1.28003 15.7901 1.4899 16 1.74878 16C2.00765 16 2.21753 15.7901 2.21753 15.5312V8.46875H5.96753V9.5625C5.96753 9.81841 6.17606 10.0312 6.43628 10.0312H13.9363C14.0918 10.0312 14.2372 9.95409 14.3244 9.82528C14.4117 9.6965 14.4293 9.53284 14.3715 9.38841ZM7.53003 7.53125C6.99322 7.53125 2.79681 7.53125 2.21753 7.53125V2.21875H7.53003C7.53003 2.75556 7.53003 6.95197 7.53003 7.53125ZM7.56794 9.09375L8.33015 8.33153C8.41972 8.24203 8.46753 8.11887 8.46753 8V3.78125H13.2439L12.2511 6.26341C12.2064 6.37516 12.2064 6.49984 12.2511 6.61163L13.2439 9.09375H7.56794Z" fill={color} />
  </svg>
));

export default Flag;
