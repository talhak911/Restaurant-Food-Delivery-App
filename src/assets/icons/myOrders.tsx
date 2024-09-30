import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function MyOrdersIcon() {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"

    >
      <Rect y={0.324951} width={40.3} height={40.3} rx={15} fill="#F8F8F8" />
      <Path
        d="M15.547 17.856V11.92a4.783 4.783 0 014.764-4.77 4.783 4.783 0 014.769 4.77v5.937M31.5 28.38l-1.435-10.635a3.671 3.671 0 00-3.694-3.108H14.256a3.67 3.67 0 00-3.694 3.108L9.126 28.38a4.3 4.3 0 004.389 4.768h13.611a4.301 4.301 0 004.375-4.769z"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MyOrdersIcon
