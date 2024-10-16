import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_MEDIUM, LEAGUE_SPARTAN_LIGHT, LEAGUE_SPARTAN_REGULAR } from "../../constants/fonts";

export const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: COLORS.orange2,
      paddingBottom: 15,
      marginBottom: 15,
      gap: 9,
      alignItems: 'center',
    },
    spaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 6,
    },
    image: {height: 80, width: 80, borderRadius: 20},
    name: {
      flex: 1,
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 15,
      color: COLORS.almostWhite,
    },
    price: {
      fontFamily: LEAGUE_SPARTAN_LIGHT,
      fontSize: 14,
      color: COLORS.almostWhite,
    },
    date: {
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 13,
      color: COLORS.almostWhite,
    },
    items: {
      fontFamily: LEAGUE_SPARTAN_REGULAR,
      fontSize: 13,
      lineHeight: 16,
      color: COLORS.almostWhite,
    },
  });
  