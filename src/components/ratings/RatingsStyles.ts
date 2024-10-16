import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {LEAGUE_SPARTAN_REGULAR} from '../../constants/fonts';

export const styles = StyleSheet.create({
  ratingsContainer: {
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 3,
    gap: 3,
    backgroundColor: COLORS.orange,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 30,
  },
  ratingText: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    color: COLORS.almostWhite,
  },
});
