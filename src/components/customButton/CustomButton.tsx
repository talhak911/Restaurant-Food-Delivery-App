import React from 'react';
import {
  ActivityIndicator,
  DimensionValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {styles} from './CustomButtonStyles';
import {COLORS} from '../../constants/color';
import {responsiveWidth as rW} from 'react-native-responsive-dimensions';
import {CustomButtonProps} from '../../types/types';

export const CustomButton: React.FC<CustomButtonProps> = ({
  loading = false,
  onPress,
  title,
  width,
  fontSize = 24,
  bgColor = COLORS.orange,
  pH = rW(3),
  pV = 7,
  icon,
  textColor = 'white',
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          paddingHorizontal: pH,
          width,
          paddingVertical: pV,
        },
      ]}
      onPress={onPress}
      {...props}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.white} />
      ) : (
        <View style={styles.buttonContent}>
          {icon}
          <Text
            style={[
              styles.buttonTitle,
              {color: textColor, fontSize, lineHeight: fontSize + 4},
            ]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
