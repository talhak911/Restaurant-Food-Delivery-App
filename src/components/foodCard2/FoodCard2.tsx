import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FetchFoodsQuery} from '../../gql/graphql'
import {COLORS} from '../../constants/color';
import {
  LEAGUE_SPARTAN_LIGHT,
  LEAGUE_SPARTAN_REGULAR,
  POOPINS_SEMI_BOLD,
} from '../../constants/fonts';
import Ratings from '../ratings/Ratings';
import { TabNavigatorProps } from '../../types/types';
import { BlinkingImage } from '../loading/Loading';

const FoodCard2 = ({
  data,
  navigation
}: {
  data: FetchFoodsQuery['fetchFoods'][number];
  navigation:TabNavigatorProps
}) => {
  const {price, picture, name, description,id} = data;
  return (
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Food Detail",{id,name,picUrl:picture,description,price:String(price)})}}
      style={{
        borderBottomWidth: 1,
        marginBottom: 26,
        paddingBottom: 20,
        borderColor: COLORS.lightPink,
      }}>
      {/* <Image
        style={{borderRadius: 36, width: '100%', height: 174}}
        source={{
          uri:picture ||'',
        }}
      /> */}
      <BlinkingImage
      placeholder='food'
 style={{borderRadius: 36, width: '100%', height: 174}}
 uri={picture}
      />
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 11}}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={{
              height: 5,
              width: 5,
              backgroundColor: COLORS.orange,
              borderRadius: 2.5,
            }}
          />
          <Ratings ratings="5.0" />
        </View>
        <Text style={styles.price}>${price}</Text>
      </View>
      <Text   numberOfLines={1}
  ellipsizeMode="tail" style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default FoodCard2;

const styles = StyleSheet.create({
  price: {
    fontFamily: LEAGUE_SPARTAN_REGULAR,
    fontSize: 18,
    color: COLORS.orange,
  },
  name: {
    fontFamily: POOPINS_SEMI_BOLD,
    fontSize: 18,
    lineHeight: 20,
    color: COLORS.almostBlack,
  },
  description: {
    fontFamily: LEAGUE_SPARTAN_LIGHT,
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.almostBlack,
  },
});
