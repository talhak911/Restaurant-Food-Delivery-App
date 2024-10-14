import { useNavigation } from "@react-navigation/native"
import { TabNavigatorProps, StackPaths } from "../../types/types"

const useSettings = () => {
    const navigation = useNavigation<TabNavigatorProps>()
 const navigateTo=(screen:keyof StackPaths)=>{
navigation.navigate(screen)
 }
 
    return {
        navigateTo
  }
}

export default useSettings