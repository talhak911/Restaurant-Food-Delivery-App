import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChangePasswordPayload, reduxUser} from '../../types/types';
import {
  AddCustomerAddressDocument,
  ChangePasswordDocument,
  GetCurrentUserDocument,
  OAuthSignInDocument,
  OAuthSignUpDocument,
  Role,
  UpdateCustomerDocument,
  UpdateCustomerMutationVariables,
  UpdateOrderNotificationsDocument,
} from '../../gql/graphql';
import auth from '@react-native-firebase/auth';
import {client} from '../../providers/apolloProvider/ApolloProvider';
import Toast from 'react-native-toast-message';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: {user: reduxUser; loading: boolean} = {
  user: null,
  loading: false,
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
export const oAuthSignIn = createAsyncThunk(
  'auth/oAuthSignIn',
  async (token: string, {rejectWithValue, dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: OAuthSignInDocument,
        variables: {token},
      });
      const data = response.data?.oAuthSignIn;
      if (data) {
        await client.clearStore();
        await AsyncStorage.setItem('authToken', data.accessToken);
        await AsyncStorage.setItem('refreshToken', data.refreshToken);
        return data.user
      }
    } catch (error: any) {
      return rejectWithValue('Error while sign up');
    }
  },
);
export const changeNotificationSetting = createAsyncThunk(
  'auth/changeNotificationSetting',
  async (status: boolean, {rejectWithValue, dispatch}) => {
    try {
      const response = await client.mutate({
        mutation: UpdateOrderNotificationsDocument,
        variables: {status},
      });
      const data = response.data?.updateOrderNotifications;
if(data){
  return status
}
    } catch (error: any) {
      return rejectWithValue('Error while sign up');
    }
  },
);

export const oAuthSignUp = createAsyncThunk(
  'auth/oAuthSignUp',
  async (
    {
      token,
      data: {dateOfBirth, name, password, phone, role, picture},
    }: {
      token: string;
      data: {
        dateOfBirth: string;
        name: string;
        password: string;
        phone: string;
        role: Role;
        picture?: string;
      };
    },
    {rejectWithValue},
  ) => {
    try {
      const response = await client.mutate({
        mutation: OAuthSignUpDocument,
        variables: {
          token,
          data: {dateOfBirth, name, password, phone, role, picture},
        },
      });
      const data = response.data?.oAuthSignUp;
      if (data) {
        await client.clearStore();
        await AsyncStorage.setItem('authToken', data.accessToken);
        await AsyncStorage.setItem('refreshToken', data.refreshToken);
        return data.user;
      }
    } catch (error: any) {
      Toast.show({text1: `${error.message}`, type: 'error'});
      return rejectWithValue('Error while sign up');
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
    setLoading:(state,action)=>{
      state.loading=action.payload
    }
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
    builder.addCase(updateCustomer.rejected, (_, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
    builder.addCase(changePassword.fulfilled, () => {
      Toast.show({text1: 'Password changed successfully'});
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
    builder.addCase(oAuthSignUp.pending, state => {
      state.loading = true;
    });
    builder.addCase(oAuthSignUp.fulfilled, (state, action) => {
      state.user=action.payload;
      state.loading=false
    });
    builder.addCase(oAuthSignUp.rejected, (state, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
      state.loading=false
    });
    builder.addCase(oAuthSignIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(oAuthSignIn.fulfilled, (state, action) => {
      state.user=action.payload;
      state.loading=false
    });
    builder.addCase(oAuthSignIn.rejected, (state, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
      state.loading=false
    });
    builder.addCase(changeNotificationSetting.fulfilled, (state, action) => {
      Toast.show({text1:"Notification setting updated"});
      state.user!.customer!.wantsOrderNotifications=action.payload!
    });
  },
});

export const {setUser,setLoading} = authSlice.actions;
export default authSlice.reducer;
