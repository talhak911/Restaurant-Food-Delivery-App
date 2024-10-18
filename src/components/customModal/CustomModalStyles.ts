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
    position:"relative",
    flexDirection:"row",
    backgroundColor: COLORS.orange,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    paddingHorizontal: 33,
    paddingVertical: 14,
    alignItems: 'center',
    width: '80%',
    height: '100%',
  },
  closeModalContainer:{
    width: 60,
    height: 100,
    alignItems: 'center',
    position: 'absolute',
    left: -40,
  },
  closeModal:{
    height: 90,
    width: 6,
    backgroundColor: 'white',
    borderRadius: 10,
  }
});
