import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const FitTheScreen = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M50.2731 34.2776C50.2731 32.7473 49.1007 31.5097 47.6445 31.5097C46.2006 31.5132 45.0141 32.7473 45.0141 34.2776V40.0073L34.4045 29.3923C33.3784 28.3645 31.7177 28.3645 30.6916 29.3923C29.6655 30.4184 29.6655 32.0844 30.6916 33.1105L41.2502 43.6655H35.5469C33.9937 43.669 32.742 44.8449 32.742 46.2941C32.742 47.7468 33.9937 48.921 35.5469 48.921H47.4665C49.0197 48.921 50.2696 47.7486 50.2749 46.2941C50.2696 46.2553 50.2643 46.2254 50.259 46.1866C50.2643 46.1372 50.2749 46.0843 50.2749 46.0332L50.2731 34.2776Z" fill={color} />
    <path d="M16.1418 29.3923L5.53743 40.0073V34.2776C5.53743 32.7473 4.3527 31.5132 2.90528 31.5097C1.45258 31.5097 0.278428 32.7473 0.278428 34.2776L0.274902 46.0349C0.274902 46.0861 0.289006 46.139 0.292532 46.1883C0.289006 46.2253 0.281954 46.2553 0.278428 46.2959C0.281954 47.7503 1.53368 48.9227 3.08511 48.9227H15.0064C16.5561 48.9227 17.8096 47.7486 17.8096 46.2959C17.8096 44.8467 16.5561 43.6708 15.0064 43.6672H9.30317L19.8617 33.1122C20.8843 32.0862 20.8843 30.4201 19.8617 29.3941C18.8339 28.3645 17.1714 28.3645 16.1418 29.3923Z" fill={color} />
    <path d="M34.4045 20.0679L45.0141 9.45998V15.1897C45.0141 16.7147 46.2006 17.9488 47.6445 17.9541C49.1007 17.9541 50.2731 16.7147 50.2731 15.1897V3.42879C50.2731 3.37767 50.2626 3.32478 50.2573 3.27894C50.2626 3.24192 50.2679 3.20666 50.2731 3.16963C50.2679 1.7134 49.0179 0.541016 47.4665 0.541016H35.5469C33.9937 0.541016 32.742 1.7134 32.742 3.16963C32.742 4.61705 33.9937 5.79649 35.5469 5.80002H41.2502L30.6916 16.355C29.6655 17.3793 29.6655 19.0418 30.6916 20.0661C31.7177 21.0992 33.3784 21.0992 34.4045 20.0679Z" fill={color} />
    <path d="M9.30317 5.80002H15.0047C16.5544 5.79649 17.8078 4.61705 17.8078 3.16963C17.8078 1.7134 16.5544 0.541016 15.0047 0.541016H3.08511C1.53368 0.541016 0.281954 1.7134 0.278428 3.16963C0.281954 3.20666 0.289006 3.24192 0.292532 3.27894C0.289006 3.32478 0.274902 3.3759 0.274902 3.42879L0.278428 15.1915C0.278428 16.7165 1.45258 17.9558 2.90528 17.9558C4.3527 17.9505 5.53743 16.7165 5.53743 15.1915V9.46175L16.1418 20.0679C17.1714 21.0992 18.8339 21.0992 19.8617 20.0679C20.8843 19.0436 20.8843 17.3811 19.8617 16.3568L9.30317 5.80002Z" fill={color} />
  </svg>
));

export default FitTheScreen;