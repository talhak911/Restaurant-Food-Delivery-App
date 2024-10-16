import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 17,
    paddingHorizontal: '9%',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: 29,
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 4,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
  },
  iconsContainer: {flexDirection: 'row', gap: 7, justifyContent: 'center'},
  greetingText: {
    color: COLORS.almostWhite,
    fontFamily: LEAGUE_SPARTAN_BOLD,
    fontSize: 30,
    lineHeight: 30,
    marginTop: 16,
  },
  text: {
    color: COLORS.orange,
    fontSize: 13,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    lineHeight: 13,
  },
});
