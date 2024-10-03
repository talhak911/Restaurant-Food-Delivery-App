import { useNavigation } from "@react-navigation/native"
import { TabNavigatorProps, TabParamsList, TabPaths } from "../../types/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppDispatch } from "../../hooks/useStore"
import { setUser } from "../../redux/slices/authSlice"

const useDrawerContent = () => {
    const dispath = useAppDispatch()
  const navagation = useNavigation<TabNavigatorProps>()
 const NavigateTo =(path:keyof TabPaths)=>{
    navagation.navigate(path ) 
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