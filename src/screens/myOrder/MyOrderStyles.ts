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
  contentContainer: {
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '6%',
    paddingVertical: 39,
  },
  filterButtonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 19,
  },
  orderContainer: {
    paddingVertical: 19,
    borderBottomWidth: 1,
    borderColor: COLORS.orange2,
  },
});
