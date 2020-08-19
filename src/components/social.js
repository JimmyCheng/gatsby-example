import React from "react"
import Link from "./link"
import { css } from "@emotion/core"
import config from "../../config/website"

export const Twitter = ({
  color = `rgba(255,255,255,0.7)`,
  url = `${config.twitter}`,
}) => (
  <Link
    to={url}
    css={css`
      color: ${color};
      margin-left: 20px;
      :hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
    aria-label="Visit my Twitter"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"
      />
    </svg>
  </Link>
)

export const LinkedIn = ({
  color = `rgba(255,255,255,0.7)`,
  url = `${config.linkedin}`,
}) => (
  <Link
    to={url}
    css={css`
      margin-left: 20px;
      color: ${color};
      :hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
    aria-label="Visit my LinkedIn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
    >
      <path
        fill="currentColor"
        d="M21.6,0 L0.988235294,0 C0.423529412,0 0,0.418546713 0,0.976608997 L0,21.4853979 C0,21.9039446 0.423529412,22.3224913 0.988235294,22.3224913 L21.7411765,22.3224913 C22.3058824,22.3224913 22.7294118,21.9039446 22.7294118,21.3458824 L22.7294118,0.976608997 C22.5882353,0.418546713 22.1647059,0 21.6,0 Z M6.63529412,18.9741176 L3.38823529,18.9741176 L3.38823529,8.37093426 L6.77647059,8.37093426 L6.77647059,18.9741176 L6.63529412,18.9741176 Z M5.08235294,6.97577855 C3.95294118,6.97577855 3.10588235,5.99916955 3.10588235,5.02256055 C3.10588235,3.90643599 3.95294118,3.06934256 5.08235294,3.06934256 C6.21176471,3.06934256 7.05882353,3.90643599 7.05882353,5.02256055 C6.91764706,5.99916955 6.07058824,6.97577855 5.08235294,6.97577855 Z M19.2,18.9741176 L15.8117647,18.9741176 L15.8117647,13.8120415 C15.8117647,12.5564014 15.8117647,11.0217301 14.1176471,11.0217301 C12.4235294,11.0217301 12.1411765,12.4168858 12.1411765,13.8120415 L12.1411765,19.1136332 L8.75294118,19.1136332 L8.75294118,8.37093426 L12,8.37093426 L12,9.76608997 C12.4235294,8.92899654 13.5529412,8.09190311 15.1058824,8.09190311 C18.4941176,8.09190311 19.0588235,10.3241522 19.0588235,13.1144637 L19.0588235,18.9741176 L19.2,18.9741176 Z"
      />
    </svg>
  </Link>
)

export const GitHub = ({
  color = `rgba(255,255,255,0.7)`,
  url = `${config.github}`,
}) => (
  <Link
    to={url}
    css={css`
      margin-left: 20px;
      color: ${color};
      :hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
    aria-label="Visit my GitHub"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.2941176,0.279031142 C5.08235294,0.279031142 0,5.3015917 0,11.4402768 C0,16.3233218 3.24705882,20.5087889 7.76470588,22.0434602 C8.32941176,22.1829758 8.47058824,21.7644291 8.47058824,21.4853979 C8.47058824,21.2063668 8.47058824,20.5087889 8.47058824,19.5321799 C5.36470588,20.2297578 4.65882353,18.1370242 4.65882353,18.1370242 C4.09411765,16.8813841 3.38823529,16.4628374 3.38823529,16.4628374 C2.4,15.7652595 3.52941176,15.7652595 3.52941176,15.7652595 C4.65882353,15.9047751 5.22352941,16.8813841 5.22352941,16.8813841 C6.21176471,18.6950865 7.90588235,18.1370242 8.47058824,17.8579931 C8.61176471,17.1604152 8.89411765,16.6023529 9.17647059,16.3233218 C6.63529412,16.0442907 4.09411765,15.0676817 4.09411765,10.742699 C4.09411765,9.48705882 4.51764706,8.51044983 5.22352941,7.81287197 C5.08235294,7.53384083 4.65882353,6.41771626 5.36470588,4.88304498 C5.36470588,4.88304498 6.35294118,4.60401384 8.47058824,5.99916955 C9.31764706,5.72013841 10.3058824,5.58062284 11.2941176,5.58062284 C12.2823529,5.58062284 13.2705882,5.72013841 14.1176471,5.99916955 C16.2352941,4.60401384 17.2235294,4.88304498 17.2235294,4.88304498 C17.7882353,6.41771626 17.5058824,7.53384083 17.3647059,7.81287197 C18.0705882,8.6499654 18.4941176,9.62657439 18.4941176,10.742699 C18.4941176,15.0676817 15.8117647,15.9047751 13.2705882,16.1838062 C13.6941176,16.7418685 14.1176471,17.4394464 14.1176471,18.4160554 C14.1176471,19.9507266 14.1176471,21.0668512 14.1176471,21.4853979 C14.1176471,21.7644291 14.2588235,22.1829758 14.9647059,22.0434602 C19.4823529,20.5087889 22.7294118,16.3233218 22.7294118,11.4402768 C22.5882353,5.3015917 17.5058824,0.279031142 11.2941176,0.279031142 Z"
      />
    </svg>
  </Link>
)

export const YouTube = ({
  color = `rgba(255,255,255,0.7)`,
  url = `${config.youtube}`,
}) => (
  <Link
    to={url}
    css={css`
      margin-left: 20px;
      color: ${color};
      :hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
    aria-label="Visit my YouTube"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      viewBox="0 0 23 24"
    >
      <path
        fill="currentColor"
        d="M13.4714286,18.0666667 L13.4714286,15.7333333 C13.4714286,15.2444444 13.34,15 13.0771429,15 C12.9019048,15 12.7266667,15.0666667 12.5514286,15.2 L12.5514286,18.5333333 C12.7266667,18.7111111 12.9019048,18.8 13.0771429,18.8 C13.34,18.8 13.4714286,18.5555556 13.4714286,18.0666667 Z M16.1657143,16.2666667 L17.1514286,16.2666667 L17.1514286,15.7333333 C17.1514286,15.2444444 16.9980952,15 16.6914286,15 C16.3847619,15 16.2095238,15.2444444 16.1657143,15.7333333 L16.1657143,16.2666667 Z M7.82,12.2666667 L7.82,13.3333333 L6.63714286,13.3333333 L6.63714286,19.6 L5.52,19.6 L5.52,13.3333333 L4.40285714,13.3333333 L4.40285714,12.2666667 L7.82,12.2666667 Z M10.7771429,14.1333333 L10.7771429,19.6 L9.79142857,19.6 L9.79142857,19 C9.39714286,19.4444444 9.0247619,19.6666667 8.67428571,19.6666667 C8.32380952,19.6666667 8.1047619,19.5333333 8.01714286,19.2666667 C7.97333333,19.1333333 7.95142857,18.8666667 7.95142857,18.4666667 L7.95142857,14.1333333 L8.93714286,14.1333333 L8.93714286,18.2 C8.93714286,18.4222222 8.93714286,18.5333333 8.93714286,18.5333333 C8.93714286,18.7111111 9.00285714,18.8 9.13428571,18.8 C9.35333333,18.8 9.57238095,18.6444444 9.79142857,18.3333333 L9.79142857,14.1333333 L10.7771429,14.1333333 Z M14.4571429,15.8 L14.4571429,18 C14.4571429,18.4888889 14.4133333,18.8444444 14.3257143,19.0666667 C14.2380952,19.4666667 13.9971429,19.6666667 13.6028571,19.6666667 C13.252381,19.6666667 12.9019048,19.4666667 12.5514286,19.0666667 L12.5514286,19.6 L11.5657143,19.6 L11.5657143,12.2666667 L12.5514286,12.2666667 L12.5514286,14.6666667 C12.8580952,14.2666667 13.2085714,14.0666667 13.6028571,14.0666667 C13.9971429,14.0666667 14.2380952,14.2888889 14.3257143,14.7333333 C14.4133333,14.9111111 14.4571429,15.2666667 14.4571429,15.8 Z M18.1371429,17.7333333 L18.1371429,17.8666667 C18.1371429,18.1333333 18.1152381,18.3555556 18.0714286,18.5333333 C18.0714286,18.7111111 18.0057143,18.8888889 17.8742857,19.0666667 C17.6114286,19.4666667 17.2171429,19.6666667 16.6914286,19.6666667 C16.2095238,19.6666667 15.8152381,19.4888889 15.5085714,19.1333333 C15.2895238,18.8666667 15.18,18.4444444 15.18,17.8666667 L15.18,15.9333333 C15.18,15.3555556 15.2895238,14.9333333 15.5085714,14.6666667 C15.7714286,14.2666667 16.1657143,14.0666667 16.6914286,14.0666667 C17.2171429,14.0666667 17.5895238,14.2666667 17.8085714,14.6666667 C18.027619,14.9333333 18.1371429,15.3555556 18.1371429,15.9333333 L18.1371429,17.0666667 L16.1657143,17.0666667 L16.1657143,18 C16.1657143,18.5333333 16.3409524,18.8 16.6914286,18.8 C16.9104762,18.8 17.0419048,18.6666667 17.0857143,18.4 C17.0857143,18.4 17.107619,18.3555556 17.1514286,18.2666667 C17.1952381,18.1777778 17.1952381,18.1111111 17.1514286,18.0666667 L17.1514286,17.7333333 L18.1371429,17.7333333 Z M11.5,5.46666667 L11.5,7.8 C11.5,8.28888889 11.3466667,8.53333333 11.04,8.53333333 C10.7333333,8.53333333 10.58,8.28888889 10.58,7.8 L10.58,5.46666667 C10.58,4.93333333 10.7333333,4.66666667 11.04,4.66666667 C11.3466667,4.66666667 11.5,4.93333333 11.5,5.46666667 Z M19.32,16.0666667 C19.32,14.3333333 19.232381,13.0444444 19.0571429,12.2 C18.9695238,11.7555556 18.7504762,11.4 18.4,11.1333333 C18.0495238,10.8666667 17.6771429,10.6888889 17.2828571,10.6 C15.9685714,10.4666667 13.9533333,10.4 11.2371429,10.4 C8.5647619,10.4 6.57142857,10.4666667 5.25714286,10.6 C4.81904762,10.6444444 4.44666667,10.8222222 4.14,11.1333333 C3.83333333,11.4444444 3.61428571,11.8 3.48285714,12.2 C3.30761905,13.0888889 3.22,14.3777778 3.22,16.0666667 C3.22,17.8 3.30761905,19.0888889 3.48285714,19.9333333 C3.57047619,20.3777778 3.78952381,20.7555556 4.14,21.0666667 C4.49047619,21.3777778 4.84095238,21.5333333 5.19142857,21.5333333 C6.54952381,21.7111111 8.5647619,21.8 11.2371429,21.8 C13.9095238,21.8 15.9247619,21.7111111 17.2828571,21.5333333 C17.7209524,21.4888889 18.0933333,21.3333333 18.4,21.0666667 C18.7066667,20.8 18.9257143,20.4222222 19.0571429,19.9333333 C19.232381,19.0888889 19.32,17.8 19.32,16.0666667 Z M8.28,6.4 L9.59428571,2 L8.47714286,2 L7.75428571,4.86666667 L6.96571429,2 L5.78285714,2 L6.17714286,3 L6.50571429,4.06666667 C6.85619048,5.08888889 7.0752381,5.86666667 7.16285714,6.4 L7.16285714,9.4 L8.28,9.4 L8.28,6.4 Z M12.4857143,7.6 L12.4857143,5.66666667 C12.4857143,5.08888889 12.3761905,4.66666667 12.1571429,4.4 C11.8942857,4 11.5219048,3.8 11.04,3.8 C10.5580952,3.8 10.1857143,4 9.92285714,4.4 C9.70380952,4.66666667 9.59428571,5.08888889 9.59428571,5.66666667 L9.59428571,7.6 C9.59428571,8.17777778 9.70380952,8.6 9.92285714,8.86666667 C10.1857143,9.26666667 10.5580952,9.46666667 11.04,9.46666667 C11.5219048,9.46666667 11.8942857,9.26666667 12.1571429,8.86666667 C12.3761905,8.6 12.4857143,8.17777778 12.4857143,7.6 Z M15.18,9.4 L16.1657143,9.4 L16.1657143,3.86666667 L15.18,3.86666667 L15.18,8.06666667 C14.9609524,8.37777778 14.7419048,8.53333333 14.5228571,8.53333333 C14.3914286,8.53333333 14.3257143,8.46666667 14.3257143,8.33333333 C14.2819048,8.28888889 14.26,8.15555556 14.26,7.93333333 L14.26,3.86666667 L13.2742857,3.86666667 L13.2742857,8.26666667 C13.2742857,8.62222222 13.3180952,8.88888889 13.4057143,9.06666667 C13.4933333,9.33333333 13.6904762,9.46666667 13.9971429,9.46666667 C14.347619,9.46666667 14.7419048,9.24444444 15.18,8.8 L15.18,9.4 Z M22.54,4.86666667 L22.54,19.1333333 C22.54,20.3333333 22.1238095,21.3555556 21.2914286,22.2 C20.4590476,23.0444444 19.4733333,23.4444444 18.3342857,23.4 L4.20571429,23.4 C3.06666667,23.4 2.08095238,23 1.24857143,22.2 C0.416190476,21.4 -1.62409768e-15,20.3777778 -1.33226763e-15,19.1333333 L-1.33226763e-15,4.86666667 C-1.33226763e-15,3.66666667 0.416190476,2.64444444 1.24857143,1.8 C2.08095238,0.955555556 3.06666667,0.555555556 4.20571429,0.6 L18.3342857,0.6 C19.4733333,0.6 20.4590476,1 21.2914286,1.8 C22.1238095,2.6 22.54,3.62222222 22.54,4.86666667 Z"
      />
    </svg>
  </Link>
)

export const RSS = ({
  color = `rgba(255,255,255,0.7)`,
  url = `${config.rss}`,
}) => (
  <Link
    to={url}
    css={css`
      margin-left: 20px;
      color: ${color};
      :hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
    aria-label="Subscribe to my RSS Feed"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 8 8"
    >
      <rect width="8" height="8" rx="1.5" fill="currentColor" />
      <circle cx="2" cy="6" r="1" />
      <path d="m 1,4 a 3,3 0 0 1 3,3 h 1 a 4,4 0 0 0 -4,-4 z" />
      <path d="m 1,2 a 5,5 0 0 1 5,5 h 1 a 6,6 0 0 0 -6,-6 z" />
    </svg>
  </Link>
)
