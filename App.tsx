import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/appNavigator/AppNavigator';
import {store} from './src/redux/store';
import {ApolloProvider} from './src/providers/apolloProvider/ApolloProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//in fix/homepage branch testing
// new changes for fix/homepage
export default function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <ApolloProvider>
        <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
          <Toast/>
        </ApolloProvider>
      </Provider>
    </GestureHandlerRootView>
    //helow from main
  );
}
