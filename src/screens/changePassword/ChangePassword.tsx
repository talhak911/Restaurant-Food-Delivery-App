import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../../constants/color';
import useChangePassword from './useChangePassword';
import {CustomInput} from '../../components/customInput/CustomInput';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
import {CustomButton} from '../../components/customButton/CustomButton';
import {styles} from './ChangePasswordStyles';

const ChangePassword = () => {
  const {
    fields,
    onChange,
    loading,
    handleChangePassword,
    navigateToForgetPassword,
  } = useChangePassword();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <View style={styles.inputFieldsContainer}>
            {Object.keys(fields).map((item, index) => (
              <View key={index}>
                <CustomInput
                  label={item}
                  value={fields[item as keyof typeof fields]}
                  onChange={text => onChange(item as keyof typeof fields, text)}
                  placeHolder={item}
                  secureInput
                />
                {index === 0 && (
                  <TouchableOpacity
                    onPress={navigateToForgetPassword}
                    style={{alignSelf: 'flex-end'}}>
                    <Text style={styles.forgetPassword}>Forgot Password?</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Change Password"
            fontSize={17}
            pH={36}
            onPress={handleChangePassword}
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
