import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/color';
import { Height, Width } from '../../utils/responsive';
export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 30,
    // borderTopWidth:30,
    borderTopRightRadius:30,
    // paddingHorizontal:35,
    borderTopLeftRadius:30,

  },
  terms: {
    color: COLORS.almostBlack,
    textAlign:"center"
  },
  termsContainer:{
    paddingTop:20,
    paddingBottom:5,
    paddingHorizontal:Width(25)
  },
  gap: {
    gap: Height(1.3),
    marginHorizontal: Width(8),
  },
  footerView: {
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginRight: 2,
    color: 'black',
  },
  footerLink: {
    fontWeight:'500',
    color: COLORS.orange,
  },
});
