import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useStore"
import { useNavigation } from "@react-navigation/native";
import { TabNavigatorProps } from "../../types/types";

const useConfirmOrder = () => {
const navigation = useNavigation<TabNavigatorProps>()
const cartItems = useAppSelector(state=>state.cart.cartItems)
const totalPrice = cartItems
?.reduce((pre, item) => pre + item.totalPrice, 0)
.toString();
const addresses = (useAppSelector(state=>state.auth.user?.customer?.address))?.map((item=>item.address))
const [address,setAddress]=useState<string>('Add address in settings')
useEffect(()=>{
  if(addresses){
    setAddress(addresses[0])
  }
},[])
const onChangeAddress = (address:string)=>{
setAddress(address)
}
const navigateToAddAddress = ()=>{
  navigation.navigate("Add New Address")
}
return {
  addresses,
  address,
  cartItems,
  totalPrice,
  navigateToAddAddress,
  onChangeAddress,
  }
}

export default useConfirmOrder