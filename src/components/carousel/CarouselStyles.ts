import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
    paginationContainer: {
      position: 'absolute',
      bottom: -8,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
  });
  