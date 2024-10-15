import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_BOLD, LEAGUE_SPARTAN_MEDIUM } from "../../constants/fonts";
import { Height } from "../../utils/responsive";

export const styles = StyleSheet.create({
    cartText: {
      fontFamily: LEAGUE_SPARTAN_BOLD,
      fontSize: 24,
      color: COLORS.almostWhite,
    },
    topContainer: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginTop: 30,
      paddingBottom: 38,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: COLORS.yellow,
    },
    cartItemsContainer: {marginTop: 26, marginBottom: 50},
    cartStatus: {
      textAlign: 'center',
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 20,
      color: COLORS.almostWhite,
      marginTop: 18,
    },
    emptyCartText: {
      fontFamily: LEAGUE_SPARTAN_BOLD,
      lineHeight: 26,
      color: COLORS.almostWhite,
      fontSize: 24,
      marginBottom: Height(11),
      textAlign: 'center',
    },
    emptyCartContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22,
    },
    price: {
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 20,
      color: COLORS.almostWhite,
    },
    buttonContainer: {alignItems: 'center', height: '15%'},
  });
  