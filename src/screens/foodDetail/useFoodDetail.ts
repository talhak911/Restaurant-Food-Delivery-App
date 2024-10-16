import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {updateCart} from '../../redux/slices/cartSlice';
import {UpdateCartParams} from '../../types/types';
import useCart from '../../hooks/useCart';
import Toast from 'react-native-toast-message';

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
      Toast.show({text1:"Added to cart"})
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
