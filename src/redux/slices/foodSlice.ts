import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  FetchFoodsDocument,
  FetchFoodsQuery,
  FoodCategory,
  GetCurrentUserDocument,
} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/apolloProvider';
import {ToastAndroid} from 'react-native';

const initialState: {foods: FetchFoodsQuery['fetchFoods'] | null} = {
  foods: null,
};

export const fetchFoods = createAsyncThunk(
  'auth/fetchFoods',
  async ({category}: {category?: FoodCategory}, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: FetchFoodsDocument,
        variables: {category},
      });

      return response?.data?.fetchFoods;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const foodSlice = createSlice({
  name: 'foodSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.foods = action.payload;
    });
    builder.addCase(fetchFoods.rejected, (_, action) => {
      ToastAndroid.show(action.payload as string, ToastAndroid.LONG);
    });
  },
});

export default foodSlice.reducer;
