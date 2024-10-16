import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderStatus: {
    marginBottom: 3,
    color: COLORS.orange,
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    textTransform: 'capitalize',
  },
  orderAgainButton: {flex: 1, justifyContent: 'flex-end'},
  rightContentContainer: {gap: 3, alignItems: 'flex-end'},
  leftContentContainer: {gap: 2, flex: 1},
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.orange,
    fontSize: 20,
  },
  orderStatusContainer: {flexDirection: 'row', gap: 3, alignItems: 'center'},
  title: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.almostBlack,
    fontSize: 20,
  },
  date:{
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    color: COLORS.almostBlack,
  },
  items:{
    paddingBottom: 23,
    color: COLORS.almostBlack,
    fontFamily: LEAGUE_SPARTAN_LIGHT,
  }
});
