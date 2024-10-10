import React from 'react';
import ContactUsIcon from '../assets/icons/contactUs';
import DeliveryAddressIcon from '../assets/icons/deliveryAddress';
import HelpAndFaqsIcon from '../assets/icons/helpAndFaqsIcon';
import MyOrdersIcon from '../assets/icons/myOrders';
import MyProfileIcon from '../assets/icons/myProfile';
import PaymentMethodIcon from '../assets/icons/paymentMethod';
import { SignIn } from '../screens/signIn/SignIn';
import { SignUp } from '../screens/signUp/SignUp';
import Welcome from '../screens/welcome/Welcome';
import {
  AuthScreenOptions,
  DrawerListType,
  DrawerNavigatorParamList,
} from '../types/types';
import { COLORS } from './color';
import SettingsIcon from '../assets/icons/settings';
import SnacksIcon from '../assets/icons/snacks';
import MealIcon from '../assets/icons/meal';
import VeganIcon from '../assets/icons/vegan';
import DessertIcon from '../assets/icons/desserts';
import DrinksIcon from '../assets/icons/drinks';
import NotificationIcon from '../assets/icons/notification';
import PasswordIcon from '../assets/icons/password';
import AccountIcon from '../assets/icons/account';
import NotificationsIcon from '../assets/icons/notifications';


export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const IMAGES = {
  profile: require('../assets/images/profile.jpg'),
  foodPlaceholder:require('../assets/images/foodPlaceholder.png')
};

// export const SCREEN_CONFIGS: ScreenConfig[] = [
//   {name: 'Tab', component: TabNavigator, options: {headerShown: false}},
//   {
//     name: 'Income',
//     component: AddIncome,
//     options: {headerStyle: {backgroundColor: COLORS.green}},
//   },
//   {
//     name: 'Expense',
//     component: AddExpense,
//     options: {headerStyle: {backgroundColor: COLORS.red}},
//   },
//   {
//     name: 'Financial Report',
//     component: FinancialReport,
//     options: {
//       headerStyle: {backgroundColor: 'white'},
//       headerTitleStyle: {color: COLORS.black50},
//       headerLeftContainerStyle: {paddingLeft: 16},
//       headerBackImage: () => <BackIcon currentColor="black" />,
//     },
//   },
//   {name: 'Detail Transaction', component: DetailTransaction},
//   {
//     name: 'Update Profile',
//     component: UpdateProfile,
//     options: {
//       headerStyle: {backgroundColor: 'white'},
//       headerTitleStyle: {color: COLORS.black50},
//       headerLeftContainerStyle: {paddingLeft: 16},
//       headerBackImage: () => <BackIcon currentColor="black" />,
//     },
//   },
//   {
//     name: 'Settings',
//     component: Settings,
//     options: {
//       headerStyle: {backgroundColor: 'white'},
//       headerTitleStyle: {color: COLORS.black50},
//       headerShadowVisible: true,
//       headerLeftContainerStyle: {paddingLeft: 16},
//       headerBackImage: () => <BackIcon currentColor="black" />,
//     },
//   },
//   {
//     name: 'Currency',
//     component: Currency,
//     options: {
//       headerStyle: {backgroundColor: 'white'},
//       headerTitleStyle: {color: COLORS.black50},
//       headerShadowVisible: true,
//       headerLeftContainerStyle: {paddingLeft: 16},
//       headerBackImage: () => <BackIcon currentColor="black" />,
//     },
//   },
//   {
//     name: 'Reset Password',
//     component: ResetPassword,
//     options: {
//       headerStyle: {backgroundColor: 'white'},
//       headerTitleStyle: {color: COLORS.black50},
//       headerLeftContainerStyle: {paddingLeft: 16},
//       headerBackImage: () => <BackIcon currentColor="black" />,
//     },
//   },
// ];

// export const TAB_CONFIGS: TabConfig[] = [
//   {
//     name: 'Home',
//     component: HomeScreen,
//     options: {
//       tabBarIcon: ({focused}: {focused: boolean}) => (
//         <HomeIcon focused={focused} />
//       ),
//     },
//   },
//   {
//     name: 'Transaction',
//     component: Transaction,
//     options: {
//       tabBarIcon: ({focused}: {focused: boolean}) => (
//         <TransactionBottomIcon focused={focused} />
//       ),
//     },
//   },
//   {
//     name: 'AddTransaction',
//     component: HomeScreen,
//     options: {
//       tabBarButton: (props: any) => <AddButton props={props} />,
//     },
//   },
//   {
//     name: 'Budget',
//     component: Budget,
//     options: {
//       tabBarIcon: ({focused}: {focused: boolean}) => (
//         <BudgetIcon focused={focused} />
//       ),
//     },
//   },
//   {
//     name: 'Profile',
//     component: ProfileScreen,
//     options: {
//       tabBarIcon: ({focused}: {focused: boolean}) => (
//         <ProfileIcon focused={focused} />
//       ),
//     },
//   },
// ];

export const AUTH_SCREENS: AuthScreenOptions = [
  {
    name: 'OnBoarding',
    component: Welcome,
    options: {
      title: 'Sign Up',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontSize: 18},
    },
  },
  {
    name: 'Welcome',
    component: Welcome,
    options: {
      title: 'Sign Up',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontSize: 18},
    },
  },
  {
    name: 'SignUp',
    component: SignUp,
    options: {
      title: 'Sign Up',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontSize: 18},
    },
  },
  {
    name: 'SignIn',
    component: SignIn,
    options: {
      title: 'Login',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontSize: 18},
    },
  },
  // {
  //   name: 'ForgetPassword',
  //   component: ForgetPassword,
  //   options: {
  //     title: 'Forget Password',
  //     headerTitleAlign: 'center',
  //     headerTitleStyle: {fontSize: 18},
  //   },
  // },
];
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



//

export const DrawerList:DrawerListType[] = [
  {icon: <MyOrdersIcon/>, label: 'My Orders', navigateTo: 'My Orders'},
  {icon: <MyProfileIcon />, label: 'My Profile', navigateTo: 'My Profile'},
  {icon: <DeliveryAddressIcon/>, label: 'Delivery Address', navigateTo: 'Delivery Address'},
  {icon: <PaymentMethodIcon/>, label: 'Payment Method', navigateTo: 'Payment Method'},
  {icon: <ContactUsIcon/>, label: 'Contact Us', navigateTo: 'Contact Us'},
  {icon: <HelpAndFaqsIcon/>, label: 'Help & FAQs', navigateTo: 'Help & FAQs'},
  {icon: <SettingsIcon/>, label: 'Settings', navigateTo: 'Settings'},
];

export const CATEGORIES:{icon:React.JSX.Element,label:FilterBy}[]=[
  {icon:<SnacksIcon/>,label:'Snacks'},
  {icon:<MealIcon/>,label:'Meal'},
  {icon:<VeganIcon/>,label:'Vegan'},
  {icon:<DessertIcon/>,label:'Dessert'},
  {icon:<DrinksIcon/>,label:'Drinks'}
]
export type FilterBy='Snacks'|'Meal'|'Vegan'|'Dessert'|'Drinks'
export const SETTINGS=[{
  icon:<NotificationsIcon/>,
  title:'Notifications Setting',
  screen:"Coming Soon"
},
{
  icon:<PasswordIcon/>,
  title:'Password Setting',
  screen:"Password Setting"
},
{
  icon:<AccountIcon/>,
  title:'Delete Account',
  screen:"Coming Soon"
},
]