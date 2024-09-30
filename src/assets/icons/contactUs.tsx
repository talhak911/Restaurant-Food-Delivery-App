import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ContactUsIcon() {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"

    >
      <Rect y={0.324951} width={40.3} height={40.3} rx={15} fill="#F8F8F8" />
      <Path
        d="M27.433 19.843a6.77 6.77 0 00-5.897-7.531m11.05 8.085A11.88 11.88 0 0022.232 7.15m3.42 17.004a2.954 2.954 0 00-.81-.483c-1.645-.607-2.991.718-4.524.443-1.635-.305-3.009-1.94-3.78-3.31a3.332 3.332 0 01-.443-2.4c.497-1.963 2.025-2.787 1.436-5.03-.443-1.639-2.167-4.058-3.886-4.505-3.075-.802-4.718 2.14-5.374 4.67-2.308 8.86 4.151 18.289 13.198 19.494 2.659.359 6.704.066 6.93-3.407.128-1.994-1.033-3.859-2.424-5.157l-.323-.315z"
        stroke="#E95322"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ContactUsIcon
