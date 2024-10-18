import {Text, View} from 'react-native';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../customButton/CustomButton';
import TickIcon from '../../assets/icons/tick';
import CrossIcon from '../../assets/icons/cross';
import {OrderStatus} from '../../gql/graphql';
import {styles} from './OrderCardStyles';
import FoodItemPriceDisplay from '../foodItemPriceDisplay/FoodItemPriceDisplay';
import {OrderCardProps} from '../../types/types';

const OrderCard = ({
  picUrl,
  title,
  dateTime,
  orderStatus,
  totalPrice,
  price,
  items,
}: OrderCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <FoodItemPriceDisplay
        height={108}
        width={71}
        price={price}
        uri={picUrl}
      />
      <View style={styles.containerContent}>
        <View style={styles.leftContentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{dateTime}</Text>
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
            width={121}
            pV={5}
          />
        </View>
        <View style={styles.rightContentContainer}>
          <Text style={styles.price}>${totalPrice}</Text>
          <Text style={styles.items}>{items} items</Text>

          <View style={styles.orderAgainButton}>
            <CustomButton
              title="Order Again"
              fontSize={15}
              width={104}
              bgColor={COLORS.orange2}
              textColor={COLORS.orange}
              pV={5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
