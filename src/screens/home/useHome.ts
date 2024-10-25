import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {StackNavigatorProps, TabNavigatorProps} from '../../types/types';
import {useEffect} from 'react';
import {fetchFoods, getBestSeller} from '../../redux/slices/foodSlice';

const useHome = () => {
  const dispatch = useAppDispatch();
  const foods = useAppSelector(state => state.foods.foods);
  useEffect(() => {
    dispatch(fetchFoods({}));
    dispatch(getBestSeller({limit: 4}));
  }, []);

  const bestSeller = useAppSelector(state => state.foods.bestSeller);
  const recommended = foods?.slice(4, 6);

  const navigation = useNavigation<StackNavigatorProps>();
  const tabNavigation = useNavigation<TabNavigatorProps>();
  const navigateToFoodDetail = ({
    id,
    description,
    name,
    picUrl,
    price,
  }: {
    id: string;
    description: string;
    name: string;
    picUrl: string | null | undefined;
    price: string;
  }) => {
    navigation.navigate('Food Detail', {
      id,
      description,
      name,
      picUrl,
      price,
    });
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
