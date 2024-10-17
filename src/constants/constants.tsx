import ContactUsIcon from '../assets/icons/contactUs';
import DeliveryAddressIcon from '../assets/icons/deliveryAddress';
import HelpAndFaqsIcon from '../assets/icons/helpAndFaqsIcon';
import MyOrdersIcon from '../assets/icons/myOrders';
import MyProfileIcon from '../assets/icons/myProfile';
import PaymentMethodIcon from '../assets/icons/paymentMethod';
import {SignIn} from '../screens/signIn/SignIn';
import {SignUp} from '../screens/signUp/SignUp';
import Welcome from '../screens/welcome/Welcome';
import {AuthScreenOptions, DrawerListType} from '../types/types';
import {COLORS} from './color';
import SettingsIcon from '../assets/icons/settings';
import SnacksIcon from '../assets/icons/snacks';
import MealIcon from '../assets/icons/meal';
import VeganIcon from '../assets/icons/vegan';
import DessertIcon from '../assets/icons/desserts';
import DrinksIcon from '../assets/icons/drinks';
import PasswordIcon from '../assets/icons/password';
import AccountIcon from '../assets/icons/account';
import NotificationsIcon from '../assets/icons/notifications';
import {OrderStatus} from '../gql/graphql';

export const IMAGES = {
  profile: require('../assets/images/profile.jpg'),
  foodPlaceholder: require('../assets/images/foodPlaceholder.png'),
  selectedCategoryBg:require('../assets/images/Union.png')
};

export const TAB_SCREEN_OPTIONS = {
  tabBarLabelStyle: {
    marginBottom: 12,
    marginTop: -10,
    fontSize: 10,
  },
  tabBarStyle: {height: 70, borderTopWidth: 0, elevation: 0},
  tabBarActiveTintColor: COLORS.purple,
  headerShown: false,
};

export const ORDER_FILTERS: {status: OrderStatus}[] = [
  {status: OrderStatus.Active},
  {status: OrderStatus.Delivered},
  {status: OrderStatus.Canceled},
];
export const DrawerList: DrawerListType[] = [
  {icon: <MyOrdersIcon />, label: 'My Orders', navigateTo: 'My Orders'},
  {icon: <MyProfileIcon />, label: 'My Profile', navigateTo: 'My Profile'},
  {
    icon: <DeliveryAddressIcon />,
    label: 'Delivery Address',
    navigateTo: 'Delivery Address',
  },
  {
    icon: <PaymentMethodIcon />,
    label: 'Payment Method',
    navigateTo: 'Payment Method',
  },
  {icon: <ContactUsIcon />, label: 'Contact Us', navigateTo: 'Contact Us'},
  {icon: <HelpAndFaqsIcon />, label: 'Help & FAQs', navigateTo: 'Help & FAQs'},
  {icon: <SettingsIcon />, label: 'Settings', navigateTo: 'Settings'},
];

export const CATEGORIES: {icon: React.JSX.Element; label: FilterBy}[] = [
  {icon: <SnacksIcon />, label: 'Snacks'},
  {icon: <MealIcon />, label: 'Meal'},
  {icon: <VeganIcon />, label: 'Vegan'},
  {icon: <DessertIcon />, label: 'Dessert'},
  {icon: <DrinksIcon />, label: 'Drinks'},
];
export type FilterBy = 'Snacks' | 'Meal' | 'Vegan' | 'Dessert' | 'Drinks';
export const SETTINGS = [
  {
    icon: <NotificationsIcon />,
    title: 'Notifications Setting',
    screen: 'Coming Soon',
  },
  {
    icon: <PasswordIcon />,
    title: 'Password Setting',
    screen: 'Password Setting',
  },
  {
    icon: <AccountIcon />,
    title: 'Delete Account',
    screen: 'Coming Soon',
  },
];
