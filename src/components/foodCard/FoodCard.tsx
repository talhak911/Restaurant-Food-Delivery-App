import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {BlinkingImage} from '../loading/Loading';

const FoodCard = ({
  uri,
  height,
  width,
  price,
}: {
  uri: string | undefined | null;
  height: number;
  width: number;
  price: string;
}) => {
  return (
    <View style={{position: 'relative'}}>
      <BlinkingImage
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

export default FoodCard;

const styles = StyleSheet.create({
  priceContainer: {
    position: 'absolute',
    backgroundColor: COLORS.orange,
    right: -2,
    bottom: 12,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 4,
  },
});
