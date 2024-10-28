import {useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchOrders} from '../../redux/slices/orderSlice';
import {OrderStatus} from '../../gql/graphql';
import {useFocusEffect} from '@react-navigation/native';

export const useMyOrders = () => {
  const [isActive, setIsActive] = useState<OrderStatus>(OrderStatus.Active);
  const orders = useAppSelector(state => state.orders.orders);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchOrders({}));
      const intervalId = setInterval(() => {
        dispatch(fetchOrders({}));
      }, 30000);

      return () => {
        clearInterval(intervalId);
      };
    }, [dispatch]),
  );

  useFocusEffect(
    useCallback(() => {
      if (orders) {
        if (isActive === OrderStatus.Active) {
          setFilteredOrders(
            orders.filter(
              order =>
                order.status !== OrderStatus.Canceled &&
                order.status !== OrderStatus.Delivered,
            ),
          );
        } else if (isActive === OrderStatus.Delivered) {
          setFilteredOrders(
            orders.filter(order => order.status === OrderStatus.Delivered),
          );
        } else if (isActive === OrderStatus.Canceled) {
          setFilteredOrders(
            orders.filter(order => order.status === OrderStatus.Canceled),
          );
        }
      }
    }, [orders, isActive]),
  );
  return {
    isActive,
    filteredOrders,
    setIsActive,
  };
};
