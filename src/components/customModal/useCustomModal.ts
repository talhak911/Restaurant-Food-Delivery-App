import {useEffect, useState} from 'react';
import {Animated, Dimensions, PanResponder} from 'react-native';

export const useCustomModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
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
      gestureState.dx > 5,  // Capture horizontal movement
    onPanResponderMove: Animated.event([null, {dx: translateX}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 100) {
        // Close modal when swiped right
        Animated.timing(translateX, {
          toValue: screenWidth,
          duration: 300,
          useNativeDriver: false,
        }).start(onClose);
      } else {
        // Bounce back to the original position
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
