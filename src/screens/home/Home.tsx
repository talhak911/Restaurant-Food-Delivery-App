import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import useHome from './useHome';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/color';

import {
  LEAGUE_SPARTAN_MEDIUM,
  LEAGUE_SPARTAN_SEMI_BOLD,
} from '../../constants/fonts';
import {CATEGORIES} from '../../constants/constants';
import BackIcon from '../../assets/icons/back';
import Carousel from '../../components/carousel/Carousel';
import FoodCard from '../../components/foodCard/FoodCard';
import HomeHeader from '../../components/homeHeader/HomeHeader';

const Home = () => {
  const {navigateToFoodDetail, foods, bestSeller, recommended} = useHome();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <HomeHeader />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            borderTopStartRadius: 30,
            backgroundColor: 'white',
            borderTopEndRadius: 30,
            flex: 1,
            paddingHorizontal: 35,
            paddingTop: 31,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 12,
              borderBottomColor: COLORS.lightPink,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {CATEGORIES.map((item, index) => (
              <TouchableOpacity
                style={{alignItems: 'center', gap: 4}}
                key={index}>
                {item.icon}
                <Text style={{fontSize: 12, color: COLORS.almostBlack}}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              marginTop: 14,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: LEAGUE_SPARTAN_MEDIUM,
                fontSize: 20,
                color: COLORS.almostBlack,
              }}>
              Best Seller
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', gap: 11}}>
              <Text
                style={{
                  fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
                  color: COLORS.orange,
                }}>
                View All
              </Text>
              <View style={{transform: [{rotate: '180deg'}]}}>
                <BackIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 14,
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 11,
              overflow: 'hidden',
            }}>
            {bestSeller?.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigateToFoodDetail({
                    id: item.id,
                    description: item.description,
                    name: item.name,
                    picUrl: item.picture,
                    price: item.price.toString(),
                  });
                }}>
                <FoodCard
                  height={108}
                  width={72}
                  price={item.price.toString()}
                  uri={item.picture}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 20}}>
          <Carousel />
        </View>

        <View
          style={{
            paddingHorizontal: 35,

            flex: 1,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontFamily: LEAGUE_SPARTAN_MEDIUM,
              fontSize: 20,
              color: COLORS.almostBlack,
            }}>
            Recommended
          </Text>

          <View style={{flexDirection: 'row', gap: 7, paddingVertical: 9}}>
            {recommended?.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigateToFoodDetail({
                    id: item.id,
                    description: item.description,
                    name: item.name,
                    picUrl: item.picture,
                    price: item.price.toString(),
                  });
                }}>
                <FoodCard
                  uri={item.picture}
                  height={140}
                  width={159}
                  price={item.price.toString()}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
