import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import {CATEGORIES, IMAGES} from '../../constants/constants';
import SearchFilterIcon from '../../assets/icons/searchFilter';
import FoodCard from '../../components/foodCard/FoodCard';
import useFoods from './useFoods';
import {styles} from './FoodsStyles';

const Foods = () => {
  const {
    activeButton,
    foods,
    handlePressFoodCategory,
    navigation,
    onSearch,
    loadMoreFoods,
    searchQuery,
    setSearchQuery,
  } = useFoods();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        onSearch={onSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={styles.topContainer}>
        <View style={styles.categoriesContainer}>
          {CATEGORIES.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                handlePressFoodCategory(item.label);
              }}
              style={styles.category}
              key={index}>
              {activeButton === item.label ? (
                <ImageBackground
                  style={styles.activeCategoryBackground}
                  tintColor="white"
                  source={IMAGES.selectedCategoryBg}
                  resizeMode="cover">
                  {item.icon}
                  <Text style={styles.categoryText}>{item.label}</Text>
                </ImageBackground>
              ) : (
                <View style={styles.button}>
                  {item.icon}
                  <Text style={styles.categoryText}>{item.label}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.foodsContainer}>
          <View style={styles.filterContainer}>
            <View style={styles.filterContainerLeftContent}>
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
            style={{marginTop: 16}}
            data={foods}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <FoodCard data={item} navigation={navigation} />
            )}
            contentContainerStyle={{
              paddingBottom: 110,
            }}
            onEndReached={loadMoreFoods}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Foods;
