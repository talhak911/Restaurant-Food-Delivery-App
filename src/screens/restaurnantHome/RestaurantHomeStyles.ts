import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
