import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CartIcon() {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
    >
      <Rect width={26} height={26} rx={10} fill="#F5F5F5" />
      <Path
        d="M8.706 14.634c.084.344.29.65.584.865.295.215.658.325 1.029.312h8.315c.37.013.733-.098 1.027-.312.293-.215.5-.521.582-.865l.725-4.747c.05-.241.041-.49-.023-.728a1.632 1.632 0 00-.348-.649 1.733 1.733 0 00-.607-.443 1.813 1.813 0 00-.747-.153H7.6m1.105 6.72l-1.105-6.72m1.105 6.72s.343 3.577 4.09 3.726h6.71M7.602 7.914l-.324-1.971a1.143 1.143 0 00-.415-.676A1.246 1.246 0 006.09 5H5m7.105 14.679c0 .73-.62 1.321-1.386 1.321-.766 0-1.386-.592-1.386-1.321 0-.73.62-1.322 1.386-1.322.766 0 1.386.592 1.386 1.322zm8.788 0c0 .73-.62 1.321-1.386 1.321-.766 0-1.387-.592-1.387-1.321 0-.73.62-1.322 1.387-1.322.765 0 1.386.592 1.386 1.322z"
        stroke="#E95322"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CartIcon
