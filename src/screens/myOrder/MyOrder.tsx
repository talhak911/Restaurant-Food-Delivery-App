import {View, SafeAreaView, ScrollView} from 'react-native';
import {COLORS} from '../../constants/color';
import {CustomButton} from '../../components/customButton/CustomButton';
import {useMyOrders} from './useMyOrders';
import OrderCard from '../../components/OrderCard/OrderCard';
import OrderCard2 from '../../components/OrderCard2/OrderCard2';
import {FoodItem} from '../../types/types';
import {formatDate, toPascalCase} from '../../utils/utils';
import {ORDER_FILTERS} from '../../constants/constants';
import {styles} from './MyOrderStyles';
import {Font} from '../../utils/responsive';

const MyOrder = () => {
  const {setIsActive, isActive, filteredOrders} = useMyOrders();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.filterButtonsContainer}>
              {ORDER_FILTERS.map((item, index) => (
                <CustomButton
                  key={index}
                  onPress={() => {
                    setIsActive(item.status);
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
                  fontSize={Font(17)}
                  width="32%"
                />
              ))}
            </View>

            {filteredOrders?.map((order, index) => (
              <View
                key={index}
                style={[
                  styles.orderContainer,
                  {
                    borderTopWidth: index === 0 ? 1 : 0,
                  },
                ]}>
                {order.foods.length === 1 ? (
                  order.foods?.map((foodItem: FoodItem, foodIndex: number) => (
                    <OrderCard
                      key={foodIndex}
                      isReviewed={order.isReviewed}
                      orderId={order.id}
                      picture={foodItem.food.picture}
                      dateTime={formatDate(order.createdAt)}
                      items={`${foodItem.quantity}`}
                      orderStatus={order.status}
                      totalPrice={foodItem.totalPrice.toFixed(2)}
                      price={`${foodItem.food.price}`}
                      name={foodItem.food.name}
                      foodId={foodItem.foodId}
                    />
                  ))
                ) : (
                  <OrderCard2
                    key={index}
                    orderId={order.id}
                    isReviewed={order.isReviewed}
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
