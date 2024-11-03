import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../authNavigator/AuthNavigator';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import {RestaurantTabNavigator} from '../restaurantTabNavigator/RestaurantTabNavigator';
import {useAppNavigator} from './useAppNavigator';
import {CartProvider} from '../../context/cartContext/CartContext';
import Loader from '../../components/loader/Loader';

export default function AppNavigator() {
  const {initializing, user} = useAppNavigator();
  console.log(
    "OUr user , ",user
  )
  if (initializing) return <Loader color='black'/>;
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
