import {FIELDS_TYPE, ProfleFieldsType} from '../types/types';

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

export const SIGN_UP_FIELDS = (
  name: string,
  setName: (text: string) => void,
  email: string,
  setEmail: (text: string) => void,
  password: string,
  setPassword: (text: string) => void,
  phone: string,
  setPhone: (text: string) => void,
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
    keyboardType: 'numeric',
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
    keyboardType: 'numeric',
  },
];

export const PROFILE_FIELDS = (
  fields: ProfleFieldsType,
  onChange: (key: keyof typeof fields, value: string) => void,
): FIELDS_TYPE[] => [
  {
    label:"Full Name",
    value: fields['Full Name'],
    onChange: (text: string) => onChange('Full Name', text),
    placeholder: 'Full Name',
    secureInput: false,
    editable: true,
  },
  {
    label:"Date of Birth",
    value: fields['Date of Birth'],
    onChange: () => {},
    placeholder: 'Date of Birth',
    secureInput: false,
    editable: false,
  },
  {
    label:"Email",
    value: fields.Email,
    onChange: () => {},
    placeholder: 'Email',
    secureInput: false,
    editable: false,
  },
  {
    label:"Phone Number",
    value: fields['Phone Number'],
    onChange: (text: string) => onChange('Phone Number', text),
    placeholder: 'Phone Number',
    secureInput: false,
    editable: true,
  },
];
