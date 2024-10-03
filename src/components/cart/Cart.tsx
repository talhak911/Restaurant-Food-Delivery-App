import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Cart2Icon from '../../assets/icons/cart2';
import {LEAGUE_SPARTAN_BOLD, LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import { COLORS } from '../../constants/color';
import CartCard from '../cartCard/CartCard';
import { CustomButton } from '../customButton/CustomButtom';

const Cart = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:"row",gap:10,alignItems:"center",marginTop:30,justifyContent:"center"}}>
        <Cart2Icon />
        <Text style={{fontFamily: LEAGUE_SPARTAN_BOLD, fontSize: 24,color:COLORS.almostWhite}}>
          Cart
        </Text>
      </View>
      <View
      style={{marginTop:38,borderBottomWidth:1,borderColor:COLORS.yellow}}
      />
      <Text style={{textAlign:"center",fontFamily:LEAGUE_SPARTAN_MEDIUM,fontSize:20,color:COLORS.almostWhite,marginTop:18}}>Your cart is empty</Text>
    
<ScrollView contentContainerStyle={{flexGrow:1}} >
    {/* <View style={{alignItems:"center",justifyContent:"center",flex:1}}>

<TouchableOpacity >
    <AddToCart/>
   </TouchableOpacity>
   <Text style={{fontFamily:LEAGUE_SPARTAN_BOLD,lineHeight:26,color:COLORS.almostWhite,fontSize:24,marginBottom:Height(11),textAlign:"center"}}>
    Want To Add Somethinng?
   </Text>
    </View> */}

<View style={{marginTop:26,marginBottom:50}}>
<CartCard  picUrl= 'https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain' items='2' name='Chiken' price='12'/>
<CartCard  picUrl= 'https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain' items='2' name='Chiken' price='12'/>
</View>

<View style={styles.priceContainer}>
  <Text style={styles.price}>Subtotal</Text>
  <Text style={styles.price}>$32.00</Text>
</View>
<View style={styles.priceContainer}>
  <Text style={styles.price}>Tax and Fees</Text>
  <Text style={styles.price}>$5.00</Text>
</View>
<View style={styles.priceContainer}>
  <Text style={styles.price}>Delivery</Text>
  <Text style={styles.price}>$3.00</Text>
</View>
<View style={{    marginBottom:19,borderBottomWidth:1,borderStyle:"dashed",borderColor:COLORS.orange2}}/>
<View style={styles.priceContainer}>
  <Text style={styles.price}>Total</Text>
  <Text style={styles.price}>$40.00</Text>
</View>

</ScrollView>
<View style={{alignItems:"center",height:'15%'}}>
<CustomButton
title='Checkout'
bgColor={COLORS.yellow}
pV={4}
pH={19}
textColor={COLORS.orange}
/>
</View>
    </View>
  );
};

export default Cart;

export const styles = StyleSheet.create({
  priceContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:22,
  },
  price:{
    fontFamily:LEAGUE_SPARTAN_MEDIUM,
    fontSize:20,
    color:COLORS.almostWhite
  }
})