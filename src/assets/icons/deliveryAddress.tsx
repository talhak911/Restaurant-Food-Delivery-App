import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function DeliveryAddressIcon() {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"

    >
      <Rect y={0.324951} width={40.3} height={40.3} rx={15} fill="#F8F8F8" />
      <Path
        d="M19.985 7.156c.694-.033 6.707-.125 8.9 5.652a11.6 11.6 0 01.096 7.548c-1.475 4.982-5.522 9.672-9 12.794-3.483-3.122-7.53-7.812-9.006-12.794a11.628 11.628 0 01.111-7.548c2.197-5.777 8.206-5.62 8.9-5.652z"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DeliveryAddressIcon
