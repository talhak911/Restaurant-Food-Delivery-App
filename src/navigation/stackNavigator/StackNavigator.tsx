import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from '../../types/types';
import {COLORS} from '../../constants/color';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import {STACK_SCREENS} from '../../constants/constants';
import GoBack from '../../components/goBack/GoBack';
import {View} from 'react-native';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackNavigatorParamList>();

  return (
    <Stack.Navigator
      screenOptions={() => ({
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
          <View style={{marginLeft: -15}}>
            <GoBack />
          </View>
        ),
      })}>
      {STACK_SCREENS.map(({name, component, options = {}}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}
