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
import DeleteIcon from '../../assets/icons/delete';
import { CustomButton } from '../customButton/CustomButtom';
import AddIcon from '../../assets/icons/add';
import RemoveIcon from '../../assets/icons/remove';

const ConfirmOrderCart = ({
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
          <Text style={styles.name}>{name}</Text>
          <View style={{alignItems: 'flex-end',marginTop:-10}}>
            <TouchableOpacity style={{marginBottom: 7}}>
              <DeleteIcon />
            </TouchableOpacity>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
        <View style={[styles.spaceBetween, {marginTop: 2}]}>
          <Text style={styles.lightText}>29 Nov, 15:20 pm </Text>
          <Text style={styles.lightText}>2 items</Text>
        </View>
        <View style={[styles.spaceBetween, {marginTop: 12,alignItems:"center"}]}>
          <CustomButton
          title='Cancel Order'
          bgColor={COLORS.orange2}
          textColor={COLORS.orange}
          fontSize={15}
          pV={4}
          pH={18}
          />
       <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
          <TouchableOpacity style={{transform:[{scale:0.8}]}}>
          <RemoveIcon/>
          </TouchableOpacity>
          <Text style={styles.items}>{items}</Text>
          <TouchableOpacity style={{transform:[{scale:0.8}]}}>
          <AddIcon/>
          </TouchableOpacity>
       </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmOrderCart;

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
