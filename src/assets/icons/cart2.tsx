import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Cart2Icon() {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
    >
      <Rect y={0.325195} width={40.3} height={40.3} rx={20} fill="#F8F8F8" />
      <Path
        d="M13.54 22.805a2.47 2.47 0 002.498 1.913h12.88a2.466 2.466 0 002.492-1.913l1.123-7.713a2.695 2.695 0 00-2.673-3.207H11.83m1.71 10.92l-1.71-10.92m1.71 10.92s.53 5.812 6.335 6.055h10.394M11.83 11.885l-.503-3.203A1.873 1.873 0 009.49 7.15H7.8m11.005 23.853a2.147 2.147 0 11-4.294 0 2.147 2.147 0 014.294 0zm13.611 0a2.147 2.147 0 11-4.294 0 2.147 2.147 0 014.294 0z"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Cart2Icon
