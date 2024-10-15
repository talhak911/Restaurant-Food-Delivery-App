import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_LIGHT,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderColor: COLORS.lightPink,
  },
  addressName: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostBlack,
  },
  address: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 14,
    color: COLORS.almostBlack,
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center', gap: 15},
});
