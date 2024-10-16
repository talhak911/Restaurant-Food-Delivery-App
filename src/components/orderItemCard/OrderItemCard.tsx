import {View, Text} from 'react-native';
import React from 'react';
import FoodItemPriceDisplay from '../foodItemPriceDisplay/FoodItemPriceDisplay';
import {OrderItemCardProps} from '../../types/types';
import {styles} from './OrderItemCardStyles';

const OrderItemCard = ({
  picture,
  price,
  items,
  name,
  totalPrice,
}: OrderItemCardProps) => {
  return (
    <View style={{alignItems: 'center'}}>
      <FoodItemPriceDisplay
        height={100}
        width={70}
        price={price}
        uri={picture}
      />
      <Text style={styles.items}>{items} items</Text>
      <View style={styles.priceContainer}>
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
