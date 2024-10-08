import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import {COLORS} from '../../constants/color';

const Price = ({price, textColor}: {price: string; textColor?: string}) => {
  return (
    <View>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Subtotal</Text>
        <Text style={[styles.price, {color: textColor}]}>${price}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Tax and Fees</Text>
        <Text style={[styles.price, {color: textColor}]}>$0</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Delivery</Text>
        <Text style={[styles.price, {color: textColor}]}>$0</Text>
      </View>
      <View
        style={{
          marginBottom: 19,
          borderBottomWidth: 1,
          borderStyle: 'dashed',
          borderColor: COLORS.orange2,
        }}
      />
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Total</Text>
        <Text style={[styles.price, {color: textColor}]}>${price}</Text>
      </View>
    </View>
  );
};

export default Price;
export const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostWhite,
  },
});
