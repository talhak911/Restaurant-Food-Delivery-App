import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useStore';
import {changePassword} from '../../redux/slices/authSlice';
import {validateChangePasswordForm} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';
import {ChangePasswordFieldsType, StackNavigatorProps} from '../../types/types';

const useChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigatorProps>();
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState<ChangePasswordFieldsType>({
    'Current Password': '',
    'New Password': '',
    'Confirm New Password': '',
  });
  const onChange = (key: keyof typeof fields, value: string) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };

  const handleChangePassword = async () => {
    if (!validateChangePasswordForm(fields)) {
      return;
    }
    setLoading(true);
    const res = await dispatch(
      changePassword({
        currentPassword: fields['Current Password'],
        newPassword: fields['New Password'],
      }),
    );
    if (res.meta.requestStatus === 'fulfilled') {
      navigation.goBack();
    }
    setLoading(false);
  };
  const navigateToForgetPassword = () => {
    navigation.navigate('Forget Password');
  };
  return {
    loading,
    fields,
    onChange,
    handleChangePassword,
    navigateToForgetPassword,
  };
};

export default useChangePassword;
