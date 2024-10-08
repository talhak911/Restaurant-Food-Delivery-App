import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PencilIcon() {
  return (
    <Svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
    >
      <Path
        d="M5.682 3.878L7.575 1.52a1.41 1.41 0 011.978-.21 1.412 1.412 0 01.21 1.977L7.87 5.645m-5.998 6.068H11m-5.296-7.87L1.544 8.99l-.508 1.664a.817.817 0 001.178.952l1.518-.848 4.157-5.15a1.404 1.404 0 10-2.185-1.767z"
        stroke="#E95322"
        strokeWidth={0.981915}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PencilIcon
