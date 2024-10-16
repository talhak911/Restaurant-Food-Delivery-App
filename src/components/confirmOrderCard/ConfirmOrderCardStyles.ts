import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_MEDIUM, LEAGUE_SPARTAN_LIGHT, LEAGUE_SPARTAN_REGULAR } from "../../constants/fonts";

export 
const styles = StyleSheet.create({
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
    alignItems: 'flex-end',
    gap: 6,
  },

  image: {height: 108, width: 71, borderRadius: 20},
  name: {
    flex: 1,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    lineHeight: 20,
    color: COLORS.almostBlack,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.orange,
  },
  lightText: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 14,
    color: COLORS.almostBlack,
  },
  items: {
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 18,
    lineHeight: 20,
    color: COLORS.almostBlack,
  },
});
