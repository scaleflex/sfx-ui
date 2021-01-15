import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Support = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M39.3637 32.3106C37.3836 35.0302 34.176 36.8015 30.5621 36.8015H25.4913C23.7396 36.8015 22.2479 35.6893 21.683 34.1328C20.9858 33.9248 20.302 33.6548 19.6348 33.3233C18.2218 32.6213 16.9388 31.6701 15.8094 30.4919C8.48347 32.1013 3.00049 38.6291 3.00049 46.4385V47.4593C3.00049 48.8624 4.13805 50 5.54123 50H44.9613C46.3645 50 47.5021 48.8624 47.5021 47.4593V46.4385C47.502 40.4057 44.2297 35.1375 39.3637 32.3106Z" fill={color} />
    <path d="M13.109 25.255C14.201 25.255 15.1514 24.6497 15.6439 23.7566C15.6568 23.792 15.67 23.8271 15.6832 23.8622C15.6871 23.8728 15.6911 23.8833 15.695 23.8939C16.8502 26.9345 19.0979 29.4836 22.0617 30.5973C22.7786 29.4583 24.0461 28.7008 25.4914 28.7008H30.5622C31.068 28.7008 31.5388 28.5581 31.9515 28.3274C32.6446 27.9398 33.2679 26.9566 33.5897 26.4355C34.1048 25.6015 34.5039 24.7182 34.8577 23.7551C35.0566 24.1162 35.33 24.4303 35.6576 24.6765V25.9199C35.6576 28.7295 33.3719 31.0154 30.5621 31.0154H25.4913C24.5327 31.0154 23.7555 31.7926 23.7555 32.7512C23.7555 33.71 24.5327 34.4871 25.4913 34.4871H30.5621C35.2861 34.4871 39.1293 30.6439 39.1293 25.9199V24.6765C39.832 24.1486 40.2865 23.3085 40.2865 22.362V15.1208C40.2865 14.1549 39.8128 13.3003 39.0854 12.7748C38.5213 5.63624 32.5322 0 25.2512 0C17.9701 0 11.9811 5.63624 11.417 12.7747C10.6896 13.3001 10.2159 14.1549 10.2159 15.1207V22.3618C10.2159 23.9641 11.5176 25.255 13.109 25.255ZM25.2512 3.47174C30.6412 3.47174 35.0869 7.5908 35.6065 12.8464C35.2654 13.1148 34.986 13.4578 34.7934 13.8513C33.1555 9.578 29.4992 6.60281 25.2511 6.60281C20.9115 6.60281 17.3138 9.68025 15.7152 13.8342C15.713 13.8399 15.711 13.8456 15.7088 13.8514C15.5163 13.4579 15.2368 13.1149 14.8957 12.8466C15.4156 7.5908 19.8612 3.47174 25.2512 3.47174Z" fill={color} />
  </svg>
));

export default Support;