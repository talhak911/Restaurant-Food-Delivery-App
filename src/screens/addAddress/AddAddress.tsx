import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import AddressIcon from '../../assets/icons/address';
import {CustomInput} from '../../components/customInput/CustomInput';
import useAddAddress from './useAddAddress';
import {CustomButton} from '../../components/customButton/CustomButtom';

const AddAddress = () => {
  const {fields, onChange,addAddress,loading} = useAddAddress();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
        }}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              flex: 1,
              paddingTop: 50,
              paddingBottom: 30,
              paddingHorizontal: 35,
              alignItems: 'center',
            }}>
            <View style={{transform: [{scale: 2}]}}>
              <AddressIcon />
            </View>
            <View style={{gap: 25, marginTop: 53, marginBottom: 109}}>
              {Object.keys(fields).map((item, index) => (
                <CustomInput
                  key={index}
                  label={item}
                  value={fields[item as keyof typeof fields]}
                  onChange={text => onChange(item as keyof typeof fields, text)}
                  placeHolder={item}
                />
              ))}
            </View>
            <CustomButton title="Apply" pH={40} pV={4} fontSize={17} onPress={addAddress} loading={loading}/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
