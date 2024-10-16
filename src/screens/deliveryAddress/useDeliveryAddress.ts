import { useNavigation } from "@react-navigation/native"
import { StackNavigatorProps } from "../../types/types"
import { useAppSelector } from "../../hooks/useStore"

const useDeliveryAddress = () => {
  const naviagtion = useNavigation<StackNavigatorProps>()
  const navigateToAddAddress = ()=>{
    naviagtion.navigate("Add New Address")
  }
  const addresses = useAppSelector(state=>state.auth.user?.customer?.address)
    return {
      addresses,
    navigateToAddAddress
  }
}

export default useDeliveryAddress