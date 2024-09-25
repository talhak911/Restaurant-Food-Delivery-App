import { SignIn } from '../screens/signIn/SignIn';
import { SignUp } from '../screens/signUp/SignUp';
import Welcome from '../screens/welcome/Welcome';
import {
  AuthScreenOptions,
} from '../types/types';
import { COLORS } from './color';


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
