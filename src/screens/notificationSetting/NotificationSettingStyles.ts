import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";
import { LEAGUE_SPARTAN_MEDIUM } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container:{flex: 1, backgroundColor: COLORS.yellow},
    contentContainer:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingLeft: 39,
        paddingRight: 46,
        paddingVertical: 56,
      },
      buttonContainer:{flexDirection: 'row', gap: 18, alignItems: 'center'},
      buttonContent:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      buttonTitle:{
        fontFamily: LEAGUE_SPARTAN_MEDIUM,
        fontSize: 20,
        color: COLORS.almostBlack,
      },
})