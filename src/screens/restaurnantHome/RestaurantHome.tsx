import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/color'
import { CustomButton } from '../../components/customButton/CustomButton'
import useRestaurantHome from './useRestaurantHome'
import { styles } from './RestaurantHomeStyles'

const RestaurantHome = () => {
  const{signOut}=useRestaurantHome()
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.contentContainer}>
        <ScrollView contentContainerStyle={{flexGrow: 1,alignItems:"center",justifyContent:"center",gap:20}}>
        <Text style={{color:'black',fontSize:16}}>Visit the website for restaurant managment</Text>
        <CustomButton
        onPress={signOut}
        title='SignOut'
        />
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default RestaurantHome