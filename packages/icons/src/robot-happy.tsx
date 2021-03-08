import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RobotHappy = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ size = 59, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M50.8184 49.7351C50.7251 49.8331 50.6271 49.9264 50.5326 50.0232C50.3828 50.1788 50.2342 50.3309 50.0786 50.4841C50.0717 50.4899 50.0659 50.5003 50.0556 50.506L49.6995 50.8517C48.0352 52.4221 46.1932 53.7927 44.2109 54.9356C44.2043 54.941 44.1969 54.9453 44.189 54.9483L44.068 55.0152C43.7661 55.1834 43.4641 55.3516 43.1553 55.5107L43.0482 55.5683C42.714 55.74 42.3775 55.9048 42.0341 56.0672C41.3427 56.3911 40.6351 56.6907 39.9138 56.9603C39.2915 57.1988 38.6554 57.412 38.0136 57.6056C37.8799 57.6494 37.7462 57.6886 37.6125 57.7266C31.4734 59.4637 24.936 59.1591 18.9849 56.8589L18.9561 56.8485C17.5942 56.3173 16.2738 55.6852 15.0059 54.9575C14.999 54.9575 14.9955 54.9518 14.9897 54.9518L14.9483 54.9299C14.6498 54.7582 14.3571 54.5842 14.0644 54.3952C12.0372 53.1261 10.1717 51.6155 8.50895 49.8964L8.47669 49.8642C8.45825 49.8423 8.4352 49.8204 8.41331 49.7973C3.18291 44.3478 0.267746 37.0834 0.280068 29.5299C0.280068 13.3464 13.4007 0.223511 29.5876 0.223511C45.7746 0.223511 58.894 13.3464 58.894 29.5299C58.9055 37.0538 56.0126 44.2919 50.8184 49.7351Z"
        fill="#3ECF8B"
      />
      <path
        d="M50.5292 50.0244C50.3794 50.18 50.2308 50.3321 50.0752 50.4854C50.0683 50.4911 50.0625 50.5015 50.0522 50.5073L49.6961 50.853C48.0318 52.4233 46.1898 53.7939 44.2075 54.9369C44.2009 54.9422 44.1935 54.9465 44.1856 54.9495L44.0646 55.0164C43.7627 55.1881 43.4608 55.354 43.1519 55.5153L43.0448 55.573C42.7106 55.7447 42.3741 55.9094 42.0307 56.0719C41.3393 56.3957 40.6318 56.6953 39.9104 56.965C39.2881 57.2035 38.652 57.4167 38.0102 57.6103C37.8765 57.6541 37.7428 57.6933 37.6092 57.7313C31.47 59.4683 24.9326 59.1638 18.9815 56.8636L18.9527 56.8532C17.5908 56.3219 16.2704 55.6898 15.0025 54.9622C14.9967 54.9598 14.9913 54.9567 14.9864 54.953C14.9737 54.9438 14.9575 54.9369 14.9449 54.9276C14.6464 54.7559 14.3537 54.5819 14.061 54.393C12.0352 53.1244 10.1709 51.6145 8.50903 49.8965C9.43091 46.6642 13.1184 46.1203 13.5206 46.073L13.4929 45.9013L12.7105 41.0477C12.3851 38.9396 12.5084 36.7865 13.0723 34.7294L13.1207 34.5646C13.1368 34.5104 13.1518 34.4597 13.1714 34.4056C13.5717 33.0639 14.2064 31.8037 15.0463 30.6835C15.6608 29.8717 16.3813 29.1458 17.1885 28.5251L14.4044 15.9024L16.1018 15.4829L19.3088 27.1896C21.2574 26.2066 23.7557 25.5048 26.9523 25.2721C27.0065 25.2663 27.0572 25.2629 27.1113 25.2594L27.2703 25.2502C27.9617 25.2029 28.6716 25.1799 29.4218 25.1799C30.2284 25.1799 30.989 25.2052 31.7195 25.2571L31.8786 25.2663C31.9327 25.2663 31.9834 25.2721 32.0376 25.279C35.3909 25.5302 37.9745 26.2769 39.9646 27.3129L43.137 15.7214L44.8332 16.1409L42.0676 28.6738C42.7757 29.2352 43.4137 29.8798 43.9678 30.5936C44.4899 31.2652 44.9334 31.9944 45.2895 32.7669C45.3276 32.8464 45.3667 32.9259 45.3979 33.0055C45.4843 33.1956 45.5638 33.3869 45.6283 33.5816C45.6606 33.6681 45.6917 33.7499 45.7205 33.8328C45.7908 34.0264 45.8542 34.2177 45.9118 34.409C45.9279 34.4632 45.9429 34.5242 45.959 34.5738L46.0063 34.7432C46.042 34.8699 46.0731 34.9944 46.1019 35.1177C46.125 35.2064 46.1434 35.2963 46.163 35.385C46.1826 35.4738 46.201 35.559 46.2172 35.6455C46.2448 35.7849 46.2702 35.9255 46.2932 36.0649C46.3947 36.6628 46.4563 37.2669 46.4776 37.873C46.4776 37.9432 46.4776 38.0101 46.4776 38.0769C46.5071 38.8666 46.4604 39.6573 46.3382 40.4381L45.5684 45.6409L45.4866 46.1975C45.4915 46.1959 45.4967 46.1959 45.5016 46.1975C45.9176 46.2482 49.6039 46.7852 50.5292 50.0244Z"
        fill="white"
      />
      <path
        d="M14.8608 16.7251C16.1775 16.7251 17.245 15.6576 17.245 14.3409C17.245 13.0241 16.1775 11.9567 14.8608 11.9567C13.544 11.9567 12.4766 13.0241 12.4766 14.3409C12.4766 15.6576 13.544 16.7251 14.8608 16.7251Z"
        fill="#7386F3"
      />
      <path
        d="M44.3791 16.7251C45.6958 16.7251 46.7633 15.6576 46.7633 14.3409C46.7633 13.0241 45.6958 11.9567 44.3791 11.9567C43.0623 11.9567 41.9949 13.0241 41.9949 14.3409C41.9949 15.6576 43.0623 16.7251 44.3791 16.7251Z"
        fill="#7386F3"
      />
      <path
        d="M46.353 40.438L45.5833 45.6408L45.5014 46.1974L44.8942 50.3193L44.8527 50.5866L44.2074 54.931C44.2008 54.9364 44.1934 54.9406 44.1855 54.9437L44.0645 55.0105C43.7626 55.1787 43.4606 55.347 43.1518 55.506L43.0447 55.5636C42.7105 55.7353 42.374 55.9001 42.0306 56.0626C41.3392 56.3864 40.6316 56.686 39.9103 56.9556C40.12 54.4205 40.324 51.8992 40.5083 49.5691L40.5176 49.4839V49.4677L40.5268 49.3248V49.3018C40.5268 49.258 40.5268 49.2096 40.5395 49.1658C40.559 48.9238 40.574 48.6853 40.5971 48.4537L40.6478 47.8533C40.6639 47.6562 40.6789 47.4649 40.6985 47.2771C41.1214 42.8279 42.0433 40.6062 42.2299 38.4202V38.3845C42.2588 38.0388 42.2772 37.7138 42.2876 37.3992C42.2876 37.3358 42.2876 37.2725 42.2933 37.2056C42.3821 34.6221 42.0871 33.071 43.9654 30.5889C44.4875 31.2605 44.931 31.9896 45.2871 32.7622C45.3251 32.8417 45.3643 32.9212 45.3954 33.0007C45.4819 33.1909 45.5614 33.3821 45.6259 33.5769C45.6582 33.6633 45.6893 33.7451 45.7181 33.8281C45.7884 34.0217 45.8518 34.213 45.9094 34.4043C45.9255 34.4584 45.9405 34.5195 45.9566 34.5691L46.0039 34.7385C46.0396 34.8652 46.0707 34.9897 46.0995 35.113C46.1226 35.2017 46.141 35.2916 46.1606 35.3803C46.1802 35.469 46.1986 35.5543 46.2147 35.6407C46.2424 35.7802 46.2678 35.9208 46.2908 36.0602C46.3923 36.6581 46.4539 37.2621 46.4752 37.8682C46.4752 37.9385 46.4752 38.0054 46.4752 38.0722C46.5107 38.8629 46.4698 39.6551 46.353 40.438Z"
        fill="#D8DDEE"
      />
      <path
        d="M18.9527 56.8474C17.5908 56.3161 16.2704 55.684 15.0025 54.9564C14.9829 54.9471 14.9644 54.9345 14.9449 54.9252L13.4929 45.8955L12.7105 41.0418C12.3769 38.8765 12.5169 36.6647 13.1207 34.5587C13.5216 33.1588 14.1741 31.8437 15.0463 30.6776C16.7183 33.0491 16.5017 34.6025 16.5685 37.0697C16.5685 37.1768 16.5754 37.2921 16.5789 37.4027C16.5916 37.7426 16.61 38.0941 16.6423 38.4744V38.5089C16.8266 40.6926 17.7128 42.9109 18.161 47.246C18.168 47.329 18.1772 47.412 18.1829 47.4938C18.206 47.7242 18.2279 47.9708 18.2498 48.2151L18.3005 48.8259C18.3132 48.9722 18.3258 49.1151 18.3362 49.258C18.3362 49.2799 18.3362 49.3053 18.3362 49.3283C18.3454 49.4493 18.3558 49.5738 18.365 49.6947L18.3869 49.9736C18.5678 52.1504 18.7591 54.4897 18.9527 56.8474Z"
        fill="#D8DDEE"
      />
      <path d="M26.565 37.1273L25.4092 34.8411L24.1774 37.1262L26.565 37.1273Z" fill="#7386F3" />
      <path
        d="M26.8231 37.2864H23.9111L25.4092 34.5L26.8231 37.2864ZM24.4435 36.9672H26.3057L25.4034 35.1833L24.4435 36.9672Z"
        fill="#7386F3"
      />
      <path d="M34.378 37.1273L33.2222 34.8411L31.9904 37.1262L34.378 37.1273Z" fill="#7386F3" />
      <path
        d="M34.636 37.2864H31.724L33.222 34.5L34.636 37.2864ZM32.2564 36.9672H34.1197L33.2174 35.1833L32.2564 36.9672Z"
        fill="#7386F3"
      />
      <path
        d="M37.2277 41.7274C38.1346 41.7274 38.8698 40.9922 38.8698 40.0853C38.8698 39.1784 38.1346 38.4432 37.2277 38.4432C36.3208 38.4432 35.5856 39.1784 35.5856 40.0853C35.5856 40.9922 36.3208 41.7274 37.2277 41.7274Z"
        fill="#F7EBE4"
      />
      <path
        d="M21.6537 42.1515C22.5606 42.1515 23.2958 41.4163 23.2958 40.5094C23.2958 39.6025 22.5606 38.8673 21.6537 38.8673C20.7468 38.8673 20.0116 39.6025 20.0116 40.5094C20.0116 41.4163 20.7468 42.1515 21.6537 42.1515Z"
        fill="#F7EBE4"
      />
      <path
        d="M33.493 42.0801C33.493 43.1622 31.6677 44.0391 29.4149 44.0391C27.162 44.0391 25.3356 43.1622 25.3356 42.0801C25.3356 40.9981 27.2277 41.9476 29.484 41.9476C31.7403 41.9476 33.493 40.9969 33.493 42.0801Z"
        fill="#C9D1E5"
      />
      <path
        d="M46.5432 34.1796C46.3173 34.1921 46.1005 34.2724 45.9209 34.41L45.9083 34.4193C45.3194 34.8514 44.764 35.9231 44.2616 37.6009C43.4549 40.2674 42.9836 43.7705 42.7635 45.6201C42.6713 46.4371 42.6045 47.1388 42.5596 47.7081C42.5324 48.1055 42.3551 48.4777 42.0636 48.7492C41.7722 49.0208 41.3884 49.1714 40.9901 49.1704H18.0504C17.6431 49.1692 17.2522 49.0106 16.9592 48.7278C16.6662 48.4449 16.494 48.0597 16.4786 47.6528C16.4474 46.9729 16.4094 46.308 16.3633 45.6765C16.1248 42.3001 15.68 39.5829 15.0439 37.5963C14.3525 35.4449 13.5885 34.682 13.2197 34.4412C13.2063 34.4236 13.1889 34.4094 13.169 34.3997C13.169 34.3997 13.1598 34.3997 13.1564 34.3928C13.0595 34.3224 12.9493 34.2726 12.8325 34.2464C12.7916 34.2403 12.7498 34.2501 12.7159 34.274C12.682 34.2978 12.6586 34.3337 12.6505 34.3743C12.6446 34.4155 12.6545 34.4574 12.6782 34.4917C12.7019 34.5259 12.7377 34.5498 12.7784 34.5587C12.8547 34.5827 12.9267 34.6189 12.9916 34.6659L13.01 34.6762L13.0192 34.6855C13.0373 34.6964 13.0543 34.7092 13.0699 34.7235C13.4421 34.9908 14.107 35.7283 14.7385 37.6919C15.37 39.6555 15.8102 42.3485 16.0453 45.7019C16.0902 46.3276 16.1282 46.989 16.1605 47.6609C16.1793 48.1496 16.3863 48.6122 16.7383 48.9517C17.0904 49.2913 17.5601 49.4816 18.0492 49.4827H40.9947C41.4732 49.4842 41.9344 49.3037 42.2849 48.9778C42.6354 48.652 42.8489 48.2051 42.8822 47.7277C42.9237 47.1584 42.9974 46.4601 43.085 45.6535C43.2982 43.8097 43.7764 40.3296 44.5669 37.685C45.0279 36.1628 45.5107 35.1717 46.0154 34.7396C46.0411 34.714 46.0689 34.6905 46.0984 34.6693C46.2303 34.5649 46.3913 34.5037 46.5593 34.4942C46.5802 34.4934 46.6008 34.4886 46.6198 34.4799C46.6388 34.4712 46.6559 34.4589 46.6701 34.4435C46.6844 34.4282 46.6954 34.4103 46.7027 34.3907C46.71 34.3711 46.7134 34.3503 46.7126 34.3294C46.7119 34.3082 46.7069 34.2874 46.6979 34.2683C46.6889 34.2491 46.676 34.232 46.6602 34.218C46.6443 34.204 46.6258 34.1933 46.6057 34.1867C46.5855 34.1801 46.5643 34.1777 46.5432 34.1796Z"
        fill="#7386F3"
      />
      <path
        d="M31.8784 25.2652L31.7194 25.2559V30.0612H27.2702V25.249L27.1112 25.2582C27.057 25.2582 27.0063 25.2652 26.9521 25.2709V30.2202C26.9525 30.2623 26.9693 30.3026 26.9991 30.3323C27.0288 30.3621 27.0691 30.379 27.1112 30.3793H31.8784C31.9204 30.3787 31.9605 30.3617 31.9902 30.332C32.0199 30.3023 32.0368 30.2622 32.0374 30.2202V25.2778C31.9833 25.2709 31.9326 25.2686 31.8784 25.2652Z"
        fill="#7386F3"
      />
      <path
        d="M22.5457 33.9514C22.5457 33.9514 23.3246 31.6156 25.9117 31.5315"
        stroke="#7386F3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M36.2574 33.9514C36.2574 33.9514 35.4784 31.6156 32.8926 31.5315"
        stroke="#7386F3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path d="M12.9363 35.1959L13.2497 34.1323L12.3382 33.4017L11.9625 34.3824L12.9363 35.1959Z" fill="#3ECF8B" />
      <path d="M46.1445 35.1649L45.8311 34.1013L46.7426 33.3707L47.1171 34.3514L46.1445 35.1649Z" fill="#3ECF8B" />
    </svg>
  )
);

export default RobotHappy;
