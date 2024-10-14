import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChangePasswordPayload, reduxUser} from '../../types/types';
import {
  AddCustomerAddressDocument,
  GetCurrentUserDocument,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/apolloProvider';
import {ToastAndroid} from 'react-native';

const initialState: {user: reduxUser} = {
  user: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
    } catch (error: any) {}
  },
);
export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        fetchPolicy: 'cache-first',
        query: GetCurrentUserDocument,
      });
      return response?.data?.getCurrentUser;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const addCustomerAddress = createAsyncThunk(
  'auth/addCustomerAddress',
  async (
    {name, address}: {name: string; address: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await client.mutate({
        mutation: AddCustomerAddressDocument,
        variables: {name, address},
      });

      return response?.data?.addCustomerAddress;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (
    {name, email, password}: {name: string; email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
    } catch (error: any) {}
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (
    {email, currentPassword, newPassword}: ChangePasswordPayload,
    {rejectWithValue},
  ) => {
    try {
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async () => {});

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    // builder.addCase(signIn.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // });

    builder.addCase(addCustomerAddress.fulfilled, (state, action) => {
      if (state.user?.customer && action.payload) {
        state.user.customer.address = action.payload; // Update the addresses in the state
      }
    });
    builder.addCase(signOut.fulfilled, state => {
      state.user = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      ToastAndroid.show(action.payload as string, ToastAndroid.LONG);
      state.user = null;
    });
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
