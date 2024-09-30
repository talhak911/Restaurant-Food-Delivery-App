import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HelpIcon() {
  return (
    <Svg
      width={27}
      height={26}
      viewBox="0 0 27 26"
      fill="none"
    >
      <Path
        d="M4.918 18.207V9.772a8.904 8.904 0 012.521-6.194A8.513 8.513 0 0113.495 1a8.513 8.513 0 016.057 2.578 8.904 8.904 0 012.521 6.194v5.1M9.685 6.987a4.47 4.47 0 011.611-1.647 4.344 4.344 0 012.2-.607c.772 0 1.531.209 2.2.605a4.45 4.45 0 011.61 1.65m4.767 11.23V9.66h.2a3.548 3.548 0 011.71.272c.54.231 1.018.592 1.392 1.053.453.845.668 1.802.618 2.765.002.361-.018.722-.06 1.08a3.81 3.81 0 01-.404 1.607c-.25.498-.606.932-1.042 1.27a4.728 4.728 0 01-2.414.51zm0 0s.22 5.813-7.32 4.875m0 0c0 1.053-.836 1.907-1.866 1.907-1.03 0-1.865-.854-1.865-1.907 0-1.054.835-1.908 1.865-1.908s1.865.854 1.865 1.908zM1.616 10.986c.376-.461.855-.822 1.397-1.053a3.578 3.578 0 011.714-.273h.19v8.557c-.831.046-1.66-.13-2.404-.51a3.725 3.725 0 01-1.042-1.27 3.81 3.81 0 01-.404-1.606 9.04 9.04 0 01-.06-1.081 5.257 5.257 0 01.609-2.764z"
        stroke="#F8F8F8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HelpIcon
