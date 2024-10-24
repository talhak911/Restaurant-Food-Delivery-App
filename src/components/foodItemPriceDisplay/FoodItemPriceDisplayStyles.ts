import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  priceContainer: {
    position: 'absolute',
    backgroundColor: COLORS.orange,
    right: -2,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 4,
  },
});
