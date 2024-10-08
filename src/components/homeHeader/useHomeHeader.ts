import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorProps } from '../../types/types'

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