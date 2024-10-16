import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FetchFoodsDocument, FoodCategory} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/apolloProvider';
import {FoodState} from '../../types/types';
import Toast from 'react-native-toast-message';

const initialState: FoodState = {
  foods: null,
  filteredFoods: null,
};

export const fetchFoods = createAsyncThunk(
  'auth/fetchFoods',
  async ({category}: {category?: FoodCategory}, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: FetchFoodsDocument,
        variables: {category},
      });

      const data = response?.data?.fetchFoods;
      if (category) {
        return {filtered: true, data};
      } else return {filtered: false, data};
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
      if (action.payload.filtered) {
        state.filteredFoods = action.payload.data;
      } else {
        state.foods = action.payload.data;
        state.filteredFoods = action.payload.data;
      }
    });
    builder.addCase(fetchFoods.rejected, (_, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
  },
});

export default foodSlice.reducer;
