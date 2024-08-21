import * as React from "react";
const SVGComponentGithub = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    fill="#28C55A"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="sign-out-alt-2"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <line
      id="secondary"
      x1={8}
      y1={12}
      x2={21}
      y2={12}
      style={{
        fill: "#28C55A",
        stroke: "#28C55A",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <polyline
      id="secondary-2"
      data-name="secondary"
      points="17 16 21 12 17 8"
      style={{
        fill: "#28C55A",
        stroke: "#28C55A",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary"
      d="M13,8V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V16"
      style={{
        fill: "none",
        stroke: "#28C55A",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SVGComponentGithub;

