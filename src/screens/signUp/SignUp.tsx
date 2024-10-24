import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './signUpStyles';
import {useSignUp} from './useSignUp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButton';
import {COLORS} from '../../constants/color';
import CustomDropdown from '../../components/customDropDown/CustomDropDown';
import {Role} from '../../gql/graphql';
import {Width} from '../../utils/responsive';
import FacebookIcon from '../../assets/icons/facebook';
import GoogleIcon from '../../assets/icons/google';
import DateInput from '../../components/dateInput/DateInput';

export const SignUp = () => {
  const {
    navigateToSignIn,
    handleSignUp,
    fields,
    role,
    loading,
    dob,
    selectRole,
    handleDateChange,
  } = useSignUp();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="always"
          style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.gap}>
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

              <DateInput date={dob} setDate={handleDateChange} />
              <CustomDropdown
                placeHolder="Select User Role"
                label="Role"
                items={[Role.Customer, Role.Restaurant]}
                onSelect={selectRole}
                selectedValue={role}
              />
            </View>
            {loading ? (
              <View style={{marginTop: 16}}>
                <ActivityIndicator size="large" color={COLORS.purple} />
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
                <View style={styles.termsContainer}>
                  <Text style={styles.terms}>
                    By continuing, you agree to{' '}
                    <Text style={{color: COLORS.orange}}>Terms of Use </Text>
                    and{' '}
                    <Text style={{color: COLORS.orange}}>Privacy Policy.</Text>
                  </Text>
                </View>
                <CustomButton
                  title="Sign Up"
                  pH={Width(15)}
                  loading={loading}
                  onPress={handleSignUp}
                />
                <Text style={styles.signUpOptionsText}>or sign up with</Text>
                <View style={{flexDirection: 'row', gap: 9}}>
                  <GoogleIcon />
                  <FacebookIcon />
                </View>
                <View style={styles.footerContainer}>
                  <Text style={styles.footerText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={navigateToSignIn}>
                    <Text style={styles.footerLink}>Log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
