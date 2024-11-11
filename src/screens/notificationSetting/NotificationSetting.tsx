import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {NOTIFICATIONS} from '../../constants/constants';
import {styles} from './NotificationSettingStyles';
import CustomSwitch from '../../components/customSwitch/CustomSwitch';
import useNotificationSetting from './useNotificationSetting';

const NotificationSetting = () => {
const {notificationSettings,onChangeNotificationSettings}=useNotificationSetting()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <View style={{gap: 22}}>
            {NOTIFICATIONS.map((item, index) => (
              <View
                key={index}
                style={styles.buttonContainer}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonTitle}>{item.label}</Text>
                  <CustomSwitch  isEnabled={notificationSettings[item.key]} action={()=>{onChangeNotificationSettings(item.key)}} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSetting;
