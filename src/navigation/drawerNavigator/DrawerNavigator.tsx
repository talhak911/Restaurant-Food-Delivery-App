import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/home/Home';
import {COLORS} from '../../constants/color';
import BackIcon from '../../assets/icons/back';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Profile from '../../screens/profile/Profile';
import DrawerContent from './DrawerContent';
import StackNavigator from '../stackNavigator/StackNavigator';

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
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
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <BackIcon />
              </TouchableOpacity>
            );
          },
          drawerStatusBarAnimation:"fade",
          drawerPosition: 'right', // Drawer opens from the right side
          drawerStyle: {
            backgroundColor: COLORS.white,
            width: 350, // Increase the width of the drawer
            borderTopLeftRadius: 60, // Rounded top left corner
            borderBottomLeftRadius: 60,
          },
        })}>
        <Drawer.Screen
          name="Home"
          options={{headerLeft: () => null}}
          component={StackNavigator}
        />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
