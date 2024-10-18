import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {updateCart} from '../../redux/slices/cartSlice';
import {UpdateCartParams} from '../../types/types';
import useCart from '../../hooks/useCart';
import {ToastAndroid} from 'react-native';

const useFoodDetail = (foodId: string) => {
  const loading = useAppSelector(state => state.cart.loadingItem);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(1);
  }, [foodId]);
  const dispatch = useAppDispatch();
  const {openCart} = useCart();
  const addItems = () => {
    setQuantity(quantity + 1);
  };
  const removeItems = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart = async ({quantity, foodId}: UpdateCartParams) => {
    const res = await dispatch(updateCart({quantity, foodId}));
    if (res.meta.requestStatus === 'fulfilled') {
      ToastAndroid.show('Added to cart', 3);
      openCart();
    }
  };
  return {
    loading,
    quantity,
    addItems,
    addToCart,
    removeItems,
  };
};

export default useFoodDetail;
