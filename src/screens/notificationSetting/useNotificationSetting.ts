import { useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {changeNotificationSetting} from '../../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useNotificationSetting = () => {
  const dispatch = useAppDispatch();
  const [notificationSettings, setNotificationSettings] = useState({
    general: false,
    sound: false,
    vibrate: false,
  });
 
  const wantsOrderNotifications = useAppSelector(
    (state) => state.auth.user?.customer?.wantsOrderNotifications || false
  );

  useEffect(() => {
    const fetchSettings = async () => {
      const soundSetting = (await AsyncStorage.getItem('wantsSoundNotifications')) === 'true';
      const vibrateSetting = (await AsyncStorage.getItem('wantsVibrateNotifications')) === 'true';

      setNotificationSettings({
        general: wantsOrderNotifications,
        sound: soundSetting,
        vibrate: vibrateSetting,
      });
    };

    fetchSettings();
  }, [wantsOrderNotifications]);

   const onChangeNotificationSettings = async (key: string) => {
    if (key === 'general') {
      const newValue = !notificationSettings.general;
      setNotificationSettings((prev) => ({ ...prev, general: newValue }));
      dispatch(changeNotificationSetting(newValue));
    } else if (key === 'sound') {
      const newValue = !notificationSettings.sound;
      setNotificationSettings((prev) => ({ ...prev, sound: newValue }));
      await AsyncStorage.setItem('wantsSoundNotifications', JSON.stringify(newValue));
    } else if (key === 'vibrate') {
      const newValue = !notificationSettings.vibrate;
      setNotificationSettings((prev) => ({ ...prev, vibrate: newValue }));
      await AsyncStorage.setItem('wantsVibrateNotifications', JSON.stringify(newValue));
    }
  };
  return {
    notificationSettings,
    onChangeNotificationSettings,
  };
};

export default useNotificationSetting;
