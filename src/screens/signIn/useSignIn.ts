import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useStore';
import {fetchUserData} from '../../redux/slices/authSlice';
import {AuthNavigationProp} from '../../types/types';
import {SIGN_IN_FIELDS} from '../../constants/inputFields';
import {validateSignInForm} from '../../utils/validation';
import {useMutation} from '@apollo/client';
import {SignInDocument} from '../../gql/graphql';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {client} from '../../providers/apolloProvider/apolloProvider';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const navigateToSignUp = () => {
    navigation.navigate('New Account');
  };
  const navigateToForgetPassword = () => {
    navigation.navigate('Forget Password');
  };
  const [signIn, {loading, error}] = useMutation(SignInDocument);
  const [email, setEmail] = useState('');
  const [loadings, setLoadings] = useState(false);
  const [password, setPassword] = useState('');

  const onSignInPress = async () => {
    try {
      setLoadings(true);
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
        ToastAndroid.show('Login successful', ToastAndroid.SHORT);
      }
      console.log('the token is ', response.data?.signIn);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      console.log('error while sign in ', error);
    } finally {
      setLoadings(false);
    }
  };
  const fields = SIGN_IN_FIELDS(email, setEmail, password, setPassword);

  return {
    setEmail,
    setPassword,
    onSignInPress,
    navigateToSignUp,
    // setLoadings,
    navigateToForgetPassword,
    fields,
    loading,
  };
};
