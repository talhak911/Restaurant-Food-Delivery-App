import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChangePasswordPayload, reduxUser} from '../../types/types';
import {
  AddCustomerAddressDocument,
  ChangePasswordDocument,
  GetCurrentUserDocument,
  UpdateCustomerDocument,
  UpdateCustomerMutationVariables,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/ApolloProvider';
import Toast from 'react-native-toast-message';

const initialState: {user: reduxUser} = {
  user: null,
};

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
export const updateCustomer = createAsyncThunk(
  'auth/updateCustomer',
  async (
    {
      name,
      dateOfBirth,
      phone,
      picture,
    }: {name?: string; dateOfBirth?: string; phone?: string; picture?: string},
    {rejectWithValue},
  ) => {
    try {
      const data: UpdateCustomerMutationVariables = {};
      if (name) {
        data.name = name;
      }
      if (dateOfBirth) {
        data.dateOfBirth = dateOfBirth;
      }
      if (phone) {
        data.phone = phone;
      }
      if (picture) {
        data.picture = picture;
      }
      const response = await client.mutate({
        mutation: UpdateCustomerDocument,
        variables: data,
      });

      return response?.data?.updateCustomer;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (
    {currentPassword, newPassword}: ChangePasswordPayload,
    {rejectWithValue},
  ) => {
    try {
      const response = await client.mutate({
        mutation: ChangePasswordDocument,
        variables: {password: currentPassword, newPassword},
      });

      return response?.data?.changePassword;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addCustomerAddress.fulfilled, (state, action) => {
      if (state.user?.customer && action.payload) {
        state.user.customer.address = action.payload;
      }
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
      state.user = null;
    });
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      if (state.user) {
        state.user = action.payload;
        Toast.show({text1: 'Profile Updated'});
      }
    });
    builder.addCase(updateCustomer.rejected, (state, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
    builder.addCase(changePassword.fulfilled, () => {
      Toast.show({text1: 'Password changed successfully'});
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
