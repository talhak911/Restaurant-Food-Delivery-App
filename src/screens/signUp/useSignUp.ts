import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '../../types/types';
import {SIGN_UP_FIELDS} from '../../constants/inputFields';
import {useMutation} from '@apollo/client';
import {Role, SignUpDocument} from '../../gql/graphql';
import {validateSignUpForm} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import {useAppSelector} from '../../hooks/useStore';

export const useSignUp = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role | null>(null);
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [signUp, {loading}] = useMutation(SignUpDocument);
  const oAuthLoading = useAppSelector(state => state.auth.loading);
  const handleSignUp = async () => {
    const isValid = validateSignUpForm(name, email, password, phone, dob, role);
    if (!isValid || !role) {
      return;
    }

    try {
      const {data} = await signUp({
        fetchPolicy: 'no-cache',
        variables: {
          data: {
            email,
            password,
            phone,
            name,
            role,
            dateOfBirth: dob,
          },
        },
      });
      if (data) {
        Toast.show({text1: 'Verify your account to login'});
        navigation.navigate('Verify Otp', {email});
      }
    } catch (error: any) {
      Toast.show({type: 'error', text1: error.message});
    }
  };

  const navigateToSignIn = () => {
    navigation.navigate('Log In');
  };
  const handleDateChange = (date: string) => {
    setDob(date);
  };

  const selectRole = (e: string) => {
    setRole(e as Role);
  };
  const fields = SIGN_UP_FIELDS(
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
  );

  return {
    navigateToSignIn,
    handleSignUp,
    selectRole,
    loading,
    oAuthLoading,
    fields,
    role,
    dob,
    handleDateChange,
  };
};
