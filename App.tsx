import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/appNavigator/AppNavigator';
import {store} from './src/redux/store';
import { ApolloProvider } from './src/providers/apolloProvider/apolloProvider';

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ApolloProvider >
      <AppNavigator />
      </ApolloProvider>
    </Provider>
  );
}
