import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {AuthNavigationProp} from '../../types/types';
import {RESET_PASSWORD_FIELDS} from '../../constants/inputFields';
import {isValidEmail, validateForgetPasswordForm} from '../../utils/validation';
import {useMutation} from '@apollo/client';
import {RequestOtpDocument, ResetPasswordDocument} from '../../gql/graphql';
import Toast from 'react-native-toast-message';

export const useForgetPassword = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const [resetPassword, {loading, error}] = useMutation(ResetPasswordDocument);
  const [requestOtp] = useMutation(RequestOtpDocument);

  const [email, setEmail] = useState('');
  const [loadings, setLoadings] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleRequestOtp = async () => {
    setLoadings(true);

    try {
      if (!isValidEmail(email)) {
        Toast.show({type: 'error', text1: 'Enter valid Email'});
        return;
      } else {
        await requestOtp({
          variables: {
            email,
            type: 'Reset',
          },
        });
        Toast.show({text1: 'Otp sent to your email '});
      }
    } catch (error: any) {
      Toast.show({type: 'error', text1: error.message});
    } finally {
      setLoadings(false);
    }
  };
  const handleResetPassword = async () => {
    try {
      setLoadings(true);
      const isValid = validateForgetPasswordForm(
        email,
        password,
        confirmPassword,
        otp,
      );
      if (!isValid) {
        return;
      }
      const response = await resetPassword({
        variables: {
          email,
          password,
          otp,
        },
      });
      Toast.show({text1: 'Your password has been changed'});
      navigation.navigate('Log In');
    } catch (error: any) {
      Toast.show({type: 'error', text1: error.message});
    } finally {
      setLoadings(false);
    }
  };
  const fields = RESET_PASSWORD_FIELDS(
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    otp,
    setOtp,
  );

  return {
    setEmail,
    setPassword,
    handleResetPassword,
    handleRequestOtp,
    setLoadings,

    fields,
    loadings,
  };
};
