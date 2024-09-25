import Svg, { Rect, Path } from "react-native-svg"

function GoogleIcon() {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"

    >
      <Rect width={34.1306} height={34.1306} rx={13.1271} fill="#FFDECF" />
      <Path
        d="M23.291 10.307a9.189 9.189 0 102.963 6.758h-9.189"
        stroke="#E95322"
        strokeWidth={1.34766}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default GoogleIcon
