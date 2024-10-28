import {useEffect, useState} from 'react';
import {FilterBy} from '../../constants/constants';
import {FoodCategory} from '../../gql/graphql';
import {useNavigation} from '@react-navigation/native';
import {StackNavigatorProps} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchFoods} from '../../redux/slices/foodSlice';

const useFoods = () => {
  const [category, setCategory] = useState<FilterBy | null>(null);
  const [activeButton, setActionButton] = useState<FilterBy | null>(null);
  const [offset, setOffset] = useState(0);
  const [searchQuery,setSearchQuery]=useState("")
  const dispatch = useAppDispatch();
  const foods = useAppSelector(state => state.foods.filteredFoods);
  useEffect(() => {
    dispatch(fetchFoods({category: category?.toUpperCase() as FoodCategory}));
    setOffset(15);
  }, [category]);
  const onSearch = async () => {
    setActionButton(null);
    await dispatch(fetchFoods({name:searchQuery}));
    setSearchQuery("")
  };
  const loadMoreFoods = () => {
    dispatch(
      fetchFoods({
        category: category?.toUpperCase() as FoodCategory,
        name:searchQuery,
        offset,
      }),
    );
    setOffset(prevOffset => prevOffset + 15);
  };

  const handlePressFoodCategory = (category: FilterBy) => {
    if (category === activeButton) {
      setCategory(null);
      setActionButton(null);
    } else {
      setCategory(category);
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
    searchQuery,
    setSearchQuery,
    onSearch,
  };
};

export default useFoods;
