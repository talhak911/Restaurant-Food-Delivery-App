import { useNavigation } from "@react-navigation/native"
import { StackNavigatorProps,  } from "../../types/types"

const useOrderCard = () => {
const navigation = useNavigation<StackNavigatorProps>()

const naviateToReview=({foodId,name,picUrl}:{foodId:string,name:string,picUrl:string})=>{
    navigation.navigate("Leave a Review",{
      foodId,
        name,
        picUrl
    })
}
return {
    naviateToReview
  }
}

export default useOrderCard