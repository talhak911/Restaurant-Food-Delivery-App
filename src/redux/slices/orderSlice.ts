import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  AddReviewDocument,
  CancelOrderDocument,
  FetchOrdersDocument,
  FetchOrdersQuery,
  OrderStatus,
  PlaceOrderDocument,
  ReviewsParam,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/ApolloProvider';
import Toast from 'react-native-toast-message';
import { emptyCart } from './cartSlice';

const initialState: {orders: FetchOrdersQuery['fetchOrders'] | null,loading:boolean} = {
  orders: null,
  loading:false,
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
export const leaveReview = createAsyncThunk(
  'order/leaveReview',
  async ({orderId,reviews}: {orderId: number,reviews:ReviewsParam[]}, {rejectWithValue,dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: AddReviewDocument,
        variables: {orderId,reviews},
      });
if(response.data){
   await dispatch(fetchOrders({}))
   dispatch(emptyCart())
}
      return response?.data?.addReview;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const cancelOrder = createAsyncThunk(
  'order/cancelOrder',
  async ({orderId}: {orderId: number}, {rejectWithValue,dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: CancelOrderDocument,
        variables: {orderId},
      });
       dispatch(fetchOrders({}))
      return response?.data?.cancelOrder;
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
      Toast.show({type:"error",text1:action.payload as string});
      state.loading = false
    });
    builder.addCase(leaveReview.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(leaveReview.fulfilled, (state) => {
        Toast.show({type:"success",text1:"Review Added"});
        state.loading = false
    });
    builder.addCase(leaveReview.rejected, (state, action) => {
      Toast.show({type:"error",text1:action.payload as string});
      state.loading = false
    });
    builder.addCase(cancelOrder.fulfilled, (state) => {
        Toast.show({text1:"Order cancelled"});
    });
    builder.addCase(cancelOrder.rejected, (state, action) => {
      Toast.show({type:"error",text1:action.payload as string});
    });
  },
});

export default orderSlice.reducer;
