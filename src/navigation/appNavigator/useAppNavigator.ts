import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchUserData, setUser} from '../../redux/slices/authSlice';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const useAppNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const user = useAppSelector(state => state?.auth?.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    SplashScreen.hide();
    const onStart = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        await dispatch(fetchUserData());
      }
      setInitializing(false);
    };
    onStart();
  }, []);

  return {
    initializing,
    user,
  };
};
