import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function PaymentMethodIcon() {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"

    >
      <Rect y={0.324951} width={40.3} height={40.3} rx={15} fill="#F8F8F8" />
      <Path
        d="M7.15 24.43v.431a3.985 3.985 0 003.985 3.982h18.03a3.985 3.985 0 003.985-3.982v-9.826a3.986 3.986 0 00-3.985-3.985h-18.03a3.985 3.985 0 00-3.985 3.985v9.346m.007-9.038H33.14m-22.334 4.82h2.156m-2.156 3.73h5.213m6.791 0h2.137m2.682 0h2.138"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PaymentMethodIcon
