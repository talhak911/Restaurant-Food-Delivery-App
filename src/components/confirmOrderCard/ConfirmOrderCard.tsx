import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_REGULAR,
} from '../../constants/fonts';
import {COLORS} from '../../constants/color';
import DeleteIcon from '../../assets/icons/delete';
import {CustomButton} from '../customButton/CustomButtom';
import AddIcon from '../../assets/icons/add';
import RemoveIcon from '../../assets/icons/remove';
import {BlinkingImage} from '../loading/Loading';
import useUpdateCartItems from '../../hooks/useUpdateItems';

const ConfirmOrderCard = ({
  picUrl,
  name,
  foodId,
  price,
  items,
}: {
  picUrl?: string | null;
  name: string;
  foodId: string;
  price: string;
  items: string;
}) => {
  const {loading, addOneItem, removeOneItem, deleteOneItem} =
    useUpdateCartItems();
  return (
    <View style={styles.cardContainer}>
      <BlinkingImage style={styles.image} uri={picUrl} placeholder="food" />
      <View style={{flex: 1}}>
        <View style={styles.spaceBetween}>
          <Text style={styles.name}>{name}</Text>
          <View style={{alignItems: 'flex-end', marginTop: -10}}>
            <TouchableOpacity
              onPress={() => {
                deleteOneItem(foodId);
              }}
              style={{marginBottom: 7}}>
              <DeleteIcon />
            </TouchableOpacity>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
        <View style={[styles.spaceBetween, {marginTop: 2}]}>
          <Text style={styles.lightText}>DD MM, 00:00 pm </Text>
          <Text style={styles.lightText}>{items} items</Text>
        </View>
        <View
          style={[styles.spaceBetween, {marginTop: 12, alignItems: 'center'}]}>
          <CustomButton
            title="Cancel Order"
            bgColor={COLORS.orange2}
            textColor={COLORS.orange}
            fontSize={15}
            pV={4}
            pH={18}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <TouchableOpacity
              style={{
                transform: [{scale: 0.8}],
                opacity: Number(items) === 1 ? 0.4 : 1,
              }}
              disabled={loading || Number(items) === 1}
              onPress={() => {
                removeOneItem(foodId);
              }}>
              <RemoveIcon />
            </TouchableOpacity>
            <Text style={styles.items}>{items}</Text>
            <TouchableOpacity
              disabled={loading}
              onPress={() => {
                addOneItem(foodId);
              }}
              style={{transform: [{scale: 0.8}]}}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmOrderCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.orange2,
    paddingBottom: 15,
    marginBottom: 15,
    gap: 9,
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 6,
  },
  //new
  image: {height: 108, width: 71, borderRadius: 20},
  name: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    lineHeight: 20,
    color: COLORS.almostBlack,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.orange,
  },
  lightText: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 14,
    color: COLORS.almostBlack,
  },
  items: {
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 18,
    lineHeight: 20,
    color: COLORS.almostBlack,
  },
});
