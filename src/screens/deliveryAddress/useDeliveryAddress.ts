import { useNavigation } from "@react-navigation/native"
import { TabNavigatorProps } from "../../types/types"

const useDeliveryAddress = () => {
  const naviagtion = useNavigation<TabNavigatorProps>()
  const navigateToAddAddress = ()=>{
    naviagtion.navigate("Add New Address")
  }
    return {
    navigateToAddAddress
  }
}

export default useDeliveryAddress