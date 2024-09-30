import { View, Text } from 'react-native'
import React from 'react'
import useHome from './useHome'

const Home = () => {
    const {data} = useHome()
    console.log(data)
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home