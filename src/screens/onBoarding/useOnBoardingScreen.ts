import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useRef, useState} from 'react';
import {ON_BOARDING_ITEMS} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useOnBoarding = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const flatListRef = useRef<FlatList>(null);
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

  const onNext = () => {
    if (currentIndex < ON_BOARDING_ITEMS.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    }
  };
  const getStarted = async () => {
    await AsyncStorage.setItem('onBoardingShown', 'true');
    navigation.navigate('Welcome');
  };
  return {
    currentIndex,
    getStarted,
    onNext,
    flatListRef,
    onScroll,
  };
};

export default useOnBoarding;
