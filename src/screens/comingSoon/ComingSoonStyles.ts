import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.almostBlack,
    fontSize: 16,
  },
});
