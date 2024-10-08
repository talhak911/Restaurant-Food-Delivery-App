import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '../../constants/color';
import BackIcon from '../../assets/icons/back';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Profile from '../../screens/profile/Profile';
import DrawerContent from '../../components/drawerContent/DrawerContent';
// import StackNavigator from '../stackNavigator/StackNavigator';
import MyOrder from '../../screens/myOrder/MyOrder';
import {DrawerNavigatorParamList} from '../../types/types';
import {TabNavigator} from '../tabNavigator/TabNavigator';
import {CartProvider} from '../../context/cartContext/CartContext';

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.yellow} />
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 16}}>
              <BackIcon />
            </TouchableOpacity>
          ),
          // headerRight: () => {
          //   return (
          //     <TouchableOpacity onPress={() => navigation.openDrawer()}>
          //       <BackIcon />
          //     </TouchableOpacity>
          //   );
          // },
          drawerStatusBarAnimation: 'fade',
          drawerPosition: 'right',
          drawerStyle: {
            backgroundColor: COLORS.white,
            width: 350,
            borderTopLeftRadius: 60,
            borderBottomLeftRadius: 60,
          },
        })}>
        <Drawer.Screen
          name="Stack"
          options={{headerShown: false}}
          component={TabNavigator}
        />
        {/* <Drawer.Screen name="My Profile" component={Profile} /> */}
        <Drawer.Screen name="My Orders" component={MyOrder} />
      </Drawer.Navigator>
    </>
  );
}
