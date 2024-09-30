import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function LogoutIcon() {
  return (
    <Svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"

    >
      <Rect y={0.258057} width={32} height={32} rx={15} fill="#F8F8F8" />
      <Path
        d="M15.533 16H5.68m2.53 2.657l-1.95-1.48a1.48 1.48 0 010-2.352l1.95-1.481M21.955 9.51v12.98m-10.003-2.37c1.807 6.726 6.906 6.193 6.906 6.193s5.12.533 6.907-6.193a16.39 16.39 0 000-8.24c-1.792-6.726-6.907-6.193-6.907-6.193s-5.12-.533-6.906 6.193"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LogoutIcon
