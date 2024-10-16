import {useState} from 'react';
import {Role} from '../../gql/graphql';

export const useCustomDropdown = ({
  onSelect,
}: {
  onSelect: (v: Role) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const handleItemPress = (value: Role) => {
    setIsOpen(false);
    onSelect(value);
  };
  return {
    isOpen,
    handlePress,
    handleItemPress,
  };
};
