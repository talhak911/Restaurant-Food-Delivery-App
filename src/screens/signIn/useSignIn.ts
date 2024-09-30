import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useStore';
import {fetchUserData, setUser, signIn} from '../../redux/slices/authSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../types/types';
import {SIGN_IN_FIELDS, SIGN_UP_FIELDS} from '../../constants/inputFields';
import {validateSignInForm} from '../../utils/validation';
import {useMutation, useQuery} from '@apollo/client';
import {SignInDocument} from '../../gql/graphql';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const useSignIn = () => {
  type SignInNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<SignInNavigationProp>();
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
      const token = response.data?.signIn; // Assuming the signIn mutation returns a token
      if (token) {
        // Store token in AsyncStorage
        await AsyncStorage.setItem('authToken', token);
         
        dispatch(fetchUserData());

        // Navigate to the main part othe app
        // navigation.navigate('Home');
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

  // const [signIn, {loadings, error}] = useQuery(SignInDocument);

  //     const {data} = await signUp({
  //       variables: {
  //         data: {
  //           email,
  //           password,
  //           phone: Number(phone),
  //           name,
  //           role,
  //           dateOfBirth: dob,
  //         },
  //       },
  //     });
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
