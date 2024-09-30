import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function MyProfileIcon() {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"

    >
      <Rect y={0.324951} width={40.3} height={40.3} rx={15} fill="#F8F8F8" />
      <Path
        d="M20.47 15.946a4.398 4.398 0 100-8.796 4.398 4.398 0 000 8.796zM28.565 28.791c-2.11 4.742-8.123 4.351-8.123 4.351s-6.016.375-8.123-4.35a7.064 7.064 0 010-5.783c2.107-4.741 8.123-4.35 8.123-4.35s6.012-.376 8.123 4.35a7.063 7.063 0 010 5.782z"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MyProfileIcon
