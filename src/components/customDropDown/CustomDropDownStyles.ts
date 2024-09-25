import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        height: 45,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: COLORS.yellow2,
        borderWidth:1,
        borderColor: COLORS.lightGrey,
        justifyContent:"space-between",
        paddingHorizontal: 16, 
      },
      dropdownText:{fontSize:16},
      label:{fontWeight:"500",color:"black",fontSize:20,paddingBottom:9},
      categoriesText:{color:"black",fontSize:18}
})