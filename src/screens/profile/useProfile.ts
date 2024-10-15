import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateCustomer} from '../../redux/slices/authSlice';
import {uploadImage} from '../../utils/uploadImage';
import {validateProfile} from '../../utils/validation';
import {PROFILE_FIELDS} from '../../constants/inputFields';

const useProfile = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const user = useAppSelector(state => state.auth.user);
  const initialFields = {
    'Full Name': user?.name || '',
    'Date of Birth': user?.dateOfBirth || '',
    Email: user?.email || '',
    'Phone Number': user?.phone || '',
  };
  const profilePic = user?.customer?.picture;
  const [fields, setFields] = useState({
    'Full Name': initialFields['Full Name'],
    'Date of Birth': initialFields['Date of Birth'],
    Email: initialFields.Email,
    'Phone Number': initialFields['Phone Number'],
  });
  const [picture, setPicture] = useState<string | null>(null);
  const handleDateChange = (date: string) => {
    setFields({...fields, 'Date of Birth': date});
  };
  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        response.assets &&
        response.assets[0].uri &&
        response.assets.length > 0
      ) {
        setPicture(response.assets[0].uri);
      }
    });
  };

  const onChange = (key: keyof typeof fields, value: string) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };

  const handleUpdateProfile = async () => {
    if (!validateProfile(fields)) {
      return;
    }
    setLoading(true);
    const updateData: {
      name?: string;
      dateOfBirth?: string;
      phone?: string;
      picture?: string | undefined;
    } = {};

    if (fields['Full Name'] !== initialFields['Full Name']) {
      updateData.name = fields['Full Name'];
    }

    if (fields['Date of Birth'] !== initialFields['Date of Birth']) {
      updateData.dateOfBirth = fields['Date of Birth'];
    }

    if (fields['Phone Number'] !== initialFields['Phone Number']) {
      updateData.phone = fields['Phone Number'];
    }

    if (picture) {
      const downloadURL = await uploadImage(picture);
      updateData.picture = downloadURL;
    }

    if (Object.keys(updateData).length > 0) {
      await dispatch(updateCustomer(updateData));
    }

    setLoading(false);
  };
  const fieldConfig = PROFILE_FIELDS(fields, onChange);

  return {
    handleDateChange,
    profilePic,
    fields,
    fieldConfig,
    onChange,
    handleUpdateProfile,
    picture,
    loading,
    handleImagePicker,
  };
};

export default useProfile;
