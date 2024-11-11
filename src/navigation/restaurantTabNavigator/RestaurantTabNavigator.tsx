import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurntTabsParamsList} from '../../types/types';
import {COLORS} from '../../constants/color';
import HomeIcon from '../../assets/icons/home';
import {Text, View} from 'react-native';
import {LEAGUE_SPARTAN_BOLD} from '../../constants/fonts';
import RestaurantHome from '../../screens/restaurnantHome/RestaurantHome';
import GoBack from '../../components/goBack/GoBack';

export const RestaurantTabNavigator = () => {
  const Tab = createBottomTabNavigator<RestaurntTabsParamsList>();

  return (

      <Tab.Navigator
        screenOptions={() => ({
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
          headerLeft: () => <GoBack />,
        })}>
        <Tab.Screen
          key={'Home'}
          name={'Home'}
          options={{tabBarIcon: () => <HomeIcon />, headerLeft: () => null}}
          component={RestaurantHome}
        />
      </Tab.Navigator>
  );
};
