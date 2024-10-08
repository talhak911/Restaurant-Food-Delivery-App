import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurntTabsParamsList} from '../../types/types';
import {COLORS} from '../../constants/color';
import HomeIcon from '../../assets/icons/home';
import { Text, TouchableOpacity, View} from 'react-native';
import BackIcon from '../../assets/icons/back';
import {LEAGUE_SPARTAN_BOLD} from '../../constants/fonts';
import { NavigationContainer } from '@react-navigation/native';
import RestaurantHome from '../../screens/restaurnantHome/RestaurantHome';

export const RestaurantTabNavigator = () => {
  const Tab = createBottomTabNavigator<RestaurntTabsParamsList>();

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.orange,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        },
        headerShadowVisible: false,
        statusBarColor: COLORS.yellow,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'white'},
        headerStyle: {
          height: 93,
          backgroundColor: COLORS.yellow,
        },
        headerTitle: ({children}) => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 28,
                color: 'white',
                fontFamily: LEAGUE_SPARTAN_BOLD,
              }}>
              {children}
            </Text>
          </View>
        ),
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingLeft: 35}}>
            <BackIcon />
          </TouchableOpacity>
        ),
        
      })}>

      <Tab.Screen
        key={'Home'}
        name={'Home'}
        options={{tabBarIcon: () => <HomeIcon />,headerLeft:()=>null}}
        component={RestaurantHome}
      />

    </Tab.Navigator>
    </NavigationContainer>
  );
};
