import {ScrollView, Text, View} from 'react-native';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButton';
import TickIcon from '../../assets/icons/tick';
import CrossIcon from '../../assets/icons/cross';
import OrderItemCard from '../orderItemCard/OrderItemCard';
import {OrderCard2Props} from '../../types/types';
import {OrderStatus} from '../../gql/graphql';
import {styles} from './OrderCard2Styles';

const OrderCard2 = ({
  foods,
  orderStatus,
  dateTime,
  totalPrice,
}: OrderCard2Props) => {
  return (
    <View>
      <View style={styles.topContainer}>
        {orderStatus !== OrderStatus.Active && (
          <View style={styles.orderStatusContainer}>
            {orderStatus == OrderStatus.Delivered && <TickIcon />}
            {orderStatus == OrderStatus.Canceled && <CrossIcon />}
            <Text style={styles.orderStatusText}>Order {orderStatus}</Text>
          </View>
        )}
        <Text style={styles.dateText}>{dateTime}</Text>
      </View>
      <ScrollView
        style={{alignSelf: 'center'}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.foodItemsContainer}>
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

      <View style={styles.bottomContainer}>
        <CustomButton
          title="Leave a review"
          fontSize={15}
          width={120}
          pH={12}
          pV={5}
        />
        <View style={styles.totalPriceContainer}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
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

export default OrderCard2;
