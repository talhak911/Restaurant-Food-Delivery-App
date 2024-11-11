import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchUserData} from '../../redux/slices/authSlice';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import {useNavigation} from '@react-navigation/native';
import {TabNavigatorProps} from '../../types/types';
import Toast from 'react-native-toast-message';

export const useAppNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const navigation = useNavigation<TabNavigatorProps>();
  const user = useAppSelector(state => state?.auth?.user);
  const dispatch = useAppDispatch();

  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize('639c1adc-b9ff-4581-bb8c-7238eb64cf0d');
  OneSignal.Notifications.requestPermission(true);
  OneSignal.Notifications.addEventListener('click', () => {
    navigation.navigate('My Orders');
  });
  OneSignal.Notifications.addEventListener('foregroundWillDisplay', event => {
    Toast.show({text1: `${event.notification.title}`});
  });
  useEffect(() => {
    SplashScreen.hide();
    const onStart = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        await dispatch(fetchUserData());
      }

      if (user?.id) {
        OneSignal.login(user.id);
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
