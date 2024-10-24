import {StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_SEMI_BOLD,
} from '../../constants/fonts';
const {width} = useWindowDimensions();
export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  image: {
    height: '80%',
    width,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    flex: 1,
    borderTopRightRadius: 30,
    width,
    paddingTop: 23,
    paddingHorizontal: '15%',
  },
  title: {
    fontFamily: LEAGUE_SPARTAN_BOLD,
    color: COLORS.orange,
    fontSize: 24,
    marginTop: 20,
  },
  description: {
    paddingTop: 2,
    textAlign: 'center',
    lineHeight: 14,
    fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
    color: COLORS.almostBlack,
  },
});
