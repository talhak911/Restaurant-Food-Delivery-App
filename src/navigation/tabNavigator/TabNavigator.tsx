import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamsList} from '../../types/types';
import Home from '../../screens/home/Home';
import { COLORS } from '../../constants/color';
import HomeIcon from '../../assets/icons/home';
import FoodIcon from '../../assets/icons/food';
import FavouriteIcon from '../../assets/icons/favourite';
import TabOrderIcon from '../../assets/icons/tabOrder';
import HelpIcon from '../../assets/icons/help';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{backgroundColor:COLORS.orange,borderTopStartRadius:30,borderTopEndRadius:30}}}
    >
        <Tab.Screen
          key={'Home'}
          name={'Home'}
          options={{tabBarIcon:()=><HomeIcon/>}}
          component={Home}
        />
        <Tab.Screen
          key={'Foods'}
          name={'Foods'}
          options={{tabBarIcon:()=><FoodIcon/>}}
          component={Home}
        />
        <Tab.Screen
          key={'Favoirite'}
          name={'Favoirite'}
          options={{tabBarIcon:()=><FavouriteIcon/>}}
          component={Home}
        />

        <Tab.Screen
          key={'Orders'}
          name={'Orders'}
          options={{tabBarIcon:()=><TabOrderIcon/>}}
          component={Home}
          />
        <Tab.Screen
          key={'Help'}
          name={'Help'}
          options={{tabBarIcon:()=><HelpIcon/>}}
          component={Home}
        />

    </Tab.Navigator>
  );
};
