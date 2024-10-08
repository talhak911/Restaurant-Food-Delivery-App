import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  UpdateCartParams,
} from '../../types/types';
import {UpdateCartDocument} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/apolloProvider';
import {ToastAndroid} from 'react-native';

const initialState: {cart: any} = {
  cart: null,
};

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({quantity, foodId}: UpdateCartParams, {rejectWithValue}) => {
    try {
 
      const response = await client.mutate({
        mutation: UpdateCartDocument,
        variables: {foodId, quantity},
      });
      console.log('updatecart action redu')
      return response?.data?.updateCart;
    } catch (error: any) {
        console.log(error)
      return rejectWithValue(error.message);
    }
  },
);

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateCart.fulfilled, (state, action) => {});
    builder.addCase(updateCart.rejected, (_, action) => {
        console.log(action.payload)
      ToastAndroid.show(action.payload as string, ToastAndroid.LONG);
    });
  },
});

export default cartSlice.reducer;
