import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DownArrowIcon from '../../assets/icons/downArrow';
import {SETTINGS} from '../../constants/constants';
import useSettings from './useSettings';
import {StackPaths} from '../../types/types';
import {styles} from './SettingsStyles';

const Settings = () => {
  const {navigateTo} = useSettings();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <View style={{gap: 22}}>
            {SETTINGS.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigateTo(item.screen as keyof StackPaths);
                }}
                key={index}
                style={styles.buttonContainer}>
                {item.icon}
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonTitle}>{item.title}</Text>
                  <DownArrowIcon />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
