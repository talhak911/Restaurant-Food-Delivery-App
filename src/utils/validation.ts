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
    Toast.show({type: 'error', text1: 'Name is required'});
    return false;
  }

  if (!isValidEmail(email)) {
    Toast.show({type: 'error', text1: 'Invalid email format'});
    return false;
  }
  if (!password) {
    Toast.show({type: 'error', text1: 'Enter Password'});
    return false;
  }
  if (password.length < 8) {
    Toast.show({
      type: 'error',
      text1: 'Password must be at least 8 characters long',
    });
    return false;
  }
  if (!phone) {
    Toast.show({type: 'error', text1: 'Enter Mobile Number'});
    return false;
  }
  if (!/^\d{10,}$/.test(phone)) {
    Toast.show({type: 'error', text1: 'Invalid phone number'});
    return false;
  }

  if (!dob) {
    Toast.show({type: 'error', text1: 'Date of Birth is required'});
    return false;
  }

  if (!role) {
    Toast.show({type: 'error', text1: 'Select Role'});
  }
  return true;
};

export const validateSignInForm = (email: string, password: string) => {
  if (!email || !password) {
    Toast.show({type: 'error', text1: 'Enter Email and Password'});
    return false;
  }

  if (!isValidEmail(email)) {
    Toast.show({type: 'error', text1: 'Invalid email format'});
    return false;
  }

  return true;
};

export const validateOtp = (email: string, otp: string) => {
  if (!otp || otp.length != 6) {
    Toast.show({type: 'error', text1: 'Enter 6 digits otp'});
    return false;
  }

  if (!isValidEmail(email)) {
    Toast.show({type: 'error', text1: 'Invalid email format'});
    return false;
  }

  return true;
};
export const validateChangePasswordForm = (fields: {
  'Current Password': string;
  'New Password': string;
  'Confirm New Password': string;
}) => {
  if (
    !fields['Current Password'] ||
    !fields['New Password'] ||
    !fields['Confirm New Password']
  ) {
    Toast.show({type: 'error', text1: 'All fields are required'});
    return false;
  }

  if (fields['New Password'].length < 8) {
    Toast.show({
      type: 'error',
      text1: 'New password must be at least 8 digits',
    });
    return false;
  }
  if (fields['New Password'] !== fields['Confirm New Password']) {
    Toast.show({type: 'error', text1: 'Confirm password does not match'});
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
    Toast.show({type: 'error', text1: 'All fields are required'});
    return false;
  }

  if (!isValidEmail(email)) {
    Toast.show({type: 'error', text1: 'Invalid email format'});
    return false;
  }
  if (otp.length != 6) {
    Toast.show({type: 'error', text1: 'Enter 6 digits otp'});
    return false;
  }
  if (password.length < 8) {
    Toast.show({
      type: 'error',
      text1: 'Password must be at least 8 characters long',
    });

    return false;
  }
  if (password !== confirmPassword) {
    Toast.show({type: 'error', text1: 'Password does not match'});
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

  if (fields['Phone Number'].length < 10) {
    Toast.show({type: 'error', text1: 'Phone Number should be valid'});
    return false;
  }

  if (!fields['Date of Birth']) {
    Toast.show({type: 'error', text1: 'Date of Birth is required'});
    return false;
  }

  return true;
};
