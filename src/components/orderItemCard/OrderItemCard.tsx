import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FoodCard from '../foodCard/FoodCard';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_SEMI_BOLD,
} from '../../constants/fonts';

const OrderItemCard = ({
  picture,
  price,
  items,
  name,
  totalPrice,
}: {
  picture: string;
  price: string;
  items: string;
  name: string;
  totalPrice: string;
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <FoodCard height={100} width={70} price={price} uri={picture} />
      <Text
        style={{
          color: COLORS.almostBlack,
          marginTop: 3,
          fontFamily: LEAGUE_SPARTAN_LIGHT,
        }}>
        {items} items
      </Text>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <View style={styles.orangeDot} />
        <Text style={styles.price}>${totalPrice}</Text>
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.name}>
        {name}
      </Text>
    </View>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    maxWidth: 100,
    fontSize: 16,
    color: COLORS.almostBlack,
    fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
  },
  price: {
    fontSize: 16,
    color: COLORS.orange,
    fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
  },
  orangeDot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.orange,
  },
});
