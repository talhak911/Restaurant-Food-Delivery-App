import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import SliderItem from '../sliderItem/SliderItem';
import {COLORS} from '../../constants/color';
import useCarousel from './useCarousel';

const {width} = Dimensions.get('window');

const Carousel = () => {
  const {onScroll, currentIndex, carouselItems} = useCarousel();
  const flatListRef = useRef(null);

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {carouselItems?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{}}>
      <FlatList
        ref={flatListRef}
        data={carouselItems}
        renderItem={({item, index}) => <SliderItem item={item} index={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      {renderPagination()}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 4,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.orange,
  },
  inactiveDot: {
    backgroundColor: COLORS.yellow2,
  },
});
