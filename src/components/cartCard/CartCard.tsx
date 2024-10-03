import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_REGULAR,
} from '../../constants/fonts';
import {COLORS} from '../../constants/color';
import RemoveSmallIcon from '../../assets/icons/removeSmall';
import AddSmallIcon from '../../assets/icons/addSmall';

const CartCard = ({
  picUrl,
  name,
  price,
  items,
}: {
  picUrl: string;
  name: string;
  price: string;
  items: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{uri: picUrl}} />
      <View style={{flex: 1}}>
        <View style={styles.spaceBetween}>
          <Text style={styles.name}>{name} strawberry</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.date}>DD/MM/YY</Text>
            <Text style={styles.date}>Time</Text>
          </View>
        </View>
        <View style={styles.spaceBetween}>
          <Text style={styles.price}>${price}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <TouchableOpacity>
              <RemoveSmallIcon />
            </TouchableOpacity>
            <Text style={styles.items}>{items}</Text>
            <TouchableOpacity>
              <AddSmallIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

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
    gap: 6,
  },
  image: {height: 80, width: 80, borderRadius: 20},
  name: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 15,
    color: COLORS.almostWhite,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 14,
    color: COLORS.almostWhite,
  },
  date: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 13,
    color: COLORS.almostWhite,
  },
  items: {
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.almostWhite,
  },
});
