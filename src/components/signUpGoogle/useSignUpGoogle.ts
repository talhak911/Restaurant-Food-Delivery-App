import Toast from 'react-native-toast-message';
import {useAppDispatch} from '../../hooks/useStore';
import {signUpWithGoogle} from '../../redux/slices/authSlice';

export const useSignUpGoogle = ({
  setLoading,
}: {
  setLoading: (e: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await dispatch(signUpWithGoogle());
    } catch (error:any) {
      Toast.show({type:"error",text1:error.message})
    } finally {
      setLoading(false);
    }
  };
  return {
    signInWithGoogle,
  };
};
