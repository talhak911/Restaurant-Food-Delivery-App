import {useNavigation} from '@react-navigation/native';

const useGoBack = () => {
  const navigation = useNavigation();
  const navigateToBack = () => {
    navigation.goBack();
  };
  return {
    navigateToBack,
  };
};

export default useGoBack;
