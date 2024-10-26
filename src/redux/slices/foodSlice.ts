import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FetchFoodsDocument, FoodCategory, GetBestSellerDocument, GetSuggestionDocument} from '../../gql/graphql';
import {client} from '../../providers/apolloProvider/ApolloProvider';
import {FoodState} from '../../types/types';
import Toast from 'react-native-toast-message';

const initialState: FoodState = {
  foods: null,
  filteredFoods: null,
  bestSeller:null,
  suggestedFoods:null
};

export const fetchFoods = createAsyncThunk(
  'food/fetchFoods',
  async (
    {category, offset = 0}: {category?: FoodCategory; offset?: number},
    {rejectWithValue},
  ) => {
    try {
      const response = await client.query({
        query: FetchFoodsDocument,
        variables: {category, offset},
      });
      const data = response?.data?.fetchFoods;
      return {filtered: !!category, data, offset};
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const getBestSeller = createAsyncThunk(
  'food/getBestSeller',
  async (
    {limit}: { limit?: number},
    {rejectWithValue},
  ) => {
    try {
      const response = await client.query({
        query: GetBestSellerDocument,
        variables:{limit}
      });

      return response?.data?.getBestSellers;
    
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const getSuggestedFoods = createAsyncThunk(
  'food/getSuggestedFoods',
  async (
    {limit}: { limit?: number},
    {rejectWithValue},
  ) => {
    try {
      const response = await client.query({
        query: GetSuggestionDocument,
        variables:{limit}
      });

      return response?.data?.getSuggestion;
    
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
      const {filtered, data, offset} = action.payload;
      if (filtered) {
        state.filteredFoods =
          offset === 0 ? data : [...(state.filteredFoods || []), ...data];
      } else {
        state.foods = offset === 0 ? data : [...(state.foods || []), ...data];
        state.filteredFoods = state.foods;
      }
    });
    builder.addCase(fetchFoods.rejected, (_, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
    builder.addCase(getBestSeller.fulfilled, (state, action) => {
      state.bestSeller=action.payload
    });
    builder.addCase(getBestSeller.rejected, (_, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
    builder.addCase(getSuggestedFoods.fulfilled, (state, action) => {
      state.suggestedFoods=action.payload
    });
    builder.addCase(getSuggestedFoods.rejected, (_, action) => {
      Toast.show({type: 'error', text1: action.payload as string});
    });
  },
});

export default foodSlice.reducer;
