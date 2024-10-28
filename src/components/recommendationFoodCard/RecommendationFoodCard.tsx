import {Text, TouchableOpacity, View} from 'react-native';
import FoodItemPriceDisplay from '../foodItemPriceDisplay/FoodItemPriceDisplay';
import WhiteBgHeart from '../../assets/icons/whiteBgHeart';
import {FOOD_CATEGORY_ICON} from '../../constants/foodCategoryIcon';
import Ratings from '../ratings/Ratings';
import CartOrangeBg from '../../assets/icons/cartOrangeBg';

import {FoodType} from '../../types/types';
import useRecommendationFoodCard from './useRecommendationFoodCard';
import {styles} from './RecommendationFoodCardStyles';
import RemoveSmallIcon from '../../assets/icons/removeSmall';
import AddSmallIcon from '../../assets/icons/addSmall';
import RemoveIcon from '../../assets/icons/remove';
import AddIcon from '../../assets/icons/add';
import {LoadingImage} from '../loadingImage/LoadingImage';

const RecommendationsFoodCard = ({food}: {food: FoodType}) => {
  const {addToCart, loading, navigation, quantity, setQuantity} =
    useRecommendationFoodCard();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Food Detail', food);
      }}
      style={{width: 158}}>
      <View style={{position: 'relative'}}>
        <LoadingImage
          placeholder="food"
          style={{borderRadius: 19, height: 141, width: 158}}
          uri={food.picture}
        />
        <View style={{position: 'absolute', zIndex: 20, left: 9, top: 8}}>
          {FOOD_CATEGORY_ICON(food.category)}
        </View>
        <View style={{position: 'absolute', zIndex: 20, left: 13, bottom: 10}}>
          <Ratings
            averageRating={food.averageRating}
            totalRatingsCount={food.totalRatingsCount}
          />
        </View>
      </View>
      <Text style={styles.name}>{food.name}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {food.description}
      </Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>${food.price}</Text>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
          <TouchableOpacity
            disabled={loading || quantity === 1}
            style={[styles.buttons, {opacity: quantity === 1 ? 0.4 : 1}]}
            onPress={() => {
              setQuantity(prev => prev - 1);
            }}>
            <RemoveIcon />
          </TouchableOpacity>
          <Text
          // style={styles.items}
          >
            {quantity}
          </Text>
          <TouchableOpacity
            style={styles.buttons}
            disabled={loading}
            onPress={() => {
              setQuantity(prev => prev + 1);
            }}>
            <AddIcon />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={loading}
            onPress={() => {
              addToCart({quantity, foodId: food.id});
            }}>
            <CartOrangeBg />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationsFoodCard;
