import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function NotificationIcon() {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
  
    >
      <Rect width={26} height={26} rx={10} fill="#F5F5F5" />
      <Path
        d="M13.779 22.06a1.065 1.065 0 01-1.06.94 1.069 1.069 0 01-1.06-.94m-5.414-6.368a7.835 7.835 0 00.507-3.704 5.838 5.838 0 01.036-1.55 6.285 6.285 0 012.143-3.76 6.305 6.305 0 018.136 0 6.285 6.285 0 012.143 3.76c.081.512.093 1.034.037 1.55a7.912 7.912 0 00.506 3.704 3.105 3.105 0 01-2.507 4.3c-2.821.315-5.67.315-8.49 0a3.12 3.12 0 01-2.332-1.524 3.107 3.107 0 01-.179-2.776zm7.876-11.575a1.118 1.118 0 11-2.235-.002 1.118 1.118 0 012.235.002z"
        stroke="#E95322"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotificationIcon
