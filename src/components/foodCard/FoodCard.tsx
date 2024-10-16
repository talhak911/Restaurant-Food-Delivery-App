import {Text, TouchableOpacity, View} from 'react-native';
import Ratings from '../ratings/Ratings';
import {FoodCardProps} from '../../types/types';
import {LoadingImage} from '../loadingImage/LoadingImage';
import {styles} from './FoodCardStyles';

const FoodCard = ({data, navigation}: FoodCardProps) => {
  const {price, picture, name, description, id} = data;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Food Detail', {
          id,
          name,
          picUrl: picture,
          description,
          price: String(price),
        });
      }}>
      <LoadingImage
        placeholder="food"
        style={{borderRadius: 36, width: '100%', height: 174}}
        uri={picture}
      />
      <View style={styles.belowImageContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratingsContainer} />
          <Ratings ratings="5.0" />
        </View>
        <Text style={styles.price}>${price}</Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodCard;
