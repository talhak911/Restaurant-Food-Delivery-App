import {useNavigation} from '@react-navigation/native';
import {TabNavigatorProps} from '../../types/types';

const useSliderItem = () => {
  const navigation = useNavigation<TabNavigatorProps>();

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
  return {
    navigateToFoodDetail,
  };
};

export default useSliderItem;
