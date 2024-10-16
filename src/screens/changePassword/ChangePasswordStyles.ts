import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_MEDIUM } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: COLORS.yellow},
    contentContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 35,
      paddingVertical: 19,
      alignItems: 'center',
    },
    inputFieldsContainer: {gap: 26, marginTop: 38},
    forgetPassword: {
      marginTop: 12,
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 15,
      color: COLORS.orange,
    },
    buttonContainer: {
      alignItems: 'center',
      backgroundColor: 'white',
      paddingBottom: 58,
    },
  });
  