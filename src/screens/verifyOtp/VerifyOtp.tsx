import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import OtpTextInput from 'react-native-text-input-otp';
import {useVerifyOtp} from './useVerifyOtp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {VerifyOtpProps} from '../../types/types';
import {CustomButton} from '../../components/customButton/CustomButton';
import {styles} from './VerifyOtpStyles';

const VerifyOtp = ({route}: VerifyOtpProps) => {
  const {otp, loading, setOtp, handleVerifyOtp} = useVerifyOtp(
    route.params.email,
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
          <View style={styles.contentContainer}>
            <OtpTextInput
              otp={otp}
              setOtp={setOtp}
              digits={6}
              style={styles.otpStyle}
              fontStyle={styles.fontStyle}
              focusedStyle={styles.focusedStyle}
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                loading={loading}
                title="Verify Account"
                onPress={handleVerifyOtp}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOtp;
