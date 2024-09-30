import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FavouriteIcon() {
  return (
    <Svg
      width={23}
      height={20}
      viewBox="0 0 23 20"
      fill="none"
    >
      <Path
        d="M11.505 3.268s-.452.343-.918.952m-.994 3.236c-.154-1.38.431-2.502.994-3.236m0 0c.541-.705 1.214-1.25 1.902-1.665m0 0c1.21-.73 2.469-1.057 3.144-1.135.79-.029 1.578.089 2.317.346a5.942 5.942 0 011.98 1.15c2.456 2.195 2.817 6.335.596 8.78-2.22 2.443-5.86 3.526-8.1 6.012-.363.395-.672.83-.921 1.292a6.386 6.386 0 00-.918-1.292c-2.244-2.486-5.86-3.545-8.104-6.013C.24 9.227.623 5.114 3.08 2.915c1.316-1.436 4.325-3.293 9.409-.36z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FavouriteIcon
