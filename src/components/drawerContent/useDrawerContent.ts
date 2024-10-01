import { useNavigation } from "@react-navigation/native"
import { DrawerNavigationProps, DrawerNavigatorParamList } from "../../types/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppDispatch } from "../../hooks/useStore"
import { setUser } from "../../redux/slices/authSlice"

const useDrawerContent = () => {
    const dispath = useAppDispatch()
  const navagation = useNavigation<DrawerNavigationProps>()
 const NavigateTo =(path:keyof DrawerNavigatorParamList)=>{
    navagation.navigate(path)
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