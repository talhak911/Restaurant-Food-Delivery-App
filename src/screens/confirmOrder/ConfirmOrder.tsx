import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';
import PencilIcon from '../../assets/icons/pencil';
import {TextInput} from 'react-native-gesture-handler';
import {CustomButton} from '../../components/customButton/CustomButtom';
import ConfirmOrderCard from '../../components/confirmOrderCard/ConfirmOrderCard';
import Price from '../../components/price/Price';
import useConfirmOrder from './useConfirmOrder';
import CustomDropdown from '../../components/customDropDown2/CustomDropDown';

const ConfirmOrder = () => {
  const {
    cartItems,
    totalPrice,
    addresses,
    address,
    navigateToAddAddress,
    onChangeAddress,
  } = useConfirmOrder();
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
              paddingTop: 40,
              paddingBottom: 30,
              paddingHorizontal: 35,
            }}>
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center',marginBottom:23}}>
              <Text
                style={{
                  fontFamily: LEAGUE_SPARTAN_BOLD,
                  fontSize: 24,
                  lineHeight: 26,
                  color: COLORS.almostBlack,
                }}>
                Shipping Address
              </Text>
              <PencilIcon />
            </View>
{/* 
            <TextInput
              style={{
                backgroundColor: COLORS.yellow2,
                borderRadius: 20,
                paddingLeft: 13,
                fontSize: 16,
                paddingVertical: 4,
                lineHeight: 16,
                marginTop: 23,
              }}
              onChange={() => {}}
              placeholder="Address"
              editable={false}
            /> */}
            <CustomDropdown
              items={addresses!}
              onSelect={onChangeAddress}
              selectedValue={address!}
            />
            {addresses?.length! < 1 && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 30,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.almostBlack,
                    fontWeight: '500',
                  }}>
                  Add Address in the settings
                </Text>
                <TouchableOpacity
                onPress={navigateToAddAddress}
                >
                  <Text
                    style={{
                      color: COLORS.orange,
                      borderBottomWidth: 1,
                      borderColor: COLORS.orange,
                    }}>
                    Add Address
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View
              style={{
                paddingBottom: 19,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 46,
                borderBottomWidth: 1,
                borderColor: COLORS.lightPink,
              }}>
              <Text
                style={{
                  fontFamily: LEAGUE_SPARTAN_MEDIUM,
                  fontSize: 20,
                  color: COLORS.almostBlack,
                }}>
                Order Summary
              </Text>

              <CustomButton
                title="Edit"
                fontSize={12}
                pV={2}
                bgColor={COLORS.orange2}
                textColor={COLORS.orange}
                pH={22}
              />
            </View>

            <View style={{paddingTop: 12}}>
              {cartItems?.map((item, index) => (
                <ConfirmOrderCard
                  key={index}
                  items={item.quantity.toString()}
                  price={item.totalPrice.toString()}
                  name={item.food.name}
                  picUrl={item.food.picture}
                  foodId={item.food.id}
                />
              ))}
            </View>

            <Price price={totalPrice || '0'} textColor={COLORS.almostBlack} />
      <View style={{alignItems:"center"}}>
      <CustomButton
          title='Place Order'
          bgColor={COLORS.orange2}
          textColor={COLORS.orange}
          fontSize={23}
          pH={23}
  />
      </View>
          
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({});
