import {SafeAreaView, ScrollView, View} from 'react-native';
import AddressIcon from '../../assets/icons/address';
import {CustomInput} from '../../components/customInput/CustomInput';
import useAddAddress from './useAddAddress';
import {CustomButton} from '../../components/customButton/CustomButton';
import {styles} from './AddAddressStyles';

const AddAddress = () => {
  const {fields, onChange, addAddress, loading} = useAddAddress();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderRadius}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <View style={{transform: [{scale: 2}]}}>
              <AddressIcon />
            </View>
            <View style={styles.inputFields}>
              {Object.keys(fields).map((item, index) => (
                <CustomInput
                  key={index}
                  label={item}
                  value={fields[item as keyof typeof fields]}
                  onChange={text => onChange(item as keyof typeof fields, text)}
                  placeHolder={item}
                />
              ))}
            </View>
            <CustomButton
              title="Apply"
              pH={40}
              pV={4}
              fontSize={17}
              onPress={addAddress}
              loading={loading}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddAddress;
