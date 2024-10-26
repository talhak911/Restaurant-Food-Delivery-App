import {useNavigation} from '@react-navigation/native';
import {FoodType, StackNavigatorProps} from '../../types/types';

const useSliderItem = () => {
  const navigation = useNavigation<StackNavigatorProps>();

  const navigateToFoodDetail = (food: FoodType) => {
    navigation.navigate('Food Detail', food);
  };
  return {
    navigateToFoodDetail,
  };
};

export default useSliderItem;
