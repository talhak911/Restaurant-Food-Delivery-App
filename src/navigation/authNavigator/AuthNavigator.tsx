import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../types/types';
import {SignUp} from '../../screens/signUp/SignUp';
import {COLORS} from '../../constants/color';
import Welcome from '../../screens/welcome/Welcome';
import BackIcon from '../../assets/icons/back';
import {Text, TouchableOpacity, View} from 'react-native';
import { SignIn } from '../../screens/signIn/SignIn';
import VerifyOtp from '../../screens/verifyOtp/VerifyOtp';
import ForgetPassword from '../../screens/forgetPassword/ForgetPassword';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerShadowVisible: false,
          statusBarColor: COLORS.yellow,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white'},
          headerStyle: {
            backgroundColor: COLORS.yellow,
          },
          headerTitle: ({children}) => (
            <View style={{ height: 130, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28,color:"white",fontWeight:"700" }}>{children}</Text>
            </View>
          ),
          headerBackVisible:false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 16}}>
              <BackIcon />
            </TouchableOpacity>
          ),
        })}>
        <Stack.Screen
          key="Welcome"
          name="Welcome"
          component={Welcome}
          options={{statusBarColor: COLORS.orange, headerShown: false}}
        />
        <Stack.Screen key="New Account" name="New Account" component={SignUp}/>
        <Stack.Screen key="Log In" name="Log In" component={SignIn}/>
        <Stack.Screen key="Verify Otp" name="Verify Otp" component={VerifyOtp}/>
        <Stack.Screen key="Forget Password" name="Forget Password" component={ForgetPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}