import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import OtpTextInput from 'react-native-text-input-otp';
import {useVerifyOtp} from './useVerifyOtp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {VerifyOtpProps} from '../../types/types';
import {CustomButton} from '../../components/customButton/CustomButton';
import {Height} from '../../utils/responsive';

const VerifyOtp = ({route}: VerifyOtpProps) => {
  const {otp, loading, setOtp, handleVerifyOtp} = useVerifyOtp(
    route.params.email,
  );
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <OtpTextInput
          otp={otp}
          setOtp={setOtp}
          digits={6}
          style={{
            borderRadius: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            height: 45,
          }}
          fontStyle={{fontSize: 20, fontWeight: 'bold'}}
          focusedStyle={{borderColor: 'black', borderBottomWidth: 2}}
        />
      </KeyboardAwareScrollView>

      <View style={{alignItems: 'center', marginTop: Height(9)}}>
        <CustomButton
          loading={loading}
          title="Verify Account"
          onPress={handleVerifyOtp}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({});
