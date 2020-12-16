import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Cross = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M49.7166 46.7913C50.0514 47.1261 50.2746 47.5725 50.2746 48.1306C50.2746 48.6886 50.0514 49.135 49.7166 49.4699C49.047 50.1395 47.8193 50.1395 47.1496 49.4699L25.2746 27.5949L3.39963 49.4699C2.72998 50.1395 1.50231 50.1395 0.832663 49.4699C0.497842 49.0234 0.274628 48.577 0.274628 48.1306C0.274628 47.6842 0.497842 47.1261 0.832663 46.7913L22.5961 25.0279L0.832663 3.1529C0.497842 2.81808 0.274628 2.37165 0.274628 1.92522C0.274628 1.36719 0.497842 0.920759 0.832663 0.585938C1.50231 -0.195313 2.72998 -0.195313 3.39963 0.585938L25.2746 22.3493L47.038 0.585938C47.7077 -0.195313 48.9353 -0.195313 49.605 0.585938C49.9398 0.920759 50.163 1.36719 50.163 1.92522C50.163 2.37165 49.9398 2.92969 49.605 3.26451L27.8416 25.0279L49.7166 46.7913Z" fill={color} />
  </svg>
));

export default Cross;