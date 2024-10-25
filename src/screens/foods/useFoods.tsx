import {useEffect, useState} from 'react';
import {FilterBy} from '../../constants/constants';
import {FoodCategory} from '../../gql/graphql';
import {useNavigation} from '@react-navigation/native';
import {StackNavigatorProps} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchFoods} from '../../redux/slices/foodSlice';

const useFoods = () => {
  const [activeButton, setActionButton] = useState<FilterBy | null>(null);
  const [offset, setOffset] = useState(0);
  const dispatch = useAppDispatch();
  const foods = useAppSelector(state => state.foods.filteredFoods);
  useEffect(() => {
    dispatch(
      fetchFoods({category: activeButton?.toUpperCase() as FoodCategory}),
    );
    setOffset(15);
  }, [activeButton]);

  const loadMoreFoods = () => {
    dispatch(
      fetchFoods({
        category: activeButton?.toUpperCase() as FoodCategory,
        offset,
      }),
    );
    setOffset(prevOffset => prevOffset + 15);
  };

  const handlePressFoodCategory = (category: FilterBy) => {
    if (category === activeButton) {
      setActionButton(null);
    } else {
      setActionButton(category);
    }
  };
  const navigation = useNavigation<StackNavigatorProps>();

  return {
    loadMoreFoods,
    handlePressFoodCategory,
    activeButton,
    foods,
    navigation,
  };
};

export default useFoods;
