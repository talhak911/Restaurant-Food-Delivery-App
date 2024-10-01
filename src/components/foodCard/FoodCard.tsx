import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/color'

const FoodCard = ({uri,height,width,price}:{uri:string,height:number,width:number,price:string}) => {
  return (
    <View style={{position: 'relative'}}>
    <Image
      style={{borderRadius: 19}}
      source={{
        width,
        height,
        uri,
      }}
    />

    <View
      style={styles.priceContainer}>
      <Text style={{color: COLORS.almostWhite}}>${price}</Text>
    </View>
  </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
    priceContainer:{
        position: 'absolute',
        backgroundColor: COLORS.orange,
        right: -2,
        bottom: 12,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 4,
      }
})