import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/color';
import {responsiveWidth as rW} from "react-native-responsive-dimensions"
interface CustomButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  title: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number,
  pH?:number
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  loading = false,
  onPress,
  title,
  fontSize=24,
  bgColor = COLORS.orange,
  pH= rW(3),
  textColor = 'white',
  ...props 
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[styles.button, {backgroundColor: bgColor,paddingHorizontal:pH}]}
      onPress={onPress}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.white} />
      ) : (
        <Text style={[styles.buttonTitle, {color: textColor,fontSize}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
