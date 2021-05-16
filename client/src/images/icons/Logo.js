import React from "react";

function Logo({
    width,
    height,
    viewBox = "",
    className = "",
    enableBackground = "",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            aria-label="Home"
            version="1.1"
            viewBox={viewBox}
            className={className}
            enableBackground={enableBackground}
        >
            <defs>
                <linearGradient id="linearGradient3173-6-5-94">
                    <stop offset="0" stopColor="#a5a5a5"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <filter
                    id="filter4464-3"
                    width="1.258"
                    height="1.394"
                    x="-0.129"
                    y="-0.197"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="0.149"></feGaussianBlur>
                </filter>
                <filter
                    id="filter4464-4-9"
                    width="1.258"
                    height="1.394"
                    x="-0.129"
                    y="-0.197"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="0.149"></feGaussianBlur>
                </filter>
                <filter id="filter4878" colorInterpolationFilters="sRGB">
                    <feGaussianBlur stdDeviation="0.496"></feGaussianBlur>
                </filter>
                <radialGradient
                    id="radialGradient36968"
                    cx="414.68"
                    cy="-8.88"
                    r="123.55"
                    gradientTransform="matrix(0 .27968 -.60927 0 101.73 -39.26)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ffb142"></stop>
                    <stop offset="0.887" stopColor="#ffb141"></stop>
                    <stop offset="1" stopColor="#c87600"></stop>
                </radialGradient>
                <radialGradient
                    id="radialGradient36970"
                    cx="610.46"
                    cy="483.45"
                    r="167.56"
                    gradientTransform="matrix(0 -.48219 .4319 0 -151.97 551.35)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#a5a5a5"></stop>
                    <stop offset="1"></stop>
                </radialGradient>
                <linearGradient
                    id="linearGradient36972"
                    x1="346.24"
                    x2="359.47"
                    y1="537.41"
                    y2="537.41"
                    gradientTransform="matrix(.30074 0 0 .32584 107.58 234.33)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ffb142"></stop>
                    <stop offset="1" stopColor="#c87600"></stop>
                </linearGradient>
                <radialGradient
                    id="radialGradient36974"
                    cx="380.26"
                    cy="622.49"
                    r="59.255"
                    gradientTransform="matrix(0 -.74351 .66041 0 -364.7 582.13)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient3173-6-5-94"
                ></radialGradient>
                <radialGradient
                    id="radialGradient36976"
                    cx="543.99"
                    cy="389.09"
                    r="40.927"
                    gradientTransform="matrix(.80329 -.28778 .17566 .43473 -297.92 341.1)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ffe218"></stop>
                    <stop offset="1" stopColor="#cfb400"></stop>
                </radialGradient>
                <radialGradient
                    id="radialGradient36978"
                    cx="545.13"
                    cy="391.26"
                    r="3.864"
                    gradientTransform="matrix(-.00219 .25546 -.65669 -.00499 469.57 210)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#3b4fdc"></stop>
                    <stop offset="1" stopColor="#19278b"></stop>
                </radialGradient>
                <radialGradient
                    id="radialGradient36980"
                    cx="546.78"
                    cy="462.99"
                    r="46.651"
                    gradientTransform="matrix(.9754 .00766 -.00416 .52367 -320.21 135.62)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#060000"></stop>
                    <stop offset="1" stopColor="#ddc100"></stop>
                </radialGradient>
                <linearGradient
                    id="linearGradient36982"
                    x1="-779.04"
                    x2="-775.75"
                    y1="189.44"
                    y2="243.28"
                    gradientTransform="translate(264.29 -62.715) scale(1.1335)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#152074"></stop>
                    <stop offset="1" stopColor="#0c1343"></stop>
                </linearGradient>
                <linearGradient
                    id="linearGradient36984"
                    x1="212.43"
                    x2="113.68"
                    y1="-180.82"
                    y2="-6.699"
                    gradientTransform="matrix(-.57274 0 0 .57274 330.44 224.68)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#efeed1"></stop>
                    <stop offset="0.5" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fefefb"></stop>
                </linearGradient>
                <linearGradient
                    id="linearGradient36986"
                    x1="290.79"
                    x2="279.31"
                    y1="-342"
                    y2="9.227"
                    gradientTransform="matrix(-.57274 0 0 .57274 330.44 224.68)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#8e8e8e"></stop>
                    <stop offset="0.5" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#666"></stop>
                </linearGradient>
                <linearGradient
                    id="linearGradient36988"
                    x1="371.7"
                    x2="474.26"
                    y1="-172.54"
                    y2="-21.352"
                    gradientTransform="matrix(-.57274 0 0 .57274 330.44 224.68)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#efeed1"></stop>
                    <stop offset="0.519" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fefefb"></stop>
                </linearGradient>
                <linearGradient
                    id="linearGradient36990"
                    x1="298.44"
                    x2="296.52"
                    y1="-115.2"
                    y2="11.138"
                    gradientTransform="matrix(-.57274 0 0 .57274 330.44 224.68)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#efeed1"></stop>
                    <stop offset="0.5" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fefefb"></stop>
                </linearGradient>
                <linearGradient
                    id="linearGradient36992"
                    x1="290.79"
                    x2="279.31"
                    y1="-342"
                    y2="9.227"
                    gradientTransform="matrix(-.57274 0 0 .57274 330.44 224.68)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#efeed1"></stop>
                    <stop offset="0.5" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fefefb"></stop>
                </linearGradient>
                <radialGradient
                    id="radialGradient36994"
                    cx="371.45"
                    cy="647.69"
                    r="59.255"
                    gradientTransform="matrix(0 -.74351 -.66041 0 552.03 582.13)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient3173-6-5-94"
                ></radialGradient>
            </defs>
            <g transform="translate(-280.03 -303.54)">
                <g transform="translate(612.72 258.34) scale(.36378)">
                    <g
                        fillRule="evenodd"
                        transform="matrix(4.8521 0 0 5.257 -1070.3 -1322.2)"
                    >
                        <path
                            fill="url(#radialGradient36968)"
                            stroke="#000"
                            strokeWidth="1.564"
                            d="M81.781 385.54c-15.668 1.613-33.638 14.291-26.495 17.056 7.143 2.765 27.873 3.918 31.79.692 2.013-1.657 5.614-5.808 6.038-9.704.425 3.895 4.016 8.047 6.028 9.704 3.917 3.226 24.658 2.073 31.8-.692 7.143-2.765-10.827-15.443-26.495-17.056-8.067.778-10.97 3.488-11.333 6.598-.363-3.11-3.265-5.82-11.333-6.598z"
                            color="#000"
                        ></path>
                        <path
                            fillOpacity="0.314"
                            d="M81.784 385.55c-7.69.792-15.927 4.249-21.485 7.891 8.417 3.893 18.709 6.292 29.865 6.568 1.43-1.88 2.71-4.187 2.953-6.415.24 2.207 1.491 4.493 2.902 6.364 10.973-.464 21.052-2.98 29.254-6.944-5.538-3.484-13.432-6.703-20.823-7.464-8.068.778-10.97 3.488-11.333 6.598-.364-3.11-3.265-5.82-11.333-6.598z"
                        ></path>
                    </g>
                    <g transform="matrix(4.8521 0 0 5.257 -1070.3 -1322.2)">
                        <path
                            fill="url(#radialGradient36970)"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="1.564"
                            d="M146.28 340.23a53.948 53.948 0 01-107.9 0 53.948 53.948 0 11107.9 0z"
                            color="#000"
                        ></path>
                        <path
                            fill="#fff"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="1.629"
                            d="M118.99 367.2a26.153 26.153 0 11-52.307 0 26.153 26.153 0 1152.307 0z"
                        ></path>
                        <path
                            fillOpacity="0.314"
                            d="M144.15 325.23a54.47 54.47 0 01.173 4.246c0 29.78-24.178 53.947-53.957 53.947-24.575 0-45.316-16.459-51.819-38.948 2.17 27.795 25.426 49.701 53.774 49.701 29.78 0 53.957-24.168 53.957-53.947 0-5.204-.75-10.237-2.128-14.999z"
                        ></path>
                    </g>
                    <g transform="translate(-1741.8 -1684.1) scale(5.257)">
                        <path
                            fill="#fff"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="1.565"
                            d="M203 373.17c-6.897 0-12.5 6.984-12.5 15.589s5.602 15.589 12.5 15.589c4.053 0 7.65-2.415 9.934-6.15 2.283 3.738 5.888 6.15 9.943 6.15 6.898 0 12.5-6.984 12.5-15.589s-5.602-15.589-12.5-15.589c-4.054 0-7.66 2.413-9.943 6.15-2.284-3.734-5.881-6.15-9.934-6.15z"
                        ></path>
                        <path
                            fillOpacity="0.314"
                            fillRule="evenodd"
                            d="M213.53 400.05c-4.354 0-9.088 4.297-8.898 7.01.189 2.714 7.762 14.02 9.466 14.02 1.704 0 8.33-11.08 8.141-14.247-.19-3.166-5.87-7.01-8.709-6.784z"
                        ></path>
                        <path
                            fill="url(#linearGradient36972)"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="1.565"
                            d="M212.84 397.34c-4.354 0-9.088 3.897-8.898 6.359.189 2.461 7.762 12.718 9.466 12.718s8.33-10.051 8.141-12.923c-.19-2.872-5.87-6.359-8.709-6.154z"
                        ></path>
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="1.565"
                            d="M210.75 391.5a3.124 3.385 0 01-6.248 0 3.124 3.385 0 116.248 0z"
                        ></path>
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeWidth="1.565"
                            d="M221.93 391.5a3.124 3.385 0 11-6.248 0 3.124 3.385 0 116.248 0z"
                        ></path>
                    </g>
                    <g
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="1.629"
                        transform="matrix(4.8521 0 0 5.257 -1076.8 -1322.2)"
                    >
                        <path
                            fill="#fff"
                            d="M51.639 328.16c15.558 5.621-5.618 30.543 12.323 52.523 3.237 3.966-18.856.681-26.629-21.696-7.559-21.762-.369-35.041 14.306-30.827z"
                        ></path>
                        <path
                            fill="url(#radialGradient36974)"
                            d="M51.639 328.16c15.677 5.637-13.877 33.276 12.323 52.523 7.373 5.416-18.856.681-26.629-21.696-7.559-21.762-.369-35.041 14.306-30.827z"
                        ></path>
                    </g>
                    <g transform="translate(-1740.3 -1694.2) scale(5.257)">
                        <g>
                            <g>
                                <path
                                    fill="url(#radialGradient36976)"
                                    stroke="#000"
                                    strokeWidth="1.259"
                                    d="M166.17 389.3c.923-7.404 10.578-26.717 19.874-30.626 9.422-4.206 15.782-6.97 22.364-9.838 2.066-.611 3.526-.081 5.133.172 14.793 1.789 22.453 8.227 31.163 13.981 6.48 4.43 14.213 21.617 14.797 26.162-13.661 3.994-17.005-17.942-47.928-20.564-32.612 1.528-27.156 21.63-45.403 20.713z"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M213.91 348.66c1.67 5.005 2.193 11.841 2.231 16.846"
                                    opacity="0.28"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M211.05 347.71c1.486 4.94 2.21 12.777 2.781 18.146"
                                    opacity="0.28"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M208.41 348.84c1.163 4.6 2.078 11.264 2.781 16.298"
                                    opacity="0.28"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M181.5 361.68c-3.686 4.622-5.166 10.074-6.542 15.566"
                                    color="#000"
                                    opacity="0.28"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M240.8 360.43c5.338 4.95 13.312 19.329 13.973 24.939"
                                    color="#000"
                                    opacity="0.28"
                                ></path>
                                <path
                                    fill="url(#radialGradient36978)"
                                    stroke="#000"
                                    strokeWidth="1.259"
                                    d="M208.02 348.6c.325 1.432 6.534 1.625 6.63-.321.123-2.385-7.072-2.344-6.63.321z"
                                ></path>
                                <g
                                    color="#000"
                                    transform="matrix(.9885 0 0 .93076 -328.14 -17.918)"
                                >
                                    <path
                                        stroke="#000"
                                        strokeWidth="1.4"
                                        d="M532.24 400.59c-1.734.115-2.878 1.1-1.58 1.817 1.162-.008 3.269-1.44 1.58-1.817z"
                                        filter="url(#filter4464-3)"
                                        opacity="0.41"
                                    ></path>
                                    <path
                                        stroke="#19278b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M532.57 400.68c-1.016-.694-2.967.89-2.119 1.518.952.411 2.79-.722 2.119-1.518z"
                                    ></path>
                                </g>
                                <g
                                    color="#000"
                                    transform="matrix(-.9885 0 0 .93076 751.6 -19.349)"
                                >
                                    <path
                                        stroke="#000"
                                        strokeWidth="1.4"
                                        d="M532.24 400.59c-1.734.115-2.878 1.1-1.58 1.817 1.162-.008 3.269-1.44 1.58-1.817z"
                                        filter="url(#filter4464-4-9)"
                                        opacity="0.41"
                                    ></path>
                                    <path
                                        stroke="#19278b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M532.57 400.68c-1.016-.694-2.967.89-2.119 1.518.952.411 2.79-.722 2.119-1.518z"
                                    ></path>
                                </g>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M173.54 386.95c-3.946.97-5.696 1.337-7.112 1.244"
                                    color="#000"
                                    opacity="0.28"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#00108a"
                                    strokeDasharray="0.76735715, 0.38367857"
                                    strokeWidth="0.384"
                                    d="M173.85 385.89c-5.275 1.121-6.025 1.367-7.112 1.244"
                                    color="#000"
                                    opacity="0.28"
                                ></path>
                            </g>
                            <g
                                fill="none"
                                stroke="#00108a"
                                strokeDasharray="0.76735715, 0.38367857"
                                strokeWidth="0.384"
                                color="#000"
                                transform="rotate(7.156 206.077 1069.316)"
                            >
                                <path
                                    d="M173.54 386.95c-3.946.97-5.696 1.337-7.112 1.244"
                                    opacity="0.28"
                                ></path>
                                <path
                                    d="M173.85 385.89c-5.275 1.121-6.025 1.367-7.112 1.244"
                                    opacity="0.28"
                                ></path>
                            </g>
                            <g
                                stroke="#000"
                                strokeWidth="1.063"
                                transform="matrix(.87508 0 0 .91038 27.208 40.755)"
                            >
                                <path
                                    fill="#ffe00a"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M171.75 382c-4.983 3.052-7.41-.685-8.379-3.62-.416-1.12-1.033-5.495 8.866-11.323 27.393-16.134 59.86-16.304 85.367 2.647 5.658 4.525 4.824 7.758 3.537 10.901-1.422 1.524-3.958 2.631-6.19 2.813-17.98-42.692-88.016-22.832-83.2-1.418z"
                                ></path>
                                <path
                                    fill="url(#radialGradient36980)"
                                    d="M174.06 378.81c13.956-22.147 57.882-20.702 77.858 1.242 1.03 1.029 2.049 2.242 3.537 2.814 2.513-1.445 7.267-3.258 3.661-9.206-18.106-15.61-57.143-27.571-92.68.497-5.645 4.951 3.606 10.784 5.325 7.466z"
                                ></path>
                            </g>
                        </g>
                        <path
                            d="M177.16 389.15c17.418-15.493 54.109-14.62 73.807.556 8.84-5.024-13.211-21.409-38.206-21.539-23.296-.036-45.704 17.481-35.6 20.982z"
                            filter="url(#filter4878)"
                            opacity="0.308"
                        ></path>
                    </g>
                    <path
                        fill="url(#linearGradient36982)"
                        d="M-615.17 158.35c-19.112 0-34.714 12.21-34.714 27.098 0 .74.03 1.471.106 2.196-2.679-3.297-5.267-7.136-7.686-11.83-3.252-9.197-42.39 13.563-32.27 16.081 23.262 14.381 52.206 19.237 66.134 19.801 2.695.529 5.53.815 8.43.815 7.358 0 14.178-1.815 19.801-4.888 15.563-6.28 31.008-16.61 37.23-16.861 2.123.981 4.24 1.462 5.596 1.346 8.384-1.153-6.436-17.343-9.352-9.458-.265 2.039.037 2.402-.07 3.613-3.979 3.134-10.322 5.917-21.076 9.316 1.638-3.14 2.55-6.546 2.55-10.131 0-14.888-15.566-27.098-34.678-27.098zm0 10.485c11.744 0 21.182 7.388 21.182 16.613s-9.438 16.578-21.182 16.578-21.218-7.352-21.218-16.578c0-9.225 9.473-16.613 21.218-16.613z"
                    ></path>
                    <g transform="rotate(-25.715 914.538 1943.349) scale(1.27119)">
                        <g transform="translate(-.082 306.16) scale(1.0539)">
                            <g transform="translate(-39.991 -356.96)">
                                <path
                                    style={{
                                        blockProgression: "tb",
                                        WebkitTextTransform: "none",
                                        textTransform: "none",
                                        WebkitTextIndent: "0",
                                        textIndent: "0",
                                    }}
                                    d="M254.16 78.866c5.45 0 9.969 4.19 9.969 9.469v129.41c0 5.278-4.52 9.469-9.969 9.469H60.25c-5.45 0-9.969-4.19-9.969-9.47V88.335c0-5.278 4.52-9.468 9.969-9.468h193.91z"
                                    color="#000"
                                ></path>
                                <path
                                    fill="url(#linearGradient36984)"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3.273"
                                    d="M251.15 85.335c-8.265 8.076-64.006 58.498-67.004 61.882-3.151 3.556-3.145 3.584-3.145 7.14s-.01 3.584 3.145 7.14c2.811 3.172 51.143 46.9 64.24 59.237h9.436c2.572 0 4.67-2.67 4.67-5.95V91.154c0-3.28-2.098-5.818-4.67-5.818h-6.672z"
                                    color="#000"
                                ></path>
                                <path
                                    fill="url(#linearGradient36986)"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3.273"
                                    d="M63.822 85.335c8.265 8.076 64.006 58.498 67.004 61.882 3.151 3.556 3.145 3.584 3.145 7.14s.01 3.584-3.145 7.14c-2.811 3.172-51.144 46.9-64.24 59.237H57.15c-2.571 0-4.67-2.67-4.67-5.95V91.154c0-3.28 2.099-5.818 4.67-5.818h6.672z"
                                ></path>
                                <path
                                    fill="url(#linearGradient36988)"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3.273"
                                    d="M63.822 85.335c8.265 8.076 64.006 58.498 67.004 61.882 3.151 3.556 3.145 3.584 3.145 7.14s.01 3.584-3.145 7.14c-2.811 3.172-51.143 46.9-64.24 59.237H57.15c-2.571 0-4.67-2.67-4.67-5.95V91.154c0-3.28 2.099-5.818 4.67-5.818h6.672z"
                                    color="#000"
                                ></path>
                                <path
                                    fill="url(#linearGradient36990)"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3.273"
                                    d="M161.71 146.5c2.609.175 3.681.93 7.801 3.702 4.511 3.036 63.444 52.508 87.798 72.46-1.123 1.724-3.2 2.91-5.553 2.91H61.616c-1.468 0-2.754-.568-3.835-1.323 23.172-18.925 85.032-70.94 89.65-74.047 5.492-3.696 5.481-3.702 10.974-3.702 1.374 0 2.436-.059 3.306 0z"
                                    color="#000"
                                ></path>
                                <path
                                    fill="url(#linearGradient36992)"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3.273"
                                    d="M251.75 80.503c3.568 0 6.48 2.67 6.48 5.95v.265c-11.424 9.079-85.736 73.258-90.708 76.69-5.209 3.599-5.237 3.57-10.446 3.57s-5.104.028-10.314-3.57c-4.96-3.42-78.683-67.197-90.58-76.692v-3.57c1.155-1.575 3.192-2.645 5.421-2.645h190.14z"
                                ></path>
                            </g>
                        </g>
                    </g>
                    <g
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="1.629"
                        transform="matrix(4.8255 .50717 -.54949 5.2282 -890.52 -1387.9)"
                    >
                        <path
                            fill="#fff"
                            d="M135.69 328.16c-15.677 5.637 4.615 30.676-12.323 52.523-3.13 4.038 18.856.681 26.629-21.696 7.559-21.762.369-35.041-14.306-30.827z"
                        ></path>
                        <path
                            fill="url(#radialGradient36994)"
                            d="M135.69 328.16c-15.677 5.637 13.877 33.276-12.323 52.523-7.373 5.416 18.856.681 26.629-21.696 7.559-21.762.369-35.041-14.306-30.827z"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Logo;
