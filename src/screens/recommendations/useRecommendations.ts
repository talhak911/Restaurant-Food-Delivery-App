import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {getSuggestedFoods} from '../../redux/slices/foodSlice';

const useRecommendations = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSuggestedFoods({}));
  }, []);
  const foods = useAppSelector(state => state.foods.bestSeller);

  return {
    foods,
  };
};

export default useRecommendations;
