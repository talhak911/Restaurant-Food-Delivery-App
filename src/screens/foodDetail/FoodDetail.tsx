import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_BOLD,
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_REGULAR,
} from '../../constants/fonts';
import HeartIcon from '../../assets/icons/heart';
import GoBack from '../../components/goBack/GoBack';
import {FoodDetailsProps} from '../../types/types';
import AddIcon from '../../assets/icons/add';
import RemoveIcon from '../../assets/icons/remove';
import SelectIcon from '../../assets/icons/select';
import {CustomButton} from '../../components/customButton/CustomButtom';
import BagIcon from '../../assets/icons/bag';
import Ratings from '../../components/ratings/Ratings';
import useFoodDetail from './useFoodDetail';
import {BlinkingImage} from '../../components/loading/Loading';

const FoodDetail = ({route}: FoodDetailsProps) => {
  const {name, description, id, picUrl, price} = route.params;
  const {quantity, loading, addItems, removeItems, addToCart} =
    useFoodDetail(id);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <GoBack />
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.name}>{name}</Text>
            <View>
              <Ratings ratings="4.2" />
            </View>
          </View>
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.orangeDot} />
          <HeartIcon />
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 35,
            paddingVertical: 30,
          }}>
          <BlinkingImage
            style={{
              objectFit: 'cover',
              borderRadius: 36,
              height: 223,
              width: '100%',
            }}
            placeholder="food"
            uri={picUrl}
          />

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
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottomWidth: 1,
                  flex: 1,
                  borderStyle: 'dashed',
                  borderColor: COLORS.lightPink,
                }}
              />
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 11}}>
                <Text style={styles.lightText}>$5.00</Text>
                <SelectIcon />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 32,
            backgroundColor: 'white',
          }}>
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

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 47,
    marginBottom: 12,
    paddingHorizontal: 35,
  },
  topLeftContainer: {flexDirection: 'row', gap: 8, alignItems: 'flex-start'},
  name: {
    lineHeight: 20,
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostBlack,
  },

  topRightContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeDot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.orange,
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightPink,
    paddingVertical: 11,
    marginTop: 12,
    marginBottom: 18,
  },
  price: {
    fontFamily: LEAGUE_SPARTAN_BOLD,
    fontSize: 24,
    lineHeight: 26,
    color: COLORS.orange,
  },
  orderItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  itemsNumber: {
    color: COLORS.almostBlack,
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 24,
    lineHeight: 28,
  },
  headingText: {
    fontFamily: LEAGUE_SPARTAN_MEDIUM,
    fontSize: 20,
    color: COLORS.almostBlack,
  },
  lightText: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    color: COLORS.almostBlack,
  },
  ingredientsContenetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredientsContainer: {marginTop: 17, gap: 17},
});
