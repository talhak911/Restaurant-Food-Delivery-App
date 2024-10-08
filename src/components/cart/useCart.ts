import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorProps } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { fetchCart } from '../../redux/slices/cartSlice'

const useCart = () => {
  const cartItems = useAppSelector(state=>state.cart.cartItems)
    const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchCart())
  })
    const navigation = useNavigation<TabNavigatorProps>()
  const navigateToConfirmOrder=()=>{
    navigation.navigate("Confirm Order")
  }
    return {cartItems,
        navigateToConfirmOrder
  }
}

export default useCart