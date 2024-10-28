import {Text, View} from 'react-native';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButton';
import TickIcon from '../../assets/icons/tick';
import CrossIcon from '../../assets/icons/cross';
import {OrderStatus} from '../../gql/graphql';
import {styles} from './OrderCardStyles';
import FoodItemPriceDisplay from '../foodItemPriceDisplay/FoodItemPriceDisplay';
import {OrderCardProps} from '../../types/types';
import {Font} from '../../utils/responsive';
import useOrderCard from './useOrderCard';
import useOrder from '../../hooks/useOrder';

const OrderCard = ({
  picture,
  name,
  dateTime,
  orderStatus,
  totalPrice,
  price,
  isReviewed,
  items,
  orderId,
  foodId,
}: OrderCardProps) => {
  const {naviateToReview} = useOrderCard();
  const {handleCancelOrder, loading} = useOrder({orderId});
  return (
    <View style={styles.cardContainer}>
      <FoodItemPriceDisplay
        height={108}
        width={71}
        price={price}
        uri={picture}
      />
      <View style={styles.containerContent}>
        <View style={styles.leftContentContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.date}>{dateTime}</Text>
          {orderStatus !== OrderStatus.Active && (
            <View style={styles.orderStatusContainer}>
              {orderStatus == OrderStatus.Delivered && <TickIcon />}
              {orderStatus == OrderStatus.Canceled && <CrossIcon />}
              <Text style={styles.orderStatus}>
                Order{' '}
                {orderStatus === 'OUT_FOR_DELIVERY'
                  ? 'Out for Delivery'
                  : orderStatus}
              </Text>
            </View>
          )}
          <View style={styles.reviewButton}>
            {orderStatus === 'PENDING' ? (
              <CustomButton
                onPress={handleCancelOrder}
                loading={loading}
                title="Cancel Order"
                fontSize={Font(15)}
                pV={5}
              />
            ) : orderStatus === 'DELIVERED' ? (
              <CustomButton
                disabled={isReviewed}
                onPress={() => {
                  naviateToReview({foodId, name, picture, orderId});
                }}
                bgColor={isReviewed ? COLORS.yellow2 : COLORS.orange}
                textColor={isReviewed ? COLORS.orange : 'white'}
                title={isReviewed ? 'Reviewed ' : 'Leave a review'}
                fontSize={Font(15)}
                pV={5}
              />
            ) : (
              <CustomButton
                title={'Provide feedback'}
                fontSize={Font(15)}
                pV={5}
              />
            )}
          </View>
        </View>
        <View style={styles.rightContentContainer}>
          <Text style={styles.price}>${totalPrice}</Text>
          <Text style={styles.items}>{items} items</Text>

          <View style={styles.orderAgainButton}>
            {orderStatus === 'DELIVERED' ? (
              <CustomButton
                title="Order Again"
                fontSize={Font(15)}
                bgColor={COLORS.orange2}
                textColor={COLORS.orange}
                pV={5}
              />
            ) : (
              orderStatus === 'OUT_FOR_DELIVERY' && (
                <CustomButton
                  title="Track Driver"
                  fontSize={Font(15)}
                  bgColor={COLORS.orange2}
                  textColor={COLORS.orange}
                  pV={5}
                />
              )
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
