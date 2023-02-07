import { Link } from "@remix-run/react";
import { DynamicLogo } from "~/components/logo.component";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white bg-white dark:bg-gray-900 sm:flex-col sm:items-center sm:justify-center">
      <section className="pt-16 pb-10">
        <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
          <DynamicLogo className="mx-auto my-20 h-12 w-auto text-gray-800 dark:text-gray-200" />
          {/* <img src="/loguito.svg" alt="Linked Insighter" className=" /> */}
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Unlock Your LinkedIn Potential <br /> with AI-Powered Insights
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Transform your LinkedIn profile with Linked Insighter. Our AI
            technology provides analysis and optimization suggestions to help
            you showcase your skills and reach new career opportunities.
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg bg-violet-700 py-3 px-5 text-center text-base font-medium text-white hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-900"
            >
              Sign In and Get Started
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold uppercase text-gray-400">
              POWERED BY
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
              <a
                href="https://cohere.ai/"
                className="mr-5 mb-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <svg
                  width="1552"
                  height="446"
                  viewBox="0 0 1552 446"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="false block h-11 w-auto align-top"
                >
                  <path
                    d="M1377.78 250.565C1390.73 200.116 1424.14 181.954 1451.08 181.954C1480.74 181.954 1509.72 199.107 1513.47 250.565H1377.78ZM1463.69 444.627C1502.9 444.627 1529.84 431.174 1549.95 415.703L1543.82 406.958C1525.07 420.748 1502.22 430.502 1472.9 430.502C1419.71 430.502 1372.66 398.55 1372.66 304.042C1372.66 285.88 1374.02 269.736 1375.39 263.346H1552C1540.75 195.071 1497.45 170.183 1451.08 170.183C1397.21 170.183 1327.66 217.269 1327.66 305.723C1327.66 399.896 1396.53 444.627 1463.69 444.627ZM1151.73 440.255H1244.12V430.838C1218.55 424.784 1217.87 416.712 1217.87 348.437V252.92L1246.85 221.641C1256.4 210.878 1260.83 207.515 1269.35 207.515C1281.29 207.515 1289.81 218.278 1304.13 218.278C1317.43 218.278 1324.93 207.515 1324.93 192.38C1324.93 180.609 1316.4 172.537 1301.4 172.537C1281.63 172.537 1270.04 183.299 1246.85 208.188L1217.87 239.13V170.183L1151.04 205.497V215.251C1174.91 217.269 1174.91 218.95 1174.91 292.27V348.437C1174.91 416.712 1174.23 424.784 1151.73 430.838V440.255ZM954.657 250.565C967.613 200.116 1001.03 181.954 1027.96 181.954C1057.62 181.954 1086.6 199.107 1090.35 250.565H954.657ZM1040.58 444.627C1079.79 444.627 1106.72 431.174 1126.84 415.703L1120.7 406.958C1101.95 420.748 1079.1 430.502 1049.78 430.502C996.594 430.502 949.543 398.55 949.543 304.042C949.543 285.88 950.907 269.736 952.271 263.346H1128.88C1117.63 195.071 1074.33 170.183 1027.96 170.183C974.091 170.183 904.538 217.269 904.538 305.723C904.538 399.896 973.409 444.627 1040.58 444.627ZM554.724 245.184C570.749 245.184 583.023 233.076 583.023 217.269C583.023 201.798 570.749 189.69 554.724 189.69C539.04 189.69 527.107 201.798 527.107 217.269C527.107 233.076 539.04 245.184 554.724 245.184ZM554.724 445.636C570.749 445.636 583.023 434.201 583.023 418.394C583.023 402.586 570.749 390.815 554.724 390.815C539.04 390.815 527.107 402.586 527.107 418.394C527.107 434.201 539.04 445.636 554.724 445.636ZM365.156 433.865C321.856 433.865 283.67 400.232 283.67 309.087C283.67 218.278 321.856 181.618 365.156 181.618C409.139 181.618 447.666 218.278 447.666 309.087C447.666 400.232 409.139 433.865 365.156 433.865ZM365.156 444.964C422.436 444.964 493.353 396.869 493.353 309.087C493.353 221.305 422.436 170.183 365.156 170.183C308.559 170.183 237.641 221.305 237.641 309.087C237.641 396.869 308.559 444.964 365.156 444.964ZM132.629 443.955C172.861 443.955 201.842 428.82 219.571 406.622L213.775 399.559C197.069 417.721 172.861 429.829 141.835 429.829C84.2144 429.829 44.6643 394.178 44.6643 303.369C44.6643 215.587 86.942 182.627 134.334 182.627C155.473 182.627 169.452 190.362 172.861 203.816C174.907 212.56 178.316 229.04 195.705 229.04C209.684 229.04 218.207 219.959 218.207 205.834C218.207 181.954 176.271 170.855 133.652 170.855C71.5993 170.855 0 222.986 0 306.396C0 392.496 63.0756 443.955 132.629 443.955ZM620.186 440.255H711.22V430.838C686.671 424.784 685.989 416.712 685.989 348.437V245.52L705.083 228.368C739.177 197.425 759.634 188.008 778.046 188.008C801.23 188.008 815.209 201.461 815.209 237.449V348.437C815.209 416.712 814.186 424.784 789.638 430.838V440.255H881.012V430.838C858.169 424.784 858.169 416.712 858.169 348.437V239.803C858.169 191.035 832.938 171.528 790.661 171.528C763.726 171.528 737.473 184.981 705.083 214.914L685.989 232.067V0L619.845 33.6329V42.7138C643.03 43.7228 643.03 45.4045 643.03 111.661V348.437C643.03 416.712 642.348 424.784 620.186 430.838V440.255Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://midu.dev/"
                className="mr-5 mb-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="h-14"
                  viewBox="0 0 600.93066 150.776"
                  fill="none"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 81.5,80.5 C 73.5888,86.9061 66.0888,93.9061 59,101.5C 52.238,112.179 51.738,123.179 57.5,134.5C 43.8393,121.673 30.6726,108.339 18,94.5C 13.1257,84.3255 13.459,74.3255 19,64.5C 34.1667,49.3333 49.3333,34.1667 64.5,19C 79.0452,11.3338 91.8785,13.5004 103,25.5C 109,36.5 109,47.5 103,58.5C 95.6308,65.7018 88.4641,73.0351 81.5,80.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      opacity="200"
                      d="M 143.5,51.5 C 146.116,56.854 145.949,62.1874 143,67.5C 138.574,72.4337 133.74,76.767 128.5,80.5C 124.17,76.0021 120.003,71.3354 116,66.5C 112.262,53.6333 116.929,45.9666 130,43.5C 135.988,43.741 140.488,46.4076 143.5,51.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 281.5,46.5 C 290.778,45.3759 294.278,49.3759 292,58.5C 287.333,63.8333 282.667,63.8333 278,58.5C 276.593,53.556 277.759,49.556 281.5,46.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 332.5,46.5 C 336.833,46.5 341.167,46.5 345.5,46.5C 345.5,68.8333 345.5,91.1667 345.5,113.5C 341.167,113.5 336.833,113.5 332.5,113.5C 332.66,111.801 332.494,110.134 332,108.5C 323.976,115.907 315.476,116.407 306.5,110C 298.073,100.366 296.24,89.5325 301,77.5C 309.529,65.9494 319.862,63.9494 332,71.5C 332.5,63.1733 332.666,54.84 332.5,46.5 Z M 319.5,78.5 C 326.626,78.1451 330.793,81.4785 332,88.5C 332.141,100.712 326.641,104.545 315.5,100C 309.604,91.5134 310.938,84.3467 319.5,78.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 437.5,46.5 C 441.833,46.5 446.167,46.5 450.5,46.5C 450.5,68.8333 450.5,91.1667 450.5,113.5C 446.167,113.5 441.833,113.5 437.5,113.5C 437.657,112.127 437.49,110.793 437,109.5C 424.459,117.551 414.126,115.218 406,102.5C 400.783,89.7467 403.283,78.9133 413.5,70C 421.691,65.1754 429.524,65.6754 437,71.5C 437.5,63.1733 437.666,54.84 437.5,46.5 Z M 424.5,78.5 C 434.596,78.9762 438.763,84.3095 437,94.5C 434.359,101.74 429.525,103.906 422.5,101C 417.847,97.2115 416.347,92.3782 418,86.5C 419.305,83.0386 421.471,80.372 424.5,78.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 143.5,51.5 C 150.465,57.964 157.298,64.6307 164,71.5C 167.333,77.5 167.333,83.5 164,89.5C 155.5,98 147,106.5 138.5,115C 122.702,119.869 114.869,114.036 115,97.5C 115.471,95.7536 116.138,94.087 117,92.5C 121.037,88.631 124.87,84.631 128.5,80.5C 133.74,76.767 138.574,72.4337 143,67.5C 145.949,62.1874 146.116,56.854 143.5,51.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 221.5,66.5 C 227.762,66.7117 232.595,69.3784 236,74.5C 244.05,66.1961 253.217,64.6961 263.5,70C 265.969,72.4411 267.802,75.2744 269,78.5C 269.5,90.1619 269.667,101.829 269.5,113.5C 265.167,113.5 260.833,113.5 256.5,113.5C 256.666,104.161 256.5,94.8274 256,85.5C 254.331,79.2724 250.498,77.4391 244.5,80C 242.951,81.214 241.785,82.714 241,84.5C 240.5,94.1609 240.334,103.828 240.5,113.5C 235.833,113.5 231.167,113.5 226.5,113.5C 226.666,103.494 226.5,93.4944 226,83.5C 223.168,78.1125 219.335,77.2791 214.5,81C 213.54,82.4194 212.707,83.9194 212,85.5C 211.5,94.8274 211.334,104.161 211.5,113.5C 206.833,113.5 202.167,113.5 197.5,113.5C 197.5,98.1667 197.5,82.8333 197.5,67.5C 202.167,67.5 206.833,67.5 211.5,67.5C 211.343,68.8734 211.51,70.2068 212,71.5C 214.659,68.6298 217.826,66.9632 221.5,66.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 478.5,66.5 C 497.197,67.1988 505.53,76.8655 503.5,95.5C 492.495,95.3335 481.495,95.5002 470.5,96C 474.146,102.124 479.48,104.124 486.5,102C 488.859,100.642 491.193,99.6425 493.5,99C 495.31,101.644 497.31,104.144 499.5,106.5C 492.953,113.309 484.953,115.809 475.5,114C 466.105,112.272 460.272,106.772 458,97.5C 454.901,80.3219 461.734,69.9886 478.5,66.5 Z M 477.5,78.5 C 483.178,77.3386 487.178,79.3386 489.5,84.5C 483.5,85.8333 477.5,85.8333 471.5,84.5C 473.215,82.1182 475.215,80.1182 477.5,78.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 278.5,67.5 C 282.833,67.5 287.167,67.5 291.5,67.5C 291.5,82.8333 291.5,98.1667 291.5,113.5C 287.167,113.5 282.833,113.5 278.5,113.5C 278.5,98.1667 278.5,82.8333 278.5,67.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 353.5,67.5 C 358.167,67.5 362.833,67.5 367.5,67.5C 367.334,77.1724 367.5,86.8391 368,96.5C 369.953,102.532 373.787,104.032 379.5,101C 381.487,99.6811 382.654,97.8477 383,95.5C 383.5,86.1726 383.666,76.8393 383.5,67.5C 388.167,67.5 392.833,67.5 397.5,67.5C 397.5,82.8333 397.5,98.1667 397.5,113.5C 392.833,113.5 388.167,113.5 383.5,113.5C 383.657,112.127 383.49,110.793 383,109.5C 376.472,115.128 369.305,115.961 361.5,112C 356.75,108.333 354.25,103.499 354,97.5C 353.5,87.5056 353.334,77.5056 353.5,67.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      d="M 503.5,67.5 C 508.214,67.1734 512.88,67.5067 517.5,68.5C 520.902,77.2067 524.402,85.8733 528,94.5C 531.223,85.7202 534.723,77.0535 538.5,68.5C 543.12,67.5067 547.786,67.1734 552.5,67.5C 546.833,82.8333 541.167,98.1667 535.5,113.5C 530.456,113.827 525.456,113.494 520.5,112.5C 514.234,97.6978 508.567,82.6978 503.5,67.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="currentColor"
                      opacity="200"
                      d="M 81.5,80.5 C 90.1994,88.0323 98.0327,96.3656 105,105.5C 111.781,123.506 106.615,136.673 89.5,145C 76.4052,148.566 65.7385,145.066 57.5,134.5C 51.738,123.179 52.238,112.179 59,101.5C 66.0888,93.9061 73.5888,86.9061 81.5,80.5 Z"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="https://remix.run/"
                className="mr-5 mb-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <svg
                  width="1200"
                  height="1000"
                  viewBox="300 200 600 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block h-11 w-40"
                >
                  <g fill="currentColor">
                    <path
                      clipRule="evenodd"
                      d="m378.744 361.947c1.643 21.267 1.643 31.236 1.643 42.118h-48.829c0-2.371.042-4.539.084-6.738.132-6.835.27-13.962-.829-28.356-1.452-21.072-10.457-25.755-27.015-25.755h-14.67-62.128v-38.34h79.122c20.915 0 31.372-6.412 31.372-23.387 0-14.926-10.457-23.972-31.372-23.972h-79.122v-37.517h87.836c47.35 0 70.88 22.536 70.88 58.535 0 26.926-16.558 44.486-38.926 47.413 18.882 3.805 29.92 14.634 31.954 35.999z"
                      fillRule="evenodd"
                    />
                    <path d="m227 404.065v-28.582h51.63c8.624 0 10.496 6.446 10.496 10.289v18.293z" />
                    <path d="m967.943 275.524h-48.395l-22.025 30.95-21.444-30.95h-51.873l46.656 63.943-50.714 66.278h48.396l25.792-35.329 25.791 35.329h51.873l-51.004-68.322z" />
                    <path d="m663.111 297.105c-5.507-15.183-17.388-25.694-40.282-25.694-19.416 0-33.326 8.76-40.281 23.066v-19.562h-46.946v130.22h46.946v-63.942c0-19.562 5.506-32.409 20.865-32.409 14.2 0 17.678 9.343 17.678 27.154v69.197h46.946v-63.942c0-19.562 5.216-32.409 20.865-32.409 14.2 0 17.388 9.343 17.388 27.154v69.197h46.946v-81.752c0-27.154-10.432-51.972-46.077-51.972-21.734 0-37.093 11.095-44.048 25.694z" />
                    <path d="m486.716 354.599c-4.347 10.219-12.461 14.598-25.212 14.598-14.2 0-25.792-7.591-26.951-23.65h90.705v-13.138c0-35.329-22.893-65.111-66.073-65.111-40.281 0-70.419 29.49-70.419 70.658 0 41.46 29.559 66.57 70.999 66.57 34.196 0 57.959-16.642 64.624-46.424zm-51.583-31.826c1.738-12.263 8.404-21.606 23.473-21.606 13.91 0 21.444 9.927 22.024 21.606z" />
                    <path d="m768.592 275.78v130.22h46.946v-130.22zm-.29-12.263h47.526v-41.461h-47.526z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-40 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
          <div className="mb-8 max-w-screen-md lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Comprehensive LinkedIn Analysis for Career Success
            </h2>
            <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
              At Linked Insighter, we believe in harnessing the power of
              technology to help individuals reach their full potential. That's
              why we're excited to introduce Linked Insighter, our latest
              project that uses AI to provide in-depth analysis of LinkedIn
              profiles. With our tool, you can gain valuable insights into your
              skills, experience, and overall profile performance.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-violet-600 dark:text-violet-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698 5 5 0 004.503 5.152 6 6 0 002.946 1.822A6.451 6.451 0 017.768 13H7.5A1.5 1.5 0 006 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 00-1.5-1.5h-.268a6.453 6.453 0 01-.684-2.202 6 6 0 002.946-1.822 5 5 0 004.503-5.152.75.75 0 00-.552-.698A31.804 31.804 0 0016 2.562v-.387a.75.75 0 00-.629-.74A33.227 33.227 0 0010 1zM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 01-1.855-2.68zm14.95 0a3.503 3.503 0 01-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Skill Analysis
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI algorithms identify your top skills and experience, so
                you can showcase your expertise to potential employers and
                connections.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-violet-600 dark:text-violet-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.83A4.98 4.98 0 015 14a4.98 4.98 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 32.845 32.845 0 016.668-.829V2.75A.75.75 0 0110 2zM5 7.543L3.92 12.33a3.499 3.499 0 002.16 0L5 7.543zm10 0l-1.08 4.787a3.498 3.498 0 002.16 0L15 7.543z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Strengths & Weaknesses
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get a comprehensive view of your profile strengths and areas for
                improvement, so you can optimize your presence on LinkedIn.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-violet-600 dark:text-violet-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Optimization Suggestions:
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Receive personalized recommendations on how to enhance your
                profile for maximum visibility and career advancement
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-40 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <img
            className="w-full"
            src="https://static.swissdevjobs.ch/pictures/hire-developer-resume.svg"
            alt="dashboard representation"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Unlock Your LinkedIn Potential.
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Transform your LinkedIn profile and connect with career
              opportunities with Linked Insighter. Our AI technology provides
              analysis and optimization suggestions to help you showcase your
              skills and expertise. Sign up now and unlock your LinkedIn
              potential.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center rounded-lg bg-violet-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 p-4 dark:bg-gray-800 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="https://github.com/garaekz"
                className="flex items-center"
              >
                <img src="/loguito.svg" alt="logo" className="mr-3 h-8 w-8" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Linked Insighter
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://flowbite.com" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Follow me
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/garaekz"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <button className="hover:underline">I don't have</button>
                  </li>
                  <li>
                    <button className="hover:underline">
                      Terms &amp; Conditions
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://github.com/garaekz" className="hover:underline">
                Garaekz
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a
                href="https://www.facebook.com/soyundev"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/soyundev"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/garaekz"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/garaekz"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
