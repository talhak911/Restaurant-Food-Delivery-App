import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 16,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: COLORS.lightPink,
    justifyContent: 'space-between',
  },
  question: {
    width: '90%',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
  },
  answer: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightPink,
    paddingVertical: 19,
    lineHeight: 16,
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    color: COLORS.almostBlack,
  },
});
