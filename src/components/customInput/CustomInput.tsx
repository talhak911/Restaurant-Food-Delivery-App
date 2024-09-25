import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './CustomInputStyles';
import {COLORS} from '../../constants/color';
import {CustomInputProps} from '../../types/types';
import {useCustomInput} from './useCustomInput';
import EyeIcon from '../../assets/icons/eye';

export const CustomInput = ({
  value,
  placeHolder,
  label,
  keyboardType,
  editable = true,
  onChange,
  secureInput = false,
}: CustomInputProps) => {
  const {passwordVisibility, handlePasswordVisibility} = useCustomInput();

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder={placeHolder}
          secureTextEntry={secureInput ? passwordVisibility : false}
          placeholderTextColor={COLORS.grey}
          onChangeText={onChange}
          value={value}
          editable={editable}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        {secureInput && (
          <Pressable onPress={handlePasswordVisibility}>
            <EyeIcon show={passwordVisibility} />
          </Pressable>
        )}
      </View>
    </View>
  );
};
