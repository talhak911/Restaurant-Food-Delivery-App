import {Text, TouchableOpacity, View} from 'react-native';
import AddressIcon from '../../assets/icons/address';
import SelectIcon from '../../assets/icons/select';
import {styles} from './AddressCardStyles';

const AddressCard = ({name, address}: {name: string; address: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <AddressIcon />
        <View>
          <Text style={styles.addressName}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
      <TouchableOpacity style={{transform: [{scale: 1.2}]}}>
        <SelectIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AddressCard;
