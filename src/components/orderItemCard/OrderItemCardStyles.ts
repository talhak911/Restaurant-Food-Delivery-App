import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_SEMI_BOLD,
  LEAGUE_SPARTAN_LIGHT,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    maxWidth: 100,
    fontSize: 16,
    color: COLORS.almostBlack,
    fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
  },
  priceContainer: {flexDirection: 'row', gap: 5, alignItems: 'center'},
  price: {
    fontSize: 16,
    color: COLORS.orange,
    fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
  },
  orangeDot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.orange,
  },
  items: {
    color: COLORS.almostBlack,
    marginTop: 3,
    fontFamily: LEAGUE_SPARTAN_LIGHT,
  },
});
