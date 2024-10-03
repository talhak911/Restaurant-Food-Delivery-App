import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrowIcon() {
  return (
    <Svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
    >
      <Path
        d="M2 2.22l2.136 2.72c.26.33.593.597.975.78a2.836 2.836 0 002.456 0c.382-.183.715-.45.974-.78l2.133-2.72"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DownArrowIcon
