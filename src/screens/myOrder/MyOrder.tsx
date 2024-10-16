import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../../components/customButton/CustomButton';
import {useMyOrders} from './useMyOrders';
import OrderCard from '../../components/OrderCard/OrderCard';
import OrderCard2 from '../../components/OrderCard2/OrderCard2';
import {FoodItem} from '../../types/types';
import {formatDate, toPascalCase} from '../../utils/utils';
import {ORDER_FILTERS} from '../../constants/constants';

const MyOrder = () => {
  const {handleIsActive, isActive, orders, filteredOrders} = useMyOrders();
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
              width: '100%',
              flex: 1,
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
                  title={toPascalCase(item.status)}
                  pV={3}
                  bgColor={
                    isActive === item.status ? COLORS.orange : COLORS.orange2
                  }
                  textColor={
                    isActive === item.status
                      ? COLORS.almostWhite
                      : COLORS.orange
                  }
                  fontSize={17}
                  width="33%"
                />
              ))}
            </View>

            {filteredOrders?.map((order, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: 19,
                  borderBottomWidth: 1,
                  borderTopWidth: index === 0 ? 1 : 0,
                  borderColor: COLORS.orange2,
                }}>
                {order.foods.length === 1 ? (
                  order.foods?.map((foodItem: FoodItem, foodIndex: number) => (
                    <OrderCard
                      key={foodIndex}
                      picUrl={foodItem.food.picture}
                      dateTime={formatDate(order.createdAt)}
                      items={`${foodItem.quantity}`}
                      orderStatus={order.status}
                      totalPrice={foodItem.totalPrice.toFixed(2)}
                      price={`${foodItem.food.price}`}
                      title={foodItem.food.name}
                    />
                  ))
                ) : (
                  <OrderCard2
                    key={index}
                    foods={order.foods}
                    dateTime={formatDate(order.createdAt)}
                    totalPrice={`${order.totalPrice}`}
                    orderStatus={order.status}
                  />
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyOrder;
