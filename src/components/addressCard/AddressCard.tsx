import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import AddressIcon from '../../assets/icons/address';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';
import SelectIcon from '../../assets/icons/select';

const AddressCard = ({name, address}: {name: string; address: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 26,
        borderBottomWidth: 1,
        borderColor: COLORS.lightPink,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
        <AddressIcon />
        <View style={{}}>
          <Text
            style={{
              flex: 1,
              fontFamily: LEAGUE_SPARTAN_MEDIUM,
              fontSize: 20,
              color: COLORS.almostBlack,
            }}>
            {name}
          </Text>
          <Text
            style={{
              flex: 1,
              fontFamily: LEAGUE_SPARTAN_LIGHT,
              fontSize: 14,
              color: COLORS.almostBlack,
            }}>
            {address}
          </Text>
        </View>
      </View>
      <TouchableOpacity 
      style={{transform:[{scale:1.2}]}}
      >
        <SelectIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({});
