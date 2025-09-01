import React from "react";

export function Loader({ message = "Patientez" }) {
  return (
    <div className={"flex flex-col items-center "}>
    
      <CircularLoader />
      <p className="text-sm pt-2 pb-10">
        {message}
        {message == "" ? "" : "..."}
      </p>
    </div>
  );
}

export const CircularLoader = ({ width = 25, color = "#b7b6b6" }) => {
  return (
    <svg
      style={{ width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={"animate-spin text-sm"}
    >
      <defs>
        <linearGradient
          x1="28.154%"
          y1="63.74%"
          x2="74.629%"
          y2="17.783%"
          id="blueLoadingIndicatorGradient"
        >
          <stop stopColor={color} offset="0%"></stop>
          <stop stopColor="#FFF" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(2)" fill="none" fillRule="evenodd">
        <circle
          stroke="url(#blueLoadingIndicatorGradient)"
          strokeWidth="4"
          cx="10"
          cy="12"
          r="10"
        ></circle>
        <path
          d="M10 2C4.477 2 0 6.477 0 12"
          stroke={color}
          strokeWidth="4"
        ></path>
        <rect fill="#11233C" x="8" width="4" height="4" rx="8"></rect>
      </g>
    </svg>
  );
};
