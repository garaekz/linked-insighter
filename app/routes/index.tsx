import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white bg-white dark:bg-gray-900 sm:flex-col sm:items-center sm:justify-center">
      <section className="pt-16 pb-10">
        <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
        <svg className="mx-auto h-12 w-auto my-20" width="86" height="60" viewBox="0 0 86 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.8622 14.0482C50.3539 12.5592 51.2808 10.5026 51.2808 8.23242C51.2808 3.68597 47.5731 0 43 0C40.1087 0 37.5674 1.47683 36.088 3.71038C35.6952 4.10095 2.73159 44.4941 2.42466 44.9579C0.933013 46.4469 0.00610352 48.5035 0.00610352 50.7737C0.00610352 55.3201 3.71374 59.0061 8.2869 59.0061C11.1781 59.0061 13.7195 57.5293 15.1988 55.2957C15.5917 54.9052 48.5553 14.512 48.8622 14.0482Z" fill="white"/>
        <path d="M67.9344 33.2104C69.4322 31.7213 70.3591 29.6648 70.3591 27.3885C70.3591 22.842 66.6515 19.1561 62.0783 19.1561C59.1871 19.1561 56.6458 20.6329 55.1603 22.8665C54.7613 23.2631 37.4508 44.4758 37.1377 44.9457C35.6399 46.4347 34.713 48.4913 34.713 50.7676C34.713 55.314 38.4207 59 42.9938 59C45.885 59 48.4264 57.5232 49.9119 55.2896C50.3109 54.8929 67.6214 33.6803 67.9344 33.2104Z" fill="white"/>
        <path d="M86 8.23242C86 12.7789 82.2923 16.4648 77.7192 16.4648C73.146 16.4648 69.4384 12.7789 69.4384 8.23242C69.4384 3.68597 73.146 0 77.7192 0C82.2923 0 86 3.68597 86 8.23242Z" fill="white"/>
        <path d="M16.5616 8.23242C16.5616 12.7789 12.854 16.4648 8.2808 16.4648C3.70764 16.4648 0 12.7789 0 8.23242C0 3.68597 3.70764 0 8.2808 0C12.854 0 16.5616 3.68597 16.5616 8.23242Z" fill="white"/>
        </svg>

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
              BUILT TO WIN MIDUDEV's HACKATHON
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
              <a
                href="https://www.youtube.com/@midudev"
                className="mr-5 mb-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <svg
                  className="h-8"
                  viewBox="0 0 132 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z"
                    fill="white"
                  />
                  <path
                    d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z"
                    fill="currentColor"
                  />
                  <path
                    d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z"
                    fill="currentColor"
                  />
                  <path
                    d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z"
                    fill="currentColor"
                  />
                  <path
                    d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z"
                    fill="currentColor"
                  />
                  <path
                    d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z"
                    fill="currentColor"
                  />
                  <path
                    d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z"
                    fill="currentColor"
                  />
                  <path
                    d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z"
                    fill="currentColor"
                  />
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
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 81.5,80.5 C 73.5888,86.9061 66.0888,93.9061 59,101.5C 52.238,112.179 51.738,123.179 57.5,134.5C 43.8393,121.673 30.6726,108.339 18,94.5C 13.1257,84.3255 13.459,74.3255 19,64.5C 34.1667,49.3333 49.3333,34.1667 64.5,19C 79.0452,11.3338 91.8785,13.5004 103,25.5C 109,36.5 109,47.5 103,58.5C 95.6308,65.7018 88.4641,73.0351 81.5,80.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" opacity="200" d="M 143.5,51.5 C 146.116,56.854 145.949,62.1874 143,67.5C 138.574,72.4337 133.74,76.767 128.5,80.5C 124.17,76.0021 120.003,71.3354 116,66.5C 112.262,53.6333 116.929,45.9666 130,43.5C 135.988,43.741 140.488,46.4076 143.5,51.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 281.5,46.5 C 290.778,45.3759 294.278,49.3759 292,58.5C 287.333,63.8333 282.667,63.8333 278,58.5C 276.593,53.556 277.759,49.556 281.5,46.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 332.5,46.5 C 336.833,46.5 341.167,46.5 345.5,46.5C 345.5,68.8333 345.5,91.1667 345.5,113.5C 341.167,113.5 336.833,113.5 332.5,113.5C 332.66,111.801 332.494,110.134 332,108.5C 323.976,115.907 315.476,116.407 306.5,110C 298.073,100.366 296.24,89.5325 301,77.5C 309.529,65.9494 319.862,63.9494 332,71.5C 332.5,63.1733 332.666,54.84 332.5,46.5 Z M 319.5,78.5 C 326.626,78.1451 330.793,81.4785 332,88.5C 332.141,100.712 326.641,104.545 315.5,100C 309.604,91.5134 310.938,84.3467 319.5,78.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 437.5,46.5 C 441.833,46.5 446.167,46.5 450.5,46.5C 450.5,68.8333 450.5,91.1667 450.5,113.5C 446.167,113.5 441.833,113.5 437.5,113.5C 437.657,112.127 437.49,110.793 437,109.5C 424.459,117.551 414.126,115.218 406,102.5C 400.783,89.7467 403.283,78.9133 413.5,70C 421.691,65.1754 429.524,65.6754 437,71.5C 437.5,63.1733 437.666,54.84 437.5,46.5 Z M 424.5,78.5 C 434.596,78.9762 438.763,84.3095 437,94.5C 434.359,101.74 429.525,103.906 422.5,101C 417.847,97.2115 416.347,92.3782 418,86.5C 419.305,83.0386 421.471,80.372 424.5,78.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 143.5,51.5 C 150.465,57.964 157.298,64.6307 164,71.5C 167.333,77.5 167.333,83.5 164,89.5C 155.5,98 147,106.5 138.5,115C 122.702,119.869 114.869,114.036 115,97.5C 115.471,95.7536 116.138,94.087 117,92.5C 121.037,88.631 124.87,84.631 128.5,80.5C 133.74,76.767 138.574,72.4337 143,67.5C 145.949,62.1874 146.116,56.854 143.5,51.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 221.5,66.5 C 227.762,66.7117 232.595,69.3784 236,74.5C 244.05,66.1961 253.217,64.6961 263.5,70C 265.969,72.4411 267.802,75.2744 269,78.5C 269.5,90.1619 269.667,101.829 269.5,113.5C 265.167,113.5 260.833,113.5 256.5,113.5C 256.666,104.161 256.5,94.8274 256,85.5C 254.331,79.2724 250.498,77.4391 244.5,80C 242.951,81.214 241.785,82.714 241,84.5C 240.5,94.1609 240.334,103.828 240.5,113.5C 235.833,113.5 231.167,113.5 226.5,113.5C 226.666,103.494 226.5,93.4944 226,83.5C 223.168,78.1125 219.335,77.2791 214.5,81C 213.54,82.4194 212.707,83.9194 212,85.5C 211.5,94.8274 211.334,104.161 211.5,113.5C 206.833,113.5 202.167,113.5 197.5,113.5C 197.5,98.1667 197.5,82.8333 197.5,67.5C 202.167,67.5 206.833,67.5 211.5,67.5C 211.343,68.8734 211.51,70.2068 212,71.5C 214.659,68.6298 217.826,66.9632 221.5,66.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 478.5,66.5 C 497.197,67.1988 505.53,76.8655 503.5,95.5C 492.495,95.3335 481.495,95.5002 470.5,96C 474.146,102.124 479.48,104.124 486.5,102C 488.859,100.642 491.193,99.6425 493.5,99C 495.31,101.644 497.31,104.144 499.5,106.5C 492.953,113.309 484.953,115.809 475.5,114C 466.105,112.272 460.272,106.772 458,97.5C 454.901,80.3219 461.734,69.9886 478.5,66.5 Z M 477.5,78.5 C 483.178,77.3386 487.178,79.3386 489.5,84.5C 483.5,85.8333 477.5,85.8333 471.5,84.5C 473.215,82.1182 475.215,80.1182 477.5,78.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 278.5,67.5 C 282.833,67.5 287.167,67.5 291.5,67.5C 291.5,82.8333 291.5,98.1667 291.5,113.5C 287.167,113.5 282.833,113.5 278.5,113.5C 278.5,98.1667 278.5,82.8333 278.5,67.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 353.5,67.5 C 358.167,67.5 362.833,67.5 367.5,67.5C 367.334,77.1724 367.5,86.8391 368,96.5C 369.953,102.532 373.787,104.032 379.5,101C 381.487,99.6811 382.654,97.8477 383,95.5C 383.5,86.1726 383.666,76.8393 383.5,67.5C 388.167,67.5 392.833,67.5 397.5,67.5C 397.5,82.8333 397.5,98.1667 397.5,113.5C 392.833,113.5 388.167,113.5 383.5,113.5C 383.657,112.127 383.49,110.793 383,109.5C 376.472,115.128 369.305,115.961 361.5,112C 356.75,108.333 354.25,103.499 354,97.5C 353.5,87.5056 353.334,77.5056 353.5,67.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M 503.5,67.5 C 508.214,67.1734 512.88,67.5067 517.5,68.5C 520.902,77.2067 524.402,85.8733 528,94.5C 531.223,85.7202 534.723,77.0535 538.5,68.5C 543.12,67.5067 547.786,67.1734 552.5,67.5C 546.833,82.8333 541.167,98.1667 535.5,113.5C 530.456,113.827 525.456,113.494 520.5,112.5C 514.234,97.6978 508.567,82.6978 503.5,67.5 Z"/></g>
                  <g><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" opacity="200" d="M 81.5,80.5 C 90.1994,88.0323 98.0327,96.3656 105,105.5C 111.781,123.506 106.615,136.673 89.5,145C 76.4052,148.566 65.7385,145.066 57.5,134.5C 51.738,123.179 52.238,112.179 59,101.5C 66.0888,93.9061 73.5888,86.9061 81.5,80.5 Z"/></g>
                  </svg>
              </a>
              <a
                href="https://www.twitch.tv/midudev"
                className="mr-5 mb-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1" 
                  className="h-10"
                  fill="none"
                  viewBox="0 0 454.93066 150.776">
                  <g transform="matrix(1.3333333,0,0,-1.3333333,-180.53426,805.80838)">
                    <g transform="translate(468.8057,565.3643)">
                      <path fill="currentColor" d="m 0,0 -13.646,13.645 -25.35,0 0,17.55 -21.451,0 0,-79.94 21.451,0 0,40.947 17.545,0 0,-40.947 21.451,0 L 0,0 Z m -68.241,13.645 -33.146,0 L -115.036,0 l 0,-35.094 13.649,-13.651 33.146,0 0,21.445 -25.35,0 0,19.502 25.35,0 0,21.443 z m -54.594,0 -17.545,0 0,17.55 -21.451,0 0,-66.289 13.649,-13.651 25.347,0 0,21.445 -17.545,0 0,19.502 17.545,0 0,21.443 z m -46.795,17.55 -21.445,0 0,-9.752 21.445,0 0,9.752 z m 0,-17.55 -21.445,0 0,-62.389 21.445,0 0,62.389 z m -29.244,0 -21.447,0 0,-40.945 -7.797,0 0,40.945 -21.448,0 0,-40.945 -7.796,0 0,40.945 -21.451,0 0,-62.39 66.293,0 13.646,13.651 0,48.739 z m -87.738,0 -17.546,0 0,17.55 -21.447,0 0,-66.289 13.648,-13.651 25.345,0 0,21.445 -17.546,0 0,19.502 17.546,0 0,21.443 z M 7.793,3.9 l 0,-58.491 -29.244,-19.499 -19.496,0 0,9.752 -13.648,-9.752 -17.545,0 0,9.752 -9.746,-9.752 -31.197,0 -9.752,9.752 -1.952,-9.752 -27.292,0 -11.161,9.752 -0.625,-9.752 -30.935,0 -1.094,9.752 -8.374,-9.752 -47.25,0 -9.75,3.9 0,-3.9 -25.344,0 -29.247,17.552 -17.546,17.539 0,77.991 37.047,0 17.545,-17.549 79.939,0 0,17.549 66.29,0 0,-17.549 17.548,0 0,-9.746 9.752,9.746 19.493,0 17.55,17.549 37.044,0 0,-17.549 21.448,0 L 7.793,3.9 Z" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
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
      <section className="bg-white dark:bg-gray-900 pb-40">
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
              Transform your LinkedIn profile and connect with career opportunities with Linked Insighter. Our AI technology provides analysis and optimization suggestions to help you showcase your skills and expertise. Sign up now and unlock your LinkedIn potential.
            </p>
            <Link
              to="/login"
              className="bg-violet-700 hover:bg-violet-800 focus:ring-violet-300 dark:focus:ring-violet-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
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
      <footer className="bg-white p-4 dark:bg-gray-800 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://github.com/garaekz" className="flex items-center">
                <img src="/loguito.svg" alt="logo" className="h-8 w-8 mr-3" />
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
                    <button className="hover:underline">
                      I don't have
                    </button>
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
              © { new Date().getFullYear() }{" "}
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
