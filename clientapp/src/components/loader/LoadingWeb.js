import React from "react";
import { ScaleLoader } from "react-spinners";
import "./css/loadingweb.css";

export default function LoadingWeb() {
  return (
    <div className="loader_Container">
      <div className="loader">
        <svg
          className="car"
          width="250"
          height="80"
          xmlns="http://www.w3.org/2000/svg">
          <g
            transform="translate(10 5)"
            stroke="#420019"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
              className="car__body"
              d="M82.586 4.75C94.927 1.584 96.034 1.615 96.034 1.615c4.91-.745 11.318-.506 15.229.357l14.51 3.74c4.886 1.08 11.118 5.276 13.656 8.683l10.82 11.933 10.515 3.754c5.462 1.017 9.412 7.169 9.412 12.885v6.309c0 .44-4.372 6.283-9.288 6.283H55.612c-4.406 0-7.255-3.348-6.706-7.524 0 0 5.565-30.587 21.59-37.809zM55 24.h92"
              strokeWidth="4"
            />
            <ellipse
              className="car__wheel--left"
              strokeWidth="5"
              cx="137"
              cy="53"
              rx="12"
              ry="12"
              fill="rgb(153, 153, 0)"
            />
            <ellipse
              className="car__wheel--right"
              strokeWidth="5"
              cx="75"
              cy="53"
              rx="12"
              ry="12"
              fill="rgb(124, 140, 0)"
            />
            <path
              className="car__line car__line--top"
              d="M30 23.5H10"
              strokeWidth="6"
              fill="#FFF"
            />
            <path
              className="car__line car__line--middle"
              d="M28 33.5H8"
              strokeWidth="6"
              fill="#FFF"
            />
            <path
              className="car__line car__line--bottom"
              d="M33 14h-28"
              strokeWidth="6"
              fill="#FFF"
            />
          </g>
        </svg>
        <p>Loading...</p>
      </div>
    </div>
  );
}
