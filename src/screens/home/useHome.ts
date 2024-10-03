import { useNavigation } from "@react-navigation/native"
import { useAppSelector } from "../../hooks/useStore"
import { StackNavigatorParamList, StackNavigatorProps, TabNavigatorProps } from "../../types/types"

const useHome = () => {
    const data= useAppSelector(state=>state.auth.user)
  const navigation = useNavigation<TabNavigatorProps>()
const navigateToFoodDetail = ({id,description,name,picUrl,price}:{id:string,description:string,name:string,picUrl:string,price:string})=>{
  navigation.navigate("Food Detail",{

    id,
    description,
    name,
    picUrl,
    price
  })
} 
    return {
navigateToFoodDetail
  }
}

export default useHome