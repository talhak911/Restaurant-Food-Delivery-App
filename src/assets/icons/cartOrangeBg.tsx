import Svg, { Rect, Path } from "react-native-svg"

function CartOrangeBg() {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
    >
      <Rect width={19} height={19} rx={7.30769} fill="#E95322" />
      <Path
        d="M5.862 10.194c.061.251.212.475.427.632.215.157.48.238.752.228h6.076c.27.01.536-.071.75-.228.215-.157.366-.38.426-.632l.53-3.469c.036-.176.03-.358-.017-.532a1.193 1.193 0 00-.255-.474 1.267 1.267 0 00-.443-.324 1.325 1.325 0 00-.546-.112H5.055m.807 4.91l-.807-4.91m.807 4.91s.25 2.615 2.989 2.724h4.904m-8.7-7.634l-.238-1.44a.835.835 0 00-.303-.494.91.91 0 00-.563-.195h-.797M8.346 13.88c0 .534-.453.966-1.013.966-.56 0-1.013-.432-1.013-.966 0-.533.454-.965 1.013-.965.56 0 1.013.432 1.013.966zm6.422 0c0 .534-.454.966-1.013.966-.56 0-1.013-.432-1.013-.966 0-.533.453-.965 1.013-.965.56 0 1.013.432 1.013.966z"
        stroke="#F8F8F8"
        strokeWidth={0.730769}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CartOrangeBg
