import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import { LEAGUE_SPARTAN_LIGHT } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    backgroundColor:COLORS.almostWhite,
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
    paddingVertical: 39,
  },
  helpButtonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  },
  filterButtonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  
  },
  searchBarContainer: {
    marginTop:15,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 4,

  },
  searchInput: {
    flex: 1,
    fontFamily:LEAGUE_SPARTAN_LIGHT,
    color:COLORS.grey,
    fontSize:19.3,
    paddingTop: 4,
    paddingBottom: 5,
  
  },
})