import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cart2Icon from '../../assets/icons/cart2';
import {COLORS} from '../../constants/color';
import CartCard from '../cartCard/CartCard';
import {CustomButton} from '../customButton/CustomButton';
import Price from '../price/Price';
import useCartComponent from './useCartComponent';
import AddToCart from '../../assets/icons/addToCart';
import Loader from '../loader/Loader';
import {styles} from './CartComponentStyles';

const CartComponent = ({action}: {action: () => void}) => {
  const {
    cartItems,
    totalPrice,
    loading,
    navigateToFoods,
  } = useCartComponent();
  if (loading) {
    return <Loader />;
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <Cart2Icon />
        <Text style={styles.cartText}>Cart</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.cartStatus}>
          {cartItems?.length! > 0
            ? `you have ${cartItems?.length} items in the cart`
            : 'Your cart is empty'}
        </Text>
        {cartItems?.length! > 0 ? (
          <View style={styles.cartItemsContainer}>
            {cartItems?.map((item, index) => (
              <CartCard
                key={index}
                foodId={item?.food?.id}
                picUrl={item?.food?.picture}
                items={item?.quantity.toString()}
                name={item?.food?.name}
                price={item?.totalPrice?.toString()}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyCartContainer}>
            <TouchableOpacity onPress={navigateToFoods}>
              <AddToCart />
            </TouchableOpacity>
            <Text style={styles.emptyCartText}>Want To Add Somethinng?</Text>
          </View>
        )}
        {cartItems?.length! > 0 && (
          <Price textColor={COLORS.almostWhite} price={totalPrice ?? '0'} />
        )}
      </ScrollView>
      {cartItems?.length! > 0 && (
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={action}
            title="Checkout"
            bgColor={COLORS.yellow}
            pV={4}
            pH={19}
            textColor={COLORS.orange}
          />
        </View>
      )}
    </View>
  );
};

export default CartComponent;
