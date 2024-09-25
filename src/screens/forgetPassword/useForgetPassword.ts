import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useStore';
import {signIn} from '../../redux/slices/authSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../types/types';
import { RESET_PASSWORD_FIELDS, SIGN_IN_FIELDS, SIGN_UP_FIELDS } from '../../constants/inputFields';
import { isValidEmail, validateForgetPasswordForm, validateSignInForm } from '../../utils/validation';
import { useMutation, useQuery } from '@apollo/client';
import { RequestOtpDocument, ResetPasswordDocument, SignInDocument } from '../../gql/graphql';
import { ToastAndroid } from 'react-native';
export const useForgetPassword = () => {
  type SignInNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<SignInNavigationProp>();


  const [resetPassword,{ loading, error } ]= useMutation(ResetPasswordDocument);
  const [requestOtp ]= useMutation(RequestOtpDocument);

  const [email, setEmail] = useState('');
  const [loadings, setLoadings] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleRequestOtp = async ()=>{
    setLoadings(true)

    try {
        if(!isValidEmail(email)){
            ToastAndroid.show("Enter valid Email",ToastAndroid.LONG)
            return
        }else{
            await requestOtp({
                variables:{
                    email,
                    type:"Reset"
                }
            })
            ToastAndroid.show("Otp sent to your email ",ToastAndroid.LONG)
        }

    } catch (error:any) {
        ToastAndroid.show(error.message,ToastAndroid.LONG)
    }
    finally{
        setLoadings(false)
    }
  }
 const handleResetPassword = async () => {
    try {
      setLoadings(true);
     const isValid = validateForgetPasswordForm(email,password,confirmPassword,otp)
     if(!isValid){
      return
     }
     const response=  await resetPassword({
        variables:{
          email,
          password,
          otp,
        }
      })
      ToastAndroid.show("Your password has been changed",ToastAndroid.LONG)
      navigation.navigate("Log In")
    } catch (error: any) {
      ToastAndroid.show(error.message,ToastAndroid.LONG)
      console.log('error while sign in ', error);
    } finally {
      setLoadings(false);
    }
  };
const fields = RESET_PASSWORD_FIELDS(email,setEmail,password,setPassword,confirmPassword,setConfirmPassword,otp,setOtp,)



// const [signIn, {loadings, error}] = useQuery(SignInDocument);

//     const {data} = await signUp({
//       variables: {
//         data: {
//           email,
//           password,
//           phone: Number(phone),
//           name,
//           role,
//           dateOfBirth: dob,
//         },
//       },
//     });
  return {
    setEmail,
    setPassword,
    handleResetPassword,
    handleRequestOtp,
    setLoadings,

    fields,
    loadings,
   
  };
};
