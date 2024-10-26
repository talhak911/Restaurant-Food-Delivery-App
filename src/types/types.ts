import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';

import {
  DimensionValue,
  KeyboardTypeOptions,
  TouchableOpacityProps,
} from 'react-native';
import {
  FetchCartQuery,
  FetchFoodsQuery,
  GetCurrentUserQuery,
  OrderStatus,
  Role,
} from '../gql/graphql';

export type voidFunction = () => void;

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
};

export type ChangePasswordFieldsType = {
  'Current Password': string;
  'New Password': string;
  'Confirm New Password': string;
};
export type AddressType = {
  Name: string;
  Address: string;
};
export type SliderItemProps = {
  item: FoodType;
  index: number;
};
export type OrderItemCardProps = {
  picture: string;
  price: string;
  items: string;
  name: string;
  totalPrice: string;
};
export type OrderCard2Props = {
  foods: FoodItem[];
  dateTime: string;
  orderStatus: OrderStatus;
  totalPrice: string;
};
export type OrderCardProps = {
  picUrl: string;
  name: string;
  dateTime: string;
  price: string;
  orderStatus: OrderStatus;
  totalPrice: string;
  items: string;
  foodId: string;
};
export type LoadingImageProps = {
  uri?: string | null;
  style: {};
  placeholder: 'food' | 'profile';
};
export type FoodCardProps = {
  data: FoodType;
  navigation: StackNavigatorProps;
};
export type FoodItemPriceDisplayProps = {
  uri: string | undefined | null;
  height: number;
  width: number;
  price: string;
  priceTagBottom?:number
};
export type DateInputProps = {
  date: string;
  setDate: (date: string) => void;
};
export type useCustomModalProps = {
  visible: boolean;
  onClose: () => void;
};
export type CustomModalProps = {
  visible: boolean;
  element: React.JSX.Element;
  onClose: () => void;
};
export type CustomDropDownProps = {
  label?: string;
  items: string[];
  placeHolder: string;
  onSelect: (e: string) => void;
  selectedValue: string | null;
};
export type CustomButtonProps = TouchableOpacityProps & {
  loading?: boolean;
  title: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
  pH?: number;
  pV?: number;
  icon?: React.JSX.Element;
  width?: number | DimensionValue;
};
export type CartState = {
  cartItems: FetchCartQuery['fetchCart'] | null;
  loading: boolean;
  loadingItem: boolean;
};
export type CartCardProps = {
  picUrl?: string | null;
  name: string;
  price: string;
  items: string;
  foodId: string;
};
export type ConfirmOrderCardProps = {
  picUrl?: string | null;
  name: string;
  foodId: string;
  price: string;
  items: string;
};
export type StackPaths = {
  Home: undefined;
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
    screen: keyof StackNavigatorParamList;
    params?: StackNavigatorParamList[keyof StackNavigatorParamList];
  };
  Help: undefined;
  Foods: undefined;
  Favoirite: undefined;
  'My Orders': undefined;
};

export type StackNavigatorParamList = {
  Home: undefined;
  'Confirm Order': undefined;
  'Food Detail': 
  FoodType
  'Leave a Review': {
    foodId: string;
    picUrl: string | null | undefined;
    name: string;
  };
  'Best Seller': undefined;
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
  'Forget Password': undefined;
};
export type ProfleFieldsType = {
  'Full Name': string;
  'Date of Birth': string;
  Email: string;
  'Phone Number': string;
};
export type RestaurntTabsParamsList = {
  Home: undefined;
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
export type LeaveReviewProps = StackScreenProps<
  StackNavigatorParamList,
  'Leave a Review'
>;
export type DrawerNavigatorParamList = {
  Tab: undefined;
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
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  secureInput?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  editable?: boolean;
};

export type CustomInputProps = {
  secureInput?: boolean;
  editable?: boolean;
  label?: string;
  height?: number;
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
export type FoodType =FetchFoodsQuery['fetchFoods'][number]
export type FoodItem = {
  id: number;
  food: Food;
  foodId: string;
  quantity: number;
  customerId: string;
  totalPrice: number;
};
export type FoodState = {
  foods: FoodType[] | null;
  filteredFoods: FoodType[] | null;
  bestSeller: FoodType[] | null;
  suggestedFoods: FoodType[] | null;
};
export type StackScreenConfig = {
  name: keyof StackNavigatorParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};
export type TabScreen = {
  name: keyof TabParamsList;
  component: React.ComponentType<any>;
  icon: React.ReactNode;
  options?: BottomTabNavigationOptions;
};
export type AuthScreen = {
  name: keyof AuthStackParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};
