import {useMutation} from '@apollo/client';
import {useState} from 'react';
import {VerifyAccountDocument} from '../../gql/graphql';
import {validateOtp} from '../../utils/validation';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp, AuthScreenOptions} from '../../types/types';

export const useVerifyOtp = (email: string) => {
  const [verifyAccount, {loading, error}] = useMutation(VerifyAccountDocument);
  const navigation = useNavigation<AuthNavigationProp>();
  const [otp, setOtp] = useState('');
  const onChangeOtp = (e: string) => {
    setOtp(e);
  };
  const handleVerifyOtp = async () => {
    console.log("start fun")
    const isValid = validateOtp(email, otp);
    if (!isValid || !email) {
      return;
    }
    try {
        console.log("running before query")
      const {data} = await verifyAccount({
        variables: {
          email,
          otp,
        },
      });
      if (data) {
        ToastAndroid.show('Verification successfull', ToastAndroid.LONG);
        navigation.navigate('Log In');
      }
    } catch (error: any) {
        console.log(error)
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };
  return {
    otp,
    setOtp
    ,
    handleVerifyOtp
  };
};
