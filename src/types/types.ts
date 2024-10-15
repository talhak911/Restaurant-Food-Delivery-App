import {
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack';

import {KeyboardTypeOptions} from 'react-native';
import {FetchFoodsQuery, GetCurrentUserQuery, OrderStatus, Role} from '../gql/graphql';

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

//new
export type StackPaths = {
  Home: undefined;
  // Help: undefined;
  // Foods: undefined;
  // Favoirite: undefined;
  'My Orders': undefined;
  'My Profile': undefined;
  'Delivery Address': undefined;
  'Payment Method': undefined;
  'Contact Us': undefined;
  'Confirm Order': undefined;
  'Help & FAQs': undefined;
  Settings: undefined;
};
export type TabParamsList = {
  Stack: {
    screen: keyof StackNavigatorParamList; // Allow specifying the screen in Stack
    params?: StackNavigatorParamList[keyof StackNavigatorParamList]; // Optionally pass params to the target screen
  };
  Help: undefined;
  Foods: undefined;
  Favoirite: undefined;
  'My Orders': undefined;
  // 'My Profile': undefined;
  // 'Delivery Address': undefined;
  // 'Payment Method': undefined;
  // 'Contact Us': undefined;
  // 'Help & FAQs': undefined;
  // Settings: undefined;
  // 'Password Setting': undefined;
  // 'Add New Address':undefined
};

export type StackNavigatorParamList = {
  Home: undefined;
  'Confirm Order': undefined;
  'Food Detail': {
    id: string;
    picUrl: string | null | undefined;
    name: string;
    description: string;
    price: string;
  };
  'My Orders': undefined;
  'Coming Soon': undefined;
  'My Profile': undefined;
  'Delivery Address': undefined;
  'Payment Method': undefined;
  'Contact Us': undefined;
  'Help & FAQs': undefined;
   Settings: undefined;
  'Password Setting': undefined;
  'Add New Address': undefined;
  // Tab: undefined;
  // 'Food Detail': {
  //   id: string;
  //   picUrl: string | null | undefined;
  //   name:string;
  //   description: string;
  //   price : string

  // };
};

export type RestaurntTabsParamsList = {
  Home: undefined;
  // 'Add Food':undefined
  // Profile:undefined
};
export type RestaurantTabNavigatorProps =
  BottomTabNavigationProp<RestaurntTabsParamsList>;
export type TabNavigatorProps = BottomTabNavigationProp<TabParamsList>;
export type StackNavigatorProps =
  NativeStackNavigationProp<StackNavigatorParamList>;
export type FoodDetailsProps = StackScreenProps<
  StackNavigatorParamList,
  'Food Detail'
>;
export type DrawerNavigatorParamList = {
  Tab: undefined;
  // Home: undefined;
  // Help: undefined;
  // Stack: undefined;
  // 'My Profile': undefined;
  // 'Delivery Address': undefined;
  // 'Payment Method': undefined;
  // 'Contact Us': undefined;
  // 'Help & FAQs': undefined;
  // Settings: undefined;
  // Favoirite: undefined;
  // 'My Orders': undefined;
};
export type DrawerNavigationProps =
  DrawerNavigationProp<DrawerNavigatorParamList>;

export type DrawerListType = {
  icon: React.JSX.Element;
  navigateTo: keyof StackPaths;
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
  label?: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  secureInput?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
 editable?:boolean
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

export type reduxUser = GetCurrentUserQuery['getCurrentUser'];

export type CartContextProps = {
  cartVisible: boolean;
  openCart: () => void;
  closeCart: () => void;
};

//for apis
export type UpdateCartParams = {quantity: number; foodId: string};

export type Food = {
  id: string;
  name: string;
  price: number;
  picture: string;
  category: string;
  description: string;
  restaurantId: string;
};

// Type for each food item in the order
export type FoodItem = {
  id: number;
  food: Food;
  foodId: string;
  quantity: number;
  customerId: string;
  totalPrice: number;
};
export type FoodState = {
  foods: FetchFoodsQuery['fetchFoods'] | null;
  filteredFoods: FetchFoodsQuery['fetchFoods'] | null;
}