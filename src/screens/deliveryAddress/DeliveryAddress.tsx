import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import AddressCard from '../../components/addressCard/AddressCard';
import {CustomButton} from '../../components/customButton/CustomButtom';
import useDeliveryAddress from './useDeliveryAddress';

const DeliveryAddress = () => {
  const {navigateToAddAddress, addresses} = useDeliveryAddress();
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
              paddingTop: 35,
              paddingBottom: 30,
              paddingHorizontal: 35,
            }}>
            <View
              style={{borderBottomWidth: 1, borderColor: COLORS.lightPink}}
            />
            {addresses?.map((item, index) => (
              <AddressCard
                key={index}
                name={item.name}
                address={item.address}
              />
            ))}
            <View style={{alignItems: 'center', marginTop: 150}}>
              <CustomButton
                title="Add new Address"
                bgColor={COLORS.orange2}
                fontSize={17}
                textColor={COLORS.orange}
                onPress={navigateToAddAddress}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({});
