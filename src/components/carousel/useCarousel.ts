import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useAppSelector} from '../../hooks/useStore';
import {useRef, useState} from 'react';

const useCarousel = () => {
  const foods = useAppSelector(state => state.foods.foods);
  const flatListRef = useRef(null);
  const carouselItems = foods?.slice(6, 8);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
    }
  };

  return {
    currentIndex,
    carouselItems,
    flatListRef,
    onScroll,
  };
};

export default useCarousel;
