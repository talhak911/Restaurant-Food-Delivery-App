import {useState} from 'react';

export const useCustomInput = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return {
    passwordVisibility,
    handlePasswordVisibility,
  };
};
