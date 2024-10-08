import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/useStore';
import {AuthNavigationProp} from '../../types/types';
import {SIGN_UP_FIELDS} from '../../constants/inputFields';
import {useMutation} from '@apollo/client';
import {Role, SignUpDocument} from '../../gql/graphql';
import {ToastAndroid} from 'react-native';
import {validateSignUpForm} from '../../utils/validation';

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AuthNavigationProp>();

  const navigateToSignIn = () => {
    navigation.navigate('Log In');
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateChange = (date: string) => {
    setDob(date);
  };
  const handleConfirm = (date: Date) => {
    handleDateChange(date.toISOString());
    hideDatePicker();
  };
  const selectRole = (e: Role) => {
    setRole(e);
  };
  const [signUp, {loading}] = useMutation(SignUpDocument);
  const handleSignUp = async () => {
    const isValid = validateSignUpForm(name, email, password, phone, dob, role);
    if (!isValid || !role) {
      return;
    }

    try {
      const {data} = await signUp({
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
        ToastAndroid.show('Verify your account to login ', ToastAndroid.SHORT);
        navigation.navigate('Verify Otp', {email});
      }
    } catch (error: any) {
      console.log(error);
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role | null>(null);
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

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
    hideDatePicker,
    fields,
    role,
    dob,
    handleConfirm,
    isDatePickerVisible,
    showDatePicker,
  };
};
