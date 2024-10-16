import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  addressList: {
    flex: 1,
    paddingTop: 35,
    paddingBottom: 30,
    paddingHorizontal: 35,
  },
  buttonContainer: {alignItems: 'center', marginTop: 120, paddingBottom: 30},
  border: {borderBottomWidth: 1, borderColor: COLORS.lightPink},
});
