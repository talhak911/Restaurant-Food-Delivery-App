import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UpdateCartParams} from '../../types/types';
import {
  FetchCartDocument,
  FetchCartQuery,
  UpdateCartDocument,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/apolloProvider';
import {ToastAndroid} from 'react-native';

const initialState: {cartItems: FetchCartQuery['fetchCart'] | null,loading:boolean} = {
  cartItems: null,
  loading:false
};

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({quantity, foodId}: UpdateCartParams, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: UpdateCartDocument,
        variables: {foodId, quantity},
      });
      console.log('updatecart action redu');
      return response?.data?.updateCart;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: FetchCartDocument,
      });
      console.log('updatecart action redu');
      return response?.data?.fetchCart;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems;
    },
  },
  extraReducers: builder => {
    builder.addCase(updateCart.fulfilled, (state, action) => {});
    builder.addCase(updateCart.rejected, (_, action) => {
      ToastAndroid.show(action.payload as string, ToastAndroid.LONG);
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.loading=false
    });
    builder.addCase(fetchCart.pending,(state)=>{
      state.loading=true
    })
  },
});

export default cartSlice.reducer;
