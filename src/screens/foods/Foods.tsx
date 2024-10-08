import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import {CATEGORIES} from '../../constants/constants';
import {LEAGUE_SPARTAN_LIGHT} from '../../constants/fonts';
import SearchFilterIcon from '../../assets/icons/searchFilter';
import FoodCard2 from '../../components/foodCard2/FoodCard2';
import useFoods from './useFoods';

const Foods = () => {
  const {activeButton,foods, handlePressFoodCategory,navigation} = useFoods();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.yellow}}>
      <HomeHeader />
      <View
        style={{
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: 'white',
          flex: 1,
          marginTop: 12,
        }}>
        <View
          style={{
            paddingHorizontal: 35,
            paddingTop: 15,
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            flexDirection: 'row',
            backgroundColor: COLORS.orange,
            justifyContent: 'space-between',
          }}>
          {CATEGORIES.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                handlePressFoodCategory(item.label);
              }}
              style={[
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  height: 93,
                  width: '20%',
                },
              ]}
              key={index}>
              {activeButton === item.label ? (
                <ImageBackground
                  style={{
                    width: 123,
                    height: 94,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  tintColor="white"
                  source={require('../../assets/images/Union.png')} // Use your image here
                  resizeMode="cover">
                  {item.icon}
                  <Text style={{fontSize: 12, color: COLORS.almostBlack}}>
                    {item.label}
                  </Text>
                </ImageBackground>
              ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  {item.icon}
                  <Text style={{fontSize: 12, color: COLORS.almostBlack}}>
                    {item.label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingTop: 22,
            paddingHorizontal: 35,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <Text style={[styles.lightFont, {color: COLORS.almostBlack}]}>
                Sort by
              </Text>
              <Text style={[styles.lightFont, {color: COLORS.orange}]}>
                Popular
              </Text>
            </View>
            <SearchFilterIcon />
          </View>

          <FlatList
            style={{marginTop: 16,}}
            data={foods}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <FoodCard2 data={item} navigation={navigation}/>}
            contentContainerStyle={{
              paddingBottom: 110,
            }}
   />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Foods;

const styles = StyleSheet.create({
  lightFont: {fontSize: 12, fontFamily: LEAGUE_SPARTAN_LIGHT},
});
