import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Preview = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M25.2355 17.0334C20.7494 17.0334 17.2021 20.6849 17.2021 25.0668C17.2021 29.4486 20.8537 33.1002 25.2355 33.1002C29.6174 33.1002 33.2689 29.4486 33.2689 25.0668C33.2689 20.6849 29.7217 17.0334 25.2355 17.0334ZM24.6096 22.7715C23.5663 22.7715 22.7316 23.6062 22.7316 24.6495H20.019C20.1234 22.1455 22.1056 20.1633 24.5052 20.1633V22.7715H24.6096Z"
        fill={color}
      />
      <path
        d="M49.6487 23.5018C46.9361 20.0589 37.2334 9 25.2355 9C13.2376 9 3.53496 20.0589 0.822389 23.5018C0.0920812 24.4408 0.0920812 25.7971 0.822389 26.8404C3.53496 30.1789 13.2376 41.2379 25.2355 41.2379C37.2334 41.2379 46.9361 30.1789 49.6487 26.736C50.4833 25.7971 50.4833 24.4408 49.6487 23.5018ZM25.2355 36.7517C18.7671 36.7517 13.5506 31.5352 13.5506 25.0668C13.5506 18.5983 18.7671 13.4862 25.2355 13.4862C31.704 13.4862 36.9205 18.7027 36.9205 25.1711C36.9205 31.6395 31.704 36.7517 25.2355 36.7517Z"
        fill={color}
      />
    </svg>
  )
);

export default Preview;
