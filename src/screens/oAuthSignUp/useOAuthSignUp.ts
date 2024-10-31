import {useState} from 'react';
import {OAuthSignUpFields} from '../../constants/inputFields';
import {Role} from '../../gql/graphql';
import {validateSignUpForm} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {oAuthSignUp} from '../../redux/slices/authSlice';
import {UseOAuthSignUpParams} from '../../types/types';

export const useOAuthSignUp = (params: UseOAuthSignUpParams) => {
  const {email, name, token, picture} = params;
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role | null>(null);
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async () => {
    const isValid = validateSignUpForm(name, email, password, phone, dob, role);
    if (!isValid || !role) {
      return;
    }
    dispatch(
      oAuthSignUp({
        token,
        data: {dateOfBirth: dob, name, password, phone, role, picture},
      }),
    );
    try {
    } catch (error: any) {
      Toast.show({type: 'error', text1: error.message});
    }
  };

  const handleDateChange = (date: string) => {
    setDob(date);
  };

  const selectRole = (e: string) => {
    setRole(e as Role);
  };
  const fields = OAuthSignUpFields(password, setPassword, phone, setPhone);

  return {
    handleSignUp,
    selectRole,
    fields,
    role,
    loading,
    dob,
    handleDateChange,
  };
};
