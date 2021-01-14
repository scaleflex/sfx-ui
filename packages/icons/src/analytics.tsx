import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Analytics = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M48.9583 47.9167H47.9166V17.7083C47.9166 17.1333 47.4499 16.6666 46.8749 16.6666H40.6249C40.0499 16.6666 39.5832 17.1333 39.5832 17.7083V47.9166H35.4165V30.2083C35.4165 29.6333 34.9498 29.1666 34.3748 29.1666H28.1248C27.5498 29.1666 27.0831 29.6333 27.0831 30.2083V47.9166H22.9164V26.0416C22.9164 25.4666 22.4497 24.9999 21.8747 24.9999H15.6247C15.0497 24.9999 14.583 25.4666 14.583 26.0416V47.9166H10.4163V36.4583C10.4163 35.8833 9.94961 35.4166 9.37461 35.4166H3.125C2.55 35.4166 2.0833 35.8833 2.0833 36.4583V47.9166H1.0417C0.466699 47.9167 0 48.3833 0 48.9583C0 49.5333 0.466699 50 1.0417 50H48.9583C49.5333 50 50 49.5333 50 48.9583C50 48.3833 49.5333 47.9167 48.9583 47.9167Z" fill={color} />
    <path d="M43.75 3.05176e-05C41.452 3.05176e-05 39.5833 1.86878 39.5833 4.16673C39.5833 4.93753 39.8083 5.65003 40.1729 6.27093L33.3541 13.0897C32.7333 12.725 32.0208 12.5 31.25 12.5C29.9438 12.5 28.7896 13.1167 28.025 14.0605L22.9062 12.6C22.9062 12.5667 22.9167 12.5355 22.9167 12.5C22.9167 10.2021 21.0479 8.33333 18.75 8.33333C16.4521 8.33333 14.5833 10.2021 14.5833 12.5C14.5833 13.1063 14.7188 13.6771 14.9521 14.1958L8.4416 19.3896C7.8042 18.9896 7.05625 18.75 6.25 18.75C3.95205 18.75 2.0833 20.6188 2.0833 22.9167C2.0833 25.2147 3.95205 27.0834 6.25 27.0834C8.54795 27.0834 10.4167 25.2147 10.4167 22.9167C10.4167 22.1855 10.2104 21.5063 9.87715 20.9084L16.2584 15.8189C16.9563 16.3439 17.8126 16.6668 18.7501 16.6668C20.2771 16.6668 21.6021 15.8314 22.3271 14.6023L27.1542 15.9793C27.1146 16.2043 27.0834 16.4314 27.0834 16.6668C27.0834 18.9648 28.9521 20.8335 31.2501 20.8335C33.548 20.8335 35.4168 18.9648 35.4168 16.6668C35.4168 15.896 35.1918 15.1835 34.8272 14.5626L41.648 7.74183C42.2668 8.10853 42.9793 8.33353 43.7501 8.33353C46.048 8.33353 47.9168 6.46478 47.9168 4.16683C47.9167 1.86878 46.048 3.05176e-05 43.75 3.05176e-05Z" fill={color} />
  </svg>
));

export default Analytics;
