import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore"
import { useNavigation } from "@react-navigation/native";
import { TabNavigatorProps } from "../../types/types";
import { fetchOrders, placeOrder } from "../../redux/slices/orderSlice";
import Toast from "react-native-toast-message";

const useConfirmOrder = () => {
  const loading = useAppSelector(state=>state.orders.loading)
  const cartItems = useAppSelector(state=>state.cart.cartItems)
  const addresses = (useAppSelector(state=>state.auth.user?.customer?.address))?.map((item=>item.address))
  const dispatch = useAppDispatch()
const navigation = useNavigation<TabNavigatorProps>()
const totalPrice = cartItems
?.reduce((pre, item) => pre + item.totalPrice, 0)
.toString();
const [address,setAddress]=useState<string>()
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

const handlePlaceOrder =async ()=>{
if(address){
  const selectedAddress = address
  const res = await dispatch(placeOrder({deliveryAddress:selectedAddress}))
   if (res.meta.requestStatus === 'fulfilled'){
     navigation.navigate("My Orders")
  }

}else{
  Toast.show({text1:"Please select delivery address"})
}
}

return {
  addresses,
  address,
  cartItems,
  loading,
  totalPrice,
  navigateToAddAddress,
  onChangeAddress,
  handlePlaceOrder
  }
}

export default useConfirmOrder