import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {useSignUp} from './useSignUp';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from '../../components/checkBox/CheckBox';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {SignUpGoogle} from '../../components/signUpGoogle.tsx/SignUpGoogle';
import {COLORS} from '../../constants/color';
import CustomDropdown from '../../components/customDropDown/CustomDropDown';
import {Role} from '../../gql/graphql';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Height, Width} from '../../utils/responsive';
import FacebookIcon from '../../assets/icons/facebook';
import GoogleIcon from '../../assets/icons/google';

export const SignUp = () => {
  const {
    navigateToSignIn,
    setIsChecked,
    setLoading,
    handleSignUp,
    fields,
    role,
    loadings,
    selectRole,
    isChecked,
    isDatePickerVisible,
    dob,
    hideDatePicker,
    showDatePicker,
    handleConfirm,
  } = useSignUp();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        style={{flex: 1}}>
        <View style={styles.container}>
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

            <TouchableOpacity onPress={showDatePicker}>
              <CustomInput
                value={dob.split('T')[0]}
                onChange={() => {}}
                placeHolder="Date of Birth"
                label="Date of Birth"
                keyboardType="default"
                editable={false}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={new Date()}
            />
            <CustomDropdown
              label="Role"
              items={[{value: Role.Customer}, {value: Role.Restaurant}]}
              onSelect={selectRole}
              selectedValue={role}
            />
          </View>
          {loadings ? (
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
                loading={loadings}
                onPress={handleSignUp}
              />
              <Text style={{color: COLORS.almostBlack, marginVertical: 9}}>
                or sign up with
              </Text>
              <View style={{flexDirection: 'row', gap: 9}}>
                <GoogleIcon />
                <FacebookIcon />
              </View>
              <View style={{flexDirection: 'row', paddingVertical: Height(1)}}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={navigateToSignIn}>
                  <Text style={styles.footerLink}>Log in</Text>
                </TouchableOpacity>
              </View>
              {/* <SignUpGoogle loading={loadings} setLoading={setLoading} /> */}
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
