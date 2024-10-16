import {useEffect, useState} from 'react';
import {Animated, Dimensions, PanResponder} from 'react-native';
import {useCustomModalProps} from '../../types/types';

export const useCustomModal = ({visible, onClose}: useCustomModalProps) => {
  const screenWidth = Dimensions.get('window').width;
  const [translateX] = useState(new Animated.Value(screenWidth));

  useEffect(() => {
    if (visible) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
      gestureState.dx > 5,
    onPanResponderMove: Animated.event([null, {dx: translateX}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 100) {
        Animated.timing(translateX, {
          toValue: screenWidth,
          duration: 300,
          useNativeDriver: false,
        }).start(onClose);
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          bounciness: 8,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return {
    panResponder,
    translateX,
  };
};
