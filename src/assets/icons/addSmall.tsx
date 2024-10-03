import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddSmallIcon() {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"

    >
      <Path
        d="M1.797 4.757c1.359-3.642 5.224-3.352 5.224-3.352s3.868-.29 5.224 3.352a6.44 6.44 0 010 4.46c-1.356 3.64-5.224 3.352-5.224 3.352s-3.865.288-5.224-3.352a6.458 6.458 0 010-4.46z"
        fill="#F8F8F8"
      />
      <Path
        d="M7.161 4.9v4.57m2.26-2.312H4.899"
        stroke="#E95322"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default AddSmallIcon
