import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddressIcon() {
  return (
    <Svg
      width={35}
      height={31}
      viewBox="0 0 35 31"
      fill="none"
    >
      <Path
        d="M28.719 10.657V23.78a5.34 5.34 0 01-5.34 5.34h-2.274V24.13a3.605 3.605 0 10-7.21 0v4.989h-2.274a5.34 5.34 0 01-5.34-5.34V10.657M33 15.342L23.04 4.444a7.504 7.504 0 00-11.08 0L2 15.342"
        stroke="#E95322"
        strokeWidth={2.22509}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default AddressIcon
