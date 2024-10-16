import {useState} from 'react';

const useDateInput = ({setDate}: {setDate: (date: string) => void}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDate(date.toISOString());
    hideDatePicker();
  };

  return {
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    isDatePickerVisible,
  };
};

export default useDateInput;
