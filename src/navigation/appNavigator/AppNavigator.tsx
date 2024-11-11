import AuthNavigator from '../authNavigator/AuthNavigator';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import {RestaurantTabNavigator} from '../restaurantTabNavigator/RestaurantTabNavigator';
import {useAppNavigator} from './useAppNavigator';
import {CartProvider} from '../../context/cartContext/CartContext';
import Loader from '../../components/loader/Loader';

export default function AppNavigator() {
  const {initializing, user} = useAppNavigator();
  if (initializing) return <Loader color='black'/>;
  return user?.role === 'CUSTOMER' ? (
  
      <CartProvider>
        <DrawerNavigator />
      </CartProvider>

  ) : user?.role === 'RESTAURANT' ? (
    <RestaurantTabNavigator />
  ) : (
    <AuthNavigator />
  );
}
