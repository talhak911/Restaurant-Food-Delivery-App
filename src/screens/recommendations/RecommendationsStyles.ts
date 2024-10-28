import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import { LEAGUE_SPARTAN_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '6%',
    alignItems:"center",
    paddingVertical: 21,
  },
  title: {
    fontSize: 20,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    color: COLORS.orange,
    textAlign:"center",
    paddingHorizontal:'8%'
  },
});
