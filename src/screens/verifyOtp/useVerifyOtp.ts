import {useMutation} from '@apollo/client';
import {useState} from 'react';
import {VerifyAccountDocument} from '../../gql/graphql';
import {validateOtp} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '../../types/types';
import Toast from 'react-native-toast-message';

export const useVerifyOtp = (email: string) => {
  const [verifyAccount, {loading, error}] = useMutation(VerifyAccountDocument);
  const navigation = useNavigation<AuthNavigationProp>();
  const [otp, setOtp] = useState('');
  const handleVerifyOtp = async () => {
    const isValid = validateOtp(email, otp);
    if (!isValid || !email) {
      return;
    }
    try {
      const {data} = await verifyAccount({
        variables: {
          email,
          otp,
        },
      });
      if (data) {
        Toast.show({type: 'success', text1: 'Verification successfull'});
        navigation.navigate('Log In');
      }
    } catch (error: any) {
      Toast.show({type: 'error', text1: error.message});
    }
  };
  return {
    loading,
    otp,
    setOtp,
    handleVerifyOtp,
  };
};
