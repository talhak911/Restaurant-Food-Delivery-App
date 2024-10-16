import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_REGULAR,
  LEAGUE_SPARTAN_LIGHT,
} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 47,
    marginBottom: 12,
    paddingHorizontal: 35,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 30,
  },
  topLeftContainer: {flexDirection: 'row', gap: 8, alignItems: 'flex-start'},
  name: {
    lineHeight: 20,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostBlack,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 32,
    backgroundColor: 'white',
  },
  image: {
    objectFit: 'cover',
    borderRadius: 36,
    height: 223,
    width: '100%',
  },
  selectContainer: {flexDirection: 'row', alignItems: 'center', gap: 11},
  topRightContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeDot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.orange,
  },
  border: {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    flex: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.lightPink,
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightPink,
    paddingVertical: 11,
    marginTop: 12,
    marginBottom: 18,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_BOLD,
    fontSize: 24,
    lineHeight: 26,
    color: COLORS.orange,
  },
  orderItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  itemsNumber: {
    color: COLORS.almostBlack,
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 24,
    lineHeight: 28,
  },
  headingText: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostBlack,
  },
  lightText: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    color: COLORS.almostBlack,
  },
  ingredientsContenetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredientsContainer: {marginTop: 17, gap: 17},
});
