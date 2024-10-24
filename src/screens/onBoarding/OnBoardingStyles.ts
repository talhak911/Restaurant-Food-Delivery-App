import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_SEMI_BOLD } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container:{position: 'relative', flex: 1, backgroundColor: 'white'},
    paginationContainer: {
      marginTop:-20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    skipButtonContainer:{
      zIndex: 20,
      position: 'absolute',
      top: 23,
      right: 35,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },
    skipButtonText:{
      fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
      fontSize: 15,
      color: COLORS.orange,
      lineHeight:18
    },
    dot: {
      width: 20,
      height: 4,
      borderRadius: 12,
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: COLORS.orange,
    },
    inActiveDot: {
      backgroundColor: COLORS.yellow2,
    },
    actionButtonContainer:{alignItems: 'center', paddingVertical: 30},
  });
  