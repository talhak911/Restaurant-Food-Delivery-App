import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {ORDER_FILTERS, useMyOrders} from './useMyOrders';
import MyOrderCard from '../../components/myOrderCard/MyOrderCard';

const MyOrder = () => {
  const {handleIsActive, isActive} = useMyOrders();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 35,
            paddingVertical: 39,
          }}>
          <View style={{flexDirection: 'row', gap: 10, marginBottom: 19}}>
            {ORDER_FILTERS.map((item, index) => (
              <CustomButton
                key={index}
                onPress={() => {
                  handleIsActive(item.status);
                }}
                title={item.status}
                pV={3}
                bgColor={
                  isActive === item.status ? COLORS.orange : COLORS.orange2
                }
                textColor={
                  isActive === item.status ? COLORS.almostWhite : COLORS.orange
                }
                fontSize={17}
                width="33%"
              />
            ))}
          </View>

          {ORDER_FILTERS.map((item, index) => (
            <View
              key={index}
              style={{
                paddingVertical: 19,
                borderBottomWidth: 1,
                borderTopWidth: index === 0 ? 1 : 0,
                borderColor: COLORS.orange2,
              }}>
              <MyOrderCard
                picUrl="https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain"
                dateTime="29 Nov, 01:20 pm"
                items="2"
                orderStatus="Completed"
                price="50.00"
                title="Chiken Curry"
              />
            </View>
          ))}


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrder;
