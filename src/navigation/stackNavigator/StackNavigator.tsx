import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BackIcon from '../../assets/icons/back';
import {StackNavigatorParamList} from '../../types/types';
import Home from '../../screens/home/Home';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/color';
import { TabNavigator } from '../tabNavigator/TabNavigator';


export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackNavigatorParamList>();

  return (
    // <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerShadowVisible: false,
           statusBarColor: COLORS.yellow,
          // headerTitleAlign: 'center',
          // headerTitleStyle: {color: 'white'},
          // headerStyle: {
          //   backgroundColor: COLORS.yellow,
          // },
          // headerTitle: ({children}) => (
          //   <View style={{ height: 130, justifyContent: 'center', alignItems: 'center' }}>
          //     <Text style={{ fontSize: 28,color:"white",fontWeight:"700" }}>{children}</Text>
          //   </View>
          // ),
          // headerBackVisible:false,
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.goBack()}
          //     style={{paddingLeft: 16}}>
          //     <BackIcon />
          //   </TouchableOpacity>
          // ),
        })
        
        }>
        <Stack.Screen 
        options={{headerShown:false}}
        key="Tab" name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

// {SCREEN_CONFIGS.map(({name, component, options}) => (
//     <Stack.Screen
//       key={name}
//       name={name}
//       component={component}
//       options={options}
//     />
//   ))}
