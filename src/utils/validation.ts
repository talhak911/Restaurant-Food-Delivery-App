import {ToastAndroid} from 'react-native';
import {Role} from '../gql/graphql';
import Toast from 'react-native-toast-message';

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateSignUpForm = (
  name: string,
  email: string,
  password: string,
  phone: string,
  dob: string,
  role: Role | null,
) => {
  if (!name) {
    ToastAndroid.show('Name is required', ToastAndroid.SHORT);
    return false;
  }

  if (!isValidEmail(email)) {
    ToastAndroid.show('Invalid email format', ToastAndroid.SHORT);
    return false;
  }
  if (!password) {
    ToastAndroid.show('Enter Password', ToastAndroid.SHORT);
    return false;
  }
  if (password.length < 8) {
    ToastAndroid.show(
      'Password must be at least 8 characters long',
      ToastAndroid.SHORT,
    );
    return false;
  }
  if (!phone) {
    ToastAndroid.show('Enter Mobile Number', ToastAndroid.SHORT);
    return false;
  }
  if (!/^\d{10,}$/.test(phone)) {
    ToastAndroid.show('Invalid phone number', ToastAndroid.SHORT);
    return false;
  }

  if (!dob) {
    ToastAndroid.show('Date of Birth is required', ToastAndroid.SHORT);
    return false;
  }

  if (!role) {
    ToastAndroid.show('Select Role', ToastAndroid.SHORT);
  }
  return true;
};

export const validateSignInForm = (email: string, password: string) => {
  if (!email || !password) {
    ToastAndroid.show('Enter Email and Password', ToastAndroid.SHORT);
    return false;
  }

  if (!isValidEmail(email)) {
    ToastAndroid.show('Invalid email format', ToastAndroid.SHORT);
    return false;
  }

  if (password.length < 8) {
    ToastAndroid.show(
      'Password must be at least 8 characters long',
      ToastAndroid.SHORT,
    );
    return false;
  }

  return true;
};

export const validateOtp = (email: string, otp: string) => {
  if (!otp || otp.length != 6) {
    ToastAndroid.show('Enter 6 digits otp', ToastAndroid.SHORT);
    return false;
  }

  if (!isValidEmail(email)) {
    ToastAndroid.show('Invalid email format', ToastAndroid.SHORT);
    return false;
  }

  return true;
};

export const validateForgetPasswordForm = (
  email: string,
  password: string,
  confirmPassword: string,
  otp: string,
) => {
  if (!email || !password || !confirmPassword || !otp) {
    ToastAndroid.show('All fields are required', ToastAndroid.LONG);
    return false;
  }

  if (!isValidEmail(email)) {
    ToastAndroid.show('Invalid email format', ToastAndroid.SHORT);
    return false;
  }
  if (otp.length != 6) {
    ToastAndroid.show('Enter 6 digits otp', ToastAndroid.SHORT);
    return false;
  }
  if (password.length < 8) {
    ToastAndroid.show(
      'Password must be at least 8 characters long',
      ToastAndroid.SHORT,
    );
    return false;
  }
  if (password !== confirmPassword) {
    ToastAndroid.show('Password does not match', ToastAndroid.SHORT);
    return false;
  }

  return true;
};

export const validateProfile = (fields: {
  'Full Name': string;
  'Date of Birth': string;
  Email: string;
  'Phone Number': string;
}) => {
  if (!fields['Full Name']) {
    Toast.show({type: 'error', text1: 'Full Name is required'});
    return false;
  }

  if (!isValidEmail(fields['Email'])) {
    Toast.show({type: 'error', text1: 'Invalid Email format'});
    return false;
  }

  if (fields['Phone Number'].length<10) {
    Toast.show({type: 'error', text1: 'Phone Number should be valid'});
    return false;
  }

  if (!fields['Date of Birth']) {
    Toast.show({type: 'error', text1: 'Date of Birth is required'});
    return false;
  }

  return true;
};
