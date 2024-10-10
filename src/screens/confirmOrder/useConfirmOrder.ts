import { useAppSelector } from "../../hooks/useStore"

const useConfirmOrder = () => {
const cartItems = useAppSelector(state=>state.cart.cartItems)
const totalPrice = cartItems
?.reduce((pre, item) => pre + item.totalPrice, 0)
.toString();
  return {
cartItems,
totalPrice
  }
}

export default useConfirmOrder