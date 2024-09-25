import {Text, View, TouchableOpacity} from 'react-native';
// import {styles} from './styles';
import {COLORS} from '../../constants/color';
import { styles } from './styles';

export const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: boolean) => void;
}) => {
  return (
    <TouchableOpacity
      // style={styles.container}
      onPress={() => onChange(!checked)}
      activeOpacity={0.7}>
      <View
      // style={styles.checkbox}
      >
        {checked && <Text>Down up</Text>}
      </View>
      <Text
       style={styles.label}
      >
        By continuing, you agree to{' '}
        <Text style={{color: COLORS.orange}}>
          Terms of Use{' '}
        </Text>
        and{' '}
        <Text  style={{color: COLORS.orange}}>
        Privacy Policy.
        </Text>
      </Text>
    </TouchableOpacity>
  );
};
