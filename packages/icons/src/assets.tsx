import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Assets = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 50)}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M7.42258 19.02L7.58365 21.7045C7.58365 22.0266 7.36889 22.2951 7.04674 22.2951H2.75147C2.48301 22.2951 2.21456 22.0803 2.21456 21.8119C1.99979 19.2884 1.78503 16.7649 1.57027 14.0804C1.57027 13.7582 1.78503 13.4898 2.10718 13.4898H48.3888C48.7109 13.4898 48.9794 13.7582 48.9257 14.0804C48.6572 16.7112 48.3888 19.2347 48.1203 21.8119C48.0666 22.0803 47.8518 22.2951 47.5834 22.2951H43.4492C43.127 22.2951 42.9123 22.0803 42.9123 21.7582V18.9663C42.9123 18.6441 42.6975 18.4293 42.3754 18.4293H8.01318C7.69103 18.4293 7.42258 18.6978 7.42258 19.02Z" fill={color} />
    <path d="M0.818687 24.5502H13.2213C13.3824 24.5502 13.5434 24.6039 13.6508 24.765L17.5703 29.4361C17.6776 29.5435 17.8387 29.6508 17.9998 29.6508H33.248C33.4091 29.6508 33.5702 29.5972 33.6238 29.4898L37.8117 24.8187C37.9191 24.7113 38.0802 24.6576 38.1876 24.6576H49.7311C50.0533 24.6576 50.3217 24.926 50.268 25.2482L47.9593 48.1742C47.9056 48.4427 47.6909 48.6574 47.4224 48.6574H3.1274C2.85894 48.6574 2.64418 48.4427 2.59049 48.1742L0.281778 25.1408C0.228087 24.8187 0.496541 24.5502 0.818687 24.5502Z" fill={color} />
    <path d="M44.4156 11.2349H4.41587C4.09372 11.2349 3.87896 11.0201 3.87896 10.698V8.22817C3.87896 7.90603 4.09372 7.69126 4.41587 7.69126H44.4156C44.7378 7.69126 44.9525 7.90603 44.9525 8.22817V10.698C44.9525 10.9664 44.7378 11.2349 44.4156 11.2349Z" fill={color} />
    <path d="M41.7312 5.5436H7.15423C6.83209 5.5436 6.61732 5.32884 6.61732 5.00669V2.53691C6.61732 2.21476 6.83209 2 7.15423 2H41.7312C42.0533 2 42.2681 2.21476 42.2681 2.53691V5.00669C42.2681 5.32884 41.9996 5.5436 41.7312 5.5436Z" fill={color} />
  </svg>
));

export default Assets;