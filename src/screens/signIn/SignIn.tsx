import {Text, TouchableOpacity, View} from 'react-native';
import styles from './SignInStyles';
import {useSignIn} from './useSignIn';
import {CustomInput} from '../../components/customInput/CustomInput';
import FacebookIcon from '../../assets/icons/facebook';
import {Width} from '../../utils/responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomButton} from '../../components/customButton/CustomButton';
import {SignUpGoogle} from '../../components/signUpGoogle/SignUpGoogle';
import Loader from '../../components/loader/Loader';

export const SignIn = () => {
  const {
    onSignInPress,
    navigateToSignUp,
    navigateToForgetPassword,
    fields,
    loading,
    oAuthLoading,
  } = useSignIn();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="always"
          style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.heading}>Welcome</Text>

              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </Text>
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
              <TouchableOpacity
                onPress={navigateToForgetPassword}
                style={styles.forgetPasswordContainer}>
                <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                loading={loading}
                onPress={onSignInPress}
                title="Login"
                pH={Width(15)}
              />

              {oAuthLoading ? (
                <View style={{marginTop: 30}}>
                  <Loader color="black" />
                </View>
              ) : (
                <View style={styles.footerView}>
                  <Text style={styles.signUpOptionsText}>or sign up with</Text>
                  <View style={styles.signUpIcons}>
                    <SignUpGoogle />
                  </View>
                  <View style={styles.signUp}>
                    <Text style={styles.footerText}>
                      Don’t have an account?
                    </Text>
                    <TouchableOpacity onPress={navigateToSignUp}>
                      <Text style={styles.footerLink}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
