import {Text, TouchableOpacity, View} from 'react-native';
import {FetchFoodsQuery} from '../../gql/graphql';
import FoodItemPriceDisplay from '../foodItemPriceDisplay/FoodItemPriceDisplay';
import WhiteBgHeart from '../../assets/icons/whiteBgHeart';
import {FOOD_CATEGORY_ICON} from '../../constants/foodCategoryIcon';
import Ratings from '../ratings/Ratings';
import CartOrangeBg from '../../assets/icons/cartOrangeBg';
import {styles} from './BestSellerFoodCardStyles';
import usebestSellerFoodCard from './useBestSellerFoodCard';

const BestSellerFoodCard = ({
  food,
}: {
  food: FetchFoodsQuery['fetchFoods'][number];
}) => {
  const {addToCart, loading, navigation} = usebestSellerFoodCard();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Food Detail', {
          id: food.id,
          name: food.name,
          picUrl: food.picture,
          description: food.description,
          price: String(food.price),
        });
      }}
      style={{width: 158}}>
      <View style={{position: 'relative'}}>
        <View style={{position: 'absolute', zIndex: 20, left: 9, top: 8}}>
          {FOOD_CATEGORY_ICON(food.category)}
        </View>
        <View style={{position: 'absolute', zIndex: 20, right: 9, top: 8}}>
          <WhiteBgHeart />
        </View>
        <FoodItemPriceDisplay
          height={141}
          width={158}
          price={`${food.price}`}
          uri={food.picture}
          priceTagBottom={20}
        />
      </View>
      <View style={styles.nameAndRatingContainer}>
        <Text style={styles.name}>{food.name}</Text>

        <Ratings ratings="5.0" />
      </View>
      <View style={styles.descriptionAndCartContainer}>
        <Text numberOfLines={2} style={styles.description}>
          {food.description}
        </Text>

        <TouchableOpacity
          disabled={loading}
          onPress={() => {
            addToCart({quantity: 1, foodId: food.id});
          }}
          style={{paddingTop: 3}}>
          <CartOrangeBg />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default BestSellerFoodCard;
