import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/appNavigator/AppNavigator';
import {store} from './src/redux/store';
import {ApolloProvider} from './src/providers/apolloProvider/apolloProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <ApolloProvider>
          <AppNavigator />
          <Toast/>
        </ApolloProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
