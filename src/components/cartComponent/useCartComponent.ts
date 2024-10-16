import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TabNavigatorProps} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchCart} from '../../redux/slices/cartSlice';
import useCart from '../../hooks/useCart';

const useCartComponent = () => {
  const {closeCart} = useCart();
  const {cartItems, loading} = useAppSelector(state => state.cart);
  const totalPrice = cartItems
    ?.reduce((pre, item) => pre + item.totalPrice, 0)
    .toString();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const navigation = useNavigation<TabNavigatorProps>();

  const navigateToFoods = () => {
    navigation.navigate('Foods');
    closeCart();
  };
  return {
    cartItems,
    loading,
    totalPrice,
    navigateToFoods,
  };
};

export default useCartComponent;
