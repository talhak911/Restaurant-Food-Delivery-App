import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {FoodType, StackNavigatorProps, TabNavigatorProps} from '../../types/types';
import {useEffect} from 'react';
import {fetchFoods, getBestSeller, getSuggestedFoods} from '../../redux/slices/foodSlice';

const useHome = () => {
  const dispatch = useAppDispatch();
  const foods = useAppSelector(state => state.foods.foods);
  const bestSeller = useAppSelector(state => state.foods.bestSeller);
  const recommended = useAppSelector(state => state.foods.suggestedFoods);
  useEffect(() => {
    dispatch(fetchFoods({}));
    dispatch(getBestSeller({limit: 4}));
    dispatch(getSuggestedFoods({limit: 4}));
  }, []);


  const navigation = useNavigation<StackNavigatorProps>();
  const tabNavigation = useNavigation<TabNavigatorProps>();
  const navigateToFoodDetail = (food: FoodType) => {
    navigation.navigate('Food Detail', food);
  };
  const navigateToFoods = () => {
    tabNavigation.navigate('Foods');
  };
  const navigateToBestSeller = () => {
    navigation.navigate('Best Seller');
  };
  return {
    foods,
    bestSeller,
    recommended,
    navigateToFoods,
    navigateToFoodDetail,
    navigateToBestSeller,
  };
};

export default useHome;
