import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/drawerContent/DrawerContent';
import {DrawerNavigatorParamList} from '../../types/types';
import {TabNavigator} from '../tabNavigator/TabNavigator';

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={() => ({
        drawerHideStatusBarOnOpen: true,
        drawerPosition: 'right',
        drawerStyle: {
          width: 350,
          borderTopLeftRadius: 60,
          borderBottomLeftRadius: 60,
        },
      })}>
      <Drawer.Screen
        name="Tab"
        options={{headerShown: false}}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
}
