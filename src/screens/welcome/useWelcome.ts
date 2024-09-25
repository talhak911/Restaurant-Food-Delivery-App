import { useNavigation } from "@react-navigation/native"
import { AuthNavigationProp } from "../../types/types"

export const useWelcome = () => {
    const navigation = useNavigation<AuthNavigationProp>()
    const navigateToSignUp = ()=>{
        navigation.navigate("New Account")
    }
    const navigateToSignIn = ()=>{
        navigation.navigate("Log In")
    }
  return {
    navigateToSignUp,
    navigateToSignIn
  }
}

