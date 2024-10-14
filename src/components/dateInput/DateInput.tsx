import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomInput} from '../customInput/CustomInput';
import useDateInput from './useDateInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const DateInput = ({
  date,
  setDate,
}: {
  date: string;
  setDate:(date: string) => void
}) => {

  const {handleConfirm, hideDatePicker, showDatePicker, isDatePickerVisible} =
    useDateInput({setDate});
  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <CustomInput 
          value={date.split('T')[0]}
          onChange={() => {}}
          placeHolder="Date of Birth"
          label="Date of Birth"
          keyboardType="default"
          editable={false}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default DateInput;
