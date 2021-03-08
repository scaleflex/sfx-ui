import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const MoreDetails = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M27.6919 13.1096V13.6096H28.1919H40.3233V31.4809C39.7585 31.3655 39.1789 31.3079 38.5455 31.3079C32.8865 31.3079 28.2096 35.9729 28.2096 41.622C28.2096 45.2185 30.0038 48.3724 32.7884 50.2129H5.20697C4.96438 50.2129 4.77515 50.0225 4.77515 49.7831V1.64264C4.77515 1.4033 4.96438 1.21289 5.20697 1.21289H27.6919V13.1096ZM28.606 36.4402H29.106V35.9402V33.3575V32.8575H28.606H9.45193H8.95193V33.3575V35.9402V36.4402H9.45193H28.606ZM8.95193 30.5683V31.0683H9.45193H35.25H35.75H35.8535V30.5683H36.25V27.9856V27.4856H35.75H9.45193H8.95193V27.9856V30.5683ZM8.95193 25.0931V25.5931H9.45193H35.25H35.75H35.8535V25.0931H36.25V22.5104V22.0104H35.75H9.45193H8.95193V22.5104V25.0931ZM8.95193 19.6179V20.1179H9.45193H35.25H35.75H35.8535V19.6179H36.25V17.0352V16.5352H35.75H9.45193H8.95193V17.0352V19.6179ZM40.458 34.4519L40.4693 34.4556L40.4808 34.4588C43.5809 35.3288 45.917 38.2352 46.0174 41.6292C46.0142 45.1069 43.6936 47.911 40.4846 48.7842L40.4846 48.7842L40.4788 48.7858C39.7895 48.9823 39.2149 49.0766 38.5451 49.0766C34.3724 49.0766 31.0729 45.6879 31.0729 41.622C31.0729 37.4613 34.4675 34.1675 38.5451 34.1675C39.226 34.1675 39.8962 34.265 40.458 34.4519ZM39.3734 45.8411H39.8734V45.3411V38.7295V38.2295H39.3734H39.2559C39.3963 38.1518 39.5161 38.0538 39.623 37.9471L39.6805 37.8897L39.7169 37.8171C39.7389 37.7731 39.7589 37.7437 39.7899 37.698C39.8139 37.6627 39.8445 37.6176 39.8877 37.5486C39.9557 37.4401 40.0805 37.2307 40.0805 36.9733C40.0805 36.5869 39.8846 36.2605 39.623 35.9995C39.4899 35.8667 39.337 35.7473 39.149 35.6639C38.9589 35.5796 38.7586 35.5435 38.5451 35.5435C38.3316 35.5435 38.1314 35.5796 37.9412 35.6639C37.7761 35.7372 37.638 35.8383 37.5166 35.9518C37.3178 36.0791 37.1984 36.2691 37.1307 36.4212C37.0515 36.599 37.0098 36.7973 37.0098 36.9733C37.0098 37.3597 37.2057 37.6861 37.4672 37.9471C37.5742 38.0538 37.6939 38.1518 37.8344 38.2295H37.6133H37.1133V38.7295V45.3411V45.8411H37.6133H39.3734ZM39.5975 10.9592H30.4519V2.00775L39.5975 10.9592Z"
        fill="#5D6D7E"
        stroke={color}
      />
    </svg>
  )
);

export default MoreDetails;
