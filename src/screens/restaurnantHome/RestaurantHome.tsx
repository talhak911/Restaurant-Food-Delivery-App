import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/color'
import { CustomButton } from '../../components/customButton/CustomButtom'
import useRestaurantHome from './useRestaurantHome'

const RestaurantHome = () => {
  const{signOut}=useRestaurantHome()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
        }}>
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

const styles = StyleSheet.create({})