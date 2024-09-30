import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon() {
  return (
    <Svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"

    >
      <Path
        d="M22.547 8.023v10.645c0 1.149-.453 2.25-1.26 3.063A4.294 4.294 0 0118.24 23h-1.834v-4.047c0-.775-.306-1.52-.851-2.068a2.898 2.898 0 00-4.112 0 2.933 2.933 0 00-.851 2.068V23H8.759a4.294 4.294 0 01-3.045-1.269 4.345 4.345 0 01-1.262-3.063V8.023M26 11.823l-8.032-8.84a6.02 6.02 0 00-8.936 0L1 11.822"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeIcon
