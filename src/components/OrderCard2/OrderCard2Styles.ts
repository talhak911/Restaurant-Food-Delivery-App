
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_MEDIUM, LEAGUE_SPARTAN_LIGHT, LEAGUE_SPARTAN_SEMI_BOLD } from "../../constants/fonts";

export const styles = StyleSheet.create({
    topContainer: {flexDirection: 'row', gap: 16, alignItems: 'center'},
    containerContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      color: COLORS.orange,
      fontSize: 20,
    },
    orderStatusContainer: {flexDirection: 'row', gap: 3, alignItems: 'center'},
    title: {
      flex: 1,
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      color: COLORS.almostBlack,
      fontSize: 20,
    },
    foodItemsContainer: {
      marginTop: 12,
      alignItems: 'flex-start',
      gap: 20,
      flexDirection: 'row',
    },
    orderStatusText: {
      color: COLORS.orange,
      fontFamily: LEAGUE_SPARTAN_LIGHT,
      textTransform: 'capitalize',
    },
    dateText: {fontFamily: LEAGUE_SPARTAN_LIGHT, color: COLORS.almostBlack},
    bottomContainer: {
      marginTop: 8,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    totalPriceContainer: {flexDirection: 'row', alignItems: 'center', gap: 7},
    total: {
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 16,
      color: COLORS.orange,
    },
    totalPrice: {
      fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
      fontSize: 18,
      color: COLORS.orange,
    },
  });
  