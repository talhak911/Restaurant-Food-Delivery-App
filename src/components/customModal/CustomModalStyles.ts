import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
    flexDirection: 'row',
  },
  modalContent: {
    backgroundColor: COLORS.orange,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    paddingHorizontal: 33,
    paddingVertical: 14,
    alignItems: 'center',
    width: '80%',
    height: '100%',
  },
});
