import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LEAGUE_SPARTAN_LIGHT, LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButtom';
import TickIcon from '../../assets/icons/tick';
import {OrderStatus} from '../../screens/myOrder/useMyOrders';
import CrossIcon from '../../assets/icons/cross';

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
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        gap: 13,
        alignItems: 'center',
      }}>
      <Image
        style={{borderRadius: 20}}
        source={{uri: picUrl, height: 108, width: 71}}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{gap: 3, flex: 1}}>
          <Text
            style={{
              flex: 1,
              fontFamily: LEAGUE_SPARTAN_MEDIUM,
              color: COLORS.almostBlack,
              fontSize: 20,
            }}>
            {title}
          </Text>
          <Text>{dateTime}</Text>
          {orderStatus !== 'Active' && (
            <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
              {orderStatus === 'Completed' && <TickIcon />}
              {orderStatus === 'Cancelled' && <CrossIcon />}
              <Text style={{color:COLORS.orange,fontFamily:LEAGUE_SPARTAN_LIGHT}}>Order {orderStatus}</Text>
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
        <View style={{gap: 3, alignItems: 'flex-end'}}>
          <Text
            style={{
              fontFamily: LEAGUE_SPARTAN_MEDIUM,
              color: COLORS.orange,
              fontSize: 20,
            }}>
            ${price}
          </Text>
          <Text style={{paddingBottom: 23}}>{items} items</Text>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
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

const styles = StyleSheet.create({});
