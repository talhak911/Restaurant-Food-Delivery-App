import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DeleteIcon() {
  return (
    <Svg
      width={10}
      height={13}
      viewBox="0 0 10 13"
      fill="none"
    >
      <Path
        d="M2.147 4.317C1 6.623.31 10.637 3.161 11.842a4.964 4.964 0 003.823 0C9.47 10.808 9.47 7.04 7.68 4.354M3.803 5.847v4.316m2.394-4.316v4.316m-2.95-8.065C3.247 1.494 3.989 1 4.899 1h.204c.91 0 1.652.494 1.652 1.098m-5.095.118h6.68a.66.66 0 01.66.66v.782a.66.66 0 01-.66.66H1.66a.66.66 0 01-.66-.66v-.783a.66.66 0 01.66-.66z"
        stroke="#E95322"
        strokeWidth={0.796654}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DeleteIcon
