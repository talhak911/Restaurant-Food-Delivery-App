import {FlatList, View} from 'react-native';
import SliderItem from '../sliderItem/SliderItem';
import useCarousel from './useCarousel';
import {styles} from './CarouselStyles';

const Carousel = () => {
  const {onScroll, currentIndex, carouselItems, flatListRef} = useCarousel();

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {carouselItems?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inActiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
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