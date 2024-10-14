import {useState} from 'react';
import {useAppSelector} from '../../hooks/useStore';

const useProfile = () => {
  const user = useAppSelector(state => state.auth.user);
  const [fields, setFields] = useState<{
    'Full Name': string;
    'Date of Birth': string;
    Email: string;
    'Phone Number': string;
  }>({
    'Full Name': user?.name || '',
    'Date of Birth': user?.dateOfBirth || '',
    Email: user?.email || '',
    'Phone Number': user?.phone || '',
  });

  const handleDateChange = (date: string) => {
    setFields({...fields, 'Date of Birth': date});
  };

  const onChange = (key: keyof typeof fields, value: string) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };

  return {
    handleDateChange,
    fields,
    onChange,
  };
};

export default useProfile;
