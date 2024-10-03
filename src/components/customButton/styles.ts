import {StyleSheet} from 'react-native';
import { LEAGUE_SPARTAN_MEDIUM } from '../../constants/fonts';

export const styles = StyleSheet.create({
  button: {
 
    // paddingHorizontal:30,
    // minWidth:185,
    // paddingVertical:8,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  buttonContent:{alignItems: 'center', gap: 14, flexDirection: 'row'},
  buttonTitle: {
fontFamily:LEAGUE_SPARTAN_MEDIUM
  },
});
