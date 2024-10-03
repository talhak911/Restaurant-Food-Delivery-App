import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function HeartIcon() {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"

    >
      <G clipPath="url(#clip0_189_2840)">
        <G clipPath="url(#clip1_189_2840)">
          <Rect width={21} height={21} rx={10.5} fill="#E95322" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.426 7.419a2.3 2.3 0 013.375 0l.699.737.699-.737a2.3 2.3 0 013.375 0c.932.983.932 2.576 0 3.558L10.5 15.273l-4.074-4.296c-.932-.982-.932-2.575 0-3.558z"
            fill="#F8F8F8"
            stroke="#F8F8F8"
            strokeLinecap="round"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_189_2840">
          <Path fill="#fff" d="M0 0H21V21H0z" />
        </ClipPath>
        <ClipPath id="clip1_189_2840">
          <Path fill="#fff" d="M0 0H21V21H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HeartIcon
