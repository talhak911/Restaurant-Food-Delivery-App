import {Text, View} from 'react-native';
import {styles} from './PriceStyles';

const Price = ({price, textColor}: {price: string; textColor?: string}) => {
  return (
    <View>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Subtotal</Text>
        <Text style={[styles.price, {color: textColor}]}>${price}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Tax and Fees</Text>
        <Text style={[styles.price, {color: textColor}]}>$0</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Delivery</Text>
        <Text style={[styles.price, {color: textColor}]}>$0</Text>
      </View>
      <View style={styles.borderBottom} />
      <View style={styles.priceContainer}>
        <Text style={[styles.price, {color: textColor}]}>Total</Text>
        <Text style={[styles.price, {color: textColor}]}>${price}</Text>
      </View>
    </View>
  );
};

export default Price;
