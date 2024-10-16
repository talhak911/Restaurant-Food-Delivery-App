import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {FONT_LEAGUE_SPARTAN} from '../../constants/fonts';
import {Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    marginLeft: 9,
  },
  labelStyle: {
    width: '100%',
    color: COLORS.yellow2,
    fontSize: 24,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.orange,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    paddingLeft: 20,
    paddingRight: 41,
    paddingBottom: 91,
    paddingTop: 65,
  },
  profileContainer: {
    paddingLeft: 13,
    flexDirection: 'row',
    gap: 23,
    alignItems: 'center',
  },
  email: {
    fontFamily: FONT_LEAGUE_SPARTAN,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.yellow2,
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userName: {
    fontFamily: FONT_LEAGUE_SPARTAN,
    fontWeight: 'bold',
    fontSize: 33,
    lineHeight: 33,
    color: COLORS.almostWhite,
  },
  drawerItem: {
    width: Width(100),
    borderBottomColor: COLORS.yellow2,
    borderBottomWidth: 1,
    paddingVertical: 2,
  },
});
