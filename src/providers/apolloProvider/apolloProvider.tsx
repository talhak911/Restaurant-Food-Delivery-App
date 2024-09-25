// ApolloProvider.tsx
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client/link/http';
import AsyncStorage from '@react-native-async-storage/async-storage';


const httpLink = createHttpLink({
  uri: 'https://restaurant-backend-app-server-production.up.railway.app/graphql', // Replace with your server's URL
  // uri: 'http://10.0.2.2:4000/graphql', 
});


const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('authToken');
  return {
    headers: {
      ...headers,
      auth: token ? `${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }:any) => {
  return <Provider client={client}>{children}</Provider>;
};
