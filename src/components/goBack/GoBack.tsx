import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BackIcon from '../../assets/icons/back'
import useGoBack from './useGoBack'

const GoBack = () => {
    const {navigateToBack}= useGoBack()
  return (
<TouchableOpacity
onPress={navigateToBack}
>
    <BackIcon/>
</TouchableOpacity>
  )
}

export default GoBack