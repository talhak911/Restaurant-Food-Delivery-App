import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_LIGHT, LEAGUE_SPARTAN_MEDIUM } from "../../constants/fonts";

export const styles = StyleSheet.create({
    // nameAndRatingContainer:{
    //     marginTop: 11,
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     justifyContent: 'space-between',
    //     width: '100%',
    //   },
      name:{
        marginTop: 11,
        fontFamily: LEAGUE_SPARTAN_MEDIUM,
        fontSize: 16,
        lineHeight: 15,
        color: COLORS.almostBlack,
        // width: '70%',
      },
      bottomContainer:{
        marginTop:8,
        flexDirection: 'row',
         alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
      description:{
        marginTop:3,
        fontFamily: LEAGUE_SPARTAN_LIGHT,
        fontSize: 12,
        lineHeight:12,
        color: COLORS.almostBlack,
        // width: '70%',
      },
      buttons:{
        transform:[{scale:0.7}]
      },
      price:{
        fontFamily:LEAGUE_SPARTAN_MEDIUM,
        fontSize:20,
        color:COLORS.orange
      }
})