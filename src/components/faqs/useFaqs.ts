import {useState} from 'react';

export const useFaqs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const handleItemPress = (value: string) => {
    setIsOpen(false);
  };
  return {
    isOpen,
    handlePress,
    handleItemPress,
  };
};
