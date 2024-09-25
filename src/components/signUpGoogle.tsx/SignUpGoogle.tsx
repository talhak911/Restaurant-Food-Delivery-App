import {Text, TouchableOpacity} from 'react-native';

import {useSignUpGoogle} from './useSignUpGoogle';
import {styles} from './styles';

export const SignUpGoogle = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (e: boolean) => void;
}) => {
  const {signInWithGoogle} = useSignUpGoogle({setLoading});
  return (
    <>
      <Text style={styles.separator}>or</Text>
      <TouchableOpacity
        disabled={loading}
        style={styles.buttonGoogle}
        onPress={() => signInWithGoogle()}>
      <Text>google icon</Text>
        <Text style={styles.buttonText}>Sign in with google</Text>
      </TouchableOpacity>
    </>
  );
};
