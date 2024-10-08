import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorProps, TabParamsList } from '../../types/types'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const useHomeHeader = () => {
  const [cartVisible,setCartVisible]=useState(false)
  const onClose =()=>{
      setCartVisible(false)
    }
    const navigation = useNavigation<TabNavigatorProps>()
  const navigateToConfirmOrder=()=>{
    setCartVisible(false)
    navigation.navigate("Confirm Order")
  }
    return {
        cartVisible,
        onClose,
        setCartVisible,
        navigateToConfirmOrder
  }
}

export default useHomeHeader