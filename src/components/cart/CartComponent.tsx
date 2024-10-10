import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Cart2Icon from '../../assets/icons/cart2';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';
import {COLORS} from '../../constants/color';
import CartCard from '../cartCard/CartCard';
import {CustomButton} from '../customButton/CustomButtom';
import Price from '../price/Price';
import useCartComponent from './useCartComponent';
import AddToCart from '../../assets/icons/addToCart';
import {Height} from '../../utils/responsive';
import Loader from '../loader/Loader';

const CartComponent = ({action}: {action: () => void}) => {
  const {cartItems, totalPrice, loading,navigateToFoods,navigateToConfirmOrder} = useCartComponent();
  if (loading) {
    return <Loader />;
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          marginTop: 30,
          justifyContent: 'center',
        }}>
        <Cart2Icon />
        <Text
          style={{
            fontFamily: LEAGUE_SPARTAN_BOLD,
            fontSize: 24,
            color: COLORS.almostWhite,
          }}>
          Cart
        </Text>
      </View>
      <View
        style={{
          marginTop: 38,
          borderBottomWidth: 1,
          borderColor: COLORS.yellow,
        }}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: LEAGUE_SPARTAN_MEDIUM,
            fontSize: 20,
            color: COLORS.almostWhite,
            marginTop: 18,
          }}>
          {cartItems?.length! > 0
            ? `you have ${cartItems?.length} items in the cart`
            : 'Your cart is empty'}
        </Text>
        {cartItems?.length! > 0 ? (
          <View style={{marginTop: 26, marginBottom: 50}}>
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
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TouchableOpacity
            onPress={navigateToFoods}
            >
              <AddToCart />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: LEAGUE_SPARTAN_BOLD,
                lineHeight: 26,
                color: COLORS.almostWhite,
                fontSize: 24,
                marginBottom: Height(11),
                textAlign: 'center',
              }}>
              Want To Add Somethinng?
            </Text>
          </View>
        )}
        {cartItems?.length! > 0 && (
          <Price textColor={COLORS.almostWhite} price={totalPrice ?? '0'} />
        )}
      </ScrollView>
      {cartItems?.length! > 0 && (
        <View style={{alignItems: 'center', height: '15%'}}>
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

export const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostWhite,
  },
});
