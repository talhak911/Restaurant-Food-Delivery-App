import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {Font, Height, Width} from '../../utils/responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForgetPassword} from './useForgetPassword';

const ForgetPassword = () => {
  const {fields, handleRequestOtp, handleResetPassword, loadings} =
    useForgetPassword();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
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
   {loadings?
   <ActivityIndicator size={"large"}/>
   :
               <CustomButton
               loading={loadings}
               onPress={handleRequestOtp}
               title="Get Otp"
               pH={Width(6)}
               // fontSize={Font(19)}
             />}
        </View>

{!loadings &&
        <View style={{marginTop: Height(7), marginHorizontal: 16}}>
        <View style={{alignItems: 'center'}}>
          <CustomButton
            loading={loadings}
            onPress={handleResetPassword}
            title="Reset"
            pH={Width(6)}
          />
        </View>
      </View>
}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
