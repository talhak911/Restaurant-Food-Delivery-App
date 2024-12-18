import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function DrinksWhiteBgIcon() {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
    >
      <Rect width={26} height={26} rx={10} fill="#fff" />
      <Path
        d="M16.959 7.493c.73 2.855.609 6.201-.953 8.725-.57.923.048 1.9.376 2.931.224.693.625 1.424.36 2.1-.13.31-.35.576-.634.768-.285.19-.62.299-.968.31-.917.065-1.838.065-2.756 0-3.91-.23.064-4.293-1.058-6.101a10.9 10.9 0 01-1.402-5.493c0-1.07-.128-2.709.738-3.532 1.265-1.2 3.525-1.208 4.959-.562m-5.528 5.84c.08.946 1.201 1.085 1.963.862.76-.223 1.514-.854 2.403-1.024a2.36 2.36 0 011.572.176c.485.237.865.633 1.072 1.117m-3.149 1.5L18.554 3M11.83 20.757c1.195.361 2.476.361 3.67 0m-5.609-9.94c-.16.03-.324.046-.488.046a2.455 2.455 0 01-1.7-.676A2.263 2.263 0 017 8.555c0-.612.253-1.2.704-1.632a2.455 2.455 0 011.7-.676c.637 0 1.248.243 1.7.676.45.433.703 1.02.703 1.632m-1.674-.377a6.645 6.645 0 005.08.115"
        stroke="#E95322"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DrinksWhiteBgIcon
