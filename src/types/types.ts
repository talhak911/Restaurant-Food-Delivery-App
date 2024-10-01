import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import dayjs from 'dayjs';
import {KeyboardTypeOptions} from 'react-native';

export type AttachmentModelProps = {
  visible: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onImagePress: () => void;
  onDocumentPress: () => void;
};
export type NavigateToDetailTransaction = {
  id: string | undefined;
  type: 'income' | 'expense';
  description: string;
  url: string | null | undefined;
  amount: number;
  date: string;
  category: string;
};
export type voidFunction = () => void;

export type AuthScreenOptions = {
  name: string;
  component: () => React.JSX.Element;
  options: {
    title: string;
    headerTitleAlign: 'center' | 'left' | undefined;
    headerTitleStyle: {
      fontSize: number;
    };
  };
}[];

export type ScreenConfig = {
  name: keyof StackNavigatorParamList;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
};

export type ChangePasswordPayload = {
  email: string;
  currentPassword: string;
  newPassword: string;
};

// export type StackNavigationProp =
//   NativeStackNavigationProp<StackNavigatorParamList>;

export type CategoryColors = {
  [key: string]: string;
};
export type BarGraphProps = {
  total: number;
  item: CategoryData;
  type: 'income' | 'expense';
};
export type CategoryData = {
  amount: number;
  color: string;
  category: string;
};

export type FinancialReportResult = {
  currency: string | number;
  expenses: CategoryData[];
  incomes: CategoryData[];
  totalExpense: string;
  totalIncome: string;
};

//new

export type TabParamsList = {
  Home: undefined;
  Help: undefined;
  Foods: undefined;
  Favoirite: undefined;
  'My Orders': undefined;
};

export type StackNavigatorParamList = {
  Home: undefined;
  Tab: undefined;
  // 'Detail Transaction': {
  //   headerColor: string;
  //   id: string | undefined;
  //   date: string;
  //   type: 'income' | 'expense';
  //   url: string | null | undefined;
  //   category: string;
  //   description: string;
  //   amount: string;
  // };
};

export type DrawerNavigatorParamList = {
  Home: undefined;
  Help: undefined;
  Stack: undefined;
  'My Profile': undefined;
  'Delivery Address': undefined;
  'Payment Method': undefined;
  'Contact Us': undefined;
  'Help & FAQs': undefined;
  Settings: undefined;
  Favoirite: undefined;
  'My Orders': undefined;
};
export type DrawerNavigationProps =
  DrawerNavigationProp<DrawerNavigatorParamList>;

export type DrawerListType = {
  icon: React.JSX.Element;
  navigateTo: keyof DrawerNavigatorParamList;
  label: string;
};


export type AuthStackParamList = {
  OnBoarding: undefined;
  Welcome: undefined;
  'New Account': undefined;
  'Log In': undefined;
  'Verify Otp': {email: string};
  VerifyEmail: undefined;
  'Forget Password': undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export type FIELDS_TYPE = {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  secureInput?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  // secureTextEntry?:boolean
};

export type CustomInputProps = {
  secureInput?: boolean;
  editable?: boolean;
  label: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  placeHolder: string;
  onChange: (i: string) => void;
};

export type VerifyOtpProps = NativeStackScreenProps<
  AuthStackParamList,
  'Verify Otp'
>;
