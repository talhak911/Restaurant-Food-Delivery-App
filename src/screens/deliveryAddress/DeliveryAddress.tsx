import {SafeAreaView, ScrollView, View} from 'react-native';
import {COLORS} from '../../constants/color';
import AddressCard from '../../components/addressCard/AddressCard';
import {CustomButton} from '../../components/customButton/CustomButton';
import useDeliveryAddress from './useDeliveryAddress';
import {styles} from './DeliveryAddressStyles';

const DeliveryAddress = () => {
  const {navigateToAddAddress, addresses} = useDeliveryAddress();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.addressList}>
            <View style={styles.border} />
            {addresses?.map((item, index) => (
              <AddressCard
                key={index}
                name={item.name}
                address={item.address}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Add new Address"
            bgColor={COLORS.orange2}
            fontSize={17}
            textColor={COLORS.orange}
            onPress={navigateToAddAddress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryAddress;
