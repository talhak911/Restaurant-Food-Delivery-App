import { useNavigation } from "@react-navigation/native"
import { StackNavigatorParamList, StackNavigatorProps, TabNavigatorProps, TabParamsList, StackPaths } from "../../types/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppDispatch } from "../../hooks/useStore"
import { setUser } from "../../redux/slices/authSlice"

const useDrawerContent = () => {
    const dispath = useAppDispatch()
  const navagation = useNavigation<TabNavigatorProps>()
 const NavigateTo =(path:keyof StackNavigatorParamList)=>{
    navagation.navigate("Stack",{screen:path} ) 
  }

const signOut = async()=>{
  await AsyncStorage.removeItem("authToken")
  dispath(setUser(null))
}
  return {
    NavigateTo,
    signOut
  }
}

export default useDrawerContent