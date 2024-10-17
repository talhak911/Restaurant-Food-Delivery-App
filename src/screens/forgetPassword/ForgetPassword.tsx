import {ActivityIndicator, View} from 'react-native';
import styles from './ForgetPasswordStyles';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForgetPassword} from './useForgetPassword';

const ForgetPassword = () => {
  const {fields, handleRequestOtp, handleResetPassword, loadings} =
    useForgetPassword();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containerContent}>
            {fields.map((field, index) => (
              <CustomInput
                key={index}
                value={field.value}
                onChange={field.onChange}
                placeHolder={field.placeholder}
                secureInput={field.secureInput}
                label={field.label}
                keyboardType={field.keyboardType}
              />
            ))}
            {loadings ? (
              <ActivityIndicator size={'large'} />
            ) : (
              <CustomButton
                loading={loadings}
                onPress={handleRequestOtp}
                title="Get Otp"
              />
            )}
          </View>

          {!loadings && (
            <View style={styles.buttonContainer}>
              <CustomButton
                loading={loadings}
                onPress={handleResetPassword}
                title="Reset"
                pH={40}
              />
            </View>
          )}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
