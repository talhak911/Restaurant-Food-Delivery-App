import {ToastAndroid} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import useCart from '../../hooks/useCart';
import {updateCart} from '../../redux/slices/cartSlice';
import {StackNavigatorProps, UpdateCartParams} from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';

const useRecommendationFoodCard = () => {
  const loading = useAppSelector(state => state.cart.loadingItem);
 const [quantity,setQuantity]=useState(1)
  const navigation = useNavigation<StackNavigatorProps>();
  const dispatch = useAppDispatch();
  const {openCart} = useCart();
  const addToCart = async ({foodId}: UpdateCartParams) => {
    const res = await dispatch(updateCart({quantity, foodId}));
    if (res.meta.requestStatus === 'fulfilled') {
      ToastAndroid.show('Added to cart', 3);
      openCart();
    }
  };

  return {
    addToCart,
    navigation,
    quantity,
    loading,
    setQuantity
  };
};

export default useRecommendationFoodCard;
