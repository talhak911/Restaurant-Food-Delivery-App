import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../constants/color';
import PencilIcon from '../../assets/icons/pencil';
import {CustomButton} from '../../components/customButton/CustomButton';
import ConfirmOrderCard from '../../components/confirmOrderCard/ConfirmOrderCard';
import Price from '../../components/price/Price';
import useConfirmOrder from './useConfirmOrder';
import CustomDropdown from '../../components/customDropDown2/CustomDropDown';
import {styles} from './ConfirmOrderStyles';

const ConfirmOrder = () => {
  const {
    cartItems,
    totalPrice,
    addresses,
    address,
    loading,
    navigateToAddAddress,
    handlePlaceOrder,
    onChangeAddress,
  } = useConfirmOrder();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.address}>Shipping Address</Text>
              <TouchableOpacity onPress={navigateToAddAddress}>
                <PencilIcon />
              </TouchableOpacity>
            </View>
            <CustomDropdown
              items={addresses!}
              onSelect={onChangeAddress}
              selectedValue={address!}
            />
            {addresses?.length! < 1 && (
              <View style={styles.addAddressContainer}>
                <Text style={styles.guideToAddAddress}>
                  Add Address in the settings
                </Text>
                <TouchableOpacity onPress={navigateToAddAddress}>
                  <Text style={styles.addAddressButton}>Add Address</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.orderSummary}>
              <Text style={styles.orderSummaryText}>Order Summary</Text>
              <CustomButton
                title="Edit"
                fontSize={12}
                pV={2}
                bgColor={COLORS.orange2}
                textColor={COLORS.orange}
                pH={22}
              />
            </View>

            <View style={{paddingTop: 12}}>
              {cartItems?.map((item, index) => (
                <ConfirmOrderCard
                  key={index}
                  items={item.quantity.toString()}
                  price={item.totalPrice.toString()}
                  name={item.food.name}
                  picUrl={item.food.picture}
                  foodId={item.food.id}
                />
              ))}
            </View>

            <Price price={totalPrice || '0'} textColor={COLORS.almostBlack} />
            <View style={{alignItems: 'center'}}>
              <CustomButton
                onPress={handlePlaceOrder}
                title="Place Order"
                bgColor={COLORS.orange2}
                loading={loading}
                textColor={COLORS.orange}
                fontSize={23}
                pH={23}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrder;
