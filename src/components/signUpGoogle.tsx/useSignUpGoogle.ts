import {useAppDispatch} from '../../hooks/useStore';

export const useSignUpGoogle = ({
  setLoading,
}: {
  setLoading: (e: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      // await dispatch(signUpWithGoogle());
    } catch (error) {
      console.log('google sign in error', error);
    } finally {
      setLoading(false);
    }
  };
  return {
    signInWithGoogle,
  };
};
