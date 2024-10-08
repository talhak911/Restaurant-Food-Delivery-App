import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  StackNavigationOptions,

} from '@react-navigation/stack';

import {KeyboardTypeOptions} from 'react-native';
import { GetCurrentUserQuery, OrderStatus, Role } from '../gql/graphql';



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
export type TabPaths = {
  Home: undefined;
  Help: undefined;
  Foods: undefined;
  Favoirite: undefined;
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
  Home: undefined;
  Help: undefined;
  Foods: undefined;
  'Coming Soon': undefined;
  Favoirite: undefined;
  'My Orders': undefined;
  'Confirm Order': undefined;
  'Food Detail': {
    id: string;
    picUrl: string | null | undefined;
    name: string;
    description: string;
    price: string;
  };
  'My Profile': undefined;
  'Delivery Address': undefined;
  'Payment Method': undefined;
  'Contact Us': undefined;
  'Help & FAQs': undefined;
  Settings: undefined;
  'Password Setting': undefined;
};

export type StackNavigatorParamList = {
  Home: undefined;
  Tab: undefined;
  // 'Food Detail': {
  //   id: string;
  //   picUrl: string | null | undefined;
  //   name:string;
  //   description: string;
  //   price : string

  // };
};

export type RestaurntTabsParamsList ={
  Home:undefined
  // 'Add Food':undefined
  // Profile:undefined

}
export type RestaurantTabNavigatorProps = BottomTabNavigationProp<RestaurntTabsParamsList>;
export type TabNavigatorProps = BottomTabNavigationProp<TabParamsList>;
export type StackNavigatorProps =
  NativeStackNavigationProp<StackNavigatorParamList>;
export type FoodDetailsProps = BottomTabScreenProps<
  TabParamsList,
  'Food Detail'
>;
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
  navigateTo: keyof TabPaths;
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

export type reduxUser =GetCurrentUserQuery["getCurrentUser"]
// export type reduxUser ={
// __typename?: "User";
// dateOfBirth: any;
// name: string;
// id: string;
// email: string;
// phone: string;
// role: Role;
// verification: boolean;
// customer?: {
//     __typename?: "Customer";
//     address: Array<string>;
//     picture?: string | null;
//     cart: Array<{
//         __typename?: "OrderItemCart";
//         id: number;
//         foodId: string;
//         totalPrice: number;
//         food: {
//             __typename?: "Food";
//             name: string;
//             price: number;
//             id: string;
//         };
//     }>;
// } | null;
// restaurant?: {
//     __typename?: "Restaurant";
//     name?: string | null;
//     location?: string | null;
//     operatingHours?: string | null;
//     orders: Array<{
//         __typename?: "Order";
//         id: number;
//         customerId: string;
//         restaurantId: string;
//         totalPrice: number;
//         deliveryAddress: string;
//         deliveryPerson?: string | null;
//         deliveryTime?: any | null;
//         status: OrderStatus;
//         createdAt: any;
//         foods: any;
//     }>;
// } | null;
// } | null | undefined

export type CartContextProps= {
  cartVisible: boolean;
  openCart: () => void;
  closeCart: () => void;
}

//for apis 
export type UpdateCartParams ={quantity:number,foodId:string}