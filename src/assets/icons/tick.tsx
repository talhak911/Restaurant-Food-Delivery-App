import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TickIcon() {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
    >
      <Path
        d="M4.309 7.166L5.774 9l1.967-2.025L9.71 4.95"
        stroke="#E95322"
        strokeWidth={0.84}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 13A6 6 0 107 1a6 6 0 000 12z"
        stroke="#E95322"
        strokeWidth={0.84}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TickIcon
