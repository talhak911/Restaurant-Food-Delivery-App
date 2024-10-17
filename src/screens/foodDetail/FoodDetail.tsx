import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeartIcon from '../../assets/icons/heart';
import GoBack from '../../components/goBack/GoBack';
import {FoodDetailsProps} from '../../types/types';
import AddIcon from '../../assets/icons/add';
import RemoveIcon from '../../assets/icons/remove';
import SelectIcon from '../../assets/icons/select';
import {CustomButton} from '../../components/customButton/CustomButton';
import BagIcon from '../../assets/icons/bag';
import Ratings from '../../components/ratings/Ratings';
import useFoodDetail from './useFoodDetail';
import {LoadingImage} from '../../components/loadingImage/LoadingImage';
import {styles} from './FoodDetailStyles';

const FoodDetail = ({route}: FoodDetailsProps) => {
  const {name, description, id, picUrl, price} = route.params;
  const {quantity, loading, addItems, removeItems, addToCart} =
    useFoodDetail(id);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <GoBack />
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.name}>{name}</Text>
            <Ratings ratings="4.2" />
          </View>
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.orangeDot} />
          <HeartIcon />
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <LoadingImage style={styles.image} placeholder="food" uri={picUrl} />

          <View style={styles.middleContainer}>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.orderItemsContainer}>
              <TouchableOpacity
                disabled={quantity === 1}
                style={{opacity: quantity === 1 ? 0.4 : 1}}
                onPress={removeItems}>
                <RemoveIcon />
              </TouchableOpacity>
              <Text style={styles.itemsNumber}>{quantity}</Text>
              <TouchableOpacity onPress={addItems}>
                <AddIcon />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.headingText}>Description</Text>
          <Text style={[styles.lightText, {fontSize: 16, lineHeight: 22}]}>
            {description}
          </Text>
          <Text style={[styles.headingText, {marginTop: 36}]}>
            Add on ingredients
          </Text>
          <View style={styles.ingredientsContainer}>
            <View style={styles.ingredientsContenetContainer}>
              <Text style={[styles.lightText, {lineHeight: 14}]}>
                Green tea
              </Text>
              <View style={styles.border} />
              <View style={styles.selectContainer}>
                <Text style={styles.lightText}>$5.00</Text>
                <SelectIcon />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            loading={loading}
            onPress={() => {
              addToCart({quantity, foodId: id});
            }}
            icon={<BagIcon />}
            title="Add to Cart"
            fontSize={20}
            pH={24}
            pV={5}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetail;
