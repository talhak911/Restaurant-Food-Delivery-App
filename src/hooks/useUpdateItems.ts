import {
  addOneItemToCart,
  removeOneItemFromCart,
  updateCart,
  deleteItem,
} from '../redux/slices/cartSlice';
import {useAppDispatch, useAppSelector} from './useStore';

const useUpdateCartItems = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.cart.loadingItem);
  const addOneItem = async (foodId: string) => {
    const res = await dispatch(updateCart({quantity: 1, foodId}));
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(addOneItemToCart(foodId));
    }
  };
  const removeOneItem = async (foodId: string) => {
    const res = await dispatch(updateCart({quantity: -1, foodId}));

    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(removeOneItemFromCart(foodId));
    }
  };

  const deleteOneItem = async (foodId: string) => {
    await dispatch(deleteItem(foodId));
  };

  return {loading, addOneItem, removeOneItem, deleteOneItem};
};

export default useUpdateCartItems;
