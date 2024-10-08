import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorProps } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { fetchCart } from '../../redux/slices/cartSlice'

const useCart = () => {
  const {cartItems,loading} = useAppSelector(state=>state.cart)
  const totalPrice = cartItems?.reduce((pre, item) => pre + item.totalPrice, 0).toString();
    const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchCart())
  },[])
    const navigation = useNavigation<TabNavigatorProps>()
  const navigateToConfirmOrder=()=>{
    navigation.navigate("Confirm Order")
  }
    return {cartItems,
      loading,
      totalPrice,
        navigateToConfirmOrder
  }
}

export default useCart