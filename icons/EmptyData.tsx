import * as React from "react";
import type { SVGProps } from "react";
const SvgEmptyData = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={98}
    height={98}
    fill="none"
    {...props}
  >
    <path
      fill="#E7E8EC"
      d="M97.56 48.523c0 26.803-21.73 48.53-48.531 48.53S.5 75.326.5 48.523C.5 21.728 22.229 0 49.029 0s48.53 21.728 48.53 48.523"
    />
    <mask
      id="emptyData_svg__a"
      width={39}
      height={42}
      x={30}
      y={28}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M64.083 32.333h-8.708c-.875-2.416-3.167-4.166-5.875-4.166s-5 1.75-5.875 4.166h-8.708A4.18 4.18 0 0 0 30.75 36.5v29.167a4.18 4.18 0 0 0 4.167 4.166h29.166a4.18 4.18 0 0 0 4.167-4.166V36.5a4.18 4.18 0 0 0-4.167-4.167m-14.583 0a2.09 2.09 0 0 1 2.083 2.084A2.09 2.09 0 0 1 49.5 36.5a2.09 2.09 0 0 1-2.083-2.083 2.09 2.09 0 0 1 2.083-2.084M41.167 61.5h10.416a2.09 2.09 0 0 0 2.084-2.083 2.09 2.09 0 0 0-2.084-2.084H41.167a2.09 2.09 0 0 0-2.084 2.084 2.09 2.09 0 0 0 2.084 2.083m16.666-8.333H41.167a2.09 2.09 0 0 1-2.084-2.084A2.09 2.09 0 0 1 41.167 49h16.666a2.09 2.09 0 0 1 2.084 2.083 2.09 2.09 0 0 1-2.084 2.084m-16.666-8.334h16.666a2.09 2.09 0 0 0 2.084-2.083 2.09 2.09 0 0 0-2.084-2.083H41.167a2.09 2.09 0 0 0-2.084 2.083 2.09 2.09 0 0 0 2.084 2.083"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#emptyData_svg__a)">
      <path fill="#98A2B3" d="M24.5 24h50v50h-50z" />
    </g>
  </svg>
);
export default SvgEmptyData;