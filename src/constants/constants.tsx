import ContactUsIcon from '../assets/icons/contactUs';
import DeliveryAddressIcon from '../assets/icons/deliveryAddress';
import HelpAndFaqsIcon from '../assets/icons/helpAndFaqsIcon';
import MyOrdersIcon from '../assets/icons/myOrders';
import MyProfileIcon from '../assets/icons/myProfile';
import PaymentMethodIcon from '../assets/icons/paymentMethod';
import {
  AuthScreen,
  DrawerListType,
  StackScreenConfig,
  TabScreen,
} from '../types/types';
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
import AddAddress from '../screens/addAddress/AddAddress';
import ChangePassword from '../screens/changePassword/ChangePassword';
import ComingSoon from '../screens/comingSoon/ComingSoon';
import ConfirmOrder from '../screens/confirmOrder/ConfirmOrder';
import DeliveryAddress from '../screens/deliveryAddress/DeliveryAddress';
import FoodDetail from '../screens/foodDetail/FoodDetail';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import Home from '../screens/home/Home';
import MyOrder from '../screens/myOrder/MyOrder';
import Profile from '../screens/profile/Profile';
import Settings from '../screens/settings/Settings';
import HomeIcon from '../assets/icons/home';
import StackNavigator from '../navigation/stackNavigator/StackNavigator';
import Foods from '../screens/foods/Foods';
import FoodIcon from '../assets/icons/food';
import FavouriteIcon from '../assets/icons/favourite';
import TabOrderIcon from '../assets/icons/tabOrder';
import HelpIcon from '../assets/icons/help';
import Welcome from '../screens/welcome/Welcome';
import {SignUp} from '../screens/signUp/SignUp';
import {SignIn} from '../screens/signIn/SignIn';
import VerifyOtp from '../screens/verifyOtp/VerifyOtp';
import {COLORS} from './color';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import OnBoardingOrderIcon from '../assets/icons/onBoardingOrder';
import OnBoardingPaymentIcon from '../assets/icons/onBoardingPayment';
import OnBoardingDeliveryIcon from '../assets/icons/onBoardingDelivery';
import Help from '../screens/help/Help';
import LeaveReview from '../screens/leaveReview/LeaveReview';
import BestSeller from '../screens/bestSeller/BestSeller';

export const IMAGES = {
  profile: require('../assets/images/profile.jpg'),
  foodPlaceholder: require('../assets/images/foodPlaceholder.png'),
  selectedCategoryBg: require('../assets/images/Union.png'),
};

export const ORDER_FILTERS: {status: OrderStatus}[] = [
  {status: OrderStatus.Active},
  {status: OrderStatus.Delivered},
  {status: OrderStatus.Canceled},
];
export const DRAWER_LIST: DrawerListType[] = [
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

export const STACK_SCREENS: StackScreenConfig[] = [
  {name: 'Home', component: Home, options: {headerShown: false}},
  {name: 'My Profile', component: Profile},
  {name: 'Food Detail', component: FoodDetail, options: {headerShown: false}},
  {name: 'Settings', component: Settings},
  {name: 'Coming Soon', component: ComingSoon},
  {name: 'Password Setting', component: ChangePassword},
  {name: 'Confirm Order', component: ConfirmOrder},
  {name: 'Delivery Address', component: DeliveryAddress},
  {name: 'Add New Address', component: AddAddress},
  {name: 'My Orders', component: MyOrder},
  {name: 'Payment Method', component: ComingSoon},
  {name: 'Contact Us', component: ComingSoon},
  {name: 'Forget Password', component: ForgetPassword},
  {name: 'Help & FAQs', component: Help},
  {name: 'Leave a Review', component: LeaveReview},
  {name: 'Best Seller', component: BestSeller},
];

export const TAB_SCREENS: TabScreen[] = [
  {
    name: 'Stack',
    component: StackNavigator,
    icon: <HomeIcon />,
    options: {headerShown: false},
  },
  {
    name: 'Foods',
    component: Foods,
    icon: <FoodIcon />,
    options: {headerShown: false},
  },
  {
    name: 'Favoirite',
    options: {headerShown: false},
    component: OnBoarding,
    icon: <FavouriteIcon />,
  },
  {name: 'My Orders', component: MyOrder, icon: <TabOrderIcon />},
  {name: 'Help', component: ComingSoon, icon: <HelpIcon />},
];

export const AUTH_SCREENS: AuthScreen[] = [
  {
    name: 'OnBoarding',
    component: OnBoarding,
    options: {statusBarColor: COLORS.orange, headerShown: false},
  },
  {
    name: 'Welcome',
    component: Welcome,
    options: {statusBarColor: COLORS.orange, headerShown: false},
  },
  {name: 'New Account', component: SignUp},
  {name: 'Log In', component: SignIn},
  {name: 'Verify Otp', component: VerifyOtp},
  {name: 'Forget Password', component: ForgetPassword},
];

export const ON_BOARDING_ITEMS = [
  {
    icon: <OnBoardingOrderIcon />,
    image: require('../assets/images/pizza.png'),
    title: 'Order For Food',
    description:
      'Browse through a wide range of cuisines and restaurants, from pizza to sushi, burgers to biryani. Find your cravings and order with just a few taps.',
  },
  {
    icon: <OnBoardingPaymentIcon />,
    image: require('../assets/images/brownie.png'),
    title: 'Easy Payment',
    description:
      'Pay conveniently with our secure payment options, including cash on delivery, credit/debit cards, and mobile wallets. Your financial information is always protected.',
  },
  {
    icon: <OnBoardingDeliveryIcon />,
    image: require('../assets/images/coffee.png'),
    title: 'Fast Delivery',
    description:
      'Get your food delivered quickly and efficiently. Our delivery partners work hard to ensure your order arrives hot, fresh, and on time.',
  },
];

export const HELP_BUTTONS = ['FAQ', 'Contact Us'];
export const FAQS_CATEGORY = ['General', 'Account', 'Services'];
export const FAQS = {
  general: [
    {
      question: 'How does the food delivery service work?',
      answer:
        "Simply download our app, browse our wide range of restaurants, select your desired dishes, and place your order. We'll handle the rest, delivering your food right to your doorstep.",
    },
    {
      question: 'What are your operating hours?',
      answer:
        'We operate 24/7, so you can satisfy your cravings anytime, day or night.',
    },
    {
      question: 'Which areas do you deliver to?',
      answer:
        'We currently deliver to Lahore, Karachi, Islamabad, and Faisalabad.',
    },
  ],
  account: [
    {
      question: 'How do I create an account?',
      answer:
        'You can easily create an account by signing up with your email address or phone number.',
    },
    {
      question: 'How do I change my password?',
      answer:
        'Go to your account settings and follow the instructions to change your password.',
    },
    {
      question: 'I forgot my password. How can I recover it?',
      answer:
        'Use the "Forgot Password" option on the login or password settings screen to reset your password.',
    },
  ],
  services: [
    {
      question: 'How much is the delivery fee?',
      answer:
        'Delivery fees vary depending on the restaurant and your location. You can see the exact fee during checkout.',
    },
    {
      question: 'Can I cancel my order?',
      answer:
        "Yes, you can cancel your order as long as it hasn't been prepared or dispatched. To cancel, please contact our customer support.",
    },
    {
      question: 'How can I track my order?',
      answer:
        "You can track your order's progress through the app. You'll receive real-time updates on its status.",
    },
  ],
};
