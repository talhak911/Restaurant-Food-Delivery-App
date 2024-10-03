import { Role } from 'react-native';
import {FIELDS_TYPE} from '../types/types';

// export const PASSWORD_RESET_FIELDS = (
//   password: string,
//   setPassword: (text: string) => void,
//   newPassword: string,
//   setNewPassword: (text: string) => void,
//   confirmPassword: string,
//   setConfirmPassword: (text: string) => void,
// ): FIELDS_TYPE[] => [
//   {
//     value: password,
//     onChange: setPassword,
//     placeholder: 'Current password',
//     secureInput: true,
//   },
//   {
//     value: newPassword,
//     onChange: setNewPassword,
//     placeholder: 'New password',
//     secureInput: true,
//   },
//   {
//     value: confirmPassword,
//     onChange: setConfirmPassword,
//     placeholder: 'Confirm new password',
//     secureInput: true,
//   },
// ];


export const SIGN_UP_FIELDS = (
  name: string,
  setName: (text: string) => void,
  email: string,
  setEmail: (text: string) => void,
  password: string,
  setPassword: (text: string) => void,
  phone:string,
  setPhone:(text:string)=>void
): FIELDS_TYPE[] => [
  {
    label: 'Full name',
    value: name,
    onChange: setName,
    placeholder: 'Enter you name',
  },
  {
    label: 'Password',
    value: password,
    onChange: setPassword,
    placeholder: 'Enter password',
    secureInput: true,
  },
  {
    label: 'Email',
    value: email,
    onChange: setEmail,
    placeholder: 'Enter Email',
  },

  {
    label: 'Mobile Number',
    value: phone,
    onChange: setPhone,
    placeholder: '03XXXXXXXXXX',
    keyboardType:"numeric"
  },
];
export const UPDATE_PROFILE_FIELDS = (
  name: string,
  setName: (text: string) => void,
  email: string,
  setEmail: (text: string) => void,
  dob: string,
  setDob: (text: string) => void,
  phone:string,
  setPhone:(text:string)=>void
): FIELDS_TYPE[] => [
  {
    label: 'Full name',
    value: name,
    onChange: setName,
    placeholder: 'Enter you name',
  },
  {
    label: 'Password',
    value: dob,
    onChange: setDob,
    placeholder: 'Enter DOB',
  },
  {
    label: 'Email',
    value: email,
    onChange: setEmail,
    placeholder: 'Enter Email',
  },

  {
    label: 'Mobile Number',
    value: phone,
    onChange: setPhone,
    placeholder: '03XXXXXXXXXX',
    keyboardType:"numeric"
  },
];

export const SIGN_IN_FIELDS = (
  email: string,
  setEmail: (text: string) => void,
  password: string,
  setPassword: (text: string) => void,
): FIELDS_TYPE[] => [
  {
    label: 'Email',
    value: email,
    onChange: setEmail,
    placeholder: 'Enter your Email',
  },
  {
    label: 'Password',
    value: password,
    onChange: setPassword,
    placeholder: 'Enter Password',
    secureInput: true,
  },
];

export const RESET_PASSWORD_FIELDS = (
  email: string,
  setEmail: (text: string) => void,
  password: string,
  setPassword: (text: string) => void,
  confirmPassword: string,
  setConfirmPassword: (text: string) => void,
  otp: string,
  setOtp: (text: string) => void,
): FIELDS_TYPE[] => [
  {
    label: 'Email',
    value: email,
    onChange: setEmail,
    placeholder: 'Enter your Email',
  },
  {
    label: 'Password',
    value: password,
    onChange: setPassword,
    placeholder: 'Enter Password',
    secureInput: true,
  },
  {
    label: 'Confirm Password',
    value: confirmPassword,
    onChange: setConfirmPassword,
    placeholder: 'Retype Password',
    secureInput: true,
  },
  {
    label: 'Otp',
    value: otp,
    onChange: setOtp,
    placeholder: 'Enter Otp',
    keyboardType:"numeric"
  },
];
