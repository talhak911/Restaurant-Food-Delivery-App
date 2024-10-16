import {Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {LoadingImage} from '../loadingImage/LoadingImage';
import {FoodItemPriceDisplayProps} from '../../types/types';
import {styles} from './FoodItemPriceDisplayStyles';

const FoodItemPriceDisplay = ({
  uri,
  height,
  width,
  price,
}: FoodItemPriceDisplayProps) => {
  return (
    <View style={{position: 'relative'}}>
      <LoadingImage
        placeholder="food"
        style={{borderRadius: 19, height, width}}
        uri={uri}
      />

      <View style={styles.priceContainer}>
        <Text style={{color: COLORS.almostWhite}}>${price}</Text>
      </View>
    </View>
  );
};

export default FoodItemPriceDisplay;
