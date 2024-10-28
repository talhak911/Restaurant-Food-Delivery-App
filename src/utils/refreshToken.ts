import {BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import Toast from 'react-native-toast-message';

export const refreshTokenAction = async (refreshToken: string) => {
  try {
    const response = await fetch(`${BASE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            mutation RefreshToken {
              refreshToken(refreshToken: "${refreshToken}")
            }
          `,
      }),
    });
    const data = await response.json();
    const accessToken = data.data.refreshToken;
    if (accessToken) {
      await AsyncStorage.setItem('authToken', accessToken);
      return accessToken;
    }
  } catch (error: any) {
    Toast.show({text1: error.message, type: 'error'});
    return null;
  }
};

export const isAccessTokenExpired = (accessToken: string) => {
  const {exp} = jwtDecode(accessToken);
  if (exp) {
    const bufferTime = 500 * 1000;
    const expirationTime = exp * 1000;
    console.log(
      'NOw time is ',
      Date.now(),
      'Expiry time is ',
      expirationTime - bufferTime,
    );
    return Date.now() > expirationTime - bufferTime;
  }
  return true;
};
