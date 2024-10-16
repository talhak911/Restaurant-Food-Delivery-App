import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/color';
import DeleteIcon from '../../assets/icons/delete';
import {CustomButton} from '../customButton/CustomButton';
import AddIcon from '../../assets/icons/add';
import RemoveIcon from '../../assets/icons/remove';
import {LoadingImage} from '../loadingImage/LoadingImage';
import useUpdateCartItems from '../../hooks/useUpdateItems';
import {ConfirmOrderCardProps} from '../../types/types';
import {styles} from './ConfirmOrderCardStyles';

const ConfirmOrderCard = ({
  picUrl,
  name,
  foodId,
  price,
  items,
}: ConfirmOrderCardProps) => {
  const {loading, addOneItem, removeOneItem, deleteOneItem} =
    useUpdateCartItems();
  return (
    <View style={styles.cardContainer}>
      <LoadingImage style={styles.image} uri={picUrl} placeholder="food" />
      <View style={{flex: 1}}>
        <View style={styles.spaceBetween}>
          <Text style={styles.name}>{name}</Text>
          <View style={{alignItems: 'flex-end', marginTop: -10}}>
            <TouchableOpacity
              onPress={() => {
                deleteOneItem(foodId);
              }}
              style={{marginBottom: 7}}>
              <DeleteIcon />
            </TouchableOpacity>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
        <View style={[styles.spaceBetween, {marginTop: 2}]}>
          <Text style={styles.lightText}>DD MM, 00:00 pm </Text>
          <Text style={styles.lightText}>{items} items</Text>
        </View>
        <View
          style={[styles.spaceBetween, {marginTop: 12, alignItems: 'center'}]}>
          <CustomButton
            title="Cancel Order"
            bgColor={COLORS.orange2}
            textColor={COLORS.orange}
            fontSize={15}
            pV={4}
            pH={18}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <TouchableOpacity
              style={{
                transform: [{scale: 0.8}],
                opacity: Number(items) === 1 ? 0.4 : 1,
              }}
              disabled={loading || Number(items) === 1}
              onPress={() => {
                removeOneItem(foodId);
              }}>
              <RemoveIcon />
            </TouchableOpacity>
            <Text style={styles.items}>{items}</Text>
            <TouchableOpacity
              disabled={loading}
              onPress={() => {
                addOneItem(foodId);
              }}
              style={{transform: [{scale: 0.8}]}}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmOrderCard;
