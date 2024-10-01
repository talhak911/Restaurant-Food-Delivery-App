import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamsList} from '../../types/types';
import Home from '../../screens/home/Home';
import { COLORS } from '../../constants/color';
import HomeIcon from '../../assets/icons/home';
import FoodIcon from '../../assets/icons/food';
import FavouriteIcon from '../../assets/icons/favourite';
import TabOrderIcon from '../../assets/icons/tabOrder';
import HelpIcon from '../../assets/icons/help';
import { Text, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../assets/icons/back';
import MyOrder from '../../screens/myOrder/MyOrder';
import { LEAGUE_SPARTAN_BOLD } from '../../constants/fonts';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

  return (
    <Tab.Navigator
    // screenOptions={{
    //     tabBarShowLabel:false,
    //     tabBarStyle:{backgroundColor:COLORS.orange,borderTopStartRadius:30,borderTopEndRadius:30}}}
   
    screenOptions={({navigation}) => ({
      tabBarShowLabel:false,
      tabBarStyle:{backgroundColor:COLORS.orange,borderTopStartRadius:30,borderTopEndRadius:30},
    
      headerShadowVisible: false,
      statusBarColor: COLORS.yellow,
      headerTitleAlign: 'center',
      headerTitleStyle: {color: 'white'},
      headerStyle: {
        height: 93,
        backgroundColor: COLORS.yellow,
      },
      headerTitle: ({children}) => (
        <View style={{  justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 28,color:"white",fontFamily:LEAGUE_SPARTAN_BOLD}}>{children}</Text>
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
    })}
   
   
   >
        <Tab.Screen
          key={'Home'}
          name={'Home'}
          options={{tabBarIcon:()=><HomeIcon/>,headerShown:false}}
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
          key={'My Orders'}
          name={'My Orders'}
          options={{tabBarIcon:()=><TabOrderIcon/>}}
          component={MyOrder}
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
