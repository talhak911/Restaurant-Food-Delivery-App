import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {createHttpLink} from '@apollo/client/link/http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReactNode} from 'react';
import {
  isAccessTokenExpired,
  refreshTokenAction,
} from '../../utils/refreshToken';
import {BASE_URL} from '@env';

const httpLink = createHttpLink({
  uri: `${BASE_URL}/graphql`,
});

const refreshTokenLink = setContext(async (_, {headers}) => {
  const accessToken = await AsyncStorage.getItem('authToken');
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  if (accessToken && refreshToken && isAccessTokenExpired(accessToken)) {
    const newAccessToken = await refreshTokenAction(refreshToken);
    if (newAccessToken) {
      return {
        headers: {
          ...headers,
          auth: `${newAccessToken}`,
        },
      };
    }
  }
  return {
    headers: {
      ...headers,
      auth: accessToken ? `${accessToken}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: refreshTokenLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({children}: {children: ReactNode}) => {
  return <Provider client={client}>{children}</Provider>;
};
