import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const useGoBack = () => {
    const navigation = useNavigation()
    const navigateToBack =()=>{
        navigation.goBack()
    }
  return {
    navigateToBack
  }
}

export default useGoBack