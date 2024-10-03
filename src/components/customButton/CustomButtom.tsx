import React from 'react';
import {
  ActivityIndicator,
  DimensionValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/color';
import {responsiveWidth as rW} from 'react-native-responsive-dimensions';
interface CustomButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  title: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
  pH?: number;
  pV?: number;
  icon?: React.JSX.Element;
  width?: number | DimensionValue;
}

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
