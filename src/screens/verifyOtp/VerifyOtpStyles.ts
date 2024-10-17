import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Height} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  contentContainer: {
    marginTop: 100,
    paddingHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  otpStyle: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    height: 45,
  },
  fontStyle: {fontSize: 20, fontWeight: 'bold'},
  focusedStyle: {borderColor: COLORS.orange, borderBottomWidth: 2},
  buttonContainer: {alignItems: 'center', marginTop: Height(9),marginBottom:50},
});
