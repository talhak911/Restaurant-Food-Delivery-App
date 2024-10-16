import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchOrders} from '../../redux/slices/orderSlice';
import {OrderStatus} from '../../gql/graphql';

export const useMyOrders = () => {
  const [isActive, setIsActive] = useState<OrderStatus>(OrderStatus.Active);
  const orders = useAppSelector(state => state.orders.orders);
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const dipatch = useAppDispatch();
  useEffect(() => {
    dipatch(fetchOrders({}));
  }, []);

  useEffect(() => {
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
  }, [orders, isActive]);
  const handleIsActive = (button: OrderStatus) => {
    setIsActive(button);
  };
  return {
    isActive,
    orders,
    filteredOrders,
    handleIsActive,
  };
};
