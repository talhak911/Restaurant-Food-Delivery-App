import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Font, Height, Width} from '../../utils/responsive';
import {FONT_LEAGUE_SPARTAN} from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellow,
  },
  borderRadius: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  containerContent: {
    gap: Height(2.5),
    paddingTop: Height(4),
    paddingHorizontal: Width(8),
  },
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
  },
  heading: {
    color: COLORS.almostBlack,
    fontSize: Font(24),
    fontWeight: 'bold',
    fontFamily: FONT_LEAGUE_SPARTAN,
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
  buttonContainer: {
    marginTop: Height(7),
    marginHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
});
