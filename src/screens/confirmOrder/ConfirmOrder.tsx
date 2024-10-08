import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';
import PencilIcon from '../../assets/icons/pencil';
import {CustomInput} from '../../components/customInput/CustomInput';
import {TextInput} from 'react-native-gesture-handler';
import {CustomButton} from '../../components/customButton/CustomButtom';
import CartCard from '../../components/cartCard/CartCard';
import ConfirmOrderCart from '../../components/confirmOrderCard/ConfirmOrderCart';
import Price from '../../components/price/Price';

const ConfirmOrder = () => {
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
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
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
            />

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
                  // lineHeight:26,
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
              <ConfirmOrderCart
                items="2"
                price="20.00"
                name="Straberry shake"
                picUrl="https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain"
              />
              <ConfirmOrderCart
                items="2"
                price="20.00"
                name="Straberry shake"
                picUrl="https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain"
              />
            </View>

            <Price
            price='33'
            textColor={COLORS.almostBlack}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({});
