import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { ChangePasswordPayload} from '../../types/types';
import { useQuery } from '@apollo/client';
import { GetCurrentUserDocument } from '../../gql/graphql';
import { client } from '../../providers/apolloProvider/apolloProvider';

const initialState:{user:any}= {
  user: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {

      
    } catch (error: any) {
    }

  },
);
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, { rejectWithValue }) => {
  try {
    const response = await client.query({
      query: GetCurrentUserDocument,
    });
    return response?.data.getCurrentUser;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (
    {name, email, password}: {name: string; email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
     
    } catch (error: any) {
    
  }}
);


export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (
    {email, currentPassword, newPassword}: ChangePasswordPayload,
    {rejectWithValue},
  ) => {
    try {
    
    } catch (error: any) {
      console.log(error);
  
      return rejectWithValue(error.message);
    }
  },
);



export const signOut = createAsyncThunk('auth/signOut', async () => {
 
});

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(signOut.fulfilled, state => {
      state.user = null;
    });
    builder.addCase(fetchUserData.fulfilled,(state,action)=>{
      state.user =action.payload
    })
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
