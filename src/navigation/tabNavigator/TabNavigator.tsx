import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamsList} from '../../types/types';
import {COLORS} from '../../constants/color';
import {Text, View} from 'react-native';
import {LEAGUE_SPARTAN_BOLD} from '../../constants/fonts';
import GoBack from '../../components/goBack/GoBack';
import {TAB_SCREENS} from '../../constants/constants';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

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
      {TAB_SCREENS.map(({name, component, icon, options}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            ...options,
            tabBarIcon: () => icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
