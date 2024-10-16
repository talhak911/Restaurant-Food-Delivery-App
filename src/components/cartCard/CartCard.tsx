import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RemoveSmallIcon from '../../assets/icons/removeSmall';
import AddSmallIcon from '../../assets/icons/addSmall';
import {LoadingImage} from '../loadingImage/LoadingImage';
import useUpdateCartItems from '../../hooks/useUpdateItems';
import {CartCardProps} from '../../types/types';
import {styles} from './CartCardStyles';

const CartCard = ({picUrl, name, price, items, foodId}: CartCardProps) => {
  const {addOneItem, removeOneItem, loading} = useUpdateCartItems();
  return (
    <View style={styles.cardContainer}>
      <LoadingImage placeholder="food" style={styles.image} uri={picUrl} />
      <View style={{flex: 1}}>
        <View style={styles.spaceBetween}>
          <Text style={styles.name}>{name}</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.date}>DD/MM/YY</Text>
            <Text style={styles.date}>Time</Text>
          </View>
        </View>
        <View style={styles.spaceBetween}>
          <Text style={styles.price}>${price}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <TouchableOpacity
              disabled={loading || Number(items) === 1}
              style={{opacity: Number(items) === 1 ? 0.4 : 1}}
              onPress={() => {
                removeOneItem(foodId);
              }}>
              <RemoveSmallIcon />
            </TouchableOpacity>
            <Text style={styles.items}>{items}</Text>
            <TouchableOpacity
              disabled={loading}
              onPress={() => {
                addOneItem(foodId);
              }}>
              <AddSmallIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
