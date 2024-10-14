import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from '../../types/types';
import {COLORS} from '../../constants/color';
import FoodDetail from '../../screens/foodDetail/FoodDetail';
import DeliveryAddress from '../../screens/deliveryAddress/DeliveryAddress';
import AddAddress from '../../screens/addAddress/AddAddress';
import ConfirmOrder from '../../screens/confirmOrder/ConfirmOrder';
import ChangePassword from '../../screens/changePassword/ChangePassword';
import ComingSoon from '../../screens/comingSoon/ComingSoon';
import Profile from '../../screens/profile/Profile';
import Settings from '../../screens/settings/Settings';
import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import Home from '../../screens/home/Home';
import MyOrder from '../../screens/myOrder/MyOrder';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackNavigatorParamList>();

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShadowVisible: false,
        statusBarColor: COLORS.yellow,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'white'},
        headerStyle: {
          backgroundColor: COLORS.yellow,
        },
        headerTitle: ({children}) => <HeaderTitle title={children} />,
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingLeft: 35}}>
            <BackIcon />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen
        key={'Home'}
        name={'Home'}
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen
        key={'My Profile'}
        name={'My Profile'}
        component={Profile}
      />
      <Stack.Screen
        key={'Food Detail'}
        name={'Food Detail'}
        component={FoodDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen key={'Settings'} name={'Settings'} component={Settings} />
      <Stack.Screen
        key={'Coming Soon'}
        name={'Coming Soon'}
        component={ComingSoon}
      />
      <Stack.Screen
        key={'Password Setting'}
        name={'Password Setting'}
        component={ChangePassword}
      />
      <Stack.Screen
        key={'Confirm Order'}
        name={'Confirm Order'}
        component={ConfirmOrder}
      />
      <Stack.Screen
        key={'Delivery Address'}
        name={'Delivery Address'}
        component={DeliveryAddress}
      />
      <Stack.Screen
        key={'Add New Address'}
        name={'Add New Address'}
        component={AddAddress}
      />
      <Stack.Screen key={'My Orders'} name={'My Orders'} component={MyOrder} />
      <Stack.Screen
        key={'Payment Method'}
        name={'Payment Method'}
        component={ComingSoon}
      />
      <Stack.Screen
        key={'Contact Us'}
        name={'Contact Us'}
        component={ComingSoon}
      />
      <Stack.Screen
        key={'Help & FAQs'}
        name={'Help & FAQs'}
        component={ComingSoon}
      />
    </Stack.Navigator>
  );
}
