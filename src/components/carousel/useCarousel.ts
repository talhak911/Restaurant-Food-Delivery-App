import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useAppSelector} from '../../hooks/useStore';
import {useState} from 'react';

const useCarousel = () => {
  const foods = useAppSelector(state => state.foods.foods);
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
    onScroll,
  };
};

export default useCarousel;
