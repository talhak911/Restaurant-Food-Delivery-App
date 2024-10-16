import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_REGULAR,
  LEAGUE_SPARTAN_LIGHT,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  topContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    flex: 1,
    marginTop: 12,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    height: 93,
    width: '20%',
  },
  button: {alignItems: 'center', justifyContent: 'center'},
  categoryText: {
    paddingTop: 1,
    fontSize: 12,
    color: COLORS.almostBlack,
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    lineHeight: 15,
  },
  activeCategoryBackground: {
    width: 123,
    height: 94,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterContainerLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoriesContainer: {
    paddingHorizontal: 35,
    paddingTop: 15,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
    justifyContent: 'space-between',
  },
  foodsContainer: {
    flexGrow: 1,
    paddingTop: 22,
    paddingHorizontal: 35,
  },
  container: {flex: 1, backgroundColor: COLORS.yellow},
  lightFont: {fontSize: 12, fontFamily: LEAGUE_SPARTAN_LIGHT},
});
