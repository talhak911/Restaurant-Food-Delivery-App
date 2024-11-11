import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { AuthStackParamList } from "../../types/types";

const useAuthNavigator = () => {
    const [initialRoute, setInitialRoute] = useState<keyof AuthStackParamList | null>(null);

    useEffect(() => {
      const checkOnboardingStatus = async () => {
        const onboardingShown = await AsyncStorage.getItem('onBoardingShown');
        if (onboardingShown) {
          setInitialRoute('Welcome');
        } else {
          setInitialRoute('OnBoarding');
        }
      };
      
      checkOnboardingStatus();
    }, []);
    

  return {
initialRoute
  }
}

export default useAuthNavigator