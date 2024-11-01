import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useCustomDropdown} from './useCustomDropDown';
import {styles} from './CustomDropDownStyles';
import {COLORS} from '../../constants/color';
import BackIcon from '../../assets/icons/back';
import {CustomDropDownProps} from '../../types/types';

const CustomDropdown = ({
  label,
  items,
  onSelect,
  selectedValue,
  placeHolder,
}: CustomDropDownProps) => {
  const {handlePress, handleItemPress, isOpen} = useCustomDropdown({onSelect});
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text
          style={[
            styles.dropdownText,
            selectedValue ? {color: 'black'} : {color: COLORS.grey},
          ]}>
          {selectedValue || placeHolder}
        </Text>
        <View
          style={
            isOpen
              ? {transform: [{rotate: '90deg'}]}
              : {transform: [{rotate: '-90deg'}]}
          }>
          <BackIcon />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={{flex: 1, alignItems: 'center'}}>
          {items.map((item, index) => (
            <TouchableOpacity
              style={{paddingVertical: 10}}
              key={index}
              onPress={() => handleItemPress(item)}>
              <Text style={styles.categoriesText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;
