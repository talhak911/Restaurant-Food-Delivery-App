import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Font, Height, Width} from '../../utils/responsive';
import {FontInter, FontLeagueSpartan} from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Height(4),
    paddingHorizontal: Width(8),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  containerContent: {gap: Height(2.5)},
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
  },
  heading: {
    color: COLORS.almostBlack,
    fontSize: Font(24),
    fontWeight: 'bold',
    fontFamily: FontLeagueSpartan,
  },

  description: {
    fontWeight: '300',
    color: COLORS.black25,
    paddingBottom: 29,
  },
  forgetPasswordText: {fontWeight: '500', color: COLORS.orange},

  footerView: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    marginRight: 5,
  },
  footerLink: {
    fontWeight: '500',
    color: COLORS.orange,
  },
});
