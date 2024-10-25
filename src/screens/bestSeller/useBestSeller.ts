import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {getBestSeller} from '../../redux/slices/foodSlice';

const useBestSeller = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getBestSeller({}));
  }, []);
  const foods = useAppSelector(state => state.foods.bestSeller);

  return {
    foods,
  };
};

export default useBestSeller;
