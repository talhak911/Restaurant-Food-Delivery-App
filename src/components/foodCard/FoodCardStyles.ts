import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_REGULAR,
  POOPINS_SEMI_BOLD,
  LEAGUE_SPARTAN_LIGHT,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginBottom: 26,
    paddingBottom: 20,
    borderColor: COLORS.lightPink,
  },
  belowImageContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 18,
    color: COLORS.orange,
  },
  ratingsContainer: {
    height: 5,
    width: 5,
    backgroundColor: COLORS.orange,
    borderRadius: 2.5,
  },
  nameContainer: {flexDirection: 'row', alignItems: 'center', gap: 11},
  name: {
    fontFamily: POOPINS_SEMI_BOLD,
    fontSize: 18,
    lineHeight: 20,
    color: COLORS.almostBlack,
  },
  description: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.almostBlack,
  },
});
