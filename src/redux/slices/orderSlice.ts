import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  FetchOrdersDocument,
  FetchOrdersQuery,
  OrderStatus,
  PlaceOrderDocument,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/apolloProvider';
import Toast from 'react-native-toast-message';
import { emptyCart } from './cartSlice';

const initialState: {orders: FetchOrdersQuery['fetchOrders'] | null,loading:boolean} = {
  orders: null,
  loading:false
};

export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async ({status}: {status?: OrderStatus}, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: FetchOrdersDocument,
        variables: {status},
        fetchPolicy:"no-cache"
      });

      return response?.data?.fetchOrders;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async ({deliveryAddress}: {deliveryAddress: string}, {rejectWithValue,dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: PlaceOrderDocument,
        variables: {deliveryAddress},
      });
if(response.data){
   await dispatch(fetchOrders({}))
   dispatch(emptyCart())
}
      return response?.data?.placeOrder;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      Toast.show({type:"error",text1:action.payload as string});
      state.loading = false;
    });
    builder.addCase(placeOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state) => {
        Toast.show({type:"success",text1:"Order Submitted"});
        state.loading = false
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
        console.log(false)
      Toast.show({type:"error",text1:action.payload as string});
      state.loading = false
    });
  },
});

export default orderSlice.reducer;
