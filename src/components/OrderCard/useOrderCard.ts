import {useNavigation} from '@react-navigation/native';
import {
  NavigateToReviewFromOrderCard,
  StackNavigatorProps,
} from '../../types/types';

const useOrderCard = () => {
  const navigation = useNavigation<StackNavigatorProps>();

  const naviateToReview = ({
    foodId,
    name,
    picture,
    orderId,
  }: NavigateToReviewFromOrderCard) => {
    navigation.navigate('Leave a Review', {
      orderId,
      reviews: [{foodId, name, picture}],
    });
  };
  return {
    naviateToReview,
  };
};

export default useOrderCard;
