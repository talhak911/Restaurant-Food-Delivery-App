import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SearchFilterIcon() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"

    >
      <Circle cx={10} cy={10} r={10} fill="#E95322" />
      <Path
        d="M9.23 8.461h6.155m-6.154 0a1.538 1.538 0 11-3.077 0m3.077 0a1.538 1.538 0 10-3.077 0m-1.539 0h1.539m6.923 3.846h2.308m-2.308 0a1.538 1.538 0 01-3.077 0m3.077 0a1.538 1.538 0 10-3.077 0m-5.385 0H10"
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchFilterIcon
