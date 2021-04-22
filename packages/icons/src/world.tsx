import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const World = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M46.6481 12.4509C44.4124 8.62088 41.3799 5.58839 37.5498 3.35288C33.719 1.11747 29.5371 0 25.0009 0C20.4652 0 16.2826 1.11747 12.452 3.35288C8.62158 5.58805 5.58909 8.62054 3.35346 12.4509C1.11772 16.2815 0.000244141 20.4647 0.000244141 25C0.000244141 29.5353 1.11806 33.718 3.35312 37.5489C5.58864 41.3781 8.62113 44.4114 12.4515 46.6471C16.2821 48.8824 20.4649 50 25.0005 50C29.536 50 33.7193 48.8824 37.5497 46.6471C41.3798 44.4122 44.4122 41.3789 46.6476 37.5489C48.8827 33.718 50 29.535 50 25C50.0001 20.4647 48.8827 16.2809 46.6481 12.4509ZM28.1277 38.1536C27.9096 37.8938 27.8342 37.6763 27.8998 37.502C27.878 37.6108 27.802 37.7084 27.672 37.7949C27.5636 37.6649 27.3676 37.502 27.0858 37.3069C26.8033 37.1109 26.6083 36.9486 26.4998 36.8176C26.456 36.7528 26.3968 36.6607 26.3207 36.5413C26.2446 36.4219 26.1471 36.2647 26.0278 36.0692C25.9091 35.8741 25.8224 35.7056 25.7679 35.5642C25.714 35.423 25.709 35.3418 25.7515 35.3207C25.3394 35.4947 24.7425 35.3754 23.9613 34.9625C23.8096 34.8759 23.5813 34.6479 23.2777 34.2789C22.9741 33.9098 22.6593 33.7474 22.3336 33.7904C22.2253 33.8122 22.0787 33.8501 21.8941 33.9043C21.71 33.9589 21.5525 33.9855 21.4222 33.9855C21.2919 33.9855 21.1182 33.9426 20.9011 33.8551C20.7278 33.7904 20.4946 33.6651 20.2015 33.481C19.9087 33.2968 19.7077 33.1821 19.5995 33.1396C19.3174 32.9874 19.1764 32.9117 19.1764 32.9117L18.6556 32.6519C18.5253 32.5872 18.3895 32.484 18.2484 32.3429C18.1074 32.2016 18.0155 32.055 17.9721 31.9031C17.9287 31.7733 17.8745 31.5126 17.8094 31.1216C17.7443 30.7306 17.6573 30.4489 17.5489 30.2756C17.419 30.0588 17.2345 29.8417 16.9955 29.6248C16.7571 29.408 16.5401 29.2986 16.3447 29.2986C16.5185 29.2986 16.5185 29.1532 16.3447 28.8593C16.1709 28.5659 16.0191 28.3544 15.8888 28.2249C15.8453 28.1812 15.715 28.0404 15.498 27.8012C15.281 27.5623 15.0966 27.3567 14.9447 27.1823C14.7929 27.0087 14.6622 26.8082 14.554 26.5799C14.4456 26.352 14.4236 26.1624 14.4889 26.0102C14.5104 25.9887 14.4889 25.9559 14.4236 25.9127C14.3585 25.8698 14.2775 25.8257 14.1795 25.7824C14.082 25.7394 13.9897 25.7012 13.9032 25.6685C13.8159 25.6364 13.7508 25.62 13.7076 25.62C13.7513 25.7075 13.8 25.8644 13.8544 26.0922C13.9086 26.3204 13.9683 26.4887 14.0333 26.5971C14.0769 26.6838 14.2612 26.9989 14.5867 27.5405C15.1513 28.452 15.4113 29.1255 15.3682 29.5593C15.2378 29.6023 15.1508 29.5811 15.1075 29.4945C15.0641 29.408 15.0312 29.2885 15.0098 29.1364C14.9881 28.985 14.9667 28.8766 14.9446 28.811C14.8795 28.6807 14.7113 28.5394 14.4398 28.3872C14.1687 28.2359 14.0003 28.0837 13.9353 27.9315C13.9572 27.9315 13.9839 27.9213 14.0167 27.8987C14.0494 27.877 14.0768 27.8668 14.0982 27.8668C14.1202 27.6716 14.0063 27.422 13.7566 27.1176C13.507 26.8141 13.4043 26.5973 13.4474 26.4668C13.2737 26.3365 13.1218 26.0813 12.9915 25.7021C12.8613 25.3221 12.7526 25.0778 12.6659 24.9691C12.5792 24.8394 12.471 24.7254 12.3406 24.6275C12.2102 24.5301 12.0478 24.4217 11.8522 24.3022C11.6569 24.1828 11.5266 24.1017 11.4615 24.0581C11.4179 24.0368 11.3314 23.9395 11.2011 23.7658C10.4851 22.8974 10.2681 22.4308 10.5503 22.3658C10.2682 22.4308 10.0348 22.2194 9.85034 21.7307C9.66574 21.2426 9.60623 20.8678 9.67122 20.6075L9.60623 20.5751C9.62812 20.4881 9.63884 20.2335 9.63884 19.81C9.63884 19.3866 9.6662 19.0014 9.72036 18.6543C9.77486 18.3071 9.87781 18.1333 10.0296 18.1333C9.87781 18.1549 9.76403 18.019 9.68798 17.7266C9.61204 17.4333 9.60668 17.2324 9.67156 17.1241C9.69322 17.0589 9.79116 17.1028 9.96458 17.2544C10.1379 17.4058 10.2357 17.5041 10.2574 17.5472C10.5396 17.3949 10.6482 17.1999 10.583 16.9609C10.5396 16.8743 10.3116 16.6465 9.89936 16.2773C8.96603 15.6699 8.48841 15.3768 8.46709 15.3982C8.59684 15.1598 8.56446 14.9537 8.36915 14.7798C8.15229 14.9101 8.02756 14.9425 7.99483 14.8778C7.96245 14.8125 7.93532 14.6936 7.91331 14.5197C7.89188 14.3463 7.83738 14.2487 7.75084 14.2269C7.64218 14.2053 7.51186 14.1186 7.36011 13.9666C9.29143 10.885 11.8413 8.4762 15.0098 6.73973C15.1399 6.71829 15.3785 6.70735 15.7257 6.70735C15.8991 6.72901 16.0621 6.7834 16.2138 6.87005C16.3658 6.9567 16.5233 7.0763 16.6857 7.22806C16.8488 7.37947 16.9735 7.48813 17.0602 7.55335C17.1036 7.42303 17.0494 7.22772 16.8976 6.9673C16.9407 6.83698 17.1795 6.70666 17.6136 6.57657C18.1124 6.51147 18.4383 6.52207 18.59 6.60929C18.46 6.41387 18.2432 6.14251 17.9392 5.79545L17.7765 5.95792C17.6028 5.80616 17.1474 5.88198 16.4093 6.18584C16.3663 6.20727 16.2576 6.26736 16.0838 6.36473C15.9104 6.46221 15.7689 6.5329 15.6607 6.57623C15.5304 6.61967 15.4003 6.6305 15.27 6.60884C16.3115 6.0448 17.3317 5.59922 18.3302 5.27405C18.3947 5.31715 18.5035 5.4095 18.6555 5.55042C18.8072 5.69146 18.9266 5.79476 19.0135 5.85964C18.9484 5.81654 18.9048 5.83775 18.8832 5.92474C18.7965 6.18504 18.7965 6.40201 18.8832 6.57554C18.9915 6.72787 19.1381 6.81418 19.3227 6.83619C19.5073 6.85762 19.7295 6.8469 19.9899 6.80335C20.2503 6.76025 20.4242 6.73825 20.511 6.73825L20.8366 6.77108C21.5308 6.83619 21.8023 6.77108 21.6504 6.57554C21.7154 6.66277 21.7914 6.84166 21.8781 7.11302C21.9648 7.38438 22.0627 7.57433 22.1709 7.68287C22.2796 7.59565 22.3013 7.44389 22.236 7.22692C22.1709 7.00995 22.1709 6.85762 22.236 6.77097C22.2575 6.72787 22.3227 6.68397 22.4313 6.64065C22.54 6.59755 22.6646 6.54875 22.8058 6.49448C22.9468 6.43998 23.0391 6.40213 23.0828 6.38058C23.2129 6.29358 23.1259 6.1416 22.8222 5.92463C22.7788 5.90285 22.6867 5.87035 22.5458 5.82691C22.4048 5.78416 22.2797 5.74015 22.1714 5.69694C22.0631 5.65384 21.9492 5.59398 21.8298 5.51804C21.7104 5.442 21.656 5.35534 21.6666 5.2574C21.6776 5.15946 21.7376 5.03496 21.8458 4.88297C21.9761 4.77477 22.1878 4.73122 22.4806 4.75288C22.7734 4.77432 22.9961 4.82847 23.1478 4.91535C23.7341 5.24098 23.8206 5.53446 23.4085 5.79442C23.6258 5.81585 23.8862 5.90274 24.1899 6.05449C24.4934 6.20659 24.6128 6.3694 24.5479 6.54316C24.7216 6.21765 24.895 6.05449 25.0689 6.05449C25.1772 6.0765 25.2807 6.22312 25.3781 6.49437C25.4756 6.7655 25.5351 6.91189 25.5566 6.9339C25.7306 7.17231 25.9031 7.22669 26.0779 7.09637C26.2512 6.96628 26.4307 6.77644 26.6148 6.52675C26.799 6.27739 26.902 6.16349 26.9239 6.18515C26.707 6.09873 26.6843 6.01173 26.8592 5.92485C27.1838 5.72954 27.4772 5.67516 27.7379 5.76238C27.8025 5.80548 27.89 5.90342 27.9976 6.05483C28.1924 6.44602 28.16 6.63016 27.9001 6.6085C28.0952 6.78226 28.1761 6.99946 28.1445 7.25953C28.1117 7.51994 27.9427 7.63943 27.6392 7.61754C27.5311 7.61754 27.373 7.56304 27.1666 7.45484C26.9605 7.34652 26.8033 7.28701 26.6944 7.27595C26.586 7.26466 26.4338 7.32452 26.2387 7.45484C26.152 7.5635 26.0381 7.74809 25.8969 8.00827C25.7557 8.26914 25.6308 8.45328 25.5223 8.56159C25.197 8.88711 24.654 9.00671 23.8945 8.91961C23.9597 8.91961 23.954 8.98471 23.8781 9.11503C23.8018 9.24512 23.6992 9.39186 23.5689 9.55445C23.4386 9.71715 23.3626 9.80939 23.3412 9.83105C23.1458 10.048 23.0157 10.2977 22.9505 10.5798C22.9505 10.6232 22.9395 10.7699 22.9176 11.0191C22.8956 11.2688 22.8525 11.459 22.7873 11.589C23.0477 11.5238 23.254 11.6545 23.4057 11.9797C23.536 12.2837 23.536 12.4464 23.4057 12.4682C24.1221 12.3602 24.7515 12.4033 25.2944 12.5986C26.0755 12.8806 26.5211 13.1627 26.6295 13.4449C26.7592 13.2494 27.0736 13.2383 27.573 13.4121C27.7684 13.5204 27.9413 13.8464 28.0942 14.3885C28.1808 14.7138 28.3276 14.9962 28.5336 15.2347C28.7401 15.4734 28.9621 15.5384 29.2012 15.43L29.2984 15.3649C29.3854 15.3218 29.4557 15.2836 29.5098 15.2512C29.5644 15.2188 29.6237 15.1752 29.6885 15.1208C29.754 15.0666 29.7922 15.0178 29.8024 14.9747C29.8125 14.9313 29.7969 14.8874 29.754 14.8443C29.6018 14.714 29.4879 14.5351 29.4122 14.3076C29.337 14.0796 29.3533 13.8787 29.4615 13.7049C29.5261 13.6182 29.6999 13.4879 29.9818 13.3141C30.2644 13.1403 30.438 12.9668 30.5027 12.7932C30.5906 12.5111 30.4812 12.2777 30.1776 12.093C29.8738 11.9089 29.7215 11.7407 29.7215 11.5885C29.7215 11.4798 29.7921 11.3499 29.9329 11.1978C30.0745 11.046 30.1343 10.9045 30.1121 10.7746C30.1121 10.7091 30.0737 10.5738 29.998 10.3675C29.9228 10.1609 29.8787 10.0091 29.8681 9.91155C29.8571 9.81383 29.9064 9.69993 30.0143 9.56995C30.1658 9.48296 30.524 9.48843 31.0881 9.58592C31.6524 9.68386 32.0216 9.78693 32.1956 9.89513C32.261 9.93823 32.402 10.0034 32.6189 10.0906C32.8358 10.1767 33.0259 10.269 33.189 10.367C33.3509 10.4645 33.4433 10.5564 33.4648 10.6434H33.3025C33.4542 10.7741 33.5468 10.9255 33.5787 11.0994C33.6116 11.2736 33.5304 11.4034 33.3353 11.4906C33.4648 11.4686 33.6391 11.5013 33.8561 11.588C34.2034 11.7181 34.2144 11.8377 33.8888 11.9461C33.9536 11.924 34.0457 11.9027 34.1648 11.8808C34.2841 11.8592 34.3759 11.8264 34.4414 11.7834C34.4843 11.7615 34.5388 11.7238 34.6037 11.6693C34.6693 11.6151 34.7176 11.5823 34.7505 11.572C34.7832 11.5612 34.8315 11.55 34.8971 11.5391C34.9618 11.5284 35.0267 11.5448 35.0914 11.5879C35.1141 11.5879 35.1624 11.5335 35.2381 11.4252C35.3134 11.317 35.3958 11.2084 35.482 11.1001C35.5691 10.9917 35.6443 10.9376 35.7099 10.9376C35.7742 10.9376 35.8344 10.9643 35.8881 11.0185C35.9431 11.073 35.9856 11.1324 36.0185 11.1976C36.0513 11.2629 36.0832 11.3334 36.116 11.4089C36.1488 11.4849 36.1753 11.5449 36.1972 11.588C36.2401 11.6964 36.3438 11.8107 36.5062 11.9296C36.6686 12.0487 36.7715 12.1629 36.8152 12.2712C36.8371 12.3364 36.8796 12.4993 36.9452 12.76C37.0099 13.0204 37.0974 13.1993 37.2055 13.2968C37.3139 13.3947 37.4766 13.4759 37.6934 13.5409C37.7369 13.5629 37.8352 13.5519 37.9865 13.5088C38.1379 13.4651 38.2632 13.4543 38.3607 13.4759C38.459 13.4974 38.5073 13.584 38.5073 13.7363C38.6373 13.606 38.702 13.519 38.702 13.4759C38.7243 13.7581 38.7942 13.9861 38.9143 14.1596C39.0337 14.3329 39.2233 14.4093 39.484 14.3873L39.4184 15.1036C39.3536 15.2119 39.1909 15.2931 38.93 15.3473C38.6693 15.4018 38.507 15.4509 38.4414 15.494C38.3766 15.5157 38.2191 15.6459 37.9693 15.8849C37.7196 16.1238 37.6173 16.2649 37.6603 16.308C37.292 15.8956 36.7378 15.7762 36.0003 15.95C35.176 16.0802 34.6112 16.2104 34.3077 16.3407C33.9608 16.5146 33.7216 16.677 33.5914 16.8288C33.5696 16.8505 33.5324 16.9267 33.4778 17.0567C33.4235 17.1868 33.3694 17.3064 33.3154 17.4147C33.2605 17.523 33.2125 17.5773 33.1692 17.5773C33.2998 17.5562 33.4459 17.4526 33.6086 17.2684C33.7717 17.0839 33.8747 16.9812 33.9177 16.9592C34.4814 16.5905 34.948 16.4602 35.3192 16.5712C35.7964 16.7016 35.8725 16.8753 35.5466 17.0923C35.5041 17.1354 35.3894 17.1517 35.2053 17.1411C35.0211 17.1304 34.8962 17.1354 34.8307 17.1575C35.0266 17.2006 35.1889 17.2605 35.32 17.3359C35.4495 17.4119 35.4823 17.5151 35.4171 17.6452C35.7641 17.8406 35.8295 18.0576 35.6126 18.2965C35.3301 18.5791 34.9946 18.698 34.6036 18.6545C34.6692 18.6545 34.6692 18.6981 34.6036 18.7847L34.0496 19.1428C34.0066 19.1641 33.8655 19.2182 33.6266 19.3055C33.3879 19.3917 33.2248 19.4901 33.1382 19.5983C33.0734 19.6851 33.0407 19.8152 33.0407 19.9894C33.0407 20.1633 33.0297 20.2936 33.0079 20.3803C32.9865 20.4675 32.8994 20.4885 32.7481 20.4454C32.6825 20.5755 32.482 20.6787 32.1456 20.7541C31.8093 20.8301 31.587 20.944 31.4784 21.0957C31.6079 21.2696 31.5978 21.443 31.4456 21.6168C31.1849 21.8341 30.9571 21.8121 30.7621 21.5517C30.6536 21.5951 30.572 21.7034 30.5177 21.8773C30.4639 22.0511 30.382 22.1705 30.2742 22.2353C30.4264 22.4741 30.4038 22.6482 30.2095 22.7562C30.2306 22.7562 30.2798 22.7782 30.3554 22.8214C30.4311 22.8647 30.5122 22.9189 30.5997 22.9841C30.6863 23.0493 30.7401 23.082 30.7621 23.082C30.6754 23.2769 30.5556 23.3745 30.4038 23.3745C30.5341 23.7219 30.3718 24.1019 29.9162 24.5139C29.8286 24.6006 29.6929 24.6873 29.5088 24.7744C29.3234 24.861 29.1557 24.9314 29.0035 24.9857C28.8513 25.0401 28.7651 25.078 28.7433 25.0996C28.5263 25.2953 28.3632 25.4959 28.2552 25.7019C28.1471 25.9084 28.1307 26.1088 28.2059 26.3043C28.2821 26.5002 28.4826 26.6297 28.8087 26.6953L28.8403 26.9555V27.5412L28.873 27.8018C28.8953 27.9536 28.9117 28.0894 28.9223 28.2091C28.9329 28.3286 28.9329 28.4799 28.9223 28.6648C28.9117 28.849 28.8627 28.9524 28.776 28.9735C28.6898 28.9957 28.5703 28.9735 28.4181 28.9084C28.2438 28.8217 28.0381 28.3442 27.7989 27.4763C27.7556 27.2595 27.6249 26.9995 27.4079 26.6952C27.2995 26.8036 27.2074 26.8739 27.1317 26.9064C27.0563 26.9391 27.0012 26.945 26.9696 26.9228C26.9369 26.9013 26.8772 26.8522 26.7903 26.7765C26.7036 26.7008 26.6283 26.6407 26.5628 26.5978C26.4543 26.5331 26.2647 26.4783 25.9928 26.4355C25.722 26.3921 25.5529 26.3375 25.4886 26.2728C24.9672 26.6641 24.6523 26.5657 24.544 25.9805C24.5009 26.0886 24.5061 26.2349 24.5604 26.42C24.6149 26.6044 24.6419 26.7072 24.6419 26.7289C24.4901 27.0115 24.2515 27.0325 23.9259 26.7937C23.7955 26.6641 23.4971 26.6478 23.0304 26.7452C22.5637 26.8425 22.2545 26.8588 22.1028 26.7937C22.1248 26.7937 22.1679 26.8261 22.2331 26.8915C22.2981 26.9341 22.3417 26.9669 22.3633 26.9888C22.3414 27.0759 22.309 27.1405 22.2653 27.1839C22.2218 27.2269 22.1783 27.2433 22.1351 27.2331C22.0917 27.2222 22.0429 27.2222 21.9884 27.2331C21.9341 27.2433 21.8854 27.2596 21.8419 27.2815C21.7551 27.3462 21.6468 27.4601 21.5165 27.6228C21.3864 27.7856 21.2888 27.8886 21.2237 27.9315C21.3537 28.2788 21.4135 28.5449 21.4028 28.729C21.3915 28.9139 21.3594 29.1852 21.3049 29.543C21.2504 29.9008 21.2233 30.1888 21.2233 30.4061C21.2233 30.7525 21.3265 31.1552 21.5326 31.6102C21.7388 32.0659 21.9828 32.3804 22.265 32.5544C22.4173 32.641 22.6778 32.6948 23.0465 32.7164C23.4153 32.7385 23.6758 32.7164 23.8276 32.6516C23.9579 32.5873 24.0553 32.5108 24.1204 32.4242C24.1855 32.3375 24.24 32.2119 24.2831 32.0496C24.3265 31.8873 24.3594 31.7734 24.381 31.7086C24.5328 31.2957 24.8149 31.0789 25.2267 31.057C25.4881 31.0352 25.6769 31.0633 25.7971 31.1382C25.9165 31.2142 25.9649 31.3172 25.943 31.4476C25.9212 31.5775 25.8779 31.7133 25.8134 31.8544C25.748 31.9957 25.6668 32.1526 25.569 32.3267C25.4719 32.501 25.4118 32.631 25.3909 32.7181C25.3474 32.8916 25.3089 33.1355 25.277 33.4509C25.2442 33.7653 25.2168 33.9554 25.195 34.0208C25.2388 34.0421 25.4012 34.0529 25.6831 34.0529C25.6831 34.0099 25.6995 33.9389 25.7322 33.8414C25.7643 33.7439 25.7807 33.6842 25.7807 33.6627C25.8896 33.8367 26.0632 33.9335 26.302 33.9554C26.5407 33.9772 26.7147 33.8906 26.8231 33.6951C26.8669 33.7603 26.9971 33.9234 27.2142 34.184C27.4311 34.4438 27.5504 34.6608 27.5725 34.8348C27.5942 34.9223 27.6371 35.0627 27.702 35.2586C27.7675 35.4537 27.7894 35.5895 27.7675 35.6659C27.7458 35.7408 27.6371 35.7794 27.4421 35.7794C27.3555 35.7794 27.301 35.8122 27.2798 35.8769C27.2572 35.9425 27.2572 36.0232 27.2798 36.1208C27.3017 36.2183 27.329 36.3109 27.361 36.3975C27.3933 36.4837 27.4367 36.5766 27.4906 36.6742C27.5459 36.771 27.5726 36.831 27.5726 36.8528C27.9627 37.5684 28.495 37.7639 29.1675 37.4389C29.1675 38.068 29.0154 38.4151 28.711 38.4799C28.5394 38.523 28.3447 38.4134 28.1277 38.1536ZM28.6139 45.5078C28.571 45.2908 28.5491 45.1175 28.5515 44.988C28.5288 44.814 28.6053 44.5806 28.7785 44.2879C28.952 43.9953 29.0387 43.7724 29.0387 43.6207C28.6915 43.534 28.5614 43.2516 28.6474 42.7743C28.6911 42.4486 29.0055 42.0146 29.5916 41.4723C30.0043 41.1032 30.1339 40.5818 29.9825 39.9097C29.917 39.6275 29.8624 39.2147 29.8194 38.6723C29.7765 38.1295 29.7327 37.7499 29.689 37.533C29.689 37.5978 29.792 37.6575 29.9988 37.7117C30.205 37.7655 30.3297 37.8365 30.373 37.9224C30.4164 37.8581 30.4703 37.7382 30.5357 37.5649C30.6005 37.3909 30.6662 37.2611 30.73 37.174C30.7738 37.1089 30.8658 37.0277 31.0072 36.9296C31.1483 36.8321 31.2405 36.7729 31.2838 36.751C31.3263 36.7295 31.4246 36.6593 31.576 36.5396C31.7281 36.4202 31.8531 36.3284 31.9509 36.2633C32.0492 36.1982 32.1784 36.1494 32.3415 36.1174C32.5047 36.0847 32.6182 36.1331 32.6829 36.2633C32.7918 36.3938 32.7703 36.5942 32.6182 36.8658C32.466 37.1374 32.466 37.3273 32.6182 37.4362C32.6404 37.3706 32.6616 37.229 32.6829 37.0121C32.7051 36.7951 32.7703 36.6324 32.8784 36.5232C33.0087 36.3936 33.1331 36.3171 33.253 36.296C33.3723 36.2735 33.4804 36.2898 33.5777 36.3448C33.676 36.3991 33.7899 36.474 33.9195 36.5723C34.0498 36.6698 34.1691 36.7296 34.2776 36.751C34.603 36.8595 34.994 37.0983 35.4497 37.4673C35.4279 37.4452 35.4279 37.4182 35.4497 37.3854C35.4716 37.3534 35.5145 37.3207 35.5802 37.2879C35.6449 37.2559 35.7042 37.2232 35.7588 37.1904C35.8126 37.158 35.8719 37.1319 35.9375 37.1097L36.035 37.0769C36.1864 37.0769 36.2952 37.0663 36.36 37.0441C36.4247 37.0227 36.5181 37.0441 36.6366 37.1097C36.7553 37.1744 36.8373 37.2232 36.8802 37.2559C36.9238 37.2879 36.9995 37.3476 37.1081 37.4346C37.2165 37.5213 37.293 37.5868 37.3351 37.6297C37.4007 37.6726 37.52 37.7491 37.6933 37.8576C37.8673 37.966 38.0031 38.0527 38.1007 38.1173C38.199 38.1821 38.2855 38.2805 38.3604 38.4096C38.4361 38.5407 38.4643 38.6816 38.4424 38.8337C38.5729 38.8556 38.8327 38.9418 39.2237 39.0935C39.2892 39.1365 39.4242 39.1752 39.6309 39.2071C39.8371 39.2398 39.9727 39.2891 40.0378 39.3534C36.8935 42.6757 33.0842 44.7265 28.6139 45.5078Z"
        fill={color}
      />
    </svg>
  )
);

export default World;