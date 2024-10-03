import { useNavigation } from "@react-navigation/native"
import { TabNavigatorProps, TabPaths } from "../../types/types"

const useSettings = () => {
    const navigation = useNavigation<TabNavigatorProps>()
 const navigateTo=(screen:keyof TabPaths)=>{
navigation.navigate(screen)
 }
 
    return {
        navigateTo
  }
}

export default useSettings