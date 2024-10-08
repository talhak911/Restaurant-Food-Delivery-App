import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { ChangePasswordPayload, reduxUser} from '../../types/types';
import { FetchFoodsDocument, FetchFoodsQuery, FoodCategory, GetCurrentUserDocument } from '../../gql/graphql';
import { client } from '../../providers/apolloProvider/apolloProvider';
import { ToastAndroid } from 'react-native';

const initialState:{foods:FetchFoodsQuery['fetchFoods']|null}= {
  foods: null,
};

export const fetchFoods = createAsyncThunk('auth/fetchFoods', async (category:FoodCategory, { rejectWithValue }) => {
  try {
    const response = await client.query({
      query: FetchFoodsDocument,
      variables:{category}
    });

  return response?.data?.fetchFoods;

  } catch (error:any) {
    return rejectWithValue(error.message);
  }
});


export const foodSlice = createSlice({
    name: 'foodSlice',
    initialState,
    reducers: {
    //   setUser: (state, action) => {
    //     state.user = action.payload;
    //   },
  
    },
    extraReducers: builder => {
      // builder.addCase(signIn.fulfilled, (state, action) => {
      //   state.user = action.payload;
      // });
  
      builder.addCase(fetchFoods.fulfilled,(state,action)=>{
        state.foods =action.payload
      })
      builder.addCase(fetchFoods.rejected,(_,action)=>{
        ToastAndroid.show(action.payload as string,ToastAndroid.LONG)
      })
    },
  });
  
//   export const {setUser} = authSlice.actions;
  export default foodSlice.reducer;
  