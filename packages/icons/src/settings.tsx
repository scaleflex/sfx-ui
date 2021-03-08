import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Settings = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M47.983 20.4167L43.5038 19.4792C43.0872 18.2292 42.6705 17.0833 42.0455 15.9375L45.7955 10.3125L39.9622 4.47917L34.3372 8.22917C33.1913 7.60417 32.0455 7.1875 30.7955 6.77083L29.4413 0H25.2747H21.108L19.7538 6.77083C18.5038 7.1875 17.358 7.60417 16.2122 8.22917L10.5872 4.47917L4.75383 10.3125L8.50383 15.9375C7.87883 17.0833 7.46216 18.2292 7.04549 19.4792L0.274658 20.8333V29.0625L7.04549 30.4167C7.46216 31.6667 7.87883 32.8125 8.50383 33.9583L4.75383 39.5833L10.5872 45.4167L16.2122 41.6667C17.358 42.2917 18.5038 42.7083 19.7538 43.125L21.108 49.8958H25.2747H29.4413L30.7955 43.125C32.0455 42.7083 33.1913 42.2917 34.3372 41.6667L39.9622 45.4167L45.7955 39.5833L42.0455 33.9583C42.6705 32.8125 43.0872 31.6667 43.5038 30.4167L50.2747 29.0625V20.8333L47.983 20.4167ZM25.1705 35.2083C19.5455 35.2083 14.9622 30.625 14.9622 25C14.9622 19.375 19.5455 14.7917 25.1705 14.7917C30.7955 14.7917 35.3788 19.375 35.3788 25C35.483 30.625 30.8997 35.2083 25.1705 35.2083Z"
        fill={color}
      />
    </svg>
  )
);

export default Settings;
