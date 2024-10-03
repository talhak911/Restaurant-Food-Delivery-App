import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function AddToCart() {
  return (
    <Svg
      width={184}
      height={184}
      viewBox="0 0 184 184"
      fill="none"
    >
      <Rect width={184} height={184} rx={51.5385} fill="#E95322" />
      <Path
        d="M39.4 69.324C53.135 32.506 92.216 35.44 92.216 35.44s39.097-2.934 52.814 33.884a65.107 65.107 0 010 45.091c-13.717 36.8-52.814 33.884-52.814 33.884s-39.08 2.916-52.814-33.884a65.293 65.293 0 010-45.091zM93.633 70.77v46.198m22.835-23.372H70.77"
        stroke="#FFDECF"
        strokeWidth={5.15385}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default AddToCart
