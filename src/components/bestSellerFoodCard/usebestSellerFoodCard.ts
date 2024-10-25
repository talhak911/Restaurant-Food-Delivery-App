import {ToastAndroid} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import useCart from '../../hooks/useCart';
import {updateCart} from '../../redux/slices/cartSlice';
import {StackNavigatorProps, UpdateCartParams} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

const useBestSellerFoodCard = () => {
  const loading = useAppSelector(state => state.cart.loadingItem);
  const navigation = useNavigation<StackNavigatorProps>();
  const dispatch = useAppDispatch();
  const {openCart} = useCart();
  const addToCart = async ({quantity, foodId}: UpdateCartParams) => {
    const res = await dispatch(updateCart({quantity, foodId}));
    if (res.meta.requestStatus === 'fulfilled') {
      ToastAndroid.show('Added to cart', 3);
      openCart();
    }
  };

  return {
    addToCart,
    navigation,
    loading,
  };
};

export default useBestSellerFoodCard;
