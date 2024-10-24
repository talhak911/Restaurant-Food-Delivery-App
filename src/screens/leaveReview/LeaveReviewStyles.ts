import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import { LEAGUE_SPARTAN_LIGHT } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.yellow},
  borderRadius: {
    flex: 1,
    backgroundColor:'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '6%',
    alignItems:"center",
    paddingVertical: 39,
  },
  leaveReviewText:{
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 25,
    color: COLORS.almostBlack,
    textAlign: 'center',
  },
  filterButtonsContainer: {
    marginTop:38,
    width:"100%",
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})