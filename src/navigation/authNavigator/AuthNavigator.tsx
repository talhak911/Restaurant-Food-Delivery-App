import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../types/types';
import {COLORS} from '../../constants/color';
import BackIcon from '../../assets/icons/back';
import {Text, TouchableOpacity, View} from 'react-native';
import {AUTH_SCREENS} from '../../constants/constants';

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
            <View
              style={{
                height: 130,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 28, color: 'white', fontWeight: '700'}}>
                {children}
              </Text>
            </View>
          ),
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 16}}>
              <BackIcon />
            </TouchableOpacity>
          ),
        })}>
        {AUTH_SCREENS.map(({name, component, options}) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
