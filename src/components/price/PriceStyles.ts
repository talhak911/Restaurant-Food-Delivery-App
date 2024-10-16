import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';

export const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostWhite,
  },
  borderBottom: {
    marginBottom: 19,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.orange2,
  },
});
