import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_LIGHT, LEAGUE_SPARTAN_MEDIUM } from "../../constants/fonts";

export const styles = StyleSheet.create({
    nameAndRatingContainer:{
        marginTop: 13,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
      },
      name:{
        fontFamily: LEAGUE_SPARTAN_MEDIUM,
        fontSize: 16,
        lineHeight: 15,
        color: COLORS.almostBlack,
        width: '70%',
      },
      descriptionAndCartContainer:{
        marginTop:2,
        flexDirection: 'row',
         alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },description:{
        fontFamily: LEAGUE_SPARTAN_LIGHT,
        fontSize: 12,
        lineHeight:12,
        color: COLORS.almostBlack,
        width: '70%',
      }
})