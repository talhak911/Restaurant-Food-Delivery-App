import React from 'react';
import { Image, View, Animated, StyleSheet, StyleProp } from 'react-native';
import { useLoading } from './useLoading';
import { IMAGES } from '../../constants/constants';

export const BlinkingImage = ({ uri, style,placeholder }:{uri?:string|null,style:{},placeholder:'food'|'profile'}) => {
   const {isLoading,fadeAnim,setIsLoading}=useLoading()
  
    return (
      <View style={[style, { backgroundColor: 'grey' }]}>
        {isLoading && (
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: 'grey', opacity: fadeAnim },
            ]}
          />
        )}
        <Image
              source={uri?{uri}:placeholder==='food'?IMAGES.foodPlaceholder.toString():IMAGES.profile.toString()}
          style={[style, isLoading && { opacity: 0 }]}
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
    );
  };
  