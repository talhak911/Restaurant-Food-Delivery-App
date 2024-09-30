
import AuthNavigator from '../authNavigator/AuthNavigator';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import StackNavigator from '../stackNavigator/StackNavigator';
import {useAppNavigator} from './useAppNavigator';

export default function AppNavigator() {
  const { user} = useAppNavigator();


  return user  ? <StackNavigator /> : <DrawerNavigator/> ;
}
