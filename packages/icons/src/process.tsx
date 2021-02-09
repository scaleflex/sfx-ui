import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Process = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M23.4711 22.2662C23.5127 22.106 23.6004 21.9614 23.7233 21.8505C23.8463 21.7395 23.999 21.667 24.1627 21.6418L26.2681 21.3182V19.3834L24.1636 19.0598C23.9999 19.0347 23.8471 18.9622 23.7242 18.8512C23.6013 18.7402 23.5136 18.5957 23.4719 18.4355C23.2957 17.7541 23.0252 17.1007 22.6684 16.4939C22.5841 16.3511 22.5436 16.1866 22.5518 16.021C22.5601 15.8553 22.6169 15.6958 22.7151 15.5621L23.9737 13.8458L22.6049 12.4786L20.8886 13.7357C20.7549 13.8339 20.5952 13.8908 20.4295 13.8992C20.2638 13.9077 20.0992 13.8673 19.9562 13.7831C19.3489 13.4263 18.6948 13.1557 18.0128 12.9792C17.8523 12.9377 17.7075 12.8501 17.5963 12.7273C17.4852 12.6044 17.4125 12.4517 17.3872 12.2879L17.066 10.1854H15.1285L14.8056 12.2888C14.7803 12.4525 14.7076 12.6053 14.5965 12.7281C14.4853 12.851 14.3405 12.9386 14.18 12.98C13.498 13.1566 12.8439 13.4272 12.2366 13.784C12.0936 13.8681 11.929 13.9085 11.7633 13.9001C11.5976 13.8917 11.4379 13.8348 11.3042 13.7365L9.58792 12.4794L8.2191 13.8467L9.47774 15.5629C9.57592 15.6966 9.63268 15.8562 9.64096 16.0218C9.64925 16.1875 9.6087 16.3519 9.52435 16.4947C9.16758 17.1015 8.89714 17.755 8.72086 18.4363C8.67922 18.5966 8.59152 18.7411 8.46861 18.852C8.34569 18.963 8.19295 19.0355 8.02924 19.0607L5.92642 19.3834V21.3182L8.03094 21.6418C8.19464 21.667 8.34739 21.7395 8.4703 21.8505C8.59322 21.9614 8.68091 22.106 8.72255 22.2662C8.89884 22.9475 9.16927 23.601 9.52605 24.2078C9.6104 24.3506 9.65094 24.515 9.64266 24.6807C9.63437 24.8463 9.57762 25.0059 9.47943 25.1396L8.22079 26.8559L9.58961 28.2231L11.3059 26.966C11.4396 26.8677 11.5992 26.8109 11.765 26.8024C11.9307 26.794 12.0953 26.8344 12.2383 26.9186C12.8456 27.2754 13.4997 27.5459 14.1817 27.7225C14.3422 27.7639 14.487 27.8515 14.5982 27.9744C14.7093 28.0973 14.782 28.25 14.8072 28.4137L15.1285 30.5163H17.066L17.3889 28.4129C17.4142 28.2491 17.4869 28.0964 17.598 27.9735C17.7092 27.8507 17.854 27.7631 18.0144 27.7216C18.6965 27.5451 19.3506 27.2745 19.9579 26.9177C20.1009 26.8335 20.2655 26.7931 20.4312 26.8016C20.5969 26.81 20.7566 26.8669 20.8902 26.9651L22.6066 28.2223L23.9754 26.855L22.7168 25.1388C22.6186 25.0051 22.5618 24.8455 22.5535 24.6798C22.5452 24.5142 22.5858 24.3498 22.6701 24.2069C23.026 23.6003 23.2955 22.9471 23.4711 22.2662ZM16.0972 26.2807C14.9238 26.2807 13.7767 25.9329 12.8011 25.2813C11.8254 24.6297 11.0649 23.7036 10.6159 22.6201C10.1668 21.5366 10.0493 20.3443 10.2783 19.194C10.5072 18.0437 11.0723 16.9871 11.902 16.1578C12.7317 15.3285 13.7889 14.7637 14.9398 14.5349C16.0907 14.3061 17.2836 14.4236 18.3677 14.8724C19.4518 15.3212 20.3784 16.0812 21.0303 17.0564C21.6823 18.0315 22.0302 19.178 22.0302 20.3508C22.0284 21.923 21.4028 23.4302 20.2905 24.5419C19.1783 25.6536 17.6702 26.2789 16.0972 26.2807Z" fill={color} />
    <path d="M16.0972 24.5864C18.4377 24.5864 20.3351 22.6901 20.3351 20.3508C20.3351 18.0116 18.4377 16.1152 16.0972 16.1152C13.7568 16.1152 11.8594 18.0116 11.8594 20.3508C11.8594 22.6901 13.7568 24.5864 16.0972 24.5864Z" fill={color} />
    <path d="M32.2011 16.9624C32.2033 15.2948 31.5892 13.6852 30.4767 12.4426C29.3642 11.1999 27.8316 10.4118 26.1731 10.2294C25.9661 10.2061 25.7748 10.1074 25.636 9.95203C25.4972 9.7967 25.4204 9.59569 25.4205 9.38741C25.4205 9.36623 25.4205 9.32049 25.4205 9.29846C25.4152 6.82709 24.4279 4.45904 22.6757 2.71525C20.9235 0.971457 18.55 -0.00522794 16.0773 5.18126e-05C13.6046 0.00533156 11.2353 0.992144 9.49063 2.7434C7.74591 4.49466 6.76871 6.86691 6.77399 9.33828C6.77591 9.55223 6.70103 9.75979 6.56294 9.92329C6.42485 10.0868 6.2327 10.1954 6.02135 10.2294C4.36899 10.4155 2.84266 11.202 1.7325 12.4393C0.622354 13.6765 0.00579501 15.2784 4.06441e-05 16.9403C-0.00571372 18.6023 0.599738 20.2084 1.70129 21.4533C2.80285 22.6982 4.32371 23.4952 5.97473 23.6927H7.40882C7.35034 23.5411 7.29016 23.3895 7.23931 23.2344L4.95087 22.882C4.75066 22.8515 4.56802 22.7503 4.43602 22.5967C4.30402 22.4432 4.23139 22.2475 4.23128 22.0451V18.6566C4.23136 18.4543 4.30387 18.2587 4.4357 18.1052C4.56753 17.9517 4.74997 17.8504 4.95002 17.8196L7.23846 17.4672C7.38766 17.0076 7.57272 16.5604 7.79192 16.1296L6.42225 14.266C6.30225 14.1026 6.24481 13.9017 6.26036 13.6996C6.27591 13.4976 6.36342 13.3078 6.50701 13.1647L8.90393 10.7691C9.04709 10.6256 9.23698 10.5381 9.43914 10.5226C9.6413 10.507 9.84234 10.5644 10.0058 10.6844L11.8704 12.0533C12.3037 11.8337 12.7534 11.6482 13.2155 11.4984L13.5681 9.21121C13.5984 9.01153 13.6991 8.82924 13.852 8.69721C14.0049 8.56518 14.2 8.4921 14.4021 8.49116H17.7924C17.9948 8.49123 18.1905 8.56371 18.3441 8.69546C18.4977 8.82722 18.599 9.00957 18.6298 9.20952L18.9824 11.4967C19.4421 11.6463 19.8895 11.8313 20.3207 12.0499L22.1853 10.681C22.3488 10.561 22.5498 10.5036 22.752 10.5192C22.9541 10.5347 23.144 10.6222 23.2872 10.7657L25.6841 13.1613C25.8277 13.3044 25.9152 13.4942 25.9307 13.6963C25.9463 13.8983 25.8889 14.0992 25.7689 14.2626L24.3992 16.1262C24.6193 16.5591 24.8049 17.0086 24.9543 17.4706L27.2428 17.823C27.4426 17.8533 27.625 17.954 27.7571 18.1068C27.8891 18.2596 27.9623 18.4546 27.9632 18.6566V22.0451C27.9631 22.2474 27.8906 22.443 27.7588 22.5965C27.627 22.75 27.4445 22.8513 27.2445 22.882L24.956 23.2344C24.906 23.3895 24.8459 23.5411 24.7865 23.6927H26.2206C27.87 23.4996 29.3908 22.7071 30.4935 21.4661C31.5963 20.2251 32.204 18.6221 32.2011 16.9624Z" fill={color} />
    <path d="M50 40.6817V37.2932L47.1767 36.8595C46.981 36.1016 46.68 35.3747 46.2826 34.7002L47.9718 32.3986L45.574 30.0021L43.2712 31.6904C42.5963 31.2932 41.8691 30.9923 41.1107 30.7967L40.6767 27.9749H37.2865L36.8525 30.7967C36.0942 30.9923 35.3669 31.2932 34.6921 31.6904L32.3892 30.0021L29.9914 32.3986L31.6806 34.7002C31.2832 35.3747 30.9822 36.1016 30.7865 36.8595L27.9632 37.2932V40.6817L30.7865 41.1154C30.9822 41.8734 31.2832 42.6002 31.6806 43.2747L29.9914 45.5764L32.3892 47.9729L34.6921 46.2846C35.3669 46.6818 36.0942 46.9826 36.8525 47.1783L37.2865 50H40.6767L41.1107 47.1783C41.8691 46.9826 42.5963 46.6818 43.2712 46.2846L45.574 47.9729L47.9718 45.5764L46.2826 43.2747C46.68 42.6002 46.981 41.8734 47.1767 41.1154L50 40.6817ZM38.9816 44.0702C37.9758 44.0702 36.9926 43.7721 36.1563 43.2136C35.32 42.6551 34.6682 41.8613 34.2833 40.9325C33.8984 40.0038 33.7977 38.9818 33.9939 37.9959C34.1901 37.0099 34.6745 36.1043 35.3857 35.3934C36.0969 34.6826 37.003 34.1985 37.9895 34.0024C38.976 33.8063 39.9985 33.907 40.9277 34.2917C41.8569 34.6763 42.6512 35.3278 43.21 36.1637C43.7688 36.9995 44.067 37.9822 44.067 38.9875C44.067 40.3355 43.5312 41.6283 42.5775 42.5815C41.6238 43.5347 40.3303 44.0702 38.9816 44.0702Z" fill={color} />
    <path d="M21.42 39.7694L22.6913 38.1827L20.2927 35.7871L18.7052 37.0577C18.4822 36.9476 18.2523 36.8519 18.017 36.7714L17.7924 34.7519H14.4021L14.1775 36.7697C13.9422 36.8502 13.7123 36.9459 13.4893 37.056L11.9018 35.7854L9.50486 38.1827L10.7762 39.7694C10.666 39.9922 10.5703 40.222 10.4897 40.4572L8.46913 40.6817V44.0702L10.488 44.2947C10.5686 44.5299 10.6643 44.7597 10.7745 44.9825L9.50316 46.5692L11.9001 48.9649L13.4876 47.6942C13.7106 47.8043 13.9405 47.9 14.1758 47.9805L14.4021 50H17.7924L18.017 47.9822C18.2523 47.9017 18.4822 47.806 18.7052 47.6959L20.2927 48.9665L22.6896 46.5709L21.4183 44.9842C21.5285 44.7614 21.6242 44.5316 21.7048 44.2964L23.7254 44.0702V40.6817L21.7065 40.4572C21.6259 40.222 21.5302 39.9922 21.42 39.7694ZM16.0972 45.7644C15.4267 45.7644 14.7712 45.5657 14.2137 45.1934C13.6562 44.821 13.2216 44.2918 12.965 43.6727C12.7084 43.0535 12.6413 42.3722 12.7721 41.7149C12.9029 41.0576 13.2258 40.4538 13.7 39.9799C14.1741 39.5061 14.7782 39.1833 15.4358 39.0526C16.0935 38.9218 16.7752 38.9889 17.3946 39.2454C18.0141 39.5019 18.5436 39.9362 18.9162 40.4934C19.2887 41.0506 19.4875 41.7058 19.4875 42.376C19.4875 43.2746 19.1303 44.1365 18.4945 44.772C17.8587 45.4074 16.9964 45.7644 16.0972 45.7644Z" fill={color} />
  </svg>
));

export default Process;