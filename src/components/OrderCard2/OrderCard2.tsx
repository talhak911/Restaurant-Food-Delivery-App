import {ScrollView, Text, View} from 'react-native';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButton';
import TickIcon from '../../assets/icons/tick';
import CrossIcon from '../../assets/icons/cross';
import OrderItemCard from '../orderItemCard/OrderItemCard';
import {OrderCard2Props} from '../../types/types';
import {OrderStatus} from '../../gql/graphql';
import {styles} from './OrderCard2Styles';
import useOrderCard2 from './useOrderCard2';
import useOrder from '../../hooks/useOrder';

const OrderCard2 = ({
  foods,
  orderId,
  orderStatus,
  dateTime,
  totalPrice,
  isReviewed,
}: OrderCard2Props) => {
  const {naviateToReview} = useOrderCard2();
  const {handleCancelOrder, loading} = useOrder({orderId});
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
        {orderStatus === 'PENDING' ? (
          <CustomButton
            onPress={handleCancelOrder}
            loading={loading}
            title="Cancel Order"
            fontSize={15}
            pV={5}
          />
        ) : orderStatus === 'DELIVERED' ? (
          <CustomButton
            disabled={isReviewed}
            onPress={() => {
              naviateToReview({orderId, foods});
            }}
            bgColor={isReviewed ? COLORS.yellow2 : COLORS.orange}
            textColor={isReviewed ? COLORS.orange : 'white'}
            title={isReviewed ? 'Reviewed ' : 'Leave a review'}
            fontSize={15}
            pV={5}
          />
        ) : (
          <CustomButton title={'Provide feedback'} fontSize={15} pV={5} />
        )}
        <View style={styles.totalPriceContainer}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
        </View>
        {orderStatus === 'DELIVERED' ? (
          <CustomButton
            title="Order Again"
            fontSize={15}
            bgColor={COLORS.orange2}
            textColor={COLORS.orange}
            pV={5}
          />
        ) : (
          orderStatus === 'OUT_FOR_DELIVERY' && (
            <CustomButton
              title="Track Driver"
              fontSize={15}
              bgColor={COLORS.orange2}
              textColor={COLORS.orange}
              pV={5}
            />
          )
        )}
      </View>
    </View>
  );
};

export default OrderCard2;
