import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { LEAGUE_SPARTAN_BOLD, LEAGUE_SPARTAN_SEMI_BOLD } from '../../constants/fonts';
import { COLORS } from '../../constants/color';

const OnBoardingSliderItem = ({item}:any) => {
    const {width} = useWindowDimensions();
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
          <Image style={{
            flex:3,
            height: '60%', width}} source={item.image.toString()} />
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            style={{
               bottom: 30,
              backgroundColor: 'white',
              borderTopLeftRadius: 30,
              flex:1,
              borderTopRightRadius: 30,
              width,
              paddingTop: 23,
          
              paddingHorizontal: '15%',
            }}>
            {item.icon}
            <Text
              style={{
                fontFamily: LEAGUE_SPARTAN_BOLD,
                color: COLORS.orange,
                fontSize: 24,
                marginTop: 20,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: LEAGUE_SPARTAN_SEMI_BOLD,
                color: COLORS.almostBlack,
              }}>
              {item.description}
            </Text>
          </ScrollView>
        </View>
      );
    }


export default OnBoardingSliderItem

const styles = StyleSheet.create({})