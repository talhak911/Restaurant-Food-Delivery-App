import AuthNavigator from '../authNavigator/AuthNavigator';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
// import StackNavigator from '../stackNavigator/StackNavigator';
import {useAppNavigator} from './useAppNavigator';

export default function AppNavigator() {
  const {initializing, user} = useAppNavigator();
  if (initializing) return null;

  return user ? <DrawerNavigator /> : <AuthNavigator />;
}
