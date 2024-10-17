import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Font, Height, Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.orange},
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Height(31),
  },
  logo: {maxWidth: 300, maxHeight: 400},
  description: {
    color: COLORS.almostWhite,
    fontSize: Font(14),
    marginTop: 30,
    marginHorizontal: Width(11),
    textAlign: 'center',
  },
  buttonContainer: {marginTop: Height(5), gap: 4, marginBottom: 12},
});
