import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUser } from '../../redux/slices/authSlice'
import { useAppDispatch } from '../../hooks/useStore'

const useRestaurantHome = () => {
    const dispatch=useAppDispatch()
    const signOut = async()=>{
        await AsyncStorage.removeItem("authToken")
        dispatch(setUser(null))
      }
  return {
signOut
  }
}

export default useRestaurantHome

