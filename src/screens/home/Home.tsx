import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useHome from './useHome';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/color';
import SearchFilterIcon from '../../assets/icons/searchFilter';
import {Width} from '../../utils/responsive';
import CartIcon from '../../assets/icons/cart';
import NotificationIcon from '../../assets/icons/notification';
import UserIcon from '../../assets/icons/user';
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
  const {navigateToFoodDetail} = useHome();

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
            <TouchableOpacity
              onPress={() => {
                navigateToFoodDetail({
                  id: '34',
                  description: 'one two three',
                  name: 'Pizza xl',
                  picUrl:
                    'https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain',
                  price: '399',
                });
              }}>
              <FoodCard
                height={108}
                width={72}
                price="70"
                uri="https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 20}}>
          <Carousel />
        </View>

        {/* Reccomended */}
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
            <FoodCard
              uri="https://th.bing.com/th/id/OIP.btBHwMCK_Vjw8pjpjjExTwHaEK?rs=1&pid=ImgDetMain"
              height={140}
              width={159}
              price="300"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
