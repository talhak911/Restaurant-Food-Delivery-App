import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function UserIcon() {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"

    >
      <Rect width={26} height={26} rx={10} fill="#F5F5F5" />
      <Path
        d="M13.019 10.09c1.667 0 3.018-1.364 3.018-3.045C16.037 5.363 14.686 4 13.02 4 11.352 4 10 5.363 10 7.045c0 1.681 1.352 3.044 3.019 3.044zM18.575 18.982C17.127 22.265 13 21.995 13 21.995s-4.13.26-5.575-3.013a4.927 4.927 0 010-4.002C8.87 11.697 13 11.967 13 11.967s4.127-.26 5.575 3.013a4.926 4.926 0 010 4.002z"
        stroke="#E95322"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default UserIcon
