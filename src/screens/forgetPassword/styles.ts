import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import { Font, Height, Width } from '../../utils/responsive';
import { FONT_INTER, FONT_LEAGUE_SPARTAN } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Height(4),
    paddingHorizontal:Width(8)
  },
  containerContent: {gap: Height(2.5)},
  forgetPasswordContainer: {
    // marginTop: 16,
    alignSelf: 'flex-end',
    // marginRight: 16,
  },
  heading:{
color:COLORS.almostBlack,
fontSize:Font(24),
fontWeight:'bold',
fontFamily:FONT_LEAGUE_SPARTAN

  },

  description:{
    fontWeight:'300',
    color:COLORS.black25,
    paddingBottom:29
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
    fontWeight:"500",
    color: COLORS.orange,
  },
});
