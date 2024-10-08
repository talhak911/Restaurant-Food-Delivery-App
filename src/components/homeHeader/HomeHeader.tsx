import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CartIcon from '../../assets/icons/cart';
import NotificationIcon from '../../assets/icons/notification';
import SearchFilterIcon from '../../assets/icons/searchFilter';
import UserIcon from '../../assets/icons/user';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_MEDIUM,
} from '../../constants/fonts';
import useHomeHeader from './useHomeHeader';
import useCart from '../../hooks/useCart';

const HomeHeader = ({greetingShown}: {greetingShown?: boolean}) => {
  const {openCart} = useCart();
  const {cartVisible, navigateToConfirmOrder, onClose, setCartVisible} =
    useHomeHeader();
  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 17,
        paddingHorizontal: '9%',
      }}>
      <View
        style={{
          // marginTop: 30,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingHorizontal: '9%',
          gap: 29,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 12,
            paddingRight: 4,
            flex: 1,
          }}>
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 0,
            }}
            placeholderTextColor={COLORS.grey}
            placeholder="Search" // You can use the placeholder for the search text
          />
          <SearchFilterIcon />
        </View>

        <View style={{flexDirection: 'row', gap: 7, justifyContent: 'center'}}>
          <TouchableOpacity onPress={openCart}>
            <CartIcon />
          </TouchableOpacity>
          <NotificationIcon />
          <UserIcon />
        </View>
      </View>

      {greetingShown && (
        <View>
          <Text
            style={{
              color: COLORS.almostWhite,
              fontFamily: LEAGUE_SPARTAN_BOLD,
              fontSize: 30,
              lineHeight: 30,
              marginTop: 16,
            }}>
            Good Morning
          </Text>
          <Text
            style={{
              color: COLORS.orange,
              fontSize: 13,
              fontFamily: LEAGUE_SPARTAN_MEDIUM,
              lineHeight: 13,
            }}>
            Rise and Shine! It's Breakfast Time
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
