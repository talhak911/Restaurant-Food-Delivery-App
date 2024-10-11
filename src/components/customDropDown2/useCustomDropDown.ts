import {useState} from 'react';
import { Role } from '../../gql/graphql';


export const useCustomDropdown = ({
  onSelect,
}: {
  onSelect: (v: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const handleItemPress = (value: string) => {
    setIsOpen(false);
    onSelect(value);
  };
  return {
    isOpen,
    handlePress,
    handleItemPress,
  };
};
