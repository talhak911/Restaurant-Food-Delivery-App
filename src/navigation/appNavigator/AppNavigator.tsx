import AuthNavigator from '../authNavigator/AuthNavigator';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import {RestaurantTabNavigator} from '../restaurantTabNavigator/RestaurantTabNavigator';
// import StackNavigator from '../stackNavigator/StackNavigator';
import {useAppNavigator} from './useAppNavigator';

export default function AppNavigator() {
  const {initializing, user} = useAppNavigator();
  console.log('the user is ', user);
  if (initializing) return null;

  return user?.role === 'CUSTOMER' ? (
    <DrawerNavigator />
  ) : user?.role === 'RESTAURANT' ? (
    <RestaurantTabNavigator />
  ) : (
    <AuthNavigator />
  );
}
