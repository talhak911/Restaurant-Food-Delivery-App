// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import SliderItem from '../sliderItem/SliderItem';
// const imgData = [
//   'https://th.bing.com/th/id/R.d4ffbec43abc50af14e001cd94e44564?rik=DFDqF9n99DiGog&pid=ImgRaw&r=0',
//   'https://th.bing.com/th/id/OIP.Tdifij96TRbJsEfPDlC2vQHaHa?rs=1&pid=ImgDetMain',
//   'https://th.bing.com/th?id=OIF.98IcsE8hseYQJsR84%2fPkdQ&rs=1&pid=ImgDetMain',
// ];
// const Carousel = () => {
//   return (
//     <View>
//       <FlatList
//         data={imgData}
//         renderItem={({item, index}) => <SliderItem item={item} index={index} />}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//       />
//     </View>
//   );
// };

// export default Carousel;

// const styles = StyleSheet.create({});

///2222

import {FlatList, StyleSheet, View, Dimensions, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import React, {useState, useRef} from 'react';
import SliderItem from '../sliderItem/SliderItem';
import { COLORS } from '../../constants/color';

const imgData = [
  'https://th.bing.com/th/id/R.7c231288454d06499dfb993167b55d2b?rik=dZIliFHFTCsJMg&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.oqTjyKJyskVQCuK70q6vzQHaEv?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.55b2b3e927925fd09089fca0ad5b6d73?rik=2nxWbYGpOKa0cA&pid=ImgRaw&r=0',
];

const {width} = Dimensions.get('window');

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
    // Calculate the current index based on scroll position
    const slideIndex = Math.ceil(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width,
    );
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
    }
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {imgData.map((_, index) => (
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
        data={imgData}
        renderItem={({item, index}) => <SliderItem item={item} index={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={onScroll}
        scrollEventThrottle={16} // Ensures smooth scroll event updates
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

