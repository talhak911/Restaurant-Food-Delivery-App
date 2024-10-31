import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Height, Width} from '../../utils/responsive';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.orange,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },

  gap: {
    marginTop: 20,
    gap: Height(1.3),
    marginHorizontal: Width(8),
  },
  buttonContainer:{marginTop: 50, alignItems: 'center'}
});
