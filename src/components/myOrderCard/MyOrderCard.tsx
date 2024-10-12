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

const MyOrderCard = ({
  picUrl,
  title,
  dateTime,
  orderStatus,
  price,
  items,
}: {
  picUrl: string;
  title: string;
  dateTime: string;
  orderStatus: OrderStatus;
  price: string;
  items: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={{borderRadius: 20}}
        source={{uri: picUrl, height: 108, width: 71}}
      />
      <View style={styles.containerContent}>
        <View style={styles.leftContentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{dateTime}</Text>
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
          <Text style={styles.price}>${price}</Text>
          <Text style={{paddingBottom: 23}}>{items} items</Text>

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