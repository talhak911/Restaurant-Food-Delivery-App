import {TouchableOpacity} from 'react-native';
import GoogleIcon from '../../assets/icons/google';
import {useSignUpGoogle} from './useSignUpGoogle';

export const SignUpGoogle = () => {
  const {signInWithGoogle} = useSignUpGoogle();

  return (
      <TouchableOpacity
        onPress={signInWithGoogle}>
        <GoogleIcon />
      </TouchableOpacity>
  );
};
