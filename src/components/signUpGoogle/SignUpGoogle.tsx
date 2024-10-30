import {Text, TouchableOpacity} from 'react-native';
import GoogleIcon from '../../assets/icons/google';
import {useSignUpGoogle} from './useSignUpGoogle';
import {styles} from './SignUpGoogleStyles';
import { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const SignUpGoogle = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (e: boolean) => void;
}) => {
  const {signInWithGoogle} = useSignUpGoogle({setLoading});
  useEffect(()=>{
   GoogleSignin.configure({ 
      webClientId: "531351131390-e8uoj2af3fac6i2qhcmgnt944k858fh2.apps.googleusercontent.com",
    });
  },[])
  return (
      <TouchableOpacity
        disabled={loading}
        onPress={() => signInWithGoogle()}>
        <GoogleIcon />
      </TouchableOpacity>
  );
};
