import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../authNavigator/AuthNavigator';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import {RestaurantTabNavigator} from '../restaurantTabNavigator/RestaurantTabNavigator';
import {useAppNavigator} from './useAppNavigator';
import {CartProvider} from '../../context/cartContext/CartContext';

export default function AppNavigator() {
  const {initializing, user} = useAppNavigator();
  if (initializing) return null;
  return user?.role === 'CUSTOMER' ? (
    <NavigationContainer>
      <CartProvider>
        <DrawerNavigator />
      </CartProvider>
    </NavigationContainer>
  ) : user?.role === 'RESTAURANT' ? (
    <RestaurantTabNavigator />
  ) : (
    <AuthNavigator />
  );
}
