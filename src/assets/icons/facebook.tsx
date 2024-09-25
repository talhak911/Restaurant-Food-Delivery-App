import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function FacebookIcon() {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"

    >
      <Rect width={34.1306} height={34.1306} rx={13.1271} fill="#FFDECF" />
      <Path
        d="M19.16 27.576v-6.257h2.8a.507.507 0 00.507-.507v-3.1a.507.507 0 00-.507-.508h-2.8v-1.823a1.235 1.235 0 011.236-1.232h2.054v-3.201a.906.906 0 00-.906-.903h-2.565a4.106 4.106 0 00-4.105 4.104s-.045.595-.073 3.055h-2.709a.567.567 0 00-.567.567v2.981a.563.563 0 00.567.567h2.677c0 1.802 0 4.392.05 5.987m.006-.031a11.198 11.198 0 01-8.261-10.827 11.198 11.198 0 0122.394 0 11.197 11.197 0 01-9.797 11.117"
        stroke="#E95322"
        strokeWidth={1.42515}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FacebookIcon
