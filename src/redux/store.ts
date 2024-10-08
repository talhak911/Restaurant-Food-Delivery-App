import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import foodReducer from './slices/foodSlice';
import cartReducer from './slices/cartSlice';
export const store = configureStore({
  reducer: {auth: authReducer, foods: foodReducer, cart: cartReducer},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
