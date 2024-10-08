import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorProps } from '../../types/types'

const useCart = () => {
  
    const navigation = useNavigation<TabNavigatorProps>()
  const navigateToConfirmOrder=()=>{
    navigation.navigate("Confirm Order")
  }
    return {
        navigateToConfirmOrder
  }
}

export default useCart