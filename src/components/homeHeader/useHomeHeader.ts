import {useNavigation} from '@react-navigation/native';
import {StackNavigatorProps} from '../../types/types';

const useHomeHeader = () => {
  const navigation = useNavigation<StackNavigatorProps>();
  const navigateToProfile = () => {
    navigation.navigate('My Profile');
  };
  return {
    navigateToProfile,
  };
};

export default useHomeHeader;
