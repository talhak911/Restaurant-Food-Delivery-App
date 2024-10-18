import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Height, Width} from '../../utils/responsive';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  terms: {
    color: COLORS.almostBlack,
    textAlign: 'center',
  },
  termsContainer: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: '25%',
  },
  gap: {
    gap: Height(1.3),
    marginHorizontal: Width(8),
  },
  footerView: {
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    paddingVertical: Height(1),
    alignItems: 'center',
  },
  footerText: {
    marginRight: 2,
    color: 'black',
  },
  signUpOptionsText: {color: COLORS.almostBlack, marginVertical: 9},
  footerLink: {
    fontWeight: '500',
    color: COLORS.orange,
  },
});
