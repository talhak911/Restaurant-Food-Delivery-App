import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButtom';
import TickIcon from '../../assets/icons/tick';
import CrossIcon from '../../assets/icons/cross';
import {OrderStatus} from '../../gql/graphql';
import { styles } from './MyOrderCardStyles';
import FoodCard from '../foodCard/FoodCard';

const MyOrderCard = ({
  picUrl,
  title,
  dateTime,
  orderStatus,
  totalPrice,
  price,
  items,
}: {
  picUrl: string;
  title: string;
  dateTime: string;
  price:string,
  orderStatus: OrderStatus;
  totalPrice: string;
  items: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      {/* <Image
        style={{borderRadius: 20}}
        source={{uri: picUrl, height: 108, width: 71}}
      /> */}
      <FoodCard
      height={108}
      width={71}
      price={price}
      uri={picUrl}
      />
      <View style={styles.containerContent}>
        <View style={styles.leftContentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{fontFamily:LEAGUE_SPARTAN_LIGHT,color:COLORS.almostBlack}}>{dateTime}</Text>
          {orderStatus !== OrderStatus.Active && (
            <View style={styles.orderStatusContainer}>
              {orderStatus == OrderStatus.Delivered && <TickIcon />}
              {orderStatus == OrderStatus.Canceled && <CrossIcon />}
              <Text style={styles.orderStatus}>Order {orderStatus}</Text>
            </View>
          )}
          <CustomButton
            title="Leave a review"
            fontSize={15}
            width={120}
            pH={12}
            pV={5}
          />
        </View>
        <View style={styles.rightContentContainer}>
          <Text style={styles.price}>${totalPrice}</Text>
          <Text style={{paddingBottom: 23,color:COLORS.almostBlack,fontFamily:LEAGUE_SPARTAN_LIGHT}}>{items} items</Text>

          <View style={styles.orderAgainButton}>
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
      </View>
    </View>
  );
};

export default MyOrderCard;