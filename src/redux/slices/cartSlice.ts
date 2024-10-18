import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CartState, UpdateCartParams} from '../../types/types';
import {
  FetchCartDocument,
  RemoveFromCartDocument,
  UpdateCartDocument,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/ApolloProvider';
import Toast from 'react-native-toast-message';
import {ToastAndroid} from 'react-native';

const initialState: CartState = {
  cartItems: null,
  loading: false,
  loadingItem: false,
};

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({quantity, foodId}: UpdateCartParams, {rejectWithValue, dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: UpdateCartDocument,
        variables: {foodId, quantity},
      });
      return response?.data?.updateCart;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const deleteItem = createAsyncThunk(
  'cart/deleteItem',
  async (foodId: string, {rejectWithValue, dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: RemoveFromCartDocument,
        variables: {foodId},
      });
      dispatch(deleteItemFromCart(foodId));
      return response?.data?.removeFromCart;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        fetchPolicy: 'no-cache',
        query: FetchCartDocument,
      });
      return response?.data?.fetchCart;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addOneItemToCart: (state, action) => {
      const item = state.cartItems?.find(
        item => item.food.id === action.payload,
      );

      if (item) {
        item.quantity += 1;
        item.totalPrice = parseFloat(
          (item.totalPrice + item.food.price).toFixed(2),
        );
      }
    },
    removeOneItemFromCart: (state, action) => {
      const item = state.cartItems?.find(
        item => item.food.id === action.payload,
      );

      if (item) {
        item.quantity -= 1;
        item.totalPrice = parseFloat(
          (item.totalPrice - item.food.price).toFixed(2),
        );
      }
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems
        ? state.cartItems.filter(item => item.food.id !== action.payload)
        : null;
    },
    emptyCart: state => {
      state.cartItems = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(deleteItem.fulfilled, state => {
      state.loadingItem = false;
    });
    builder.addCase(deleteItem.pending, state => {
      state.loadingItem = true;
    });
    builder.addCase(deleteItem.rejected, (state, action) => {
      state.loadingItem = false;
      Toast.show({type: 'error', text1: action.payload as string});
    });
    builder.addCase(updateCart.fulfilled, state => {
      state.loadingItem = false;
    });
    builder.addCase(updateCart.pending, state => {
      state.loadingItem = true;
    });
    builder.addCase(updateCart.rejected, (state, action) => {
      state.loadingItem = false;
      ToastAndroid.show(action.payload as string, 3);
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCart.pending, state => {
      state.loading = true;
    });
  },
});
export const {
  removeOneItemFromCart,
  addOneItemToCart,
  deleteItemFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
