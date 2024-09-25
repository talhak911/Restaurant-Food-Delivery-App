import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSignIn} from './useSignIn';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {COLORS} from '../../constants/color';
import GoogleIcon from '../../assets/icons/google';
import FacebookIcon from '../../assets/icons/facebook';
import {Height, Width} from '../../utils/responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const SignIn = () => {
  const {
    onSignInPress,
    navigateToSignUp,
    navigateToForgetPassword,
    fields,
    loadings

  } = useSignIn();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.containerContent}>
          <Text style={styles.heading} >Welcome</Text>
      
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
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
    
          <View style={{marginTop: Height(7), marginHorizontal: 16}}>
            <View style={{alignItems: 'center'}}>
              <CustomButton
            loading={loadings}
                onPress={onSignInPress}
                title="Login"
                pH={Width(15)}
              />
            </View>

            {/* <View style={{alignItems: 'center'}}>
            <SignUpGoogle loading={loading} setLoading={setLoading} />
            </View> */}
            <View style={styles.footerView}>
            <Text style={{color: COLORS.almostBlack, marginTop: 29,marginBottom:19}}>
                or sign up with
              </Text>
              <View style={{flexDirection: 'row', gap: 9}}>
                <GoogleIcon />
                <FacebookIcon />
              </View>
              <View style={{flexDirection: 'row', paddingVertical:19}}>
                <Text style={styles.footerText}>Don’t have an account?</Text>
                <TouchableOpacity onPress={navigateToSignUp}>
                  <Text style={styles.footerLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
