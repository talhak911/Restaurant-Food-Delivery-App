import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {LEAGUE_SPARTAN_MEDIUM} from '../../constants/fonts';
export const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    borderRadius: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 16,
    alignItems: 'center',
    backgroundColor: COLORS.yellow2,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  inputField: {
    fontSize: 16,
    color: 'black',
    width: '90%',
    paddingLeft: 12,
  },
  label: {
    color: 'black',
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    paddingBottom: 9,
  },
});
