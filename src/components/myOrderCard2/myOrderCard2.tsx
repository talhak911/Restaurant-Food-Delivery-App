import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_SEMI_BOLD,
} from '../../constants/fonts';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButtom';
import TickIcon from '../../assets/icons/tick';
import CrossIcon from '../../assets/icons/cross';
import OrderItemCard from '../orderItemCard/OrderItemCard';
import {FoodItem} from '../../types/types';
import {OrderStatus} from '../../gql/graphql';

const MyOrderCard2 = ({
  foods,
  orderStatus,
  dateTime,
  totalPrice,
}: {
  foods: FoodItem[];
  dateTime: string;
  orderStatus: OrderStatus;
  totalPrice: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', gap: 16, alignItems: 'center'}}>
        {orderStatus !== OrderStatus.Active && (
          <View style={styles.orderStatusContainer}>
            {orderStatus == OrderStatus.Delivered && <TickIcon />}
            {orderStatus == OrderStatus.Canceled && <CrossIcon />}
            <Text
              style={{
                color: COLORS.orange,
                fontFamily: LEAGUE_SPARTAN_LIGHT,
                textTransform: 'capitalize',
              }}>
              Order {orderStatus}
            </Text>
          </View>
        )}
        <Text
          style={{fontFamily: LEAGUE_SPARTAN_LIGHT, color: COLORS.almostBlack}}>
          {dateTime}
        </Text>
      </View>
      <ScrollView
        style={{alignSelf: 'center'}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            marginTop: 12,
            alignItems: 'flex-start',
            gap: 20,
            flexDirection: 'row',
          }}>
          {foods.map((item, index) => (
            <OrderItemCard
              key={index}
              items={`${item.quantity}`}
              name={item.food.name}
              price={`${item.food.price}`}
              picture={item.food.picture}
              totalPrice={`${item.totalPrice}`}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          marginTop: 8,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <CustomButton
          title="Leave a review"
          fontSize={15}
          width={120}
          pH={12}
          pV={5}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
          <Text
            style={{
              fontFamily: LEAGUE_SPARTAN_MEDIUM,
              fontSize: 16,
              color: COLORS.orange,
            }}>
            Total
          </Text>
          <Text
            style={{
              fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
              fontSize: 18,
              color: COLORS.orange,
            }}>
            ${totalPrice}
          </Text>
        </View>
        <CustomButton
          title="Order Again"
          fontSize={15}
          bgColor={COLORS.orange2}
          textColor={COLORS.orange}
          pH={12}
          pV={5}
        />
      </View>
    </View>
  );
};

export default MyOrderCard2;

export const styles = StyleSheet.create({
  cardContainer: {},
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.orange,
    fontSize: 20,
  },
  orderStatusContainer: {flexDirection: 'row', gap: 3, alignItems: 'center'},
  title: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.almostBlack,
    fontSize: 20,
  },
});
