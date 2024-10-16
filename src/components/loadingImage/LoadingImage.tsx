import React from 'react';
import {Image, View, Animated, StyleSheet} from 'react-native';
import {useLoading} from './useLoadingImage';
import {IMAGES} from '../../constants/constants';
import {LoadingImageProps} from '../../types/types';

export const LoadingImage = ({uri, style, placeholder}: LoadingImageProps) => {
  const {isLoading, fadeAnim, setIsLoading} = useLoading();

  return (
    <View style={[style, {backgroundColor: 'grey'}]}>
      {isLoading && (
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: 'grey', opacity: fadeAnim},
          ]}
        />
      )}
      <Image
        source={
          uri
            ? {uri}
            : placeholder === 'food'
            ? IMAGES.foodPlaceholder.toString()
            : IMAGES.profile.toString()
        }
        style={[style, isLoading && {opacity: 0}]}
        onLoadEnd={() => setIsLoading(false)}
      />
    </View>
  );
};
