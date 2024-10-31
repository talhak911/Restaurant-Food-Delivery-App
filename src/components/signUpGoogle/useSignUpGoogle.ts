import Toast from 'react-native-toast-message';
import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '../../types/types';
import {generateOAuthToken, userExist} from '../../utils/utils';
import {useAppDispatch} from '../../hooks/useStore';
import {oAuthSignIn} from '../../redux/slices/authSlice';
export const useSignUpGoogle = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '531351131390-e8uoj2af3fac6i2qhcmgnt944k858fh2.apps.googleusercontent.com',
    });
  }, []);
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const res = await GoogleSignin.signIn();
      if (res.data?.idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(
          res.data?.idToken,
        );
        const response = await auth().signInWithCredential(googleCredential);

        const {
          user: {displayName, email, photoURL, providerId},
        } = response;
        if (response.user.email) {
          const token = await generateOAuthToken({
            email: email!,
            provider: providerId,
          });
          if (await userExist(response.user.email)) {
            await dispatch(oAuthSignIn(token));
          } else {
            navigation.navigate('Sign Up', {
              email: response.user.email,
              token,
              name: displayName!,
              picture: photoURL!,
            });
          }
        }
      }
    } catch (error: any) {
      Toast.show({type: 'error', text1: error.message});
    }
  };
  return {
    signInWithGoogle,
  };
};
