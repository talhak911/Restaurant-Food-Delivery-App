import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useStore';
import {fetchUserData} from '../../redux/slices/authSlice';
import {AuthNavigationProp} from '../../types/types';
import {SIGN_IN_FIELDS} from '../../constants/inputFields';
import {validateSignInForm} from '../../utils/validation';
import {useMutation} from '@apollo/client';
import {SignInDocument} from '../../gql/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {client} from '../../providers/apolloProvider/apolloProvider';
import Toast from 'react-native-toast-message';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const navigateToSignUp = () => {
    navigation.navigate('New Account');
  };
  const navigateToForgetPassword = () => {
    navigation.navigate('Forget Password');
  };
  const [signIn, {loading}] = useMutation(SignInDocument);
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const onSignInPress = async () => {
    try {
      const isValid = validateSignInForm(email, password);
      if (!isValid) {
        return;
      }
      const response = await signIn({
        variables: {
          email,
          password,
        },
      });
      const token = response.data?.signIn;
      if (token) {
        await client.clearStore();
        await AsyncStorage.setItem('authToken', token);

        await dispatch(fetchUserData());
        Toast.show({text1:"Login successful"});
      }
    } catch (error: any) {
      Toast.show({text1:error.message,type:"error"});
    }
  };
  const fields = SIGN_IN_FIELDS(email, setEmail, password, setPassword);

  return {
    setEmail,
    setPassword,
    onSignInPress,
    navigateToSignUp,
    navigateToForgetPassword,
    fields,
    loading,
  };
};
