import {useNavigation} from '@react-navigation/native';
import {StackNavigatorParamList, TabNavigatorProps} from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {setUser} from '../../redux/slices/authSlice';

const useDrawerContent = () => {
  const dispath = useAppDispatch();
  const navagation = useNavigation<TabNavigatorProps>();
  const user = useAppSelector(state => state.auth.user);
  const NavigateTo = (path: keyof StackNavigatorParamList) => {
    navagation.navigate('Stack', {screen: path});
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('authToken');
    dispath(setUser(null));
  };
  return {
    user,
    NavigateTo,
    signOut,
  };
};

export default useDrawerContent;
