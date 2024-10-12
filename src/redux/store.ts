import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import foodReducer from './slices/foodSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';

export const store = configureStore({
  reducer: {auth: authReducer, foods: foodReducer, cart: cartReducer,orders:orderReducer},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
