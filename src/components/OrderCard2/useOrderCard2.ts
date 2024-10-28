import {useNavigation} from '@react-navigation/native';
import {
  NavigateToReviewFromOrderCard2,
  StackNavigatorProps,
} from '../../types/types';

const useOrderCard2 = () => {
  const navigation = useNavigation<StackNavigatorProps>();

  const naviateToReview = ({
    foods,
    orderId,
  }: NavigateToReviewFromOrderCard2) => {
    const newFood = foods.map(item => {
      return {
        name: item.food.name,
        foodId: item.food.id,
        picture: item.food.picture,
      };
    });
    navigation.navigate('Leave a Review', {orderId, reviews: newFood});
  };
  return {
    naviateToReview,
  };
};

export default useOrderCard2;
