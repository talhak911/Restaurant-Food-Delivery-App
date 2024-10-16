import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_MEDIUM, LEAGUE_SPARTAN_BOLD } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: COLORS.yellow},
    borderRadius: {
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: 'hidden',
    },
    orderSummary: {
      paddingBottom: 19,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 46,
      borderBottomWidth: 1,
      borderColor: COLORS.lightPink,
    },
    guideToAddAddress: {
      fontSize: 16,
      color: COLORS.almostBlack,
      fontWeight: '500',
    },
    orderSummaryText: {
      fontFamily: LEAGUE_SPARTAN_MEDIUM,
      fontSize: 20,
      color: COLORS.almostBlack,
    },
    contentContainer: {
      flex: 1,
      paddingTop: 40,
      paddingBottom: 30,
      paddingHorizontal: 35,
    },
    addAddressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 30,
      marginTop: 10,
    },
    topContainer: {
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
      marginBottom: 23,
    },
    addAddressButton: {
      color: COLORS.orange,
      borderBottomWidth: 1,
      borderColor: COLORS.orange,
    },
    address: {
      fontFamily: LEAGUE_SPARTAN_BOLD,
      fontSize: 24,
      lineHeight: 26,
      color: COLORS.almostBlack,
    },
  });
  